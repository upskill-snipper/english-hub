import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A Midsummer Night's Dream, William Shakespeare. A COMPLETE guide: the text had
 * no guide file, so this is its whole page.
 *
 * Every quotation, every annotated phrase and every phrase quoted inside the
 * prose was copied from the byte copy of Project Gutenberg #1514 held at
 * src/data/full-texts/a-midsummer-nights-dream.ts, after reading the whole play
 * in that edition. The three extracts were cut from that file by script, not
 * retyped. Each speaker, act and scene was checked by a script that locates
 * every quotation in the edition and prints the speech it sits in, and then by
 * reading the scene, not by searching for the phrase alone. Verse and prose are
 * quoted with " / " at the edition's own line breaks, because that is how the
 * test matches them.
 *
 * EDITION DIFFERENCES a student will meet, recorded so the next editor does not
 * "correct" them into error:
 * - Cambridge sets its extract questions from the Alexander Text (the 0475
 *   syllabus says so), which spells Thisby and prints "An I may hide my face"
 *   in Act 1, Scene 2 where Gutenberg has Thisbe and "And I may hide my face".
 *   The same passage, as printed on the June 2024 Paper 21, has Quince's "A
 *   lover, that kills himself most gallant for love", where Gutenberg has "most
 *   gallantly". The Act 1, Scene 2 timeline card used to quote the Gutenberg
 *   form; it was replaced (September 2026 fact-check) with Bottom's "Let me play
 *   the lion too", which does not vary, so a student is not taught a wording
 *   that contradicts the passage on their own exam paper.
 * - The Folger edition heads Puck's speeches ROBIN and gives the mechanicals'
 *   Act 5 parts to named actors (QUINCE as Prologue, STARVELING as Moonshine).
 *   The Gutenberg text heads them PROLOGUE, MOONSHINE and so on, so who plays
 *   Moonshine is sourced to the Folger text, not to the held edition.
 * - In the First Folio of 1623, Egeus takes Philostrate's part in Act 5 (Folger,
 *   "An Introduction to This Text"). The held edition follows the quarto, in
 *   which Egeus does not appear in Act 5.
 * - The held edition prints Oberon's charm in Act 4, Scene 1, Puck's in
 *   Act 3, Scene 2 and Bottom's Ercles verse in Act 1, Scene 2 as italic
 *   stage-direction blocks, and leaves a few speech prefixes unbolded (Snout's
 *   "O Bottom, thou art changed", the Prologue in Act 5). Their words are in
 *   the file and quotable; the attribution script was checked by hand there.
 *
 * Context facts are sourced below. Where sources disagreed the guide says less:
 * the date Northrop Frye introduced the green world is 1948 in one source and
 * 1957 in another, so no date is given; the printer of the 1600 quarto is
 * spelled two ways, so he is not named; the title page is paraphrased, not
 * quoted, because two transcriptions spell it differently.
 *
 * Exam formats come from the Cambridge 0475 syllabus for 2027 and the Pearson
 * 9ET0 specification, Issue 11, both read at their drama papers; past
 * questions come from the papers themselves (see sources). The guide names no
 * mark tariffs or assessment-objective numbers, because they differ between
 * the boards.
 */
