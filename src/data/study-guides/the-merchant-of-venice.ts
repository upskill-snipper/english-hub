import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Merchant of Venice, William Shakespeare (written between 1596 and 1598,
 * first printed in quarto in 1600). A SUPPLEMENT: the existing page at
 * /revision/texts/the-merchant-of-venice keeps its overview, context, themes,
 * characters and key quotations, and this file adds the six sections it lacked
 * (extracts, language analysis, structure and form, vocabulary, exam practice
 * and a model answer), plus the timeline and character map the visuals draw.
 *
 * Every quotation, here and inside the prose, was copied from the byte copy of
 * Project Gutenberg #1515 held at src/data/full-texts/the-merchant-of-venice.ts,
 * and its speaker, act and scene were checked by reading the whole play in that
 * edition, not by searching for the phrase alone. The one quoted phrase that is
 * not the play's own words, the Stationers' Register title, is declared in
 * quotesFromElsewhere.
 *
 * SECOND PASS, 25 September 2026. Every quotation was located again by script,
 * speech by speech, and its speaker and scene compared with what this file
 * says; the three printed passages were checked to be unbroken runs of the
 * edition, not stitched fragments. Five statements the first pass got wrong
 * were corrected: Shylock's last words are "And I will sign it", not "I am not
 * well"; the word "converted" is not used of Shylock at the trial; the Act 3,
 * Scene 1 wreck is the first reported as Antonio's, not "another"; Antonio
 * agrees to seal the bond at the notary's rather than signing it on stage; and
 * Lorenzo's first "In such a night" speech does not begin with the phrase.
 *
 * WHY SOME QUOTATIONS STOP AT A LINE END, AND WHY THE ACT 3 EXTRACT IS BROKEN
 * WHERE IT IS. The guide test normalises the held file as raw TypeScript
 * source, in which each line break is the two characters backslash and n. The
 * backslash is stripped but the n is kept, so the first word of every line of
 * the edition gains a stray n ("nit wearies me"). A correct quotation that runs
 * across a line break therefore fails the check unless it is split with " / "
 * at the break. Verse quotations here are split at their line ends, as verse
 * should be, and the prose passage from Act 3, Scene 1 is split where the
 * Gutenberg edition breaks its lines. Fix the normaliser (decode the escapes
 * before normalising) and that passage can be joined up.
 */