export const guide: StudyGuide = {
  slug: 'a-midsummer-nights-dream',
  title: "A Midsummer Night's Dream",
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: five acts in nine scenes, ending with Puck’s speech to the audience. It is a drama set text for Cambridge IGCSE Literature in English (0475) in the 2026 and 2027 examinations, on both Paper 2 (Drama) and Paper 3 (Drama, Open Text), and one of the four Shakespeare comedies in Component 1 (Drama) of Pearson Edexcel A-level English Literature (9ET0). Quotations follow the Project Gutenberg edition used in this site’s reader. Line numbers, spelling and a few readings differ between editions, so every passage here is located by act, scene and its opening words.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Public domain. First printed in quarto in 1600, and in the First Folio of 1623. Quotations and extracts follow the modern-spelling Project Gutenberg edition (eBook #1514); punctuation, spelling and line numbers may differ slightly from your own edition.',
  },

  overview: {
    summary: [
      'A Midsummer Night’s Dream is a comedy built from four groups who would never normally meet. Theseus, Duke of Athens, is four days from marrying Hippolyta, the Amazon queen he won in war. Four young Athenians are tangled in love: Hermia and Lysander love each other, Demetrius wants Hermia, and Helena loves Demetrius, who once courted her. In the wood outside the city, Oberon and Titania, King and Queen of the Fairies, are quarrelling over an Indian boy. And six Athenian craftsmen, led by Peter Quince and starring Nick Bottom the weaver, are rehearsing a play for the Duke’s wedding.',
      'The play opens with a threat of death. Hermia’s father, Egeus, demands the “ancient privilege of Athens”: she must marry Demetrius or die. Theseus adds a third choice, to live as a nun. Hermia and Lysander run away into the wood, followed by Demetrius and then by Helena. There Oberon, planning to humiliate Titania into giving up the boy, sends his servant Puck for a flower whose juice makes a sleeper dote on the next creature they see. Oberon enchants Titania, who wakes and falls in love with Bottom, to whom Puck has given an ass’s head. Puck anoints the wrong Athenian, and by Act 3, Scene 2 both young men love Helena, who thinks everyone is mocking her, while the two women, friends since childhood, turn on each other.',
      'Oberon sets it straight. He gets the boy, releases Titania, and has the charm lifted from Lysander’s eyes, but not from Demetrius’s, who wakes still loving Helena. Theseus, out hunting at dawn, finds the four lovers asleep and overrules Egeus, and three couples marry. In Act 5 the craftsmen perform their “tedious brief scene” of Pyramus and Thisbe, two lovers separated by a wall, who both die through a mistake, and the court laughs at it. At midnight the fairies bless the marriages, and Puck asks the audience to think of the whole play as a dream.',
      'The play is worth arguing about because its lightness is doubtful. It is framed by a threat of death and a mock-tragedy of two suicides; it shows love as blind, changeable and managed by other people; and its happy ending depends on one ruler’s decision and one charm that is never undone. It is also a play about theatre, in which amateur actors worry aloud about whether an audience will believe a lion, a wall or the moon. This guide argues that Shakespeare takes both love and imagination seriously precisely by letting the audience laugh at them.',
    ],
  },

  context: [
    {
      heading: 'When it was written and first printed',
      body: 'The Royal Shakespeare Company gives 1595-6 as the likeliest date of composition, on grounds of style, and the play must be earlier than 1598, when Francis Meres praised it in his book Palladis Tamia. It was first printed in 1600 as a quarto for the bookseller Thomas Fisher, whose title page says it had been acted several times by the Lord Chamberlain’s servants, the company for which Shakespeare wrote for most of his career and in which he was a sharer. A second quarto followed in 1619, and an annotated copy of it was used to print the First Folio text of 1623. The Folio’s chief change is that Egeus, not Philostrate, presents the evening’s entertainments in Act 5, so check which your edition follows. Scholars have often argued that the play was written for a particular aristocratic wedding; the RSC notes that there is no conclusive evidence for it.',
    },
    {
      heading: 'Shakespeare’s sources',
      body: 'Shakespeare built the play from books he knew. Ovid’s Metamorphoses, which he read in Latin as a schoolboy and which Arthur Golding translated into English in 1567, gave him stories of transformation, of Cupid’s arrows, and the tale of Pyramus and Thisbe. Chaucer’s The Knight’s Tale gave him the framework: Duke Theseus weds his Amazon bride, and two young men fall in love with the same woman. Plutarch’s life of Theseus, in Sir Thomas North’s translation of 1579, supplied details about Theseus. Apuleius’s The Golden Ass, translated by William Adlington in 1566, tells of a man turned into an ass, and Reginald Scot’s The Discoverie of Witchcraft (1584) records popular beliefs about fairies. Seeing the sources helps with one point in particular: Pyramus and Thisbe is a real classical love story, and the mechanicals ruin it.',
    },
    {
      heading: 'Fathers, daughters and marriage',
      body: 'In Shakespeare’s England parents still exercised considerable control over whom their children married, although children were increasingly given a right of veto and more room to follow their hearts. A daughter who disagreed with her father’s choice could accept it, or risk his disapproval by “stealing a marriage”, marrying in secret. Egeus uses the same idea when he complains in Act 4 that the lovers “would have stol’n away”. What Shakespeare adds is the law. A real daughter who refused risked her father’s disapproval; Hermia, under the “ancient privilege” of Shakespeare’s imagined Athens, risks death, so the play begins by turning a real, familiar authority into an absolute one. That exaggeration is what makes Theseus’s decision in Act 4 to “overbear” Egeus feel like a release, and it is worth asking whether the ending questions paternal power or simply transfers it to the Duke.',
    },
    {
      heading: 'A compliment to the Queen',
      body: 'In Act 2, Scene 1 Oberon describes Cupid aiming at “a fair vestal, thronèd by the west”, but the arrow is quenched in the chaste beams of the moon, and she passes on “In maiden meditation, fancy-free”. The passage is widely read as a compliment to Queen Elizabeth I, who never married and was celebrated as a virgin queen ruling in the west, far from the play’s Athens. It matters to the play’s argument as well as to its politics: the arrow that misses her lands on the flower whose juice drives the plot, so the one person immune to love is the monarch, while everyone else, fairy and mortal, is subject to it.',
    },
    {
      heading: 'Midsummer, May Day and festive comedy',
      body: 'The title promises Midsummer Eve, yet the play keeps pointing to May: Lysander remembers meeting Hermia and Helena in the wood “To do observance to a morn of May”, and Theseus assumes the sleeping lovers rose early “to observe / The rite of May”. The mixing of the two festivals adds to the play’s confusion of time and seasons. The critic C. L. Barber, in Shakespeare’s Festive Comedy (1959), argued that Shakespeare’s comedies are shaped like these holidays: a period of licensed misrule and release, followed by a return to everyday order, a movement he summed up as “through release to clarification”. The Pearson Edexcel A-level paper of Summer 2023 asked candidates how far the play is a festive comedy, so know the idea and be ready to test it.',
    },
    {
      heading: 'Fairies and folklore',
      body: 'Puck comes from English folklore, in which Robin Goodfellow was a domestic sprite who might help with the housework in return for an offering and undo it with his tricks if displeased. The Fairy who meets him in Act 2, Scene 1 identifies him as “Robin Goodfellow” and lists his mischief: he skims the milk, stops the butter coming and misleads night travellers, and Puck himself boasts that an old woman mistakes him for a stool, and he slips from under her so that she topples over. Those who call him “sweet Puck”, the Fairy adds, have good luck. He is a spirit to be placated, not admired. The Folger essay by Catherine Belsey stresses that Shakespeare’s fairies are not the sweet creatures of Victorian fantasy but stand for what is turbulent and uncontrolled in human experience: their quarrel floods the fields and confuses the seasons.',
    },
    {
      heading: 'The Elizabethan stage',
      body: 'The first audiences saw the play in daylight, on a thrust stage with no scenery and very few props, and every female part, Hermia, Helena, Hippolyta and Titania included, was played by a boy. That explains much of the writing. The moonlit wood exists only in words, which is why the verse is so full of moon, dew and flowers, and why the mechanicals’ anxiety about how “to bring / the moonlight into a chamber” is a joke about Shakespeare’s own theatre. Flute’s protest that he cannot play Thisbe because “I have a beard coming” is a joke about the same convention.',
    },
    {
      heading: 'Readings and productions',
      body: 'In the twentieth century the play’s reputation darkened. The Polish critic Jan Kott, in the essay Titania and the Ass’s Head in Shakespeare Our Contemporary (English translation 1964), argued that its real subjects were violence and animal sexuality. Peter Brook, influenced by Kott, directed the Royal Shakespeare Company production of 1970 in a simple white box designed by Sally Jacobs, with fairies entering on trapezes and the magic flower shown as a spinning plate, and doubled Theseus with Oberon, Hippolyta with Titania, Philostrate with Puck and Egeus with Quince, suggesting that the wood acts out the court’s hidden fears and desires. Put Kott and Barber side by side and you have the central critical argument: is this a play of festive release, or of nightmare?',
    },
  ],

  themes: [
    {
      title: 'Love and reason',
      body: 'Bottom states the play’s view of love most plainly, and he does it with an ass’s head on: “reason and love keep little company together nowadays”. Helena’s soliloquy in Act 1, Scene 1 makes the same point more beautifully, “Love looks not with the eyes, but with the mind”, where mind means fancy, not judgement. The love-juice makes this literal: a drop on the eyelids will make “or man or woman madly dote” on whatever comes next. The sharpest irony is that enchanted lovers insist they are being rational. Lysander, charmed, tells Helena that “reason says you are the worthier maid”. One reading is that Shakespeare mocks love as mere delusion. The more convincing reading is that he mocks love’s claim to be reasonable while still honouring its force: Hermia’s love for Lysander survives the threat of death, and Hippolyta insists in Act 5 that the lovers’ story “grows to something of great constancy”. The play never answers whether Demetrius’s love, which is still under the charm at the end, is any less real than the others’.',
    },
    {
      title: 'Authority and patriarchy',
      body: 'The play opens with a father claiming “As she is mine I may dispose of her” and a Duke agreeing that to Hermia her father “should be as a god”. Authority belongs to men, and it is backed by death. The pattern repeats in the other worlds. Theseus “woo’d” Hippolyta “with my sword”; Oberon demands “am not I thy lord?” and punishes Titania’s refusal to give him the boy by making her dote on a monster, freeing her only once she has handed the child over. Women resist in words: Hermia is “made bold” before the Duke, Titania answers Oberon line for line, and Helena objects that “We cannot fight for love as men may do”. A feminist reading sees the ending as the taming of every woman in the play: Titania gives up the boy offstage, and Hippolyta’s reluctance to watch the mechanicals is overruled. The counter-reading is that the play exposes male authority as arbitrary: Egeus’s law collapses the moment Theseus changes his mind, which makes it look as irrational as the love-juice.',
    },
    {
      title: 'Dreams and imagination',
      body: 'The title calls the play a dream, and the characters keep reaching for the word. Lysander fears love is “short as any dream”; Oberon plans that the night “Shall seem a dream and fruitless vision”; the waking lovers go off to “recount our dreams”; Bottom’s speech on waking is a dream he cannot describe. In Act 5 Theseus dismisses the whole night as the work of imagination, grouping “The lunatic, the lover, and the poet” as people who see what is not there. The audience knows he is wrong, because they have watched it happen, and Theseus is himself a character out of what he calls “antique fables”. Hippolyta’s reply that the story is too consistent to be fancy is the one the play supports. Then Puck ends by inviting the audience to treat everything they have seen as a dream. The effect is to defend imagination by letting its fiercest sceptic speak and be proved wrong.',
    },
    {
      title: 'Transformation',
      body: 'Ovid’s Metamorphoses, the play’s main source, is a poem about change, and the play is full of it. A white flower turns “purple with love’s wound”; Bottom is given an ass’s head and Quince cries “Thou art translated”; lovers’ affections switch in a blink; the seasons “change / Their wonted liveries”. Translated is the play’s own word for this. Helena uses it in Act 1, wishing she could be “to you translated” into Hermia, and Puck boasts of leaving “sweet Pyramus translated there”. The comedy of Bottom’s change is that nothing inside him changes at all: he asks for hay, has the fairies scratch his head and remains entirely himself, while the queen who adores him is the one transformed. One reading is that the play shows love changing people for the worse; a stronger one is that it shows love changing how people see, while leaving who they are untouched, which is why the lovers can wake and simply carry on.',
    },
    {
      title: 'Order and disorder',
      body: 'Titania’s great speech in Act 2, Scene 1 shows what happens when rulers quarrel: floods, rotting corn, empty sheepfolds in drowned fields, frost on summer roses, a “mazed world” that “now knows not which is which”, and she admits “We are their parents and original.” Disorder spreads through every level. A daughter defies her father, lovers defy the law, a weaver is courted by a queen, and friends fight in the dark. The Pearson Edexcel A-level paper of Summer 2024 asked how far the play is about the disruption of the social order. A strong answer will argue that the disruption is real but contained: order returns at dawn, with hunting horns, a ducal decision and three weddings, and the fairies bless the marriage beds. A more sceptical answer notes what the restoration leaves unresolved, including Demetrius’s enchantment, Egeus’s defeat and the conquest behind Theseus’s own marriage, and argues that the play reveals order as something imposed rather than natural.',
    },
    {
      title: 'Theatre and performance',
      body: 'The mechanicals’ rehearsal and performance hold a mirror up to theatre itself. They fear that the ladies will take Snug’s lion for a real one, so he must announce that he is “Snug the joiner”; they worry about how to show moonlight and a wall, and end up with actors to present both. The joke is that they misjudge their audience twice over, fearing it will believe too much and imagine too little, while Shakespeare’s own audience is happily accepting boys as women, a bare stage as a wood and actors as fairies. Theseus’s kindness, “never anything can be amiss / When simpleness and duty tender it”, and his reply to Hippolyta that “The best in this kind are but shadows” turn the laughter into a statement about all acting. Puck’s epilogue then calls the actors “shadows” too and asks for the audience’s hands. One reading is that the play within the play simply makes fun of amateur actors; a more convincing one is that it asks the real audience to be the generous, imaginative spectators the court is not.',
    },
  ],

  characters: [
    {
      name: 'Theseus',
      role: 'Duke of Athens, about to marry Hippolyta',
      body: 'The ruler who frames the play. In Act 1 he upholds the law, telling Hermia to obey, die or become a nun; in Act 4 he sets the same law aside with “Egeus, I will overbear your will”; in Act 5 he dismisses the lovers’ story as imagination, yet chooses the mechanicals’ play because “never anything can be amiss / When simpleness and duty tender it”. He can be played as a wise, humane ruler or as a conqueror who takes his own reason for truth. His opening admission that he won Hippolyta “doing thee injuries” is the key to the darker reading.',
    },
    {
      name: 'Hippolyta',
      role: 'Queen of the Amazons, betrothed to Theseus',
      body: 'A defeated warrior who speaks little but significantly. She says nothing during Hermia’s trial, and Theseus’s “What cheer, my love?” can be played as noticing her displeasure. In Act 5 she is the one who contradicts him, arguing that the lovers’ story “grows to something of great constancy”, and she is the bluntest critic of the mechanicals: “This is the silliest stuff that ever I heard.” Yet she also says “I pity the man” when Pyramus grieves. She shows that the play’s most powerful man is not always its most perceptive person.',
    },
    {
      name: 'Egeus',
      role: 'Hermia’s father',
      body: 'Egeus embodies the law of the father. He accuses Lysander of having “bewitch’d the bosom of my child”, claims Hermia as his property, and asks for her death if she will not obey. When he finds the lovers in Act 4, he begs “the law, the law upon his head”, and is overruled; in the held edition he does not appear again. He is the obstacle comedy needs, the parent who stands between the young and marriage, but his cruelty is real. Whether the ending punishes, forgives or simply ignores him is a production choice worth discussing.',
    },
    {
      name: 'Hermia',
      role: 'A young Athenian woman in love with Lysander',
      body: 'Hermia is brave, witty and proud. She defies her father and the Duke in public, choosing to “grow, so live, so die” single rather than yield “sovereignty” to a husband she does not love. In the wood she insists on propriety, asking Lysander to “Lie further off, in human modesty”, and wakes from a nightmare to find him gone. When both men desert her she turns fierce, threatening Helena’s eyes with her nails. The quarrel reveals that she is shorter than Helena and sensitive about it, and the insults Lysander throws at her, including racial ones such as “Away, you Ethiope!”, show how quickly enchanted love turns to contempt.',
    },
    {
      name: 'Lysander',
      role: 'A young Athenian in love with Hermia',
      body: 'Lysander speaks the play’s most famous line about love, “The course of true love never did run smooth”, and plans the escape to his aunt’s house seven leagues from Athens. Under the charm he abandons Hermia while she sleeps, claims that reason leads him to Helena, and turns on Hermia with brutal insults. He is the lover whose change is most shocking, because he began as the true one. When the remedy is applied he loves Hermia again and remembers nothing clearly, which leaves the audience to wonder how much love depends on what one happens to see.',
    },
    {
      name: 'Helena',
      role: 'Hermia’s childhood friend, in love with Demetrius',
      body: 'Helena is the play’s great unrequited lover and its most self-aware one. She knows that “Through Athens I am thought as fair as she”, yet calls herself Demetrius’s “spaniel”, and she betrays Hermia’s escape for the sake of his thanks and the chance to see him. When both men suddenly love her, she can only believe she is being mocked, and her speech on the friends’ “school-days’ friendship” in Act 3, Scene 2 is the most moving defence of female friendship in the play. Her waking line, that she has found Demetrius “like a jewel, / Mine own, and not mine own”, holds her doubt about the ending.',
    },
    {
      name: 'Demetrius',
      role: 'A young Athenian, Egeus’s choice for Hermia',
      body: 'Demetrius has the father’s support and a record of inconstancy: Lysander says he courted Helena and won her soul before turning to Hermia, and Demetrius himself admits in Act 4 that he was betrothed to Helena first. In the wood he threatens to leave Helena “to the mercy of wild beasts”. Once anointed, he praises her in extravagant verse. He is the only lover never released from the charm, so his marriage rests on magic. He also speaks the uncertainty of waking, asking whether “we are awake”, before deciding that they are.',
    },
    {
      name: 'Oberon',
      role: 'King of the Fairies',
      body: 'Oberon drives the plot. He wants Titania’s Indian boy as his henchman, and to get him he enchants her into doting on “some vile thing”. His poetry is some of the most beautiful in the play, from the fair vestal to “I know a bank where the wild thyme blows”, and he is capable of pity: he tries to help Helena and finally sets the lovers right. But his kindness and his cruelty come from the same desire to control. He releases Titania only when he has what he wanted, and he says he pities her “dotage” only after taunting her into surrender.',
    },
    {
      name: 'Titania',
      role: 'Queen of the Fairies',
      body: 'Titania is Oberon’s equal in argument. She accuses him of jealousy and of loving Hippolyta, describes the damage their quarrel has done to the world, and explains why she keeps the boy: his mother was her votaress, who died giving birth to him, “And for her sake I will not part with him.” Her enchanted love for Bottom is comic, tender and humiliating at once. On waking she loathes the sight of Bottom and asks Oberon how she came to be found sleeping among mortals. The Cambridge June 2025 paper (Paper 21) asked in what ways Shakespeare persuades us to sympathise with her.',
    },
    {
      name: 'Puck',
      role: 'Robin Goodfellow, a mischievous spirit who serves Oberon',
      body: 'Puck is a trickster from English folklore, “that merry wanderer of the night”. He fetches the flower, anoints the wrong man, gives Bottom the ass’s head and leads the rival lovers apart in the fog by imitating their voices. He enjoys the chaos: “those things do best please me / That befall prepost’rously.” He watches the lovers as an audience watches actors, “Lord, what fools these mortals be!”, and at the end he steps outside the play to speak to the real audience. The Cambridge June 2024 paper (Paper 21) asked how he contributes to the dramatic impact of the play.',
    },
    {
      name: 'Bottom',
      role: 'Nick Bottom, a weaver, who plays Pyramus',
      body: 'Bottom wants every part, Pyramus, Thisbe and the lion, and gives advice on all of them. His confidence survives anything: turned into an ass and courted by a queen, he treats the fairies like servants and asks for hay. He is the only mortal who knowingly meets the fairy world, and his dream speech in Act 4 is both absurd and oddly profound, a jumbled echo of St Paul’s account of the glory God has prepared for human beings. He is the character through whom the play mocks, and also loves, the ordinary human imagination.',
    },
    {
      name: 'Quince',
      role: 'Peter Quince, who organises the craftsmen’s play',
      body: 'Quince casts the play, chooses the meeting place in the wood, corrects the actors’ lines at the rehearsal and agrees to write the prologue Bottom asks for. He is patient with Bottom, whom he flatters into the part of Pyramus as “a most lovely / gentleman-like man”. His cry when he comes back and sees Bottom’s head, “Bless thee, Bottom! bless thee! Thou art translated”, gives the play one of its key words. In the Folger edition he speaks the Prologue, whose lines, with their stops in all the wrong places, say the opposite of what they mean.',
    },
    {
      name: 'Flute',
      role: 'Francis Flute, a bellows-mender, who plays Thisbe',
      body: 'Flute is cast as Thisbe against his will, “let not me play a woman. I have a beard coming”, a joke about the boy actors who played every woman’s part. In rehearsal he speaks all his lines at once, “cues, and all”, and he mourns Bottom’s absence in Act 4, Scene 2, calculating the “sixpence a day” Bottom has lost. His Thisbe lament over Pyramus in Act 5 is a parody of tragic grief.',
    },
    {
      name: 'Snug',
      role: 'A joiner, who plays the Lion',
      body: 'Snug is “slow of study” and asks for the lion’s part in writing, although it is “nothing but roaring”. Because the mechanicals fear the ladies will be frightened, he must tell the audience that he is “Snug the joiner” and not a real lion. Theseus calls him “A very gentle beast, and of a good conscience”, and the court’s jokes about him show the difference between the mechanicals’ literal minds and the courtiers’ quick ones.',
    },
    {
      name: 'Snout',
      role: 'Tom Snout, a tinker, who plays Wall',
      body: 'Cast in Act 1 as Pyramus’s father, Snout ends up playing Wall, holding up his fingers to make the chink the lovers whisper through, and introducing himself: “I, one Snout by name, present a wall”. When Quince and the others flee from Bottom’s ass’s head, Snout comes back to stare, “O Bottom, thou art changed!”, and in Act 5 Demetrius calls his Wall “the wittiest partition that ever I heard discourse”.',
    },
    {
      name: 'Starveling',
      role: 'Robin Starveling, a tailor, who plays Moonshine',
      body: 'Starveling is cast in Act 1 as Thisbe’s mother, a part that never appears; in the Folger text he plays Moonshine, with a lantern, a thorn-bush and a dog. When the courtiers’ jokes put him off his verse, he gives up and explains his props in plain prose. Earlier it is he who suggests the simplest solution to the problem of stage violence: “I believe we must leave the killing out, when all is done.”',
    },
    {
      name: 'Philostrate',
      role: 'Theseus’s master of revels',
      body: 'Theseus calls him “our usual manager of mirth”. In Act 5 he presents the list of entertainments and tries to talk the Duke out of Pyramus and Thisbe, which he has seen rehearsed and says made him laugh until he cried. In the First Folio his Act 5 lines are given to Egeus, so check which your edition follows.',
    },
  ],

  keyQuotes: [
    {
      text: 'The course of true love never did run smooth.',
      where: 'Lysander, Act 1, Scene 1',
      analysis:
        'Lysander comforts Hermia moments after Theseus has offered her marriage, death or the convent. The line sounds like a proverb, and he goes on to list what has always wrecked love: a difference in rank (“different in blood”), in age, “the choice of friends”, and war, death or sickness. Hermia answers the first three with a cry, the sharpest being “O hell! to choose love by another’s eyes!” The rest of the play tests the line: the lovers are blocked first by a father, then by magic, and finally set free by the same Duke who threatened them.',
    },
    {
      text: 'Love looks not with the eyes, but with the mind; / And therefore is wing’d Cupid painted blind.',
      where: 'Helena, Act 1, Scene 1',
      analysis:
        'Helena explains why Demetrius prefers Hermia although she is thought as beautiful: love is not a judgement of the eyes but of the mind, and the mind is not rational, since “Nor hath love’s mind of any judgment taste.” The neat rhyming couplet gives her idea the sound of a moral while describing chaos. The image of blind Cupid prepares for the love-juice, which works through the eyes, so the plot makes her metaphor literal.',
    },
    {
      text: 'As she is mine I may dispose of her;',
      where: 'Egeus, Act 1, Scene 1',
      analysis:
        'The possessive “mine” and the verb dispose, which can mean to give away or to get rid of, turn a daughter into property. Egeus calls this “the ancient privilege of Athens” and offers only two ways to dispose of her, “either to this gentleman / Or to her death”. Theseus backs him, telling Hermia her father should be to her “as a god”. The play begins by making a father’s power as extreme as possible, so that its comic ending has something real to overcome.',
    },
    {
      text: 'Hippolyta, I woo’d thee with my sword, / And won thy love doing thee injuries;',
      where: 'Theseus, Act 1, Scene 1',
      analysis:
        'The marriage that frames the play admits its origin in conquest: Theseus courted the Amazon queen by defeating her. The next line, “But I will wed thee in another key”, promises the change from war to festivity that comedy makes. Yet the violence is not quite forgotten. Hippolyta falls silent during Hermia’s trial, and an actor can make her silence a judgement on a court where men decide women’s futures.',
    },
    {
      text: 'I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you.',
      where: 'Helena, Act 2, Scene 1',
      analysis:
        'Helena makes herself a dog that loves the master who beats it, and she presses the metaphor further: “Use me but as your spaniel, spurn me, strike me”. An audience may laugh at the exaggeration, but it is also painful self-abasement, and Demetrius answers with threats. The speech makes clear what love costs her, and she understands it: “We cannot fight for love as men may do.” It is a good example of the play keeping comedy and cruelty in the same moment.',
    },
    {
      text: 'And this same progeny of evils comes / From our debate, from our dissension; / We are their parents and original.',
      where: 'Titania, Act 2, Scene 1',
      analysis:
        'Titania ends her account of floods, rotting crops and confused seasons by taking responsibility: the fairy marriage quarrel has disordered nature itself. The metaphor of evils as children, a “progeny” with “parents”, is pointed in a speech that is really about a disputed child. Her “We” shares the blame, while Oberon answers “It lies in you” and blames her alone. The speech gives Titania a moral seriousness that makes her later humiliation harder to laugh at.',
    },
    {
      text: 'Lord, what fools these mortals be!',
      where: 'Puck, Act 3, Scene 2',
      analysis:
        'Puck invites Oberon to watch the lovers’ “fond pageant” as if it were a show, and his exclamation gives the audience his detached, amused view of human passion. But the line cuts both ways. The chaos is Puck’s own mistake, as he admits (“Believe me, king of shadows, I mistook”), and the mortals he laughs at include everyone in the theatre, which is exactly who he will speak to at the end of the play.',
    },
    {
      text: 'Bless thee, Bottom! bless thee! Thou art translated.',
      where: 'Quince, Act 3, Scene 1',
      analysis:
        'Quince’s horrified blessing is the comic climax of the rehearsal, and translated, meaning transformed, is one of the play’s key words. Helena used it in Act 1 when she wished to be made into Hermia, and Puck repeats it when he reports that he “left sweet Pyramus translated there”. Bottom’s change is literal, but it stands for the invisible transformations that love works on everyone else. His reaction, to sing loudly so that no one thinks he is afraid, shows that inside the ass’s head he has not changed at all.',
    },
    {
      text: 'reason and love keep little company together nowadays',
      where: 'Bottom, Act 3, Scene 1',
      analysis:
        'The play’s wisest remark about love comes from the man with an ass’s head, answering a fairy queen who has just fallen in love at first sight under a charm. The dramatic irony is double: Bottom is right without knowing why, and Titania replies “Thou art as wise as thou art beautiful”, praise that is true in a way she cannot see. The line connects Helena’s point in Act 1 to everything the lovers do in Act 3.',
    },
    {
      text: 'And though she be but little, she is fierce.',
      where: 'Helena, of Hermia, Act 3, Scene 2',
      analysis:
        'In the quarrel that follows both men’s desertion of Hermia, the two friends turn on each other’s bodies: Hermia accuses Helena of making her seem “dwarfish” and calls her a “painted maypole”. Helena’s line is an insult with grudging respect in it, and its plain monosyllables make it memorable. It comes just after she has asked the men to protect her, calling herself “a right maid for my cowardice”, so the scene also shows how the charm has destroyed not only romantic loyalty but a lifelong friendship.',
    },
    {
      text: 'Egeus, I will overbear your will;',
      where: 'Theseus, Act 4, Scene 1',
      analysis:
        'In Act 1 Theseus said the law was one “which by no means we may extenuate”; now, with Demetrius loving Helena, he overrides the father in a single line and gives no further reason. The comic resolution arrives by decree, not by any change in the law. A few lines earlier Egeus begged for “the law, the law upon his head”, and after this line he says nothing more, which leaves the audience to decide what the ending does with him.',
    },
    {
      text: 'And I have found Demetrius like a jewel, / Mine own, and not mine own.',
      where: 'Helena, Act 4, Scene 1',
      analysis:
        'Waking beside the man who spurned her, Helena compares him to a jewel someone has found: hers by possession, but perhaps not by right, and perhaps not for good. The paradox catches the uncertainty the ending never quite removes, since Demetrius’s love is still the work of the charm. It is one of several lines in the waking scene, including Hermia’s sense that “everything seems double”, which make the lovers doubt what they see.',
    },
    {
      text: 'I have had a most rare vision.',
      where: 'Bottom, Act 4, Scene 1',
      analysis:
        'Bottom wakes alone and tries to describe what happened in prose that keeps breaking off. He warns that “Man is but an ass if he go about to / expound this dream”, an unconscious joke on what he has just been, and then mixes up the senses: “The eye of man hath not / heard”. Catherine Belsey points out that he is garbling St Paul on the glory God has prepared (1 Corinthians 2:9). The speech is absurd and also genuinely awed, the one mortal account of the fairy world, and he plans to call the ballad Bottom’s Dream “because it hath no bottom”.',
    },
    {
      text: 'The lunatic, the lover, and the poet / Are of imagination all compact:',
      where: 'Theseus, Act 5, Scene 1',
      analysis:
        'Theseus groups madmen, lovers and poets as people who imagine what is not there, the lover seeing “Helen’s beauty in a brow of Egypt”, the poet giving “airy nothing / A local habitation and a name”. He means it as a dismissal of the lovers’ story, yet the speech is itself a superb description of what Shakespeare’s play has just done. The audience knows the fairies were real, so the rational Duke is wrong, and the speech ends up defending the imagination it attacks.',
    },
    {
      text: 'If we shadows have offended, / Think but this, and all is mended,',
      where: 'Puck, Act 5, Scene 1, the play’s final speech',
      analysis:
        'Puck steps outside the play and speaks to the audience in short rhyming lines. Shadows means both spirits and actors: earlier in the scene Theseus said that “The best in this kind are but shadows”. Puck offers the audience a way out, to think they have “but slumber’d here” and dreamed it all, and ends by asking for applause, “Give me your hands, if we be friends”. The play becomes the audience’s dream, which makes them the last of its dreamers.',
    },
  ],

  extracts: [
    {
      title: 'Egeus’s complaint and Hermia’s sentence',
      where: 'Act 1, Scene 1',
      pointer:
        'Near the start of the play, after Theseus and Hippolyta’s opening exchange: from Egeus’s “Full of vexation come I, with complaint” to Hermia’s “My soul consents not to give sovereignty.” About sixty lines, all in blank verse.',
      text: 'EGEUS / Full of vexation come I, with complaint / Against my child, my daughter Hermia. / Stand forth, Demetrius. My noble lord, / This man hath my consent to marry her. / Stand forth, Lysander. And, my gracious Duke, / This man hath bewitch’d the bosom of my child. / Thou, thou, Lysander, thou hast given her rhymes, / And interchang’d love-tokens with my child. / Thou hast by moonlight at her window sung, / With feigning voice, verses of feigning love; / And stol’n the impression of her fantasy / With bracelets of thy hair, rings, gauds, conceits, / Knacks, trifles, nosegays, sweetmeats (messengers / Of strong prevailment in unharden’d youth) / With cunning hast thou filch’d my daughter’s heart, / Turn’d her obedience (which is due to me) / To stubborn harshness. And, my gracious Duke, / Be it so she will not here before your grace / Consent to marry with Demetrius, / I beg the ancient privilege of Athens: / As she is mine I may dispose of her; / Which shall be either to this gentleman / Or to her death, according to our law / Immediately provided in that case. / THESEUS / What say you, Hermia? Be advis’d, fair maid. / To you your father should be as a god; / One that compos’d your beauties, yea, and one / To whom you are but as a form in wax / By him imprinted, and within his power / To leave the figure, or disfigure it. / Demetrius is a worthy gentleman. / HERMIA / So is Lysander. / THESEUS / In himself he is. / But in this kind, wanting your father’s voice, / The other must be held the worthier. / HERMIA / I would my father look’d but with my eyes. / THESEUS / Rather your eyes must with his judgment look. / HERMIA / I do entreat your Grace to pardon me. / I know not by what power I am made bold, / Nor how it may concern my modesty / In such a presence here to plead my thoughts: / But I beseech your Grace that I may know / The worst that may befall me in this case, / If I refuse to wed Demetrius. / THESEUS / Either to die the death, or to abjure / For ever the society of men. / Therefore, fair Hermia, question your desires, / Know of your youth, examine well your blood, / Whether, if you yield not to your father’s choice, / You can endure the livery of a nun, / For aye to be in shady cloister mew’d, / To live a barren sister all your life, / Chanting faint hymns to the cold fruitless moon. / Thrice-blessèd they that master so their blood / To undergo such maiden pilgrimage, / But earthlier happy is the rose distill’d / Than that which, withering on the virgin thorn, / Grows, lives, and dies, in single blessedness. / HERMIA / So will I grow, so live, so die, my lord, / Ere I will yield my virgin patent up / Unto his lordship, whose unwishèd yoke / My soul consents not to give sovereignty.',
      annotations: [
        {
          phrase: 'This man hath bewitch’d the bosom of my child.',
          note: 'Egeus can only explain his daughter’s choice as witchcraft. It is an irony the play will pay off: in the wood love really is produced by a charm, and it proves no more reasonable than the love Egeus condemns here.',
        },
        {
          phrase: 'With feigning voice, verses of feigning love;',
          note: 'The repeated feigning and the dismissive list that follows, “Knacks, trifles, nosegays, sweetmeats”, reduce Lysander’s courtship to cheap tricks. Egeus sees the ordinary signs of young love as a theft, “filch’d my daughter’s heart”, the vocabulary of property again.',
        },
        {
          phrase: 'As she is mine I may dispose of her;',
          note: 'The heart of the speech, in the plainest words in it. The short monosyllables and the possessive mine make the claim sound self-evident to Egeus, and the next lines make the only alternatives marriage or death, “according to our law”.',
        },
        {
          phrase: 'To whom you are but as a form in wax / By him imprinted',
          note: 'Theseus’s metaphor makes the father a maker and the daughter an impression in soft wax, which he may keep “or disfigure”. The wordplay on figure and disfigure turns a threat of death into a neat conceit, which is part of what makes it chilling.',
        },
        {
          phrase: 'I would my father look’d but with my eyes.',
          note: 'The exchange shrinks to single lines, a form called stichomythia, as Hermia and Theseus trade positions. His reply, “Rather your eyes must with his judgment look”, turns her line inside out, and it introduces the imagery of eyes on which the whole plot of the love-juice depends.',
        },
        {
          phrase: 'I know not by what power I am made bold,',
          note: 'Hermia apologises for speaking at all, and in the same breath insists on knowing “The worst that may befall me”. Her modesty is sincere but it frames a defiance that the men on stage do not expect from her, and the unknown power prepares for the play’s interest in forces people cannot explain.',
        },
        {
          phrase: 'Chanting faint hymns to the cold fruitless moon.',
          note: 'The convent is presented as a living death: faint, cold and fruitless all suggest sterility. The moon here is Diana, goddess of chastity, the first of the play’s many moons, and Theseus’s image of a rose “withering on the virgin thorn” makes the same argument that a woman fulfils herself only in marriage.',
        },
        {
          phrase: 'My soul consents not to give sovereignty.',
          note: 'Hermia answers the Duke in the political language of rule: sovereignty and the “unwishèd yoke”. She presents marriage without love as submission to a tyrant, which is a startling claim to make to the ruler of Athens, and it ends the passage with her refusal.',
        },
      ],
      question:
        'Read this passage. How does Shakespeare make this such a tense and revealing opening to the conflict between Hermia and her father? Support your ideas with details from the passage, and for an essay at A-level, relate the passage to the presentation of authority in the play as a whole.',
    },
    {
      title: 'Titania wakes to Bottom',
      where: 'Act 3, Scene 1',
      pointer:
        'Soon after Puck has given Bottom the ass’s head and his friends have run away: from Bottom’s “I see their knavery” to Titania’s call to her fairies, “Peaseblossom! Cobweb! Moth! and Mustardseed!” Titania has been asleep on stage since the scene began.',
      text: 'BOTTOM / I see their knavery. This is to make an ass of me, to fright me, if / they could. But I will not stir from this place, do what they can. I / will walk up and down here, and I will sing, that they shall hear I am / not afraid. / [Sings.] / The ousel cock, so black of hue, / With orange-tawny bill, / The throstle with his note so true, / The wren with little quill. / TITANIA / [Waking.] What angel wakes me from my flowery bed? / BOTTOM / [Sings.] / The finch, the sparrow, and the lark, / The plain-song cuckoo gray, / Whose note full many a man doth mark, / And dares not answer nay. / for, indeed, who would set his wit to so foolish a bird? Who would give / a bird the lie, though he cry ‘cuckoo’ never so? / TITANIA / I pray thee, gentle mortal, sing again. / Mine ear is much enamour’d of thy note. / So is mine eye enthrallèd to thy shape; / And thy fair virtue’s force perforce doth move me, / On the first view, to say, to swear, I love thee. / BOTTOM / Methinks, mistress, you should have little reason for that. And yet, to / say the truth, reason and love keep little company together nowadays. / The more the pity that some honest neighbours will not make them / friends. Nay, I can gleek upon occasion. / TITANIA / Thou art as wise as thou art beautiful. / BOTTOM / Not so, neither; but if I had wit enough to get out of this wood, I / have enough to serve mine own turn. / TITANIA / Out of this wood do not desire to go. / Thou shalt remain here whether thou wilt or no. / I am a spirit of no common rate. / The summer still doth tend upon my state; / And I do love thee: therefore, go with me. / I’ll give thee fairies to attend on thee; / And they shall fetch thee jewels from the deep, / And sing, while thou on pressèd flowers dost sleep. / And I will purge thy mortal grossness so / That thou shalt like an airy spirit go.— / Peaseblossom! Cobweb! Moth! and Mustardseed!',
      annotations: [
        {
          phrase: 'This is to make an ass of me',
          note: 'Bottom thinks his friends are playing a trick with an idiom, not knowing that it is literally true. The dramatic irony runs through the passage: the audience can see what he cannot, and every word he says about himself is funnier for it.',
        },
        {
          phrase: 'What angel wakes me from my flowery bed?',
          note: 'Titania’s first line after the charm is exalted verse, and the thing it calls an angel is a weaver with an ass’s head singing a country song about birds. The gap between what she says and what the audience sees is the whole joke, and it is the love-juice’s version of Helena’s blind Cupid.',
        },
        {
          phrase: 'On the first view, to say, to swear, I love thee.',
          note: 'The line builds in three steps, from move to say to swear, as Titania’s feeling outruns her reason. On the first view is love at first sight exactly as Oberon planned it, and the careful verse contrasts sharply with Bottom’s rambling prose.',
        },
        {
          phrase: 'reason and love keep little company together nowadays',
          note: 'Bottom’s prose shrugs off the queen’s passion with a proverb-like truth. It is the most sensible thing said about love in the play, and it is spoken by the least romantic figure in it, which is exactly Shakespeare’s point.',
        },
        {
          phrase: 'Thou art as wise as thou art beautiful.',
          note: 'Titania’s praise is absurd on the surface, because he is neither, and true in a way she cannot see, because he has just said something wise. Shakespeare lets the enchanted queen speak more accurately than she knows.',
        },
        {
          phrase: 'Thou shalt remain here whether thou wilt or no.',
          note: 'Love turns immediately into command. Titania’s rhyming couplet leaves Bottom no choice, which mirrors how Oberon is treating her and how Egeus treated Hermia: in this play, love is repeatedly bound up with power over another person.',
        },
        {
          phrase:
            'And I will purge thy mortal grossness so / That thou shalt like an airy spirit go.',
          note: 'The fairy queen promises to make the most earthbound man in the play as light as air. The contrast between airy spirit and mortal grossness sums up the scene’s comedy of high and low, and the interrupting roll-call of fairies named after tiny things keeps it light.',
        },
      ],
      question:
        'Read this passage. How does Shakespeare make this such a comic and yet revealing moment in the play? Support your ideas with details from the passage.',
    },
    {
      title: 'Theseus and Hippolyta on the lovers’ story',
      where: 'Act 5, Scene 1',
      pointer:
        'The opening of Act 5, before the lovers enter: from Hippolyta’s “’Tis strange, my Theseus, that these lovers speak of” to her “But, howsoever, strange and admirable.” Twenty-seven lines.',
      text: 'HIPPOLYTA / ’Tis strange, my Theseus, that these lovers speak of. / THESEUS / More strange than true. I never may believe / These antique fables, nor these fairy toys. / Lovers and madmen have such seething brains, / Such shaping fantasies, that apprehend / More than cool reason ever comprehends. / The lunatic, the lover, and the poet / Are of imagination all compact: / One sees more devils than vast hell can hold; / That is the madman: the lover, all as frantic, / Sees Helen’s beauty in a brow of Egypt: / The poet’s eye, in a fine frenzy rolling, / Doth glance from heaven to earth, from earth to heaven; / And as imagination bodies forth / The forms of things unknown, the poet’s pen / Turns them to shapes, and gives to airy nothing / A local habitation and a name. / Such tricks hath strong imagination, / That if it would but apprehend some joy, / It comprehends some bringer of that joy. / Or in the night, imagining some fear, / How easy is a bush supposed a bear? / HIPPOLYTA / But all the story of the night told over, / And all their minds transfigur’d so together, / More witnesseth than fancy’s images, / And grows to something of great constancy; / But, howsoever, strange and admirable.',
      annotations: [
        {
          phrase: 'More strange than true.',
          note: 'Theseus turns Hippolyta’s strange into a verdict with a four-word reply. The audience has seen the fairies, so the Duke’s confident scepticism is itself a form of dramatic irony, and it comes from a figure out of what he calls “antique fables”.',
        },
        {
          phrase: 'More than cool reason ever comprehends.',
          note: 'The rhyme of apprehend and comprehends sets two kinds of knowing against each other: grasping something by imagination and understanding it by reason. Theseus prefers cool reason, but the rhyme lets the two words sound like partners as well as opposites.',
        },
        {
          phrase: 'Sees Helen’s beauty in a brow of Egypt:',
          note: 'Helen of Troy stands for perfect beauty, and a brow of Egypt means a dark face, which Theseus assumes no reasonable person could find beautiful. The line depends on a prejudice of Shakespeare’s time that equated fairness with beauty, and it echoes Lysander’s racial insults to Hermia in Act 3, Scene 2.',
        },
        {
          phrase: 'gives to airy nothing / A local habitation and a name.',
          note: 'Theseus means to belittle the poet, but his words describe precisely what the play has done: it has given fairies a place, the wood, and names, Oberon and Titania. The speech is so good that it undercuts its own argument.',
        },
        {
          phrase: 'How easy is a bush supposed a bear?',
          note: 'After the grand claims about poets, Theseus ends on a homely example of fear in the dark. The sudden drop is a deliberate anticlimax, and it anticipates the mechanicals’ Moonshine, who will soon carry a real thorn-bush on stage and ask the audience to imagine the rest.',
        },
        {
          phrase: 'And grows to something of great constancy;',
          note: 'Hippolyta’s reply rests on evidence: the lovers’ separate accounts agree, their minds were changed together, so something happened. Constancy means both consistency and faithfulness, and her quieter speech is the one the play has proved right.',
        },
      ],
      question:
        'Read this passage. How does Shakespeare make this such a significant moment in the play? At A-level, use it to begin an argument about how the play presents imagination, and consider how different critics or productions have read the relationship between Theseus and Hippolyta.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Verse and prose as a social map',
      example:
        'Theseus opens in blank verse, “Now, fair Hippolyta, our nuptial hour / Draws on apace”; the lovers often speak in rhyming couplets, as in Helena’s soliloquy at the end of Act 1, Scene 1; the fairies use short, chant-like rhyming lines, “Through the forest have I gone, / But Athenian found I none” (Puck, Act 2, Scene 2); and the mechanicals speak prose in Act 1, Scene 2, breaking into verse only when Bottom shows off his tyrant’s vein.',
      effect:
        'Each world has its own sound, so an audience knows where it is even on a bare stage. The dignity of blank verse suits the court, couplets make the lovers’ passions neat and slightly artificial, the fairy lines sound like spells, and prose marks the craftsmen as ordinary working men. The moments where the patterns cross are the most revealing: Titania woos Bottom in verse and he answers in prose, and when the mechanicals try verse in Pyramus and Thisbe, it falls apart.',
    },
    {
      technique: 'Stichomythia and antithesis',
      example:
        'Hermia and Helena trade matched single lines in Act 1, Scene 1: “I frown upon him, yet he loves me still.” / “O that your frowns would teach my smiles such skill!” and “The more I hate, the more he follows me.” / “The more I love, the more he hateth me.”',
      effect:
        'The rapid exchange of rhymed, mirror-image lines shows two friends as reflections of each other, each with the opposite problem. It also makes love look perverse: hatred attracts and love repels. The balanced form is the harmony that Act 3 will shatter, when the same two women exchange insults instead of antitheses.',
    },
    {
      technique: 'Imagery of eyes and seeing',
      example:
        '“I would my father look’d but with my eyes.” / “Rather your eyes must with his judgment look.” (Act 1, Scene 1); the love-juice “on sleeping eyelids laid” (Oberon, Act 2, Scene 1); Demetrius waking: “To what, my love, shall I compare thine eyne?” (Act 3, Scene 2).',
      effect:
        'Eyes are where the play locates love, and also where it locates error. The argument in Act 1 is about whose eyes should choose; in the wood the choice is made by whatever the eyes see first. Returning to the word so often makes the audience ask how much of love is simply what one happens to be looking at.',
    },
    {
      technique: 'Personification and pathetic fallacy',
      example:
        'In Titania’s speech in Act 2, Scene 1 the winds, “As in revenge, have suck’d up from the sea / Contagious fogs”, the moon is “Pale in her anger”, and “hoary-headed frosts / Fall in the fresh lap of the crimson rose”.',
      effect:
        'Nature takes on the moods of its quarrelling rulers: revengeful winds, an angry moon, frost falling into the lap of a summer rose, and old Winter crowned, as if in mockery, with summer buds. The personification makes the fairy marriage quarrel cosmic, and the precise details of flooded fields and rotting corn keep it close to the lives of the audience. It gives the play’s disorder a cost beyond comedy.',
    },
    {
      technique: 'Moon imagery',
      example:
        'Theseus complains “how slow / This old moon wanes!” in the first speech; he threatens Hermia with “the cold fruitless moon”; Titania calls the moon “the governess of floods”; and in Act 5 Moonshine enters with a lantern, “This lanthorn doth the hornèd moon present”.',
      effect:
        'The moon measures time, stands for chastity through Diana, and governs change, so it gathers the play’s themes of waiting, virginity and transformation. The mechanicals then literalise it, turning the most poetic image in the play into a man with a lantern, which is both a joke and a reminder of how Shakespeare’s own stage made moonlight out of words.',
    },
    {
      technique: 'Animal imagery',
      example:
        'Helena calls herself Demetrius’s “spaniel” (Act 2, Scene 1); Hermia turns on Demetrius with “Out, dog! Out, cur!” and Lysander calls Hermia “thou cat, thou burr!” (Act 3, Scene 2); Oberon wants Titania to love “lion, bear, or wolf, or bull, / On meddling monkey, or on busy ape”.',
      effect:
        'Love and hatred keep reducing the lovers to animals, and the play makes the metaphor real in Bottom’s ass’s head. The imagery supports the darker reading of the wood, in which desire strips away civilised behaviour, while its comedy keeps the violence at a distance.',
    },
    {
      technique: 'Malapropism and misused words',
      example:
        'Bottom promises they will “rehearse most obscenely and / courageously” (Act 1, Scene 2) and will “aggravate my voice so, that I will roar you as gently as any sucking / dove”; Quince calls Bottom “a very paramour for a sweet / voice” and Flute corrects him, “You must say paragon” (Act 4, Scene 2); Pyramus announces “I see a voice” (Act 5, Scene 1).',
      effect:
        'The craftsmen reach for words beyond their education and grab the wrong ones, so the audience laughs from a position of superiority. But the errors are affectionate, and often hit a truth by accident: seeing a voice is the same confusion of senses that filled Bottom’s speech on waking from his dream in Act 4, Scene 1.',
    },
    {
      technique: 'Bathos and over-alliteration in Pyramus and Thisbe',
      example:
        'The Prologue describes Pyramus’s death: “Whereat with blade, with bloody blameful blade, / He bravely broach’d his boiling bloody breast;” and Pyramus begins “O grim-look’d night! O night with hue so black!” (Act 5, Scene 1).',
      effect:
        'The heavy alliteration and endless exclamations parody an old-fashioned tragic style, and the story being parodied is close to the main plot’s own: young lovers, a wall that parts their fathers, a moonlit meeting at a tomb, and a mistake that, unlike Puck’s, cannot be undone. By turning the lovers’ potential tragedy into farce, Shakespeare lets the audience laugh at the fate the play has just helped its lovers escape.',
    },
    {
      technique: 'Oxymoron and paradox',
      example:
        'Hippolyta recalls hunting hounds as “So musical a discord, such sweet thunder.” (Act 4, Scene 1); Theseus reads the playbill’s promise of a “tedious brief scene” of “very tragical mirth” and answers “Merry and tragical? Tedious and brief? / That is hot ice and wondrous strange snow. / How shall we find the concord of this discord?” (Act 5, Scene 1).',
      effect:
        'Contradictions held together are the play’s method. A comedy that contains a threatened death and a mock-tragedy, a wood that is both dream and reality, a love that is “Mine own, and not mine own”: each finds a concord in discord. The paradoxes invite the audience to accept opposites rather than choose between them.',
    },
    {
      technique: 'Synaesthesia and biblical echo',
      example:
        'Bottom on waking: “The eye of man hath not / heard, the ear of man hath not seen, man’s hand is not able to taste” (Act 4, Scene 1).',
      effect:
        'Bottom mixes up the senses as he tries to describe what no sense can report. The sentence garbles St Paul’s account of the glory God has prepared for human beings (1 Corinthians 2:9), as Catherine Belsey notes, so the comedy of confusion carries a hint of real wonder. The weaver cannot say what he saw, and his failure is more convincing than Theseus’s confident explanation.',
    },
  ],

  structureForm: [
    {
      heading: 'Four worlds, one plot',
      body: 'Shakespeare weaves four plots: the court (Theseus and Hippolyta), the lovers, the fairies and the mechanicals. They are tied together by the wedding: every group is preparing for it or disrupting it, and all four end the play at Theseus’s palace, the court and the lovers watching, the mechanicals performing, and the fairies arriving at midnight to bless the house. Each plot mirrors the others. Oberon and Titania’s quarrel echoes Theseus and Hippolyta’s history, and each fairy ruler accuses the other of loving one of the mortal pair; the mechanicals’ play echoes the lovers’ plot. Bottom is the only mortal who knowingly meets the fairies, which makes him the play’s hinge.',
    },
    {
      heading: 'Athens, the wood, and back',
      body: 'The action moves from Athens by day, a world of law and fathers, to the wood by night, and back to Athens for the weddings. The critic Northrop Frye called places like the wood the green world of Shakespearean comedy, where characters escape society, work out their entanglements and return renewed; C. L. Barber saw the same pattern as holiday release followed by clarification. Test the idea against the play: the wood frees the lovers from Egeus, but it is ruled by Oberon, who manipulates them just as thoroughly. The return at dawn, with hunting horns and a ruling from the Duke, is the moment the two worlds meet.',
    },
    {
      heading: 'Dream time',
      body: 'Theseus’s first speech announces that “four happy days bring in / Another moon”, a new moon on the wedding day. Yet the lovers plan their escape for “tomorrow night”, spend a single night in the wood, and wake on the wedding day itself: in Act 4 Theseus asks whether this is “the day / That Hermia should give answer of her choice”, and Egeus replies “It is, my lord.” The moon is equally unreliable. A new moon is expected, yet the lovers flee by moonlight and Quince finds from the almanac that the moon will shine on the night of the play. Time in the play behaves like time in a dream, and the lovers’ confusion on waking is the audience’s too.',
    },
    {
      heading: 'The play within the play',
      body: 'Pyramus and Thisbe is set up in Act 1, Scene 2, rehearsed in Act 3, Scene 1 and performed in Act 5, so it runs through the play like a thread. Its story shadows the main plot: two young lovers separated by a wall, a moonlit meeting at a tomb, a lion, a mistake and two deaths. The tragedy the lovers escaped is played out as farce while they watch and mock it, as Puck watched and mocked them in the wood. The performance also creates an onstage audience, so the real audience watches people watching a play. When Bottom, dead a moment before as Pyramus, speaks up to assure the court that “the wall is down that parted their fathers”, the reconciliation Pyramus and Thisbe never had becomes a joke, told to lovers who have just been granted theirs.',
    },
    {
      heading: 'A comic ending with loose threads',
      body: 'The ending has everything comedy promises: three weddings, a feast, a dance, a blessing on the marriage beds and a promise that the couples will be “Ever true in loving”. But look at what it leaves unresolved. Demetrius is still under the charm; Egeus, overruled, does not appear in Act 5 in the quarto-based text; Titania’s surrender of the boy happens offstage and is reported only by Oberon; and the Duke who sets everything right is the man who won his wife with a sword. A strong answer notices these loose threads and decides whether they darken the ending or are simply the price of comedy.',
    },
    {
      heading: 'Puck’s epilogue and metatheatre',
      body: 'After the fairies’ blessing, Puck is left alone to speak to the audience, a closing speech of the kind called an epilogue. He calls the actors shadows, suggests the audience has only dreamed, promises that the company will “make amends” if forgiven, and asks for applause. The speech is metatheatrical: it draws attention to the play as a play. It completes a pattern that the mechanicals began, because their worries about illusion have prepared the audience to think about how theatre works, and it hands the last act of imagination to the people in the seats.',
    },
    {
      heading: 'Doubling and mirroring on stage',
      body: 'Because the court and the fairy world mirror each other, directors can double the parts. Peter Brook’s 1970 production for the Royal Shakespeare Company doubled Theseus with Oberon, Hippolyta with Titania, Philostrate with Puck and Egeus with Quince, suggesting that the wood acts out what the court suppresses. The text supports the parallel: Theseus and Oberon both rule by imposing their will on a woman who resists, Theseus on Hermia and Oberon on Titania, and in Act 2 the fairy rulers accuse each other of loving the Duke and his bride. Writing about doubling is a strong way to show awareness of the play in performance.',
    },
  ],

  vocabulary: [
    {
      term: 'Changeling',
      definition:
        'A child taken or exchanged by fairies. Here it is the Indian boy Titania is raising for the sake of his dead mother, and the cause of the fairy rulers’ quarrel. Puck says the boy was stolen from an Indian king; Titania tells a different story.',
    },
    {
      term: 'Love-in-idleness',
      definition:
        'In Oberon’s story, the name maidens give to the little western flower struck by Cupid’s arrow, once white and now purple. Its juice on sleeping eyelids makes the sleeper dote on the next creature they see.',
    },
    {
      term: 'Dote, dotage',
      definition:
        'To love foolishly or excessively; dotage is that foolish love. The play uses the words for enchanted and unenchanted lovers alike, from Lysander’s description of Helena, who “Devoutly dotes, dotes in idolatry”, to Titania’s “dotage” on Bottom.',
    },
    {
      term: 'Translated',
      definition:
        'Transformed or changed into something else. Quince uses it of Bottom’s ass’s head, and Helena of her wish to become Hermia.',
    },
    {
      term: 'Fancy',
      definition:
        'In Shakespeare’s English, love or desire, and also imagination. Oberon’s “fancy-free” means not in love; Hippolyta’s “fancy’s images” means things imagined.',
    },
    {
      term: 'Mechanicals',
      definition:
        'Working craftsmen. Puck calls Bottom and his friends “rude mechanicals”, where rude means rough and uneducated, not impolite. Critics use the word as the group’s name.',
    },
    {
      term: 'Interlude',
      definition:
        'A short play performed as part of a festivity. Quince calls theirs “our interlude” when he first gathers the company, and Snout uses the word again in Act 5.',
    },
    {
      term: 'Bergomask',
      definition:
        'A rustic dance. Bottom offers the court an epilogue or a Bergomask at the end of Pyramus and Thisbe, and Theseus chooses the dance.',
    },
    {
      term: 'Votaress (vot’ress)',
      definition:
        'A woman bound by religious vows. The changeling’s mother was a votaress of Titania’s order, and the fair vestal Cupid aims at is an “imperial votress”.',
    },
    {
      term: 'Amazon',
      definition:
        'A member of a legendary nation of women warriors. Hippolyta is their queen, defeated by Theseus, and Titania mocks her as Oberon’s “bouncing Amazon”.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables with five stresses (iambic pentameter). It is the play’s voice of authority, used by Theseus, Egeus and the lovers in Act 1.',
    },
    {
      term: 'Rhyming couplet',
      definition:
        'Two consecutive lines that rhyme. The lovers use them constantly, which can make their feelings sound sincere, artificial or both, depending on how the lines are spoken.',
    },
    {
      term: 'Stichomythia',
      definition:
        'Dialogue in alternating single lines, often with each speaker echoing or reversing the other, as Hermia and Theseus do over eyes and judgement in Act 1, Scene 1.',
    },
    {
      term: 'Malapropism',
      definition:
        'The comic misuse of a word for one that sounds like it, as when Bottom promises the company will rehearse “most obscenely”, a word he plainly does not mean.',
    },
    {
      term: 'Bathos',
      definition:
        'A ridiculous drop from the elevated to the trivial. Pyramus and Thisbe is built on it, from its alliterative Prologue to Pyramus’s dying “Now die, die, die, die, die.”',
    },
    {
      term: 'Play within a play',
      definition:
        'A performance staged inside another play and watched by characters in it: here, Pyramus and Thisbe, performed for the court in Act 5.',
    },
    {
      term: 'Metatheatre',
      definition:
        'Drama that draws attention to itself as drama, as the mechanicals’ worries about illusion and Puck’s closing request for applause both do.',
    },
    {
      term: 'Festive comedy',
      definition:
        'C. L. Barber’s term for comedies shaped like holidays such as May Day: a period of licensed misrule, followed by a return to order.',
    },
    {
      term: 'Green world',
      definition:
        'Northrop Frye’s term for the natural place outside society, like the wood near Athens, where characters in comedy escape, are transformed and return renewed.',
    },
    {
      term: 'Patriarchy',
      definition:
        'A social order in which fathers and husbands hold authority over women and children. Egeus’s claim on Hermia is its clearest expression in the play.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read the passage in Act 2, Scene 1 from Demetrius’s “I love thee not, therefore pursue me not.” to Helena’s “To die upon the hand I love so well.” How does Shakespeare make this such a painful and yet comic moment in the play?',
        skill:
          'Passage-based question in the shape of Cambridge 0475 Paper 2 or Paper 3: close reading of language, action and staging, with a personal response',
        guidance: [
          'Open with the situation: the lovers have fled into the wood, Demetrius is chasing Hermia and Helena is chasing him, and Oberon is watching unseen, having just announced “I am invisible”. His presence means the scene is also a performance for a hidden audience.',
          'Analyse Demetrius’s cruelty: the blunt monosyllables and balanced repetition of “I love thee not, therefore pursue me not”, and his threats to leave her “to the mercy of wild beasts”.',
          'Analyse Helena’s self-abasement: the metaphor of the magnet, “You draw me, you hard-hearted adamant”, and the spaniel speech. Say how an audience might laugh at the exaggeration and wince at it in the same moment.',
          'Look at how Helena turns his words back on him: “For I am sick when I do look on thee.” / “And I am sick when I look not on you.” Show how the echo makes the exchange both witty and desperate.',
          'Examine her reversal of classical myth, “Apollo flies, and Daphne holds the chase”, and her protest that “We cannot fight for love as men may do.” Discuss what it says about the limits placed on women in love.',
          'End with her couplet, “I’ll follow thee, and make a heaven of hell, / To die upon the hand I love so well”, and, if you know it, what Oberon promises in the lines just after the passage: that before long the roles will be reversed. Give your own view of whether the scene is more painful or more comic.',
        ],
      },
      {
        question: 'How far does Shakespeare encourage you to sympathise with Helena?',
        skill:
          'Whole-text essay in the shape of Cambridge 0475 Paper 2: character, dramatic methods and a personal response, with references across the play',
        guidance: [
          'Decide your answer before you plan: for example, that Shakespeare makes Helena sympathetic because she sees her own humiliation clearly, while letting the audience laugh at the lengths she goes to.',
          'Act 1, Scene 1: her pain that “Through Athens I am thought as fair as she”, the wisdom of “Love looks not with the eyes, but with the mind”, and her decision to betray Hermia’s escape for Demetrius’s thanks and the chance to see him. Does the betrayal lose her sympathy?',
          'Act 2, Scene 1: the spaniel speech and her protest “We should be woo’d, and were not made to woo.” Consider how an audience responds to cruelty on one side and self-abasement on the other.',
          'Act 2, Scene 2 and Act 3, Scene 2: when first Lysander and then both men claim to love her, she believes she is mocked, “Can you not hate me, as I know you do, / But you must join in souls to mock me too?” Point out that her suffering is caused by the magic, not by her.',
          'Act 3, Scene 2: her speech on the friends’ childhood, “Like to a double cherry, seeming parted”, and her fear of Hermia, which turns into comedy with “though she be but little, she is fierce”.',
          'Act 4, Scene 1: her uncertain waking line, “Mine own, and not mine own”. Conclude on whether the ending rewards her or leaves her with a husband who loves her only through a charm.',
        ],
      },
      {
        question:
          'Explore the ways in which Shakespeare presents power and control in A Midsummer Night’s Dream. You must relate your discussion to relevant contextual factors and ideas from your critical reading.',
        skill:
          'A-level essay in the shape of the Pearson Edexcel 9ET0 Shakespeare question: a whole-play argument about dramatic method, with context and ideas from wider critical reading',
        guidance: [
          'Build an argument, not a survey. One possible line: the play questions paternal and political power, but its comic ending restores authority rather than dismantling it.',
          'Athens: Egeus’s claim to “dispose of” Hermia and Theseus’s form-in-wax metaphor. Use the context of early modern parental control over marriage, and explain how the Athenian death penalty exaggerates it.',
          'The wood: show that power is not escaped but transferred. Oberon controls the lovers’ desires and uses the charm to force Titania to give up the boy. Discuss how Titania’s seasons speech makes the abuse of power cosmic.',
          'Gender: link Theseus’s conquest of Hippolyta, Oberon’s treatment of Titania and Helena’s “We cannot fight for love as men may do”. Consider a feminist reading, and test it against Hippolyta’s challenge to Theseus in Act 5.',
          'The resolution: “Egeus, I will overbear your will” and the charm left on Demetrius. Use Barber’s idea of release followed by clarification and ask what exactly is clarified, and for whom.',
          'Bring in performance: Brook’s 1970 doubling of Theseus with Oberon, and Kott’s dark reading, as evidence that the play’s power relations can be staged as sinister as well as festive.',
          'Conclude with a judgement about whether the play endorses the authority it shows, or lets the audience see through it.',
        ],
      },
      {
        question:
          'Explore the significance of the play within the play in A Midsummer Night’s Dream. You must relate your discussion to relevant contextual factors and ideas from your critical reading.',
        skill:
          'A-level essay in the shape of the Pearson Edexcel 9ET0 Shakespeare question: structure, form and metatheatre, with context and critical reading',
        guidance: [
          'Define significance for yourself: the play within the play matters for structure (it runs from Act 1 to Act 5), for theme (it parodies the lovers’ story) and for form (it makes the audience think about theatre).',
          'Structure: trace the casting in Act 1, Scene 2, the rehearsal and Bottom’s transformation in Act 3, Scene 1, the despair and return in Act 4, Scene 2 and the performance in Act 5.',
          'Theme: compare Pyramus and Thisbe with the main plot, including the parted fathers, the wall, the night meeting and the fatal mistake. Argue that it shows the tragedy the lovers were spared.',
          'Form and context: link the mechanicals’ worries about the lion and the moon to the bare Elizabethan stage and the boy actors, and to Theseus’s “The best in this kind are but shadows”.',
          'The onstage audience: analyse the courtiers’ mockery and Hippolyta’s impatience against Theseus’s generosity. Ask whether the lovers, laughing at lovers, have learned anything from their night.',
          'Critical reading: use Barber on festive release, or Belsey on the fairies as the uncontrolled side of experience, and connect it to Puck’s epilogue, which turns the whole play into a performance for us.',
          'Conclude by weighing whether the play within the play is comic relief or the key to the whole design.',
        ],
      },
    ],
    tips: [
      'Know the rules of your paper. Cambridge 0475 Paper 2 is closed book, so learn short quotations exactly; on Paper 3 (Drama, Open Text) you may take in a clean copy with no notes or highlighting. At Pearson Edexcel A-level you may take a clean copy of the play into the exam, but not the Critical Anthology, so learn what its critics argue in your own words.',
      'Cambridge prints its passages from the Alexander Text, so the words on the paper may differ slightly from your edition: it spells Thisby, and has “An I may hide my face” where this site’s edition has “And I may hide my face”. Quote from the passage as printed when you answer on it.',
      'Know who says what. The course of true love is Lysander’s line, not Hermia’s; “Lord, what fools these mortals be!” is Puck’s; “though she be but little, she is fierce” is Helena speaking about Hermia. Some editions, including the Folger, head Puck’s speeches Robin.',
      'Cambridge passages have not always been the famous ones. Recent papers printed the casting of the play in Act 1, Scene 2 (June 2024, Paper 21), the women’s quarrel in Act 3, Scene 2 (June 2024, Paper 22), Titania’s refusal to give up the changeling in Act 2, Scene 1 (February/March 2025, Paper 22), and Oberon and Puck checking on the love-juice, leading into Hermia’s accusation of Demetrius, in Act 3, Scene 2 (June 2025, Paper 21). Revise every scene.',
      'Cambridge essay questions have asked about Puck’s contribution to the play’s dramatic impact, whether Oberon is likeable, what makes the rehearsals and performance of Pyramus and Thisbe amusing, and how Shakespeare persuades us to sympathise with Titania. Prepare a view on each major character and on the mechanicals, not just the lovers.',
      'Pearson Edexcel A-level questions name a concept for you to argue about: Summer 2023 asked about different perspectives on love and about festive comedy; Summer 2024 asked about the play’s structure and about the disruption of the social order. Define the concept in this play before you choose your scenes.',
      'Remember that Demetrius is never released from the charm. Oberon orders the remedy for Lysander’s eyes only, and noticing this is one of the quickest ways to show that you have read the ending closely rather than accepting that everything is resolved.',
      'Treat the mechanicals as part of the argument, not as comic relief. Their fears about illusion are Shakespeare’s joke about his own stage, and their tragedy parodies the lovers’ story. A strong answer on love, imagination or theatre will use them.',
      'Write about the audience. So much of the play is dramatic irony, from Oberon watching invisibly to Titania adoring an ass, that asking what the audience knows and the characters do not will often give you your best point.',
      'Handle context precisely. Say what early modern parents expected and how far children could refuse, then show how the play exaggerates it. The death penalty is the “ancient privilege of Athens”, the law of the play’s imagined city, so do not write that Elizabethan fathers could have their daughters executed.',
    ],
  },

  modelAnswer: {
    question:
      'Explore the ways in which Shakespeare presents power and control in A Midsummer Night’s Dream. You must relate your discussion to relevant contextual factors and ideas from your critical reading.',
    paragraph:
      'Shakespeare presents power in the play less as something love defeats than as something that learns to look like love. The first scene makes paternal authority absolute: Egeus’s “As she is mine I may dispose of her” uses a verb that treats a daughter as goods to be handed on, and Theseus turns the claim into a creation myth, telling Hermia she is “but as a form in wax” that her father may “disfigure”. In Shakespeare’s England parents still exercised considerable control over whom their children married, even as children were beginning to win a right of veto, so Athens hardens a familiar authority into a law of death. Yet the wood does not free the lovers from control; it only changes the controller. Oberon manages the lovers’ desires as thoroughly as Egeus tried to, and he uses the same power on his wife, lifting the charm only once she has surrendered the boy, and confessing “Her dotage now I do begin to pity” only after he has “at my pleasure taunted her”. When Theseus announces “Egeus, I will overbear your will”, the happy ending arrives by decree, not through any change in the law. C. L. Barber reads such comedies as a movement through holiday release to clarification, but what is clarified here is hierarchy: the young get their choices because a greater man endorses them. The most unsettling sign is Demetrius, whose love for Helena is never released from the charm, so the play’s final harmony rests on an enchantment nobody undoes.',
    commentary: [
      'It opens with an argument, that power disguises itself as love rather than being defeated by it, so each later sentence has something to prove rather than something to retell.',
      'The quotations are short, exact and embedded, and each is analysed for a precise effect: the verb dispose, the metaphor of the wax, and the timing of Oberon’s pity after his taunting.',
      'Context is used to sharpen the reading, not decorate it: early modern expectations of parental control are set against the play’s Athenian death penalty, which shows what Shakespeare exaggerates and why.',
      'It moves across the whole play in one paragraph, from Athens to the wood to the resolution in Act 4, and connects the political, domestic and fairy plots instead of treating them separately.',
      'It engages with a named critic and argues with him, accepting Barber’s pattern while questioning what clarification means, which is what the A-level task asks for when it requires ideas from critical reading.',
      'It ends on a detail many answers miss, that Demetrius stays enchanted, and uses it to reach a judgement about the whole play. For Cambridge 0475, which does not require critics, the same paragraph works without the Barber sentence.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'A father’s complaint',
      summary:
        'Theseus looks forward to his wedding with Hippolyta in four days. Egeus arrives to demand that his daughter Hermia marry Demetrius, not Lysander, and Theseus rules that by the wedding day she must obey, die, or live as a nun.',
      setting: 'The palace of Theseus in Athens',
      who: ['Theseus', 'Hippolyta', 'Egeus', 'Hermia', 'Lysander', 'Demetrius'],
      quote: 'As she is mine I may dispose of her;',
      themes: ['Authority and patriarchy', 'Love and reason'],
      tension: 3,
      significance:
        'The comedy begins under a threat of death, which gives its happy ending something to overcome.',
    },
    {
      where: 'Act 1, Scene 1',
      title: 'The plan to escape',
      summary:
        'Left alone, Lysander and Hermia agree to flee Athens and marry at his aunt’s house beyond the reach of its law, meeting in the wood the next night. They tell Helena, who decides to betray the plan to Demetrius.',
      setting: 'The palace of Theseus in Athens',
      who: ['Lysander', 'Hermia', 'Helena'],
      quote: 'The course of true love never did run smooth.',
      themes: ['Love and reason', 'Authority and patriarchy'],
      tension: 2,
      significance: 'Every group of lovers is now on its way into the wood.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Casting the play',
      summary:
        'Peter Quince gathers the Athenian craftsmen to cast a play for the Duke’s wedding, the story of Pyramus and Thisbe. Bottom wants every part, and they agree to rehearse secretly in the palace wood by moonlight.',
      setting: 'A cottage in Athens',
      who: ['Quince', 'Bottom', 'Flute', 'Snug', 'Snout', 'Starveling'],
      quote: 'Let me play the lion too.',
      themes: ['Theatre and performance'],
      tension: 1,
      significance:
        'The mechanicals’ play will shadow the lovers’ story and turn its potential tragedy into farce.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'The fairy rulers quarrel',
      summary:
        'Oberon and Titania meet in the wood and quarrel over the Indian boy, while Titania describes how their quarrel has disordered the seasons. Oberon sends Puck for the love-in-idleness flower, then overhears Demetrius spurning Helena and resolves to help her.',
      setting: 'A wood near Athens, by moonlight',
      who: ['Oberon', 'Titania', 'Puck', 'Demetrius', 'Helena'],
      quote: 'Ill met by moonlight, proud Titania.',
      themes: ['Order and disorder', 'Authority and patriarchy', 'Transformation'],
      tension: 3,
      significance:
        'The fairy quarrel supplies the magic that will turn the lovers’ confusion into chaos.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The wrong Athenian',
      summary:
        'Oberon squeezes the flower on the sleeping Titania’s eyelids. Puck finds Lysander asleep in Athenian clothes and anoints him instead of Demetrius, and Lysander wakes to see Helena, falls in love and abandons Hermia.',
      setting: 'Another part of the wood',
      who: ['Oberon', 'Titania', 'Puck', 'Lysander', 'Hermia', 'Helena', 'Demetrius'],
      quote: 'Not Hermia, but Helena I love.',
      themes: ['Love and reason', 'Transformation'],
      tension: 3,
      significance:
        'Puck’s mistake shows how arbitrary love becomes once it depends on what the eyes happen to see.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Bottom translated',
      summary:
        'The mechanicals rehearse near the sleeping Titania. Puck gives Bottom an ass’s head, his friends flee in terror, and Titania wakes to his singing and falls in love with him, ordering her fairies to wait on him.',
      setting: 'The wood, where Titania lies asleep',
      who: ['Bottom', 'Quince', 'Flute', 'Snout', 'Snug', 'Starveling', 'Puck', 'Titania'],
      quote: 'Bless thee, Bottom! bless thee! Thou art translated.',
      themes: ['Transformation', 'Theatre and performance', 'Love and reason'],
      tension: 3,
      significance: 'The only mortal to meet the fairy world is the least romantic man in Athens.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Four lovers at war',
      summary:
        'Oberon anoints Demetrius, who wakes to love Helena too. Helena believes all three are mocking her, the friendship between Hermia and Helena collapses into insults about height, and the two men go off to fight over Helena.',
      setting: 'Another part of the wood, at night',
      who: ['Oberon', 'Puck', 'Demetrius', 'Lysander', 'Helena', 'Hermia'],
      quote: 'Lord, what fools these mortals be!',
      themes: ['Love and reason', 'Order and disorder'],
      tension: 5,
      significance: 'The play’s crisis: every bond among the young lovers is broken at once.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Fog and sleep',
      summary:
        'Oberon orders Puck to cover the night with fog and lead the rivals apart by imitating their voices. Exhausted, all four lovers fall asleep near each other, and Puck squeezes the remedy on Lysander’s eyes.',
      setting: 'The wood, in a dark fog before dawn',
      who: ['Oberon', 'Puck', 'Lysander', 'Demetrius', 'Helena', 'Hermia'],
      quote: 'Shall seem a dream and fruitless vision;',
      themes: ['Dreams and imagination', 'Order and disorder'],
      tension: 3,
      significance:
        'Oberon plans for the night to be remembered as a dream, preparing the play’s resolution.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'Dawn and the Duke',
      summary:
        'Having got the boy, Oberon releases Titania, and they are reconciled. Theseus, out hunting, finds the four lovers asleep, hears that Demetrius now loves Helena, and overrules Egeus so that three couples will marry.',
      setting: 'The wood at dawn, with hunting horns',
      who: [
        'Oberon',
        'Titania',
        'Puck',
        'Theseus',
        'Hippolyta',
        'Egeus',
        'Lysander',
        'Demetrius',
        'Hermia',
        'Helena',
      ],
      quote: 'Egeus, I will overbear your will;',
      themes: ['Authority and patriarchy', 'Order and disorder', 'Dreams and imagination'],
      tension: 2,
      significance: 'Order returns by the Duke’s decision, not by any change in the law.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'Bottom’s dream',
      summary:
        'Bottom wakes alone, his own head restored, and tries to describe what has happened to him. He cannot, and decides that Peter Quince shall write a ballad about it called Bottom’s Dream.',
      setting: 'The wood, after the lovers have gone',
      who: ['Bottom'],
      quote: 'I have had a most rare vision.',
      themes: ['Dreams and imagination', 'Transformation'],
      tension: 1,
      significance:
        'The one mortal account of the fairy world is comic, confused and full of wonder.',
    },
    {
      where: 'Act 4, Scene 2',
      title: 'Bottom returns',
      summary:
        'The craftsmen despair of performing without Bottom, who alone can play Pyramus. He bursts in with news that “our play is preferred”, put forward for the Duke to choose from, and tells them to eat no onions or garlic.',
      setting: 'Quince’s house in Athens',
      who: ['Quince', 'Flute', 'Snout', 'Starveling', 'Snug', 'Bottom'],
      quote: 'Masters, I am to discourse wonders',
      themes: ['Theatre and performance'],
      tension: 2,
      significance: 'The mechanicals’ plot, like the lovers’, is rescued at the last moment.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The Duke on imagination',
      summary:
        'Theseus dismisses the lovers’ story as the work of imagination, and Hippolyta disagrees. Against Philostrate’s advice, he chooses the craftsmen’s play for the evening’s entertainment.',
      setting: 'The palace of Theseus, after the weddings',
      who: ['Theseus', 'Hippolyta', 'Philostrate', 'Lysander', 'Demetrius', 'Hermia', 'Helena'],
      quote: 'The lunatic, the lover, and the poet / Are of imagination all compact:',
      themes: ['Dreams and imagination', 'Theatre and performance'],
      tension: 1,
      significance:
        'The play’s sceptic speaks, and the audience, who saw the fairies, knows he is wrong.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Pyramus and Thisbe',
      summary:
        'The craftsmen perform their tragedy, with a Wall, a Moonshine and a Lion who explains he is a joiner, while the court mocks them. Pyramus kills himself in the mistaken belief that Thisbe is dead, she kills herself over his body, and the company ends with a dance.',
      setting: 'The great chamber of the palace',
      who: [
        'Bottom',
        'Flute',
        'Snout',
        'Snug',
        'Starveling',
        'Quince',
        'Theseus',
        'Hippolyta',
        'Lysander',
        'Demetrius',
      ],
      quote: 'This is the silliest stuff that ever I heard.',
      themes: ['Theatre and performance', 'Love and reason'],
      tension: 2,
      significance: 'The lovers watch their own near-tragedy played as farce and laugh at it.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Blessing and farewell',
      summary:
        'At midnight the court goes to bed. Puck, Oberon, Titania and their fairies bless the house and the three marriages, and Puck is left to ask the audience to think the play a dream and to applaud.',
      setting: 'The palace at midnight',
      who: ['Puck', 'Oberon', 'Titania'],
      quote: 'If we shadows have offended, / Think but this, and all is mended,',
      themes: ['Dreams and imagination', 'Theatre and performance', 'Order and disorder'],
      tension: 1,
      significance: 'The last word hands the dream to the audience.',
    },
  ],

  relationships: [
    {
      from: 'Theseus',
      to: 'Hippolyta',
      kind: 'conqueror and bride',
      note: 'He won her in war and marries her in festivity. Her silence in Act 1 and her challenges in Act 5 suggest a marriage that is not simply harmonious.',
    },
    {
      from: 'Egeus',
      to: 'Hermia',
      kind: 'father and daughter',
      note: 'He claims her as his property and asks for her death if she disobeys. She defies him before the Duke, and he is finally overruled.',
    },
    {
      from: 'Lysander',
      to: 'Hermia',
      kind: 'lovers',
      note: 'The play’s true lovers, who run away together. Under the charm he deserts and insults her, and the remedy restores him.',
    },
    {
      from: 'Helena',
      to: 'Demetrius',
      kind: 'rejected lover and former suitor',
      note: 'He courted her and then abandoned her for Hermia; she pursues him regardless. The charm makes him love her again, and he is never released from it.',
    },
    {
      from: 'Hermia',
      to: 'Helena',
      kind: 'childhood friends',
      note: 'Raised together like “a double cherry”, they are driven into a bitter quarrel in Act 3 by the men’s enchanted switch of affection.',
    },
    {
      from: 'Lysander',
      to: 'Demetrius',
      kind: 'rivals',
      note: 'Rivals for Hermia, then for Helena, they go off to fight until Puck leads them apart in the fog. At the end they share a joke at the mechanicals’ expense.',
    },
    {
      from: 'Egeus',
      to: 'Demetrius',
      kind: 'father and chosen suitor',
      note: 'Egeus prefers Demetrius and gives him his “right” to Hermia. Demetrius’s change of heart in the wood leaves Egeus without an ally.',
    },
    {
      from: 'Oberon',
      to: 'Titania',
      kind: 'estranged king and queen',
      note: 'Their quarrel over the changeling boy disorders nature. Oberon humiliates her into surrender, and they are reconciled once he has what he wants.',
    },
    {
      from: 'Oberon',
      to: 'Puck',
      kind: 'master and servant',
      note: 'Puck carries out Oberon’s plans, mistakes and all, and Oberon both rebukes his negligence and relies on him to put things right.',
    },
    {
      from: 'Titania',
      to: 'Bottom',
      kind: 'enchanted queen and weaver',
      note: 'The charm makes her adore him; he treats her court like servants. On waking she loathes the sight of him, and he remembers it only as a dream.',
    },
    {
      from: 'Quince',
      to: 'Bottom',
      kind: 'director and star',
      note: 'Quince manages Bottom’s enthusiasm with flattery, and the whole company is lost without him in Act 4.',
    },
    {
      from: 'Theseus',
      to: 'Egeus',
      kind: 'ruler and subject',
      note: 'Theseus first upholds Egeus’s claim under Athenian law, then overrides it in Act 4 with a single sentence.',
    },
    {
      from: 'Theseus',
      to: 'Philostrate',
      kind: 'duke and master of revels',
      note: 'Philostrate advises against the mechanicals’ play; Theseus chooses it anyway, out of respect for “simpleness and duty”.',
    },
  ],

  compareWith: [
    {
      title: 'Twelfth Night',
      href: '/revision/texts/twelfth-night',
      reason:
        'Another of the four Shakespeare comedies on the Pearson Edexcel A-level list, where love is equally sudden and irrational and a festive ending leaves someone outside it.',
    },
    {
      title: 'Antony and Cleopatra',
      href: '/revision/texts/antony-and-cleopatra',
      reason:
        'The other Shakespeare play on the Cambridge 0475 drama list and an Edexcel A-level tragedy, which shows passionate love overturning reason and duty with no fairy to set it right.',
    },
    {
      title: 'The Tempest',
      href: '/revision/texts/the-tempest',
      reason:
        'A later Shakespeare play in which a ruler controls others through a spirit servant and magic, and which also ends with a speech asking the audience for applause.',
    },
  ],

  contentGuidance: [
    'supernatural',
    'intimate_relationships',
    'mythological_religious',
    'mortality',
    'discrimination',
  ],

  quotesFromElsewhere: [
    'stealing a marriage',
    'through release to clarification',
    'An I may hide my face',
  ],

  sources: [
    {
      label:
        'The held edition: Project Gutenberg eBook #1514, A Midsummer Night’s Dream, byte copy at src/data/full-texts/a-midsummer-nights-dream.ts. Every quotation, extract and annotated phrase was copied from it and located in it by script',
      url: 'https://www.gutenberg.org/ebooks/1514',
    },
    {
      label:
        'Royal Shakespeare Company, A Midsummer Night’s Dream: Dates and Sources. Likeliest date 1595-6; Meres’s Palladis Tamia (1598); no conclusive evidence for the wedding theory; Ovid and Golding (1567), Chaucer’s Knight’s Tale, Plutarch in North’s translation (1579), Apuleius in Adlington’s translation (1566), Reginald Scot (1584)',
      url: 'https://www.rsc.org.uk/a-midsummer-nights-dream/about-the-play/dates-and-sources',
    },
    {
      label:
        'Royal Shakespeare Company, A Midsummer Night’s Dream: Stage History. Early performances in daylight on a thrust stage with no scenery; female roles played by boy players',
      url: 'https://www.rsc.org.uk/a-midsummer-nights-dream/about-the-play/stage-history',
    },
    {
      label:
        'Royal Shakespeare Company, Peter Brook 1970 production. Sally Jacobs’s white box, circus skills, doubling of Oberon with Theseus and Titania with Hippolyta',
      url: 'https://www.rsc.org.uk/a-midsummer-nights-dream/past-productions/peter-brook-1970-production',
    },
    {
      label:
        'Wikipedia, RSC production of A Midsummer Night’s Dream (1970). Brook influenced by Kott; doubling of Theseus/Oberon, Hippolyta/Titania, Philostrate/Puck and Egeus/Quince; fairies on trapeze bars and the love-juice flower as a spinning plate (circus skills also in the RSC page)',
      url: 'https://en.wikipedia.org/wiki/RSC_production_of_A_Midsummer_Night%27s_Dream_(1970)',
    },
    {
      label:
        'Folger Shakespeare Library, An Introduction to This Text. First quarto 1600; second quarto 1619; the Folio set from an annotated copy of it; the Folio substitutes Egeus for Philostrate in Act 5, Scene 1',
      url: 'https://www.folger.edu/explore/shakespeares-works/a-midsummer-nights-dream/an-introduction-to-this-text/',
    },
    {
      label:
        'Folger Shakespeare Library, Catherine Belsey, A Modern Perspective. Bottom garbles St Paul (1 Corinthians 2.9); the fairies as the turbulent and uncontrolled, not Victorian sweetness; Hippolyta’s reply to Theseus',
      url: 'https://www.folger.edu/explore/shakespeares-works/a-midsummer-nights-dream/a-midsummer-nights-dream-a-modern-perspective/',
    },
    {
      label:
        'Folger Shakespeare Library, the play text, Act 5, Scene 1: speech prefixes QUINCE as Prologue, SNOUT as Wall, SNUG as Lion, STARVELING as Moonshine; Puck headed ROBIN',
      url: 'https://www.folger.edu/explore/shakespeares-works/a-midsummer-nights-dream/read/5/1/',
    },
    {
      label:
        'Internet Shakespeare Editions, A Midsummer Night’s Dream, Quarto 1 (1600): printed for Thomas Fisher; title page says acted by the Lord Chamberlain’s servants',
      url: 'https://internetshakespeare.uvic.ca/Library/facsimile/overview/book/Q1_MND.html',
    },
    {
      label:
        'Wikipedia, Lord Chamberlain’s Men: founded around 1594; Shakespeare wrote for the company for most of his career and was a sharer',
      url: 'https://en.wikipedia.org/wiki/Lord_Chamberlain%27s_Men',
    },
    {
      label:
        'Wikipedia, Puck (folklore), reached from Robin Goodfellow: in English folklore a domestic or nature sprite who helped with housework in expectation of an offering and undid it with tricks if displeased; Shakespeare’s shrewd and knavish Puck',
      url: 'https://en.wikipedia.org/wiki/Robin_Goodfellow',
    },
    {
      label:
        'Wikipedia, Jan Kott: Polish critic and theoretician of the theatre; Shakespeare, Our Contemporary (1964)',
      url: 'https://en.wikipedia.org/wiki/Jan_Kott',
    },
    {
      label:
        'Wikipedia, A Midsummer Night’s Dream: usually dated 1595 or early 1596; Stationers’ Register entry by Thomas Fisher, 8 October 1600; the compliment to Queen Elizabeth in Act 2, Scene 1; Midsummer Eve intertwined with May Day; Kott (1964) on violence and animal sexuality; the unproven wedding theory',
      url: 'https://en.wikipedia.org/wiki/A_Midsummer_Night%27s_Dream',
    },
    {
      label:
        'CliffsNotes, Act II, Scene 1 summary and analysis: the fair vestal read as Queen Elizabeth, who never married (a second source for the compliment; its claim that the play was certainly written for a wedding was not used, because the RSC finds no conclusive evidence)',
      url: 'https://www.cliffsnotes.com/literature/m/a-midsummer-nights-dream/summary-and-analysis/act-ii-scene-1',
    },
    {
      label:
        'Folger Shakespeare Library, Wooing and Wedding: Courtship and Marriage in Early Modern England. Parents exercised considerable control over marriage; children increasingly given a right of veto; daughters could risk “stealing a marriage”',
      url: 'https://www.folger.edu/blogs/folger-story/wooing-and-wedding-courtship-and-marriage-in-early-modern-england/',
    },
    {
      label:
        'C. L. Barber, Shakespeare’s Festive Comedy (Princeton University Press, 1959): its introduction is titled The Saturnalian Pattern: Through Release to Clarification, and its sixth chapter treats May games and the Dream. Checked in the Cambridge Core review listing and the Great Thinkers commentary',
      url: 'https://thegreatthinkers.org/shakespeare-and-politics/commentary/shakespeares-festive-comedy/',
    },
    {
      label:
        'Jan Kott, Titania and the Ass’s Head, in Shakespeare Our Contemporary, translated by Boleslaw Taborski (Doubleday, 1964), as cited in the University of California, Berkeley, Shakespeare’s Staging bibliography',
      url: 'https://shakespeare.berkeley.edu/plays/a-midsummer-nights-dream',
    },
    {
      label:
        'Wikipedia, Green World: Northrop Frye’s concept, with A Midsummer Night’s Dream as a central example. Sources disagree on the date Frye introduced it (1948 or 1957), so the guide gives none',
      url: 'https://en.wikipedia.org/wiki/Green_World',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475, syllabus for examination in 2027: A Midsummer Night’s Dream on the Paper 2 and Paper 3 drama lists; Paper 2 closed book, a passage-based or essay question on each text; Paper 3 open text with clean copies; extract questions set from the Alexander Text',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
    },
    {
      label:
        'Cambridge IGCSE Literature in English 0475, syllabus for examination in 2026: A Midsummer Night’s Dream on the Paper 2 and Paper 3 drama lists, with the same Alexander Text statement',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
    },
    {
      label:
        'Cambridge IGCSE 0475/21, May/June 2024 question paper: the Act 1, Scene 2 casting passage (printed with Thisby and An I may hide my face) and an essay on Puck’s contribution to the dramatic impact of the play',
      url: 'https://www.cambridgeinternational.org/Images/646858-june-2024-question-paper-21.pdf',
    },
    {
      label:
        'Cambridge IGCSE 0475/22, May/June 2024 question paper, as reproduced by Dynamic Papers: the Act 3, Scene 2 quarrel passage and an essay on whether Oberon is likeable',
      url: 'https://dynamicpapers.com/wp-content/uploads/2015/09/0475_s24_qp_22.pdf',
    },
    {
      label:
        'Cambridge IGCSE 0475/22, February/March 2025 question paper, as reproduced by PapaCambridge: the Act 2, Scene 1 changeling passage and an essay on the rehearsals and performance of Pyramus and Thisby',
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_m25_qp_22.pdf',
    },
    {
      label:
        'Cambridge IGCSE 0475/21, May/June 2025 question paper, as reproduced by PapaCambridge: the Act 3, Scene 2 passage from Oberon’s “This falls out better than I could devise” and an essay on sympathy for Titania',
      url: 'https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/0475_s25_qp_21.pdf',
    },
    {
      label:
        'Pearson Edexcel Level 3 Advanced GCE in English Literature (9ET0) specification, Issue 11, August 2025: A Midsummer Night’s Dream among the Shakespeare comedies in Component 1 Drama; one essay question from a choice of two incorporating ideas from wider critical reading; Shakespeare: A Critical Anthology (Comedy); open book with clean copies, the Anthology not allowed in the examination',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/English%20Literature/2015/Specification%20and%20sample%20assessments/gce2015-a-level-eng-lit-spec.pdf',
    },
    {
      label:
        'Pearson Edexcel A-level English Literature 9ET0/01, Summer 2023 question paper (P72846A, 24 May 2023): questions on different perspectives on love and on festive comedy',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A-Level/English-Literature/2015/Exam-materials/9et0-01-que-20230525.pdf',
    },
    {
      label:
        'Pearson Edexcel A-level English Literature 9ET0/01, Summer 2024 question paper (P77996A, 24 May 2024): questions on the play’s structure and on the disruption of the social order. The A-level questions in this guide follow their shape',
      url: 'https://qualifications.pearson.com/content/dam/pdf/A-Level/English-Literature/2015/Exam-materials/9et0-01-que-20240525.pdf',
    },
  ],
}