export const guide: StudyGuide = {
  slug: 'the-merchant-of-venice',
  title: 'The Merchant of Venice',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    "The whole play: five acts and twenty scenes, set in Venice and at Portia's house in Belmont. Quotations follow the modern-spelling Project Gutenberg edition held on this site, so spelling, punctuation and some character names may differ slightly from your school's copy. Find each passage by its act, scene and opening words rather than by line number.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First printed in quarto in 1600. Quotations follow the Project Gutenberg edition of The Merchant of Venice (eBook #1515), held on this site.',
  },

  native: {
    overview: '/revision/texts/the-merchant-of-venice',
    context: '/revision/texts/the-merchant-of-venice',
    themes: '/revision/texts/the-merchant-of-venice',
    characters: '/revision/texts/the-merchant-of-venice',
    keyQuotes: '/revision/texts/the-merchant-of-venice',
  },

  extracts: [
    {
      title: "Shylock's grievance and Antonio's reply",
      where: 'Act 1, Scene 3',
      pointer:
        "From Shylock's “Signior Antonio, many a time and oft” to Antonio's “Exact the penalty.”, about halfway through the scene, soon after Antonio enters and just before Shylock proposes the bond.",
      text: 'SHYLOCK / Signior Antonio, many a time and oft / In the Rialto you have rated me / About my moneys and my usances. / Still have I borne it with a patient shrug, / (For suff’rance is the badge of all our tribe.) / You call me misbeliever, cut-throat dog, / And spet upon my Jewish gaberdine, / And all for use of that which is mine own. / Well then, it now appears you need my help. / Go to, then, you come to me, and you say / “Shylock, we would have moneys.” You say so: / You that did void your rheum upon my beard, / And foot me as you spurn a stranger cur / Over your threshold, moneys is your suit. / What should I say to you? Should I not say / “Hath a dog money? Is it possible / A cur can lend three thousand ducats?” Or / Shall I bend low and, in a bondman’s key, / With bated breath and whisp’ring humbleness, / Say this: / “Fair sir, you spet on me on Wednesday last; / You spurn’d me such a day; another time / You call’d me dog; and for these courtesies / I’ll lend you thus much moneys”? / ANTONIO / I am as like to call thee so again, / To spet on thee again, to spurn thee too. / If thou wilt lend this money, lend it not / As to thy friends, for when did friendship take / A breed for barren metal of his friend? / But lend it rather to thine enemy, / Who if he break, thou mayst with better face / Exact the penalty.',
      annotations: [
        {
          phrase: 'a patient shrug',
          note: 'A small physical gesture that stands for years of humiliation swallowed in public, so the grievance that follows sounds long stored rather than sudden.',
        },
        {
          phrase: 'suff’rance is the badge of all our tribe',
          note: 'Suffering is pictured as a badge, something worn and seen by others. Shylock speaks for his whole people here, not only for himself, which widens the quarrel from personal to communal.',
        },
        {
          phrase: 'cut-throat dog',
          note: "These are Antonio's words, quoted back at him. The animal insult pushes Shylock outside the human community, and he will take up the image himself in Act 3, Scene 3.",
        },
        {
          phrase: 'spet upon my Jewish gaberdine',
          note: '“Spet” is an older form of the verb spit. The insult is physical and public, aimed at the clothing that marks him out, and spitting comes up three times in the speech, once as “void your rheum”, so the humiliation never fades.',
        },
        {
          phrase: 'in a bondman’s key',
          note: 'A bondman is a slave, so Shylock mimics the grovelling voice the Christians expect of him and refuses it. The word also looks ahead to the bond he is about to propose.',
        },
        {
          phrase: 'A breed for barren metal of his friend?',
          note: "Antonio's case against lending at interest: metal is barren and should not breed more money. It answers Shylock's earlier boast that he makes his gold breed as fast as sheep.",
        },
        {
          phrase: 'I am as like to call thee so again,',
          note: 'Antonio denies nothing and promises to do it all again. The contempt is mutual and unashamed, which complicates any reading of him as simply an innocent victim.',
        },
      ],
      question:
        'How does Shakespeare use this exchange to present the conflict between Shylock and Antonio? Refer closely to the language of both speeches.',
    },
    {
      title: '“Hath not a Jew eyes?”',
      where: 'Act 3, Scene 1',
      pointer:
        "From Salarino's question “Why, I am sure if he forfeit” to Shylock's “better the instruction”, after Salarino and Solanio have taunted Shylock about Jessica's flight. The passage is prose, and is printed here with the line breaks of the edition.",
      text: 'SALARINO / Why, I am sure if he forfeit, thou wilt not take his flesh! What’s that / good for? / SHYLOCK / To bait fish withal; if it will feed nothing else, it will feed my / revenge. He hath disgrac’d me and hind’red me half a million, laugh’d / at my losses, mock’d at my gains, scorned my nation, thwarted my / bargains, cooled my friends, heated mine enemies. And what’s his / reason? I am a Jew. Hath not a Jew eyes? Hath not a Jew hands, organs, / dimensions, senses, affections, passions? Fed with the same food, hurt / with the same weapons, subject to the same diseases, healed by the same / means, warmed and cooled by the same winter and summer as a Christian / is? If you prick us, do we not bleed? If you tickle us, do we not / laugh? If you poison us, do we not die? And if you wrong us, shall we / not revenge? If we are like you in the rest, we will resemble you in / that. If a Jew wrong a Christian, what is his humility? Revenge. If a / Christian wrong a Jew, what should his sufferance be by Christian / example? Why, revenge! The villainy you teach me I will execute, and it / shall go hard but I will better the instruction.',
      annotations: [
        {
          phrase: 'To bait fish withal',
          note: 'Shylock admits the flesh is worthless as food, so the bond was never about money. The grim joke reveals that its only value to him now is revenge.',
        },
        {
          phrase: 'mock’d at my gains, scorned my nation',
          note: 'A list of injuries in short parallel phrases, each verb a separate blow. It moves from business to race without a pause, as if the two were inseparable in how Venice treats him.',
        },
        {
          phrase: 'I am a Jew. Hath not a Jew eyes?',
          note: "The flat statement is, Shylock says, Antonio's whole reason. The first rhetorical question then begins his claim to shared humanity, starting with the body and moving to the feelings.",
        },
        {
          phrase: 'If you prick us, do we not bleed?',
          note: 'The questions can only be answered yes, so the audience agrees before it sees where he is going. Blood matters: at the trial, blood decides whether he can take his bond at all.',
        },
        {
          phrase: 'what is his humility? Revenge.',
          note: '“Humility” is ironic, and the one-word answer presents Christian forgiveness, as Shylock sees it, as a pose. He claims he is only copying the behaviour he has been shown.',
        },
        {
          phrase: 'The villainy you teach me I will execute',
          note: 'The Christians become his teachers. The sentence justifies his revenge and accuses them at once, which is why neither a purely sympathetic nor a purely villainous reading fits the speech.',
        },
      ],
      question:
        "How does Shakespeare make Shylock's argument in this speech both sympathetic and threatening? Refer closely to the extract.",
    },
    {
      title: 'The quality of mercy',
      where: 'Act 4, Scene 1',
      pointer:
        "From Portia's “Do you confess the bond?” to Shylock's “The penalty and forfeit of my bond.”, shortly after Portia, disguised as the young doctor Balthazar, has taken her place in court.",
      text: 'PORTIA / Do you confess the bond? / ANTONIO / I do. / PORTIA / Then must the Jew be merciful. / SHYLOCK / On what compulsion must I? Tell me that. / PORTIA / The quality of mercy is not strain’d, / It droppeth as the gentle rain from heaven / Upon the place beneath. It is twice blest, / It blesseth him that gives and him that takes. / ’Tis mightiest in the mightiest; it becomes / The throned monarch better than his crown. / His sceptre shows the force of temporal power, / The attribute to awe and majesty, / Wherein doth sit the dread and fear of kings; / But mercy is above this sceptred sway, / It is enthroned in the hearts of kings, / It is an attribute to God himself; / And earthly power doth then show likest God’s / When mercy seasons justice. Therefore, Jew, / Though justice be thy plea, consider this, / That in the course of justice none of us / Should see salvation. We do pray for mercy, / And that same prayer doth teach us all to render / The deeds of mercy. I have spoke thus much / To mitigate the justice of thy plea, / Which if thou follow, this strict court of Venice / Must needs give sentence ’gainst the merchant there. / SHYLOCK / My deeds upon my head! I crave the law, / The penalty and forfeit of my bond.',
      annotations: [
        {
          phrase: 'Then must the Jew be merciful.',
          note: 'Portia calls him by his religion, not his name, and says he “must” be merciful. Shylock seizes on that word at once, and the whole speech that follows is her answer to him.',
        },
        {
          phrase: 'On what compulsion must I? Tell me that.',
          note: 'A fair legal question: nothing in the bond compels mercy. It forces Portia to argue that mercy, by its nature, cannot be compelled, only chosen.',
        },
        {
          phrase: 'The quality of mercy is not strain’d,',
          note: '“Strain’d” means forced or constrained. Portia agrees with Shylock that mercy cannot be required, and argues instead that it should be freely given, like rain.',
        },
        {
          phrase: 'It blesseth him that gives and him that takes.',
          note: 'The balanced line gives mercy to both sides equally, so the giver gains as much as the receiver. Its even rhythm enacts the balance it describes.',
        },
        {
          phrase: 'When mercy seasons justice.',
          note: "A cooking metaphor: justice alone is raw, and mercy flavours it. Portia does not reject justice; she says earthly power is most like God's when the two are mixed.",
        },
        {
          phrase: 'Therefore, Jew,',
          note: 'The turn from general truth to direct appeal. The argument that follows, that justice alone would save none of us, is framed in Christian terms and spoken to a Jew in a Christian court.',
        },
        {
          phrase: 'I crave the law,',
          note: 'After twenty-odd lines of Portia, Shylock answers in two. “Crave” suggests hunger, and the brevity is its own reply: he will not be moved by eloquence.',
        },
      ],
      question:
        'Explore how Shakespeare presents the contrast between Portia and Shylock in this extract. Refer closely to the language each of them uses.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Rhetorical questions and a cumulative list',
      example:
        'Shylock in Act 3, Scene 1: “Hath not a Jew eyes?”, the list “dimensions, senses, affections, passions”, and the run of questions that begins “If you prick us, do we not bleed?”',
      effect:
        'Each question can only be answered yes, so the audience agrees before it sees where the argument leads. The list moves from the body to the emotions, claiming the whole person. Then the grammar stays the same while the meaning turns: the fourth question is about revenge, and whoever has agreed so far has been led into the logic of vengeance.',
    },
    {
      technique: 'Animal imagery and dehumanising insult',
      example:
        'Shylock reports being called “cut-throat dog” (Act 1, Scene 3); he answers “But since I am a dog, beware my fangs” (Act 3, Scene 3); at the trial Gratiano calls him “inexecrable dog” with desires “wolfish, bloody, starv’d and ravenous” (Act 4, Scene 1).',
      effect:
        'The Christians use animal words to push Shylock outside the human community. Shakespeare lets Shylock take the metaphor and turn it into a threat, which suggests that contempt produces the cruelty it claims to find. By the trial the insult has grown from a dog to a wolf, and it is spoken in open court.',
    },
    {
      technique: 'The language of money used for love',
      example:
        'Bassanio owes Antonio most “in money and in love” (Act 1, Scene 1). Portia tells Bassanio “Since you are dear bought, I will love you dear”, and says that she and all she owns are “now converted” to him (Act 3, Scene 2).',
      effect:
        "Venice's financial vocabulary runs through its love scenes, so love appears as a kind of exchange, with debts, prices and transfers of property. “Converted” is used here for a wife's estate passing to her husband, but the idea of conversion darkens as the play goes on: Jessica repeats Launcelet's joke that “converting Jews to Christians” will raise the price of pork (Act 3, Scene 5), and at the trial Shylock must “presently become a Christian” as a condition of his life. A strong answer can argue that the play never fully separates its romantic plots from its economic one.",
    },
    {
      technique: 'Repetition as fixation',
      example:
        'In Act 3, Scene 1 Shylock says “let him look to his bond” three times in one speech. In Act 3, Scene 3 he says he will have his bond five times in two short speeches.',
      effect:
        'The repeated phrase becomes a chant that shuts out argument: Shylock will not let Antonio speak. Shakespeare makes grief and anger audible as a refrain. It also prepares the trial, where Portia turns his insistence on the exact words of the bond against him.',
    },
    {
      technique: 'Biblical allusion',
      example:
        "Shylock defends lending at interest with the story of Jacob and his uncle Laban's sheep from Genesis, and Antonio turns to Bassanio: “The devil can cite Scripture for his purpose” (Act 1, Scene 3). At the trial Shylock hails Portia as “A Daniel come to judgment!” (Act 4, Scene 1).",
      effect:
        "Both faiths claim the same scriptures, and each accuses the other of misusing them. In the story of Susanna, Daniel is a young man who exposes false witnesses by questioning them separately, so Shylock's praise is loaded with dramatic irony: this young judge will expose him. Gratiano then throws the name back as a taunt, “A second Daniel”.",
    },
    {
      technique: 'Personification and the body at risk',
      example:
        "Guessing at Antonio's sadness, Salarino imagines how he would feel with a ship of his own at sea, “my wealthy Andrew dock’d in sand, / Vailing her high top lower than her ribs / To kiss her burial” (Act 1, Scene 1). Bassanio calls Antonio's letter “The paper as the body of my friend, / And every word in it a gaping wound” (Act 3, Scene 2).",
      effect:
        "The ship has ribs and bows down to its grave like a dying body, so from the first scene a merchant's wealth at sea is imagined as flesh. When Antonio's ships fail, the metaphor becomes literal, because his own body is the security for the loan. Bassanio's image of words as wounds carries the threatened violence into the happiest scene in Belmont.",
    },
    {
      technique: 'Wordplay and puns',
      example:
        "Antonio's “Hie thee, gentle Jew” (Act 1, Scene 3) and Gratiano's “a gentle, and no Jew” (Act 2, Scene 6); at the trial, as Shylock sharpens his knife, Gratiano's “Not on thy sole but on thy soul, harsh Jew” (Act 4, Scene 1).",
      effect:
        "“Gentle” and the word gentile, meaning someone who is not Jewish, share a Latin root, and the lines invite a pun in which being gentle, meaning kind or well-bred, is treated as the opposite of being Jewish. Gratiano's pun on the sole of a shoe and the soul turns a joke into an accusation. The wordplay shows prejudice built into the Christians' ordinary wit, not only into their anger.",
    },
    {
      technique: 'Dramatic irony',
      example:
        'Shylock praises the disguised Portia: “O wise young judge, how I do honour thee!” and “How much more elder art thou than thy looks!” He calls her “Most rightful judge!” as she awards him the flesh (Act 4, Scene 1).',
      effect:
        'The audience knows the judge is a young woman in disguise and senses where her careful questions are heading, so each compliment deepens the fall to come. After the reversal Gratiano throws the praise back at him, “O learned judge! Mark, Jew, a learned judge!”, which makes the irony structural as well as verbal.',
    },
    {
      technique: 'The aside',
      example:
        "Shylock's first aside, “How like a fawning publican he looks!” (Act 1, Scene 3), and Bassanio's comic aside in the final scene, “Why, I were best to cut my left hand off” (Act 5, Scene 1).",
      effect:
        "Asides let the audience hear what characters hide. Shylock's gives us his hatred, in a Christian insult (a publican is a despised tax collector of the New Testament), before he offers Antonio the bond, so his friendly tone afterwards seems sinister. Bassanio's joke about cutting off his hand is a small comic echo of the flesh-cutting of Act 4, one sign that the ending replays the trial as comedy.",
    },
    {
      technique: 'Antithesis in plain prose',
      example:
        '“I will buy with you, sell with you,” Shylock tells Bassanio, but he will not eat, “drink with you, nor pray with you” (Act 1, Scene 3).',
      effect:
        'The balanced list draws the line on which the whole play runs: Jews and Christians share the market but not the table or the church. It comes in prose, before Antonio enters, so it sounds like a settled rule rather than an outburst. Every later crossing of that line, from Shylock going to supper “in hate” to Jessica marrying a Christian, is measured against it.',
    },
  ],

  structureForm: [
    {
      heading: 'Venice and Belmont: two worlds in alternation',
      body: "In the edition used here, twelve of the play's twenty scenes are set in Venice and eight at Belmont. Through Acts 1 to 3 Shakespeare cuts between them almost scene by scene; the exceptions are a run of five Venice scenes in Act 2 (Scenes 2 to 6), which follows Launcelet's change of master and Jessica's escape, and the two Belmont scenes that close Act 3. Venice is a city of streets, ships, law and money, where men meet on the Rialto; Belmont is a house of music, suitors and, by Act 5, moonlight. The contrast is not simply good against bad. Belmont's heroine speaks with contempt about Morocco's colour, and Belmont runs on inherited wealth just as Venice runs on credit. The play begins in Venice and ends in Belmont, and a strong answer asks what, and who, is left behind on the way.",
    },
    {
      heading: 'Three plots and a hinge',
      body: "The play braids three stories: the bond between Antonio and Shylock, Bassanio's courtship through the caskets, and Jessica's elopement with Lorenzo. A fourth, the rings, grows out of the trial. Act 3, Scene 2 is the hinge. At the height of Bassanio's success, Lorenzo, Jessica and Salerio arrive with Antonio's letter, so romance and bond collide in one scene and Portia's money and wit are turned towards Venice. Most of them turn on a promise that binds: a sealed bond, a dead father's will, a suitor's oath and a ring.",
    },
    {
      heading: 'A comedy with a trial at its centre',
      body: "The First Folio of 1623 classes the play as a comedy, and it has the comic shape: obstacles to love, disguise, and a final scene of marriages. Yet when it was entered in the Stationers' Register in 1598 it was also listed as “otherwise called the Jewe of Venyce”, and its climax is a trial in which one man's life and another man's religion are at stake. Shylock appears in only five scenes (Act 1, Scene 3; Act 2, Scene 5; Act 3, Scenes 1 and 3; Act 4, Scene 1), but he dominates the play, and he leaves it partway through Act 4, saying “I am not well” and asking for the deed to be sent after him to sign. He is absent from Act 5 altogether. Whether that absence completes the comedy or undermines it is one of the best questions an essay can argue.",
    },
    {
      heading: 'Verse and prose',
      body: "Most of the play is in blank verse, but Shakespeare moves into prose with purpose. Portia and Nerissa mock the suitors in prose in Act 1, Scene 2, which makes their talk private and quick. Launcelet's clowning is prose. Shylock's first scene opens in prose as he bargains with Bassanio, and moves into verse when Antonio enters and Shylock speaks his first aside. His most famous speech, in Act 3, Scene 1, is prose, spoken in a street quarrel, which gives it the force of plain speech rather than set rhetoric. At the trial he speaks verse, and his short, blunt lines set against Portia's flowing ones are a contrast worth analysing.",
    },
    {
      heading: 'The caskets: riddles in rhyme',
      body: "The three scrolls are written in short rhyming lines, unlike the blank verse around them, which marks them out as riddles or charms. The gold casket's scroll keeps one rhyme sound for all nine lines, from “All that glisters is not gold” to “your suit is cold”, so its warning sounds fixed and final. The casket story itself is an old one: a version appears in the Gesta Romanorum, a medieval collection of tales. While Bassanio chooses, a song asks “Tell me where is fancy bred, / Or in the heart or in the head?”, and its first two lines end on words that rhyme with “lead”. Whether Portia's household is hinting, or Bassanio's own reasoning is enough, the play does not say, and the question is a good way into whether Portia keeps her father's rules.",
    },
    {
      heading: 'The trial as a reversal',
      body: "Act 4, Scene 1 is built as a reversal of fortune. For most of the scene everything moves Shylock's way: the Duke cannot overrule the law, Portia confirms the bond is lawful, and she twice tells him the flesh is his, “The court awards it and the law doth give it.” The turn comes at the last possible moment, with “Tarry a little, there is something else.” After that the same literal reading of the law runs the other way, one step at a time: no blood, an exact pound, no money, and then the law against aliens. In this edition the word “Jew” is spoken twenty-four times in the trial scene, once in Bellario's letter as it is read aloud, and Shylock's name only six, once by Shylock himself, and after the reversal Gratiano throws Shylock's own praise of the judge back at him. The structure invites relief and triumph and then, for many modern audiences, discomfort at how far the triumph goes.",
    },
    {
      heading: 'Patterns of three',
      body: 'Three caskets, three suitors who choose, three thousand ducats for three months: the play is built on threes, the number of folk tale and riddle. Two failures before a success is the shape of the casket plot, and it trains the audience to expect the third choice to be right. The pattern reaches the trial, where Portia offers Shylock “thrice thy money” and he reaches for it too late.',
    },
    {
      heading: 'The ending: harmony with a shadow',
      body: "Act 5 opens with Lorenzo and Jessica matching each other's speeches around the repeated phrase “In such a night”, and moves through music to Portia's return. The ring quarrel is a comic replay of the bond: a pledge given away, a forfeit threatened, and Antonio offering to be bound again, “My soul upon the forfeit”. Everything is forgiven and restored, even three of Antonio's ships. Yet the deed of gift that makes Lorenzo and Jessica rich comes “From the rich Jew”, forced from him at the trial, and the last words go to Gratiano's joke about Nerissa's ring. Whether the ending feels complete depends on whether an audience remembers Shylock, and that line in the final minutes makes sure it can.",
    },
  ],

  vocabulary: [
    {
      term: 'Ducat',
      definition:
        "A gold coin. Venice first minted its gold ducat, of almost pure gold, in 1284. Shylock's first words set the price of the plot: “Three thousand ducats, well.”",
    },
    {
      term: 'Bond',
      definition:
        "A formal legal agreement to repay a debt, with a penalty if it is broken; Antonio's is sealed before a notary. Antonio's bond names his flesh as the penalty, and Shylock's refrain “let him look to his bond” turns the word into a threat.",
    },
    {
      term: 'Forfeit',
      definition:
        'The penalty owed when a bond is broken; as a verb, to lose something by breaking an agreement. Shylock demands “the due and forfeit of my bond”.',
    },
    {
      term: 'Usance and usury',
      definition:
        'Interest charged on a loan, and the practice of lending money at interest, which medieval Christian teaching condemned as sinful. Shylock complains that Antonio brings down “The rate of usance here with us in Venice.”',
    },
    {
      term: 'Gratis',
      definition:
        'Free of charge. Antonio lends “money gratis”, without interest, which is one reason Shylock hates him.',
    },
    {
      term: 'Argosy',
      definition:
        "A large merchant ship, from the Italian for a ship of Ragusa, now Dubrovnik. Salarino pictures Antonio's “argosies, with portly sail” riding the sea like rich citizens.",
    },
    {
      term: 'Rialto',
      definition:
        'The commercial and financial heart of Venice, where merchants met to trade and hear news. “What news on the Rialto?” is how the city asks after money.',
    },
    {
      term: 'Gaberdine',
      definition:
        "A long, loose cloak or coat. Shylock's “Jewish gaberdine” marks him out in the street, and it is where Antonio spits.",
    },
    {
      term: 'Doit',
      definition:
        'A small Dutch coin of very little value, so a tiny amount. Shylock offers to “take no doit / Of usance for my moneys”, meaning no interest at all.',
    },
    {
      term: 'Principal',
      definition:
        'The original sum lent, without interest. Too late, Shylock asks: “Give me my principal, and let me go.”',
    },
    {
      term: 'Moiety',
      definition:
        'A half, or a share. The Duke hopes Shylock will “Forgive a moiety of the principal” and write off part of the debt.',
    },
    {
      term: 'Scruple',
      definition:
        'A tiny unit of weight, twenty grains or about 1.3 grams. Portia warns that if the scale turns by the twentieth part “Of one poor scruple”, Shylock dies.',
    },
    {
      term: 'Surety',
      definition:
        "Someone who guarantees another person's debt or promise. Antonio stands surety for Bassanio's loan, and in Act 5 Portia tells him “Then you shall be his surety” for the ring.",
    },
    {
      term: 'Counterfeit',
      definition:
        "In Shakespeare's English, a likeness or portrait as well as a fake. Bassanio opens the lead casket and finds “Fair Portia’s counterfeit!”",
    },
    {
      term: 'Posy',
      definition:
        "A short motto engraved in a ring. Gratiano mocks Nerissa's ring, whose posy was “Love me, and leave me not.”",
    },
    {
      term: 'Publican',
      definition:
        "In the New Testament, a tax collector, a despised figure. Shylock's first aside calls Antonio “a fawning publican”, insulting him in Christian terms.",
    },
    {
      term: 'Magnificoes',
      definition:
        'The nobles of the Venetian republic. They sit with the Duke at the trial, and Salerio reports that “The Duke himself, and the magnificoes” have all pleaded with Shylock.',
    },
    {
      term: 'Gentle',
      definition:
        "Kind, courteous or well-born. It comes from the same Latin word as gentile, meaning someone who is not Jewish, and Antonio's “Hie thee, gentle Jew” may play on both.",
    },
    {
      term: 'Aside',
      definition:
        "A line spoken to the audience, or to oneself, that the other characters on stage do not hear. Shylock's first aside reveals his hatred of Antonio before he offers the bond.",
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of iambic pentameter, usually ten syllables with five stresses. Most of the play is written in it, and a shift into prose or rhyme is always worth noticing.',
    },
    {
      term: 'Peripeteia',
      definition:
        "A sudden reversal of fortune. The trial turns on one, at Portia's “Tarry a little, there is something else.”",
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not, as when Shylock praises the “wise young judge” who is Portia in disguise.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 1, Scene 3, from “Signior Antonio, many a time and oft” to “I’ll lend you thus much moneys”. Starting with this speech, explore how Shakespeare presents Shylock as an outsider in The Merchant of Venice. Write about how Shakespeare presents Shylock in this speech, and how Shakespeare presents Shylock as an outsider in the play as a whole.',
        skill:
          'Extract and whole-play response, in the style of AQA: language analysis, knowledge of the whole play, and context',
        guidance: [
          'Open with an argument, not a summary: for example, that Shakespeare shows Shylock shut out by religion, by law and by language, and that he turns his exclusion into power over Antonio.',
          'Analyse the speech closely: the insults he quotes back (“cut-throat dog”, “stranger cur”), the physical humiliation of spitting and kicking, and his parody of servility “in a bondman’s key”.',
          "Comment on its structure: the build of rhetorical questions, and the way he acts out the Christians' own words, which gives him control of the scene for the first time.",
          'Move across the play: his line between trade and fellowship (“nor pray with you”), the mockery of his grief in Act 2, Scene 8, the “Hath not a Jew eyes?” speech in Act 3, Scene 1, and the trial, where he is called “Jew” far more often than by his name.',
          "Show how the law defines him as an outsider at the end: Portia's statute against any “alien” who seeks a citizen's life, and the forced conversion that takes away his faith.",
          'Use context precisely: Jews had been expelled from England in 1290 and were often shown on the Elizabethan stage in caricature, whereas Venice was a trading city whose law had to serve foreigners.',
          'End with a judgement: is Shylock an outsider because of what he does, or does Venice make him what it says he is?',
        ],
      },
      {
        question:
          "Read Act 4, Scene 1, from “Do you confess the bond?” to “The penalty and forfeit of my bond.” (a) Explore how Shakespeare presents Portia's argument for mercy in this extract. Refer closely to the extract in your answer. (b) In this extract, Portia argues that mercy should season justice. Explain the importance of mercy elsewhere in the play. In your answer, you must consider: how mercy is asked for, offered or refused; the effects of mercy, or its absence, within the play. You must refer to the context of the play in your answer.",
        skill:
          'Two-part question, in the style of Edexcel: close language analysis of the extract, then how a theme is explored elsewhere in the play, with context',
        guidance: [
          'For part (a), stay inside the extract. Start with the word “must”: Portia says the Jew “must” be merciful, Shylock asks “On what compulsion”, and her whole speech answers that mercy cannot be forced.',
          'Analyse the imagery: mercy as rain “from heaven” falling on everyone below it, and as something that “becomes / The throned monarch better than his crown”.',
          'Comment on method: the balanced line “It blesseth him that gives and him that takes”, the climb from kings to God, and the turn at “Therefore, Jew”, which addresses Shylock by his religion in an argument about Christian salvation.',
          "Set Shylock's two-line reply, “I crave the law”, against Portia's long speech: the difference in length and tone is itself a point about two ideas of justice.",
          'For part (b), choose two or three moments elsewhere: Shylock refusing to hear Antonio in Act 3, Scene 3 (“Tell not me of mercy”); Antonio explaining that the Duke cannot deny “the course of law”; and the sentence at the end of the trial.',
          "Weigh the mercy shown to Shylock: his life is spared, but half his wealth goes into Antonio's keeping and he must become a Christian. Ask whether this is mercy, or justice of a harsher kind.",
          "Bring in context: the Christian belief that everyone depends on God's mercy, which is the heart of Portia's speech, and the fact that Shylock is finally judged under a law written for aliens.",
        ],
      },
      {
        question:
          'Some readers see Shylock as a villain; others see him as a victim. How far do you agree that he is more a victim than a villain? Explore at least two moments from the play to support your ideas.',
        skill:
          'Discursive whole-play essay, in the style of OCR: argument, analysis of methods, and context',
        guidance: [
          'Decide your answer before you write and state it in your first sentence: for example, that Shakespeare makes Shylock both, and that the play is harder to watch because he is.',
          'For the victim reading, use Act 1, Scene 3, where he recalls being spat on and Antonio says he would do it again.',
          'Use a moment that cuts both ways: Act 3, Scene 1, where the plea for shared humanity becomes a promise of revenge, “The villainy you teach me I will execute”.',
          'For the villain reading, use Act 4, Scene 1, where he refuses six thousand ducats, whets his knife, and will not pay for a surgeon because it is “not in the bond”.',
          'Return to the victim reading with the sentence: the forced conversion, the loss of his wealth, and his last speech, in which he says “I am not well” and asks for the deed to be sent after him.',
          "Consider audiences: Jews were often shown on the Elizabethan stage in hideous caricature, and the case of Roderigo Lopes, a Portuguese-born physician of Jewish origin executed in 1594, prompted a revival of Marlowe's The Jew of Malta; since Edmund Kean took the part in 1814, by contrast, many actors have played Shylock sympathetically.",
          'Conclude with a judgement that answers the question as it is asked, rather than simply saying he is a bit of both.',
        ],
      },
      {
        question:
          'Read Act 3, Scene 1, from Salarino’s “Why, I am sure if he forfeit” to Shylock’s “better the instruction”. (a) Look at how Shylock speaks and behaves here. What does it reveal to an audience about his feelings at this point in the play? Refer closely to details from the extract. (b) Write about Shylock’s relationship with his daughter Jessica, and how it is presented at different points in the play.',
        skill:
          'Extract-based question and whole-play essay, in the structure Eduqas uses: close reading of the extract, then an argument across the play',
        guidance: [
          'For (a), follow the speech as it moves, because the shifts are the answer: a grim joke about fish bait, a list of injuries, questions about shared humanity, and then a vow of revenge.',
          'Analyse the list “mock’d at my gains, scorned my nation”: each short clause is another blow, and business and religion are run together as if Venice cannot tell them apart.',
          'Show how the questions build. “If you prick us, do we not bleed?” can only be answered yes, so by the time Shylock reaches “if you wrong us” the audience has been led into his logic.',
          'Remember that this is a scene on a stage. Salarino and Solanio have been taunting him about Jessica, so a production can play him as wounded, as menacing or as both, and you can say how each choice changes the speech.',
          'For (b), choose three or four moments in order: Jessica telling Launcelet “Our house is hell” in Act 2, Scene 3; Shylock handing her his keys and telling her to “Look to my house” in Act 2, Scene 5; his wish in Act 3, Scene 1 that she were “dead at my foot”; and the trial, where a deed forced on him makes her and Lorenzo his heirs.',
          'Weigh the evidence both ways. The turquoise he had “of Leah when I was a bachelor”, which Jessica has swapped for a monkey, lets an actor show grief beneath the rage, while her couplet ending “I have a father, you a daughter, lost” suggests she knows the break is final.',
          'Keep context brief. The Eduqas specification does not list context among the skills its Shakespeare section assesses, but it does assess spelling, punctuation and grammar there, so spend your time on analysis and argument and leave a few minutes to check your writing.',
        ],
      },
      {
        question: 'Explore the importance of promises and bonds in The Merchant of Venice.',
        skill:
          'Whole-play essay, in the style of the International GCSE: knowledge of the play, analysis of language, form and structure, and context',
        guidance: [
          "Define your terms: a bond is a legal contract, but the play is full of other binding promises, from a father's will to a lover's ring.",
          'Analyse the bond in Act 1, Scene 3: offered “in a merry sport”, a joke that hides a deadly forfeit, and sealed by an Antonio who is sure his ships will return.',
          "Link it to Belmont: Portia is bound by her father's will in Act 1, Scene 2, and every suitor must swear never to marry if he chooses wrongly.",
          'Show how Shylock holds Venice to its word in Acts 3 and 4, and how Portia defeats him by holding him to the exact words of the bond.',
          "Explore the rings: Portia's warning that losing hers will “presage the ruin of your love”, Bassanio's choice between his wife and his friend, and the comic forfeits of Act 5.",
          'Use context: Venice as a trading republic whose prosperity depended on keeping faith with foreign merchants, which Antonio himself explains in Act 3, Scene 3.',
          'This is an open-book paper, taken with an unmarked copy of the prescribed edition, so use the text to check exact words, but spend your time on analysis rather than copying long passages.',
        ],
      },
    ],
    tips: [
      'Know where Shylock is. He appears in only five scenes, so a Shylock essay should move between Act 1, Scene 3, Act 2, Scene 5, Act 3, Scenes 1 and 3, and the trial, and say something about his absence from Act 5.',
      'Do not treat “Hath not a Jew eyes?” as only a plea for tolerance. The speech ends in revenge, and the best answers show how Shakespeare builds sympathy and then puts it to use.',
      'Notice who speaks prejudice. It comes from Antonio, Gratiano, Salarino, Solanio, Launcelet and Portia herself, so the play presents it as normal in both Venice and Belmont, not as the fault of one unpleasant character.',
      "Treat mercy as a word to test, not a virtue to praise. Set Portia's speech beside what the court actually does, and beside the Duke's claim that his pardon shows “the difference of our spirit”.",
      'Connect the plots. An answer about the caskets, the bond or the rings is stronger when it shows that all three are tests of promises and of seeing past appearances.',
      "Make context specific. The expulsion of 1290, Christian teaching against lending at interest, and Venice's dependence on foreign traders each explain something in the text; general remarks about the period do not.",
      'Write about audiences in the plural. An Elizabethan audience and a modern one, after the Holocaust, respond differently to Shylock, and the play has been used as propaganda: it was broadcast on German radio shortly after Kristallnacht in 1938.',
      "Learn short quotations from the edition your school uses. Editions differ in spelling and punctuation, and in a closed-book exam a short, exact phrase is worth more than a long, uncertain one. Names vary too: this edition calls Portia's disguise Balthazar where an AQA paper printed Balthasar, and some editions call Solanio Salanio.",
    ],
  },

  modelAnswer: {
    question:
      "Starting with Shylock's speech in Act 1, Scene 3 (“Signior Antonio, many a time and oft”), explore how Shakespeare presents Shylock as an outsider in The Merchant of Venice.",
    paragraph:
      "Shakespeare presents Shylock as an outsider whose exclusion is written on his body and his clothes. In his speech to Antonio in Act 1, Scene 3, the insults are not his own words but Antonio's, which he quotes back: “You call me misbeliever, cut-throat dog, / And spet upon my Jewish gaberdine”. The adjective “Jewish” adds nothing as description, since everyone on the Rialto knows what he is, so it suggests that his coat is where his identity becomes a public target, and the present tense of “call” makes the abuse habitual rather than past. Antonio's reply, “I am as like to call thee so again”, confirms it. Yet Shakespeare lets Shylock turn his position into rhetorical power: he acts out the voice of the servile moneylender, “in a bondman’s key, / With bated breath and whisp’ring humbleness”, and the alliteration of “bated breath”, with the hushed “whisp’ring humbleness”, mocks the humility the Christians expect of him. The word “bondman” anticipates the bond he is about to propose, as if the only way an outsider can bind a Venetian is by contract. By the trial the pattern is complete: the law that finally ruins him applies because it can be “proved against an alien”, so the legal system Shylock trusted defines him, at the moment of his defeat, as someone who does not belong. For an audience in an England that had expelled its Jews in 1290, Shylock may have been a familiar stage stereotype; Shakespeare nevertheless makes his exclusion audible, and a modern audience is likely to hear the speech as an accusation of Venice as much as of Shylock.",
    commentary: [
      'It opens with an argument about how Shylock is excluded, not a summary of the scene, so every sentence after it has something to prove.',
      'Quotations are short, exact and embedded, and the analysis works at the level of single words: the adjective “Jewish”, the present tense of “call”, the alliteration of “bated breath”.',
      "It links the extract to the rest of the play through one word, “bondman”, and then moves to the trial's law against an “alien”, showing knowledge of the whole play without retelling the plot.",
      "Context is used to explain rather than decorate: the expulsion of 1290 explains why a stage stereotype mattered to Shakespeare's audience.",
      "It ends by weighing two audiences' responses, which is the evaluative step that separates a strong answer from a competent one.",
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: "Antonio's sadness",
      summary:
        'In a Venice street, the merchant Antonio cannot explain his sadness, and his friends guess at his ships or at love. Bassanio, already in debt to him, asks for money to court the rich heiress Portia at Belmont. With all his fortunes at sea, Antonio tells him to borrow on his credit.',
      setting: 'A street in Venice',
      who: ['Antonio', 'Bassanio', 'Gratiano', 'Lorenzo', 'Salarino', 'Solanio'],
      quote: 'In sooth I know not why I am so sad',
      themes: ['Love and friendship', 'Money, bonds and usury'],
      tension: 1,
      significance:
        'Love and money are knotted together from the first scene: Bassanio owes Antonio most “in money and in love”.',
    },
    {
      where: 'Act 1, Scene 2',
      title: "Portia and her father's will",
      summary:
        "At Belmont, Portia complains to Nerissa that her dead father's will lets her neither choose nor refuse a husband: suitors must choose between caskets of gold, silver and lead. She mocks each suitor in turn, remembers Bassanio warmly, and hears that the Prince of Morocco is on his way.",
      setting: "A room in Portia's house at Belmont",
      who: ['Portia', 'Nerissa'],
      quote: 'a living daughter curb’d by the will of a dead father',
      themes: ['Appearance and the caskets', 'Love and friendship'],
      tension: 1,
      significance:
        'Portia is as bound as Antonio will be: her future is fixed by a document, which makes the casket test a kind of bond.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'The merry bond',
      summary:
        "Shylock agrees to lend Bassanio three thousand ducats for three months, with Antonio bound for the debt. In an aside he declares his hatred of Antonio; aloud he recalls years of insults, then proposes a bond “in a merry sport”: if the loan is not repaid, the forfeit is a pound of Antonio's flesh. Antonio agrees to seal it at the notary's, sure his ships will return a month before it falls due.",
      setting: 'A public place in Venice',
      who: ['Shylock', 'Bassanio', 'Antonio'],
      quote: 'I will feed fat the ancient grudge I bear him.',
      themes: ['Money, bonds and usury', 'Prejudice and otherness'],
      tension: 3,
      significance:
        'The whole plot rests on this contract, and on a history of contempt that both men openly admit.',
    },
    {
      where: 'Act 2, Scenes 2 to 6',
      title: 'Jessica leaves her father',
      summary:
        "Launcelet Gobbo leaves Shylock's service for Bassanio's. Jessica, who calls her father's house hell, sends Lorenzo a letter planning her escape. While Shylock is at supper with the Christians, she appears above dressed as a boy, throws down a casket of his wealth, and runs away with Lorenzo.",
      setting: "Venice, outside Shylock's house, at night",
      who: ['Launcelet Gobbo', 'Jessica', 'Lorenzo', 'Shylock', 'Gratiano', 'Salarino'],
      quote: 'I have a father, you a daughter, lost.',
      themes: ['Outsiders and belonging', 'Love and friendship'],
      tension: 3,
      significance:
        "Jessica enters the Christian world by leaving her father's, and the play leaves open whether to read her flight as rescue or betrayal.",
    },
    {
      where: 'Act 2, Scene 7',
      title: 'Morocco chooses gold',
      summary:
        'The Prince of Morocco, who has asked Portia not to dislike him for his complexion, reasons that only gold is worthy of her. He opens the gold casket and finds a skull holding a scroll that begins “All that glisters is not gold”, and leaves with a heavy heart.',
      setting: "Portia's house at Belmont",
      who: ['The Prince of Morocco', 'Portia'],
      quote: 'Let all of his complexion choose me so.',
      themes: ['Appearance and the caskets', 'Prejudice and otherness'],
      tension: 2,
      significance:
        "Portia's closing line shows that prejudice lives in Belmont as well as Venice, spoken by the play's heroine.",
    },
    {
      where: 'Act 2, Scene 8',
      title: 'My daughter, my ducats',
      summary:
        "Salarino and Solanio describe Shylock raging through the streets about his daughter and his ducats, followed by jeering boys. They mention a Venetian ship lost in the narrow seas between France and England, hope it is not Antonio's, and recall Antonio parting from Bassanio in tears.",
      setting: 'A street in Venice',
      who: ['Salarino', 'Solanio'],
      quote: 'My daughter! O my ducats! O my daughter!',
      themes: ['Prejudice and otherness', 'Money, bonds and usury'],
      tension: 3,
      significance:
        "Shylock's grief reaches us only through his mockers' impression of it, which invites laughter at a father's loss and tests the audience's response.",
    },
    {
      where: 'Act 2, Scene 9',
      title: 'Arragon chooses silver',
      summary:
        'The Prince of Arragon scorns gold as the choice of the foolish crowd and picks silver, trusting that he deserves Portia. Inside he finds the portrait of a blinking idiot. As he leaves, a messenger announces a young Venetian arriving with rich gifts.',
      setting: "Portia's house at Belmont",
      who: ['The Prince of Arragon', 'Portia', 'Nerissa'],
      quote: 'The portrait of a blinking idiot',
      themes: ['Appearance and the caskets'],
      tension: 2,
      significance:
        'Two wrong choices, one by outward show and one by self-regard, prepare the audience to understand why the right one is lead.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Hath not a Jew eyes?',
      summary:
        "Word on the Rialto is that one of Antonio's ships has been wrecked. Taunted by Salarino and Solanio, Shylock declares he will take Antonio's flesh for revenge, arguing that a Jew feels exactly as a Christian does. Tubal, a fellow Jew, brings alternating news: Jessica is spending his money in Genoa, but Antonio's ship is lost, and Shylock resolves to have his heart if he forfeits.",
      setting: 'A street in Venice',
      who: ['Shylock', 'Salarino', 'Solanio', 'Tubal'],
      quote: 'If you prick us, do we not bleed?',
      themes: ['Prejudice and otherness', 'Mercy and justice'],
      tension: 4,
      significance:
        "The play's great plea for shared humanity is also its justification of revenge, and a strong answer holds both at once.",
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Lead, and a letter',
      summary:
        "Portia begs Bassanio to wait before he chooses. While a song plays, he reasons that ornament deceives, chooses the lead casket and finds her portrait. Portia gives him herself, her house and a ring he swears never to lose, and Gratiano and Nerissa will marry too. Then a letter arrives: Antonio's ships have all failed and the bond is forfeit.",
      setting: "Portia's house at Belmont",
      who: ['Bassanio', 'Portia', 'Gratiano', 'Nerissa', 'Lorenzo', 'Jessica'],
      quote: 'The world is still deceiv’d with ornament.',
      themes: ['Appearance and the caskets', 'Love and friendship', 'Money, bonds and usury'],
      tension: 3,
      significance:
        'The casket plot resolves at the very moment the bond plot turns deadly, and the ring given here drives the ending.',
    },
    {
      where: 'Act 3, Scene 3',
      title: "I'll have my bond",
      summary:
        "Antonio, now in the custody of a gaoler, tries to speak to Shylock, who will not listen and repeats that he will have his bond. Antonio tells Salarino that the Duke cannot set aside the law, because Venice's trade depends on foreigners trusting its justice.",
      setting: 'A street in Venice',
      who: ['Shylock', 'Antonio', 'Salarino'],
      quote:
        'Thou call’dst me dog before thou hadst a cause, / But since I am a dog, beware my fangs;',
      themes: ['Money, bonds and usury', 'Mercy and justice', 'Prejudice and otherness'],
      tension: 4,
      significance:
        "Shylock turns the Christians' insult into a threat, and Antonio explains why a trading city must honour even this contract.",
    },
    {
      where: 'Act 3, Scene 4',
      title: "Portia's plan",
      summary:
        'Leaving Lorenzo and Jessica in charge of her house, Portia says she will wait at a monastery. She sends her servant Balthazar to her cousin, Doctor Bellario, in Padua for notes and clothes, and tells Nerissa they will see their husbands dressed as young men.',
      setting: "Portia's house at Belmont",
      who: ['Portia', 'Nerissa', 'Lorenzo', 'Jessica'],
      quote: 'When we are both accoutered like young men',
      themes: ['Appearance and the caskets', 'Love and friendship'],
      tension: 2,
      significance:
        'Disguise, a comic device, becomes the means by which a woman enters the male world of the law.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The trial: mercy refused',
      summary:
        'Before the Duke, Shylock gives no reason but a settled hatred, refuses six thousand ducats and whets his knife. Portia, disguised as the young doctor Balthazar, tells him he must be merciful; when he asks why, she argues that mercy cannot be forced. He craves the law, and she agrees that the bond is valid.',
      setting: 'A court of justice in Venice',
      who: [
        'Shylock',
        'Portia',
        'Antonio',
        'Bassanio',
        'The Duke of Venice',
        'Nerissa',
        'Gratiano',
      ],
      quote: 'The quality of mercy is not strain’d,',
      themes: ['Mercy and justice', 'Money, bonds and usury'],
      tension: 5,
      significance:
        "The play's most famous speech is an argument that fails: Shylock is not persuaded, and the scene has to be won by other means.",
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The trial: the reversal',
      summary:
        "As Shylock prepares to cut, Portia stops him: the bond gives flesh but no blood. He asks for money instead, first three times the loan and then only the principal, but is held to the penalty alone: exactly a pound, or he dies. A law against any alien who seeks a citizen's life then puts his wealth and life at the Duke's mercy. The Duke spares his life, and Antonio adds conditions: he must become a Christian and leave all he has at his death to Jessica and Lorenzo.",
      setting: 'A court of justice in Venice',
      who: ['Shylock', 'Portia', 'Antonio', 'The Duke of Venice', 'Gratiano', 'Bassanio'],
      quote: 'Tarry a little, there is something else.',
      themes: ['Mercy and justice', 'Prejudice and otherness', 'Outsiders and belonging'],
      tension: 5,
      significance:
        "Shylock is defeated by the same literal reading of the law he demanded, and the Christians' mercy includes the loss of his religion.",
    },
    {
      where: 'Act 4, Scenes 1 and 2',
      title: 'The rings given away',
      summary:
        "Refusing payment, the disguised Portia asks Bassanio for his ring. He refuses, because his wife made him swear to keep it, but after she leaves Antonio persuades him and Gratiano takes it after her. Nerissa, still disguised as the clerk, decides to get Gratiano's ring too.",
      setting: 'The court and a street in Venice',
      who: ['Portia', 'Bassanio', 'Antonio', 'Gratiano', 'Nerissa'],
      quote: 'There’s more depends on this than on the value.',
      themes: ['Love and friendship', 'Money, bonds and usury'],
      tension: 3,
      significance:
        'Bassanio must choose between his promise to his wife and his debt to his friend, which sets up the comic trial of Act 5.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'In such a night',
      summary:
        'At Belmont by moonlight, Lorenzo and Jessica compare themselves, half teasing, with lovers from classical legend, and joke about stolen money and false vows. Lorenzo speaks of the music of the stars and calls for musicians. Portia and Nerissa arrive home just before their husbands.',
      setting: "The avenue to Portia's house at Belmont, by moonlight",
      who: ['Lorenzo', 'Jessica', 'Portia', 'Nerissa'],
      quote: 'How sweet the moonlight sleeps upon this bank!',
      themes: ['Love and friendship', 'Outsiders and belonging'],
      tension: 1,
      significance:
        "After the courtroom, harmony returns, yet even the lovers' duet recalls how Jessica stole “from the wealthy Jew”.",
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The ring quarrel',
      summary:
        "Portia and Nerissa accuse their husbands of giving their rings away and threaten, jokingly, to be as generous to the doctor and his clerk. Antonio offers to be bound again for Bassanio's faith. The wives return the rings, reveal that they were the doctor and the clerk, and bring news that three of Antonio's ships are safe and a deed of gift for Lorenzo and Jessica.",
      setting: "Portia's house at Belmont, towards dawn",
      who: ['Portia', 'Nerissa', 'Bassanio', 'Gratiano', 'Antonio', 'Lorenzo', 'Jessica'],
      quote: 'I once did lend my body for his wealth,',
      themes: ['Love and friendship', 'Money, bonds and usury', 'Outsiders and belonging'],
      tension: 2,
      significance:
        'The ring plot replays the bond plot as a comic game of promises, forfeits and pardon, and the play ends in marriages with Shylock nowhere on stage.',
    },
  ],

  relationships: [
    {
      from: 'Antonio',
      to: 'Bassanio',
      kind: 'devoted friends, lender and borrower',
      note: "Antonio gives Bassanio money, credit and very nearly his life, and Bassanio owes him most “in money and in love”. How to name Antonio's love is an open question, and his sadness at losing Bassanio to marriage is one reading of the play's first line.",
    },
    {
      from: 'Shylock',
      to: 'Antonio',
      kind: 'enemies, then creditor and debtor',
      note: "The hatred is mutual and long-standing: Antonio has spat on Shylock and says he will do it again, and Shylock hates him as a Christian and as a rival who lends without interest. The bond turns that hatred into a legal claim on Antonio's body.",
    },
    {
      from: 'Shylock',
      to: 'Jessica',
      kind: 'father and daughter',
      note: 'Jessica calls his house hell and leaves it with his money; Shylock, grieving for daughter and ducats in the same breath, wishes her dead at his feet. She ends the play as his heir only through a deed forced on him in court.',
    },
    {
      from: 'Portia',
      to: 'Bassanio',
      kind: 'wife and husband',
      note: 'Bassanio wins her by choosing lead, and she gives him herself and a ring. Disguised, she then saves his friend and takes the ring back, so the marriage begins with her proving herself his equal in wit and his superior in the law.',
    },
    {
      from: 'Portia',
      to: 'Antonio',
      kind: "rivals for Bassanio's loyalty",
      note: "One reading of the ring test is that it asks whether Bassanio's first loyalty is to his friend or his wife. Antonio's offer in Act 5 to be bound for Bassanio's faith settles the question on Portia's terms.",
    },
    {
      from: 'Jessica',
      to: 'Lorenzo',
      kind: 'lovers, then wife and husband',
      note: "Their elopement is romantic and also a theft, and in Act 5 their teasing mentions both. Jessica says her husband has made her a Christian, yet Launcelet still jokes that as a Jew's daughter she is damned.",
    },
    {
      from: 'Portia',
      to: 'Nerissa',
      kind: 'mistress and waiting-woman, and confidantes',
      note: "They plan together throughout: Nerissa follows Portia into marriage, disguise and the ring trick, a partnership between women that mirrors the men's friendship.",
    },
    {
      from: 'Gratiano',
      to: 'Nerissa',
      kind: 'husband and wife',
      note: "Their courtship happens offstage, alongside Bassanio's, and their quarrel over the ring is a louder, bawdier echo of Portia and Bassanio's. Gratiano has the play's last word, a joke about keeping Nerissa's ring safe.",
    },
    {
      from: 'Shylock',
      to: 'Tubal',
      kind: 'friends in the same community',
      note: 'Tubal, whom Shylock calls a wealthy Hebrew of his tribe, is the only character who comes to him as a friend, and Shylock ends their scene by asking him to meet at the synagogue. His alternating news about Jessica and Antonio in Act 3, Scene 1 swings Shylock between grief and triumph.',
    },
    {
      from: 'Launcelet Gobbo',
      to: 'Shylock',
      kind: 'servant and master',
      note: "Launcelet calls his master a devil, complains that he is starved, and leaves to serve Bassanio; Shylock says he is kind enough but a huge feeder. The comic servant's desertion comes just before Jessica's.",
    },
    {
      from: 'The Prince of Morocco',
      to: 'Portia',
      kind: 'suitor and heiress',
      note: 'He asks her not to judge him by his colour, and she answers courteously to his face, but after he has chosen wrongly she hopes all of his complexion will choose the same.',
    },
  ],

  compareWith: [
    {
      title: 'Much Ado About Nothing',
      href: '/revision/texts/much-ado-about-nothing',
      reason:
        'On the AQA, Edexcel, OCR and Eduqas Shakespeare lists with this play: another comedy that comes close to tragedy, with a public shaming at a wedding and a plot that turns on deception.',
    },
    {
      title: 'Twelfth Night',
      href: '/revision/texts/twelfth-night',
      reason:
        "On the Edexcel and Eduqas lists: a heroine disguised as a young man, and an outsider, Malvolio, who is humiliated and leaves vowing revenge while the others celebrate, a close parallel to Shylock's exit.",
    },
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        "On the Eduqas list, and its first act is set in Venice: an outsider serves the state against the Ottoman fleet, a senator's daughter marries him without her father's consent, and the father brings his grief before the Duke, a scene to set beside Shylock's loss of Jessica.",
    },
    {
      title: 'Romeo and Juliet',
      href: '/revision/texts/romeo-and-juliet',
      reason:
        'Set by every board that sets this play, including the International GCSE: Juliet, like Jessica, defies her father for love, and both fathers answer with fury.',
    },
  ],

  contentGuidance: [
    'discrimination',
    'violence',
    'crime_injustice',
    'mythological_religious',
    'intimate_relationships',
  ],

  quotesFromElsewhere: ['otherwise called the Jewe of Venyce'],

  sources: [
    {
      label:
        "The Merchant of Venice, Project Gutenberg eBook #1515: the edition held as a byte copy in src/data/full-texts, from which every quotation was copied, and whose speakers, acts and scenes were checked by reading the whole play. The scene counts (twelve in Venice, eight at Belmont), the five scenes in which Shylock appears, and the counts of “Jew” (24, one of them in Bellario's letter as it is read aloud; “Jewish” not counted) and his name (6, one of them his own) in Act 4, Scene 1 were taken from that edition",
      url: 'https://www.gutenberg.org/ebooks/1515',
    },
    {
      label:
        "Wikipedia, The Merchant of Venice: written between 1596 and 1598; entered in the Stationers' Register on 22 July 1598 as “the Marchaunt of Venyce or otherwise called the Jewe of Venyce”; mentioned by Meres in 1598; published by Thomas Heyes in 1600; classed as a comedy in the First Folio; Il Pecorone (published 1558) and the Gesta Romanorum as sources; Kean and the sympathetic tradition; the 1938 German broadcast after Kristallnacht",
      url: 'https://en.wikipedia.org/wiki/The_Merchant_of_Venice',
    },
    {
      label:
        'Folger Shakespeare Library, The Merchant of Venice: first printed as a quarto in 1600; the First Folio of 1623',
      url: 'https://www.folger.edu/explore/shakespeares-works/the-merchant-of-venice/',
    },
    {
      label: 'Royal Shakespeare Company, About the play: written between 1596 and 1598',
      url: 'https://www.rsc.org.uk/the-merchant-of-venice/about-the-play',
    },
    {
      label:
        'Wikipedia, Shylock: Jews expelled from England by Edward I in 1290; caricature of Jews on the Elizabethan stage; the sympathetic tradition beginning with Edmund Kean in the first half of the nineteenth century, with his Shylock of 1814',
      url: 'https://en.wikipedia.org/wiki/Shylock',
    },
    {
      label:
        "Wikipedia, Roderigo Lopes: a Portuguese converso of Jewish ancestry, hanged, drawn and quartered at Tyburn on 7 June 1594; his case prompted a revival of Marlowe's The Jew of Malta",
      url: 'https://en.wikipedia.org/wiki/Roderigo_Lopes',
    },
    {
      label:
        'Wikipedia, Usury: the medieval Church regarded charging interest at any rate as sinful; Jewish communities pushed into moneylending',
      url: 'https://en.wikipedia.org/wiki/Usury',
    },
    {
      label: 'Wikipedia, Rialto: the financial and commercial heart of Venice for centuries',
      url: 'https://en.wikipedia.org/wiki/Rialto',
    },
    {
      label: 'Wikipedia, Ducat: the gold ducat originated in Venice in 1284',
      url: 'https://en.wikipedia.org/wiki/Ducat',
    },
    {
      label:
        'Wikipedia, Susanna (Book of Daniel): the young Daniel cross-examines the two elders separately and exposes their false testimony; the trial scene alludes to it. The article gives “A second Daniel” to Shylock, but in the held edition Shylock says “A Daniel come to judgment” and Gratiano says “A second Daniel”; this guide follows the edition',
      url: 'https://en.wikipedia.org/wiki/Susanna_(Book_of_Daniel)',
    },
    {
      label: "Wikipedia, Laban (Bible): Jacob and Laban's flocks, Genesis 30",
      url: 'https://en.wikipedia.org/wiki/Laban_(Bible)',
    },
    {
      label:
        'Wiktionary: usance (interest; usury), doit (a small Dutch coin; a tiny amount), argosy (from Ragusa, now Dubrovnik), scruple (twenty grains, about 1.3 grams), posy (a motto inscribed in a ring), moiety (a half; a share), counterfeit (obsolete: a likeness or portrait), magnifico (a nobleman of the Venetian republic), gaberdine (a long cloak), publican (a New Testament tax collector), gentle (a doublet of gentile, from Latin gentilis)',
      url: 'https://en.wiktionary.org/wiki/usance',
    },
    {
      label:
        'AQA, GCSE English Literature (8702) specification at a glance: Paper 1 Section A, one question on the play, writing in detail about an extract and then about the play as a whole; The Merchant of Venice on the list of six plays',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/specification-at-a-glance',
    },
    {
      label:
        'Pearson Edexcel, GCSE (9-1) English Literature (1ET0) specification, Issue 2: Paper 1 Section A, a two-part question, part (a) close language analysis of an extract of about 30 lines, part (b) how a theme in the extract is explored elsewhere in the play, with context; closed book',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'OCR, GCSE (9-1) English Literature (J352) specification, Version 3.0 (November 2025): Component 2 Section B, a choice of an extract-based question making links to the whole text or a discursive question; closed text',
      url: 'https://www.ocr.org.uk/Images/168995-specification-accredited-gcse-english-literature-j352.pdf',
    },
    {
      label:
        'Pearson Edexcel, International GCSE English Literature (4ET1) specification, Issue 3, August 2025: Component 2 Section B, one essay question from a choice of two on each literary heritage text; open book, with unmarked prescribed editions',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        "Held editions of Twelfth Night, Much Ado About Nothing and Romeo and Juliet in src/data/full-texts: checked for the plot facts named in compareWith (Viola as Cesario and Malvolio's exit; Hero shamed at her wedding; Capulet's fury at Juliet)",
    },
    {
      label:
        'Held edition of Othello in src/data/full-texts: Act 1 set in Venice; Brabantio called a senator (Act 1, Scene 1); the Duke employs Othello against the Ottoman fleet and Brabantio accuses him before the Duke and senators of stealing his daughter (Act 1, Scene 3)',
    },
    {
      label:
        'Eduqas GCSE English Literature specification (C720QS), Version 4, August 2024: Component 1 Section A, one extract-based question and one essay question on the Shakespeare play as a whole; Twelfth Night and The Merchant of Venice on the list; the skills assessed there do not include context but do include spelling, punctuation and grammar; set texts may not be taken into the examination',
      url: 'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    },
    {
      label:
        "AQA GCSE English Literature Paper 1, question paper labelled June 2020: the Merchant of Venice question prints Portia's mercy speech from Act 4, Scene 1, names her disguise Balthasar, and asks “Starting with this speech” about the extract and then the play as a whole. The first exam question here was written on a different passage so as not to repeat it",
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/AQA/Paper-1/QP/June%202020%20QP.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0/01, 22 May 2018, Questions and Extracts Booklet: the two-part Shakespeare question shape, part (a) on the extract and part (b) “Explain the importance of … elsewhere in the play”, with context required in part (b); the six plays in Section A include Twelfth Night and Much Ado About Nothing',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/Exam-materials/1ET0_01_que_20180523.pdf',
    },
    {
      label:
        'OCR, The Merchant of Venice exemplar candidate work: the discursive question asks candidates to explore at least two moments in the play in detail',
      url: 'https://www.ocr.org.uk/images/350213-merchant-of-venice-exemplar-candidate-work.pdf',
    },
    {
      label:
        'The Shakespeare lists for AQA 8702, Edexcel 1ET0, OCR J352 and Eduqas C720QS as read from each specification and recorded in src/lib/board/prescribed-texts.ts; the 4ET1 literary heritage list in src/lib/board/edexcel-igcse-literature.ts, which includes Romeo and Juliet and this play',
    },
  ],
}
