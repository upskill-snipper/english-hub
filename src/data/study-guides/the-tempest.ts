import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Tempest, William Shakespeare. A SUPPLEMENT: the existing page at
 * /revision/texts/the-tempest already holds the overview, context, themes,
 * characters and key quotations, so this file adds only what it lacked -
 * passages for close reading, language, structure and form, vocabulary, exam
 * practice and a model answer - plus the timeline and character map that the
 * animated visuals draw.
 *
 * Every quotation, every annotated phrase and every phrase quoted inside the
 * prose was copied from the byte copy of Project Gutenberg #1540 held at
 * src/data/full-texts/the-tempest.ts, after reading the whole play in that
 * edition, and each speaker, act and scene was checked against it by reading
 * the scene, not by searching for the phrase. Verse is quoted with " / " at the
 * edition's own line breaks, because that is how the test checks it.
 *
 * ONE ATTRIBUTION DIFFERS FROM THE HELD EDITION, deliberately. The speech
 * beginning "Abhorred slave" (Act 1, Scene 2) is headed "Mira." in the First
 * Folio of 1623 (checked in the Internet Shakespeare Editions transcription)
 * and is Miranda's in the Folger edition; the Gutenberg text gives it to
 * Prospero. The extract prints it as Miranda's and says so, because a student
 * whose school edition follows the Folio would otherwise be taught the wrong
 * speaker. The words themselves are the held edition's.
 *
 * Context facts are sourced below. Where only one source could be found, the
 * guide says less (the number of plays acted for the 1612-13 wedding differs
 * between two articles, so it is not given).
 *
 * SECOND PASS, 25 September 2026. The whole draft was re-read against the held
 * edition, scene by scene, and five things were corrected. Ferdinand, not his
 * sword, is "charmed from moving" in 1.2 (the stage direction). "All lost!" in
 * 1.1 is the mariners' cry, not the passengers'. The text never says Gonzalo
 * stocked the boat in secret: he was "appointed / Master of this design" and
 * acted "Out of his charity". Dowden's "romances" is dated 1875 and 1877 in the
 * same Wikipedia article, so the guide now says "the 1870s". And the Act 3,
 * Scene 2 extract was lengthened to about thirty lines, the length the Pearson
 * Edexcel specification gives for its extract task, so that it opens and closes
 * on the murder plot that frames the island speech.
 *
 * THIRD PASS, 26 September 2026, an adversarial fact-check. Every quoted span
 * (214) was re-found in the held edition with its speaker and scene. Fixed:
 * the Act 2, Scene 1 plot, which the draft had Sebastian killing Alonso,
 * when Antonio offers to stab the King himself while Sebastian kills Gonzalo;
 * Kermode, who agreed The Tempest is a Blackfriars play and argued only that
 * the Globe could also stage it, not that it "suits either house"; the
 * Boatswain's "gave out split", which means the crew reported the ship
 * wrecked, not that it seemed to split; the Edexcel part (b) wording, which
 * is "You must refer to the context", checked against the June 2023 paper;
 * and a claim that the play is "careful to separate" Prospero from Sycorax,
 * when his farewell to magic is modelled on Ovid's Medea.
 */
export const guide: StudyGuide = {
  slug: 'the-tempest',
  title: 'The Tempest',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    "The whole play: five acts in nine scenes, and an Epilogue. It is set for AQA GCSE English Literature (8702) and Pearson Edexcel GCSE English Literature (1ET0), and studied as a whole play at A-level. This part of the guide adds close reading, language, structure, vocabulary and exam practice to the notes above. Passages follow the Project Gutenberg edition used in this site's reader; line numbers differ between editions, so each passage is located by act, scene and its opening words.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First printed in the First Folio of 1623. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1540).',
  },

  native: {
    overview: '/revision/texts/the-tempest',
    context: '/revision/texts/the-tempest',
    themes: '/revision/texts/the-tempest',
    characters: '/revision/texts/the-tempest',
    keyQuotes: '/revision/texts/the-tempest',
  },

  extracts: [
    {
      title: 'Caliban and Prospero: the quarrel over the island',
      where: 'Act 1, Scene 2',
      pointer:
        "About two-thirds of the way through the scene, soon after Caliban first enters: from Caliban's “I must eat my dinner” to “For learning me your language!” The speech that begins “Abhorred slave” is headed Mira. (Miranda) in the First Folio of 1623 and is printed as Miranda's here. Some editions, including the one in this site's reader, give it to Prospero, so check your own copy and say which you are using if you quote it.",
      text: 'CALIBAN / I must eat my dinner. / This island’s mine, by Sycorax my mother, / Which thou tak’st from me. When thou cam’st first, / Thou strok’st me and made much of me; wouldst give me / Water with berries in ’t; and teach me how / To name the bigger light, and how the less, / That burn by day and night: and then I lov’d thee, / And show’d thee all the qualities o’ th’ isle, / The fresh springs, brine-pits, barren place, and fertile. / Curs’d be I that did so! All the charms / Of Sycorax, toads, beetles, bats, light on you! / For I am all the subjects that you have, / Which first was mine own King; and here you sty me / In this hard rock, whiles you do keep from me / The rest o’ th’ island. / PROSPERO / Thou most lying slave, / Whom stripes may move, not kindness! I have us’d thee, / Filth as thou art, with human care, and lodg’d thee / In mine own cell, till thou didst seek to violate / The honour of my child. / CALIBAN / Oh ho! Oh ho! Would ’t had been done! / Thou didst prevent me; I had peopled else / This isle with Calibans. / MIRANDA / Abhorred slave, / Which any print of goodness wilt not take, / Being capable of all ill! I pitied thee, / Took pains to make thee speak, taught thee each hour / One thing or other: when thou didst not, savage, / Know thine own meaning, but wouldst gabble like / A thing most brutish, I endow’d thy purposes / With words that made them known. But thy vile race, / Though thou didst learn, had that in ’t which good natures / Could not abide to be with; therefore wast thou / Deservedly confin’d into this rock, / Who hadst deserv’d more than a prison. / CALIBAN / You taught me language, and my profit on ’t / Is, I know how to curse. The red plague rid you, / For learning me your language!',
      annotations: [
        {
          phrase: 'This island’s mine, by Sycorax my mother',
          note: "Caliban's first argument is a legal one: he inherits the island from his mother, just as Miranda was her father's heir in Milan. Shakespeare gives the “monster” the language of property and succession, the same language the whole plot of usurpation depends on.",
        },
        {
          phrase: 'Thou strok’st me and made much of me',
          note: 'The verbs belong to the handling of an animal or a small child. The memory is tender, but it suggests that the early kindness was the kindness of a keeper, never of an equal.',
        },
        {
          phrase: 'To name the bigger light, and how the less',
          note: 'Caliban describes being taught the sun and moon in words that echo the Creation story in Genesis, where God makes a greater light for the day and a lesser one for the night. Teaching him language is presented as teaching him a whole view of the world.',
        },
        {
          phrase: 'Which first was mine own King',
          note: "Once his own king, now Prospero's only subject: the line compresses the loss of sovereignty that postcolonial critics place at the heart of the play, and it can be spoken with bitter dignity rather than rage.",
        },
        {
          phrase: 'Whom stripes may move, not kindness',
          note: 'Stripes are the marks left by a whip. Prospero claims that Caliban answers only to punishment, which makes the violence the fault of the person it is used on, a justification the audience can accept or question.',
        },
        {
          phrase: 'thy vile race',
          note: "In Shakespeare's English, race could mean stock, lineage or inherited nature, not only what the word means today. The speaker claims that Caliban's wickedness is bred in him and cannot be taught out of him, the view Prospero himself expresses with “A devil, a born devil” in Act 4, Scene 1.",
        },
        {
          phrase: 'You taught me language, and my profit on ’t / Is, I know how to curse',
          note: 'A reply that has become central to modern readings of the play. The gift of language becomes the means of resistance, and the rhythm and force of the curse that follows, “The red plague rid you”, prove how completely he has mastered what he was taught.',
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents the relationship between Prospero and Caliban, in this extract and in the play as a whole.',
    },
    {
      title: "The murder plot and the island's music",
      where: 'Act 3, Scene 2',
      pointer:
        "Near the end of the scene, about thirty lines: from Caliban's “Within this half hour will he be asleep” to his “When Prospero is destroyed.” Ariel is on stage, invisible, throughout, and halfway through he plays the conspirators' tune on a tabor and pipe.",
      text: 'CALIBAN / Within this half hour will he be asleep. / Wilt thou destroy him then? / STEPHANO / Ay, on mine honour. / ARIEL / This will I tell my master. / CALIBAN / Thou mak’st me merry. I am full of pleasure. / Let us be jocund: will you troll the catch / You taught me but while-ere? / STEPHANO / At thy request, monster, I will do reason, any reason. Come on, / Trinculo, let us sing. / [Sings.] / Flout ’em and cout ’em, / and scout ’em and flout ’em: / Thought is free. / CALIBAN / That’s not the tune. / [Ariel plays the tune on a tabor and pipe.] / STEPHANO / What is this same? / TRINCULO / This is the tune of our catch, played by the picture of Nobody. / STEPHANO / If thou beest a man, show thyself in thy likeness: if thou beest a / devil, take ’t as thou list. / TRINCULO / O, forgive me my sins! / STEPHANO / He that dies pays all debts: I defy thee. Mercy upon us! / CALIBAN / Art thou afeard? / STEPHANO / No, monster, not I. / CALIBAN / Be not afeard. The isle is full of noises, / Sounds, and sweet airs, that give delight, and hurt not. / Sometimes a thousand twangling instruments / Will hum about mine ears; and sometimes voices, / That, if I then had wak’d after long sleep, / Will make me sleep again: and then, in dreaming, / The clouds methought would open and show riches / Ready to drop upon me; that, when I wak’d, / I cried to dream again. / STEPHANO / This will prove a brave kingdom to me, where I shall have my music for / nothing. / CALIBAN / When Prospero is destroyed.',
      annotations: [
        {
          phrase: 'Wilt thou destroy him then?',
          note: 'The passage opens and closes on the same verb. Caliban asks whether Stephano will destroy Prospero, and after the most beautiful speech in the play he ends with “When Prospero is destroyed”, so the lyric sits inside the murder plot, framed by it.',
        },
        {
          phrase: 'This will I tell my master',
          note: 'Ariel speaks to the audience, unheard by the conspirators. The dramatic irony tells us the plot is already doomed, which frees us to laugh at the comedy, and reminds us that on this island Prospero hears everything.',
        },
        {
          phrase: 'Thought is free',
          note: 'The drunkards sing that thought is free in the middle of planning to seize an island. The claim is undercut at once: they cannot keep the tune, and it is Ariel, the servant still waiting for his own liberty, who plays it for them while overhearing every word.',
        },
        {
          phrase: 'Be not afeard',
          note: 'Stephano and Trinculo have just cried for mercy and forgiveness, and the servant they call a monster comforts them. The reversal is itself the point: fear belongs to the newcomers, and knowledge of the island belongs to Caliban.',
        },
        {
          phrase: 'Sounds, and sweet airs, that give delight, and hurt not',
          note: "Soft sibilance and gentle monosyllables slow the line down. “Hurt not” is striking from a character who is pinched and cramped at Prospero's command, and it suggests he can imagine a world without punishment.",
        },
        {
          phrase: 'a thousand twangling instruments',
          note: 'The onomatopoeic “twangling” and the hyperbole of a thousand instruments make the music sound physical and overwhelming. The audience has just watched Ariel play; Caliban hears such music as the voice of the island itself.',
        },
        {
          phrase: 'The clouds methought would open and show riches',
          note: 'The dream has the shape of a religious vision, the heavens opening, but the riches are only glimpsed and never held. It is a picture of longing in a character who owns nothing, not even the island he claims.',
        },
        {
          phrase: 'I cried to dream again',
          note: "The speech ends by waking into loss. Plain monosyllables carry the pathos: Caliban's waking life is so hard that he weeps to return to sleep, which makes him, for a moment, the most human voice on stage.",
        },
        {
          phrase: 'This will prove a brave kingdom to me',
          note: 'Stephano answers poetry with prose and possession. Where Caliban hears wonder, Stephano hears a bargain, music he will not have to pay for, and the contrast mocks the would-be ruler who sees a new land only as property.',
        },
        {
          phrase: 'When Prospero is destroyed',
          note: "Caliban adds a condition to Stephano's sentence: the kingdom and its free music will exist only once Prospero is dead. Shakespeare does not let the beauty of the speech cancel the plot, and a strong answer keeps both in view: Caliban can be moved by music and still plan to kill.",
        },
      ],
      question:
        'How does Shakespeare use language in this extract to present Caliban? Refer closely to the extract in your answer.',
    },
    {
      title: 'Virtue rather than vengeance',
      where: 'Act 5, Scene 1',
      pointer:
        "The opening of Act 5: from Ariel's “Confin’d together” to Prospero's “And they shall be themselves”, just before the speech that begins “Ye elves of hills”.",
      text: 'ARIEL / Confin’d together / In the same fashion as you gave in charge, / Just as you left them; all prisoners, sir, / In the line grove which weather-fends your cell; / They cannot budge till your release. The King, / His brother, and yours, abide all three distracted, / And the remainder mourning over them, / Brimful of sorrow and dismay; but chiefly / Him you term’d, sir, “the good old lord, Gonzalo”. / His tears run down his beard, like winter’s drops / From eaves of reeds; your charm so strongly works ’em, / That if you now beheld them, your affections / Would become tender. / PROSPERO / Dost thou think so, spirit? / ARIEL / Mine would, sir, were I human. / PROSPERO / And mine shall. / Hast thou, which art but air, a touch, a feeling / Of their afflictions, and shall not myself, / One of their kind, that relish all as sharply / Passion as they, be kindlier mov’d than thou art? / Though with their high wrongs I am struck to th’ quick, / Yet with my nobler reason ’gainst my fury / Do I take part: the rarer action is / In virtue than in vengeance: they being penitent, / The sole drift of my purpose doth extend / Not a frown further. Go release them, Ariel. / My charms I’ll break, their senses I’ll restore, / And they shall be themselves.',
      annotations: [
        {
          phrase: 'They cannot budge till your release',
          note: "Ariel's report shows Prospero's power at its height: his enemies are held motionless in a grove, waiting on his word. The question the scene asks is what he will do with that power.",
        },
        {
          phrase: 'His tears run down his beard, like winter’s drops / From eaves of reeds',
          note: "A homely simile of rain dripping from a thatched roof. It makes the old man's grief concrete and ordinary, and it is Gonzalo's suffering, more than his enemies', that Ariel describes most fully.",
        },
        {
          phrase: 'Mine would, sir, were I human',
          note: 'The conditional leaves open whether Ariel feels pity or only knows what pity would be. Either way, the spirit shows the man what humanity requires, a striking reversal of master and servant.',
        },
        {
          phrase: 'One of their kind',
          note: 'Prospero recognises that he shares a nature with the men who wronged him. The phrase turns enemies back into kin, and it is the step that makes forgiveness possible.',
        },
        {
          phrase: 'the rarer action is / In virtue than in vengeance',
          note: 'Antithesis and alliteration set the two choices side by side. “Rarer” means both finer and less common: forgiveness is presented as the harder, nobler act, a deliberate refusal of the revenge plot the play has set up.',
        },
        {
          phrase: 'they being penitent',
          note: 'The pardon is conditional on repentance. Alonso repents later in the scene, but Antonio never does, so this phrase quietly opens the gap that productions of the ending explore.',
        },
        {
          phrase: 'And they shall be themselves',
          note: "Forgiveness is imagined as a restoration of identity, not just a release from a spell. The idea returns in Gonzalo's summary that on the island they found “all of us ourselves”.",
        },
      ],
      question:
        'How does Shakespeare present the decision to forgive in this extract, and how is forgiveness explored elsewhere in the play?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Sea imagery and the language of transformation',
      example:
        "Ariel's song to Ferdinand in Act 1, Scene 2: “Full fathom five thy father lies”, and the promise that the drowned man “doth suffer a sea-change / Into something rich and strange”.",
      effect:
        "The song turns a drowned body into coral and pearls, so death becomes treasure and grief becomes art. It is also untrue, because Alonso is alive, which tells the audience early that on this island what people hear is shaped by Prospero. The image of loss changing into something precious describes the play's whole movement, from shipwreck to betrothal and a restored dukedom.",
    },
    {
      technique: 'Dehumanising names and epithets',
      example:
        'Prospero addresses Caliban as “Thou earth, thou!”, “Thou poisonous slave” and “Hag-seed” in Act 1, Scene 2, and in Act 5, Scene 1 calls him “this thing of darkness”.',
      effect:
        "Again and again Caliban is called by what he is made of, bred from or owned as, rather than by his name, and the insults begin before he has spoken a word to the audience. The pattern shows how language can justify control: a creature called earth and poison can be made to fetch wood. Whether the play shares Prospero's view or exposes it is the central question for any essay on Caliban.",
    },
    {
      technique: 'Curses built from the natural world',
      example:
        "Caliban's first words on stage: “As wicked dew as e’er my mother brush’d / With raven’s feather from unwholesome fen / Drop on you both!” In Act 2, Scene 2 he wishes “All the infections that the sun sucks up” to fall on Prospero.",
      effect:
        'The curses are precise and local: dew, fens, bogs and the sickness believed to rise from them. Heavy consonants and sibilance (“sun sucks up”) make the lines sound spat out. They show his close knowledge of the island, the knowledge he once shared with Prospero, now turned into a weapon, which is exactly what he means when he says language has taught him to curse.',
    },
    {
      technique: 'Lyrical verse, sibilance and sensory imagery',
      example:
        '“The isle is full of noises, / Sounds, and sweet airs, that give delight, and hurt not” (Caliban, Act 3, Scene 2).',
      effect:
        "Soft s-sounds and gentle monosyllables slow the line down, and “hurt not” is a quiet promise from a character who is pinched whenever he disobeys. Shakespeare gives some of the play's most beautiful verse to the figure Prospero calls a “born devil”, which makes the audience question that judgement. The speech is about dreaming and waking, like Prospero's “such stuff / As dreams are made on” in Act 4.",
    },
    {
      technique: 'Rhetorical questions and threats as instruments of control',
      example:
        'When Ariel asks for his liberty in Act 1, Scene 2, Prospero answers with questions, “Dost thou forget / From what a torment I did free thee?” and “Hast thou forgot / The foul witch Sycorax”, then threatens to “rend an oak / And peg thee in his knotty entrails”.',
      effect:
        "Prospero rules by owning the story of the past: he says he must “Once in a month recount what thou hast been”. The questions are not real questions but demands for agreement, and the threat copies the punishment Sycorax gave Ariel in the pine. The exchange shows that Prospero's rule, even over the spirit who serves him most willingly, depends on gratitude enforced by fear.",
    },
    {
      technique: 'Antithesis and alliteration',
      example:
        "Prospero's choice in Act 5, Scene 1, “the rarer action is / In virtue than in vengeance”; compare Miranda's “Good wombs have borne bad sons” in Act 1, Scene 2.",
      effect:
        "Antithesis sets two options side by side, so that choosing one becomes visible as a choice. The alliteration binds “virtue” and “vengeance” as if they were the only possible answers, and “rarer” means both finer and less common: forgiveness is the harder path. Miranda's line uses the same balance to separate a person's nature from their birth, which is the play's question about Caliban turned on the nobility.",
    },
    {
      technique: 'Metatheatrical imagery',
      example:
        '“Our revels now are ended. These our actors, / As I foretold you, were all spirits” and “the great globe itself” (Prospero, Act 4, Scene 1).',
      effect:
        "Prospero describes the vanished masque in the vocabulary of the theatre, revels, actors and pageant, and then widens it to the whole world and to human life, “rounded with a sleep”. An audience in a playhouse is invited to apply the words to the play in front of them, and many readers hear in “the great globe” a glance at the Globe playhouse itself, though that is a reading rather than a certainty. The magician's art and the dramatist's are made to mirror each other.",
    },
    {
      technique: 'Water and tide imagery for a change of heart',
      example:
        'Sebastian and Antonio in Act 2, Scene 1: “Well, I am standing water.” “I’ll teach you how to flow.” Prospero in Act 5, Scene 1: “the approaching tide / Will shortly fill the reasonable shores / That now lie foul and muddy”.',
      effect:
        'In a play that begins with the sea as a weapon, states of mind become states of water. Antonio teaches Sebastian to let ambition rise like a tide, and in the last act reason itself returns like the sea covering a muddy shore. The imagery suggests that a change of heart is as natural and as powerful as a tide, which is why the storm of the opening can end in the “calm seas” Prospero promises.',
    },
    {
      technique: 'Asides and dramatic irony',
      example:
        'Watching Ferdinand and Miranda meet in Act 1, Scene 2, Prospero says aside “At the first sight / They have changed eyes” and “It goes on, I see, / As my soul prompts it”.',
      effect:
        "The asides let the audience share the magician's knowledge while the lovers believe their feelings are entirely their own. The irony is double: their love is real, and it is also the plan. Prospero's public harshness to Ferdinand, spoken seconds after these private words of delight, shows that his anger here is a performance, which invites the audience to ask how much of his anger elsewhere is performed too.",
    },
    {
      technique: 'Animal and monster imagery',
      example:
        'Trinculo, finding Caliban in Act 2, Scene 2, asks “a man or a fish?” and imagines exhibiting him in England, where people “will lay out ten to see a dead Indian”. Caliban is then called “moon-calf” and “puppy-headed monster”.',
      effect:
        "The comic characters treat Caliban as a specimen or a fairground exhibit. Trinculo's joke cuts two ways: it shows his own eagerness to make money out of Caliban, and it mocks English crowds who would give nothing to a beggar but will pay to stare at a dead stranger. The more they call him monster, the less impressive they look beside him, since the “monster” is the only one of the three who knows the island and speaks its most memorable verse. Shakespeare uses the low comedy to ask who is really being shown up.",
    },
  ],

  structureForm: [
    {
      heading: 'One island, one afternoon',
      body: "Like The Comedy of Errors, The Tempest roughly keeps the classical unities of time, place and action. After the opening scene at sea everything happens on the island, and the story fills a single afternoon. Ariel says it is “Past the mid season”, past midday, and Prospero adds “At least two glasses”, two turns of the hourglass; by Act 5 it is “On the sixth hour”, and the Boatswain reports that the ship they had given up for wrecked “but three glasses since” is sound again. The audience feels Prospero's plan racing the clock, and the compression explains why the long history of Milan has to be told rather than shown.",
    },
    {
      heading: 'Exposition as a display of power',
      body: "Act 1, Scene 2 is by far the longest scene, and most of it is telling. Prospero tells the past three times, to three listeners: the usurpation to Miranda, Sycorax and the pine to Ariel, and kindness betrayed to Caliban. Each time he checks that he is being heard, with “Dost thou attend me?” and “Thou attend’st not”, and each listener is reminded of a debt. Structurally, the exposition fixes his version of events before anyone can contradict it, which is why Caliban's “This island’s mine” lands with such force when someone finally does.",
    },
    {
      heading: 'Three plots, one pattern',
      body: "The middle of the play moves between three groups who do not meet until Act 5: the lovers, the royal party and the comic conspirators. Act 3 gives them a scene each, in turn. Ferdinand and Miranda promise to marry (Scene 1), Caliban, Stephano and Trinculo plan a murder (Scene 2), and the harpy confronts the “three men of sin” (Scene 3). The two murder plots mirror each other: Antonio tells Sebastian “My strong imagination sees a crown / Dropping upon thy head”, and Stephano, promised Prospero's daughter, announces “Monster, I will kill this man.” The parallel makes the courtly crime look as greedy and absurd as the drunken one, and suggests that the appetite to rule runs through every level of society.",
    },
    {
      heading: 'A comedy in the Folio, a romance to later critics',
      body: "The First Folio of 1623 printed The Tempest among the comedies, and placed it first of them. In the 1870s the critic Edward Dowden grouped it with Pericles, Cymbeline and The Winter's Tale as Shakespeare's late romances, and the label has stuck. The shape is recognisable: a disaster that looks tragic, a family divided, long years apart, and a reunion that feels like a miracle, “A most high miracle”, as Sebastian says. The Tempest compresses that pattern. The separation happened twelve years before the play begins, so the audience sees only the ending of a romance, and the storm that seems to open a tragedy has done, as Prospero tells Miranda at once, “no harm”.",
    },
    {
      heading: 'Verse, prose and song',
      body: "Prospero, Miranda, Ferdinand and the courtiers mostly speak blank verse; the storm scene and the courtiers' mockery of Gonzalo in Act 2, Scene 1 are the main exceptions, in prose. Stephano and Trinculo speak prose, the usual form for Shakespeare's comic servants. Caliban moves between the two: when he is flattering Stephano he sometimes drops into prose, but his most important speeches, the curses, the claim to the island and the speech on its noises, are in verse. In Act 3, Scene 2 his lines on the island's “sweet airs” are answered by Stephano's prose, “This will prove a brave kingdom to me”, so the form itself argues that Caliban is more than the brute he is called. Rhyme marks the speech that stands apart from ordinary talk: Ariel's songs, the rhymed couplets of the masque goddesses, and the short rhyming lines of the Epilogue, where the speaker has stepped outside the story.",
    },
    {
      heading: 'The masque, and its interruption',
      body: "Act 4 stages a play within the play: a masque, the kind of court entertainment of music, dance and speech that was fashionable at the court of James I, performed by Prospero's spirits as Iris, Ceres and Juno to bless the betrothal. The goddesses speak in rhymed couplets and promise harvests and children. Then Prospero breaks it off, “I had forgot that foul conspiracy”, and the stage direction says the dancers “heavily vanish” to “a strange, hollow, and confused noise”. The structure acts out the speech that follows: a vision of perfect harmony is built and then dissolves, and the real world, with its plots and its ageing magician, rushes back in.",
    },
    {
      heading: 'Costume, staff and book',
      body: "Prospero's power is carried by objects, and the play's structure is marked by what he puts on and takes off. In Act 1, Scene 2 he lays down his cloak to speak to Miranda as a father: “Lie there my art”. Act 5 opens with him “in his magic robes”, and he ends his magic with a promise to break his staff and “drown my book”. He then sends Ariel for “the hat and rapier” so that he can appear “As I was sometime Milan”. Tracking these objects is a precise way to write about structure: the magician becomes a duke again and then, in the Epilogue, simply a man asking for help.",
    },
    {
      heading: 'An Epilogue that hands power to the audience',
      body: "The Epilogue is spoken by Prospero, but it stands half outside the play. In short rhyming couplets he tells the audience that his “charms are all o’erthrown”, that he is now held on the island “by your spell”, and that only their applause, “the help of your good hands”, and their prayers can release him. The last words of the play are “set me free”. The ending reverses the play's structure of power: the man who controlled every scene now depends on the people watching, and the language of pardon he used in Act 5 is turned towards the audience's own need of forgiveness.",
    },
    {
      heading: 'Written for more than one stage',
      body: "From 1609 the King's Men played at the indoor Blackfriars theatre through the winter months and at the open-air Globe in summer. Many scholars read the play's stage directions as evidence that it was written with the Blackfriars in mind; Frank Kermode, while agreeing, argued that it could easily have been staged at the Globe as well. Its first recorded performance was at neither, but at court, before James I at Whitehall, on 1 November 1611. The play is full of effects that suit a candlelit hall as well as an open stage: music almost throughout, a banquet that vanishes by “a quaint device”, and Prospero watching from “above, invisible”, probably from the gallery over the stage. When you write about the harpy or the masque, remember that these were spectacles designed to be seen, not only speeches to be read.",
    },
  ],

  vocabulary: [
    {
      term: 'Tempest',
      definition:
        'A violent storm, especially at sea. The title names the storm Prospero raises by magic in the first scene, which looks like a disaster and harms no one.',
    },
    {
      term: 'Usurp',
      definition:
        "To take a position of power, such as a throne or a dukedom, without the right to it. Antonio usurped Prospero's dukedom, and Prospero pretends to accuse Ferdinand of the same thing: “Thou dost here usurp / The name thou ow’st not”.",
    },
    {
      term: 'Art',
      definition:
        "Prospero's word for his magic, learned from study and books. “Lie there my art”, he says as he takes off his cloak, and in Act 5 he gives up “this rough magic”.",
    },
    {
      term: 'Abjure',
      definition:
        'To give something up solemnly, as if under oath. Prospero says “this rough magic / I here abjure” before promising to break his staff and drown his book.',
    },
    {
      term: 'Masque',
      definition:
        "A court entertainment of the sixteenth and seventeenth centuries combining music, dance, speech and spectacle. In Prospero's, performed in Act 4, spirits play the classical goddesses Iris, Ceres and Juno.",
    },
    {
      term: 'Harpy',
      definition:
        "In Greek myth, a monster with a woman's face and a bird's body and claws. Ariel appears “like a Harpy” to snatch away the banquet in Act 3, Scene 3, an idea Shakespeare took from Virgil's Aeneid.",
    },
    {
      term: 'Moon-calf',
      definition:
        'Originally a shapeless growth in the womb, which people blamed on the moon; also a fool or simpleton. Stephano and Trinculo call Caliban by it again and again, which makes him sound both unnatural and stupid.',
    },
    {
      term: 'Welkin',
      definition:
        'The sky or the heavens. Miranda describes the waves rising “to th’ welkin’s cheek”, as if the sea were trying to reach the face of heaven.',
    },
    {
      term: 'Brave',
      definition:
        'In Shakespeare, usually fine, splendid or handsome, not only courageous. Miranda calls the ship “A brave vessel” and the newcomers a “brave new world”.',
    },
    {
      term: 'Wrack',
      definition:
        'Shipwreck or ruin, an older form of wreck. Prospero speaks of “The direful spectacle of the wrack” that Miranda watched.',
    },
    {
      term: 'Plantation',
      definition:
        'Colonisation: settling a new land with people from elsewhere. Gonzalo begins “Had I plantation of this isle”, and Antonio mocks him by taking the word literally: “He’d sow ’t with nettle-seed”.',
    },
    {
      term: 'Commonwealth',
      definition:
        "A state run for the good of all its people. Gonzalo's imagined commonwealth has no trade, no rulers and no work, yet, as Sebastian points out, “he would be King on’t”.",
    },
    {
      term: 'Providence',
      definition:
        'The care and guidance of God. Prospero says he and Miranda reached the island “By Providence divine”, and Ferdinand says it is “by immortal Providence” that Miranda is his.',
    },
    {
      term: 'Miranda',
      definition:
        'A name Shakespeare coined from a Latin word meaning admirable, or to be wondered at. Ferdinand plays on it the moment he hears it, “Admir’d Miranda!”, and the idea of wonder follows her through the play, from his first greeting, “O you wonder!”, to her own “O, wonder!” in Act 5.',
    },
    {
      term: 'Argier',
      definition:
        'Algiers, in North Africa. Ariel tells Prospero that Sycorax was born there, and Prospero adds that she was banished from it for her sorceries.',
    },
    {
      term: 'Dam',
      definition:
        "A mother, a word normally used of animals. Prospero calls Sycorax Caliban's “wicked dam”, and Caliban uses the same word for his own mother.",
    },
    {
      term: 'Sea-change',
      definition:
        "A complete transformation. The phrase comes from Ariel's song, in which a drowned man's body suffers “a sea-change / Into something rich and strange”, and it is now used for any deep change.",
    },
    {
      term: 'Aside',
      definition:
        "A line the audience hears but the other characters on stage do not. Prospero's asides in Act 1, Scene 2 reveal that his anger with Ferdinand is an act.",
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables with five stresses, called iambic pentameter. Prospero and the courtiers speak it; Stephano and Trinculo speak prose.',
    },
    {
      term: 'Metatheatre',
      definition:
        "Drama that draws attention to its own nature as theatre. The “Our revels now are ended” speech and the Epilogue are the play's clearest examples.",
    },
    {
      term: 'Romance',
      definition:
        "The name later critics gave to four of Shakespeare's late plays, Pericles, Cymbeline, The Winter's Tale and The Tempest: stories of loss, long separation, reunion and forgiveness, often with magic.",
    },
    {
      term: 'Unities',
      definition:
        'The classical rules that a play should show one main action, in one place, within a single day. The Tempest, like The Comedy of Errors, roughly keeps them.',
    },
    {
      term: 'Epilogue',
      definition:
        'A speech addressed to the audience after the story has ended. In The Tempest, Prospero uses it to ask the audience to free him with their applause.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "Starting with the extract from Act 1, Scene 2 (from Caliban's “I must eat my dinner” to “For learning me your language!”), explore how Shakespeare presents the relationship between Prospero and Caliban. Write about: how Shakespeare presents their relationship in this extract; how Shakespeare presents their relationship in the play as a whole.",
        skill: 'Extract and whole-play response: language, the whole text and context',
        guidance: [
          'Open with an argument about the whole relationship, for example that Shakespeare shows a bond of care that has turned into ownership, and lets both sides speak so that the audience has to judge.',
          "Analyse Caliban's case in the extract: the claim by inheritance, “This island’s mine, by Sycorax my mother”, the memory of being stroked and taught, and the political language of “mine own King”.",
          'Analyse the reply: “Thou most lying slave”, the accusation that Caliban tried to violate Miranda, which he does not deny, and the “Abhorred slave” speech. Say who speaks it in your edition (Miranda in the First Folio) and why that changes the scene.',
          'Explore “You taught me language, and my profit on ’t / Is, I know how to curse”: the gift of language becomes the means of resistance, and the curse itself shows his skill.',
          "Move through the play: the curses and the worship of Stephano (Act 2, Scene 2), the island's noises and the murder plot (Act 3, Scene 2), Prospero's “A devil, a born devil” and the spirit hounds (Act 4, Scene 1), then “this thing of darkness I / Acknowledge mine” and Caliban's promise to “seek for grace” (Act 5, Scene 1).",
          "Use context where it explains a line: English colonial voyages and the accounts of the Sea Venture wreck that reached London in 1610. Present postcolonial readings as interpretations, not as the play's fixed meaning.",
          'Conclude with a judgement: does the ending settle the relationship or leave it open? The uncertain tone of “Acknowledge mine” is good evidence either way.',
        ],
      },
      {
        question:
          'Explore how Shakespeare presents Caliban in the extract from Act 3, Scene 2 (from “Within this half hour will he be asleep” to “When Prospero is destroyed.”). Refer closely to the extract in your answer.',
        skill:
          'Close language analysis of an extract (the first task in the Pearson Edexcel GCSE Shakespeare question)',
        guidance: [
          'Start from the frame: the extract opens with “Wilt thou destroy him then?” and closes with “When Prospero is destroyed”, so whatever you say about the beauty of the island speech has to account for the murder plan on either side of it.',
          'Use the dramatic irony: Ariel, invisible, answers the plan with “This will I tell my master”, and the audience knows the plot will fail while the conspirators sing that “Thought is free”.',
          'Then the reversal: after Stephano and Trinculo cry for mercy, Caliban, the servant everyone calls a monster, comforts them, so the scene changes who is afraid of whom.',
          'Analyse the sound of the speech: the sibilance and soft monosyllables of “Sounds, and sweet airs, that give delight, and hurt not”, and the onomatopoeia of “twangling”.',
          'Follow the movement from waking to sleep to dream and back: the long sentence drifts as a sleeper drifts, and “I cried to dream again” ends it on loss.',
          "Contrast the forms: Caliban's blank verse against Stephano's prose reply about a kingdom where he will have his music free.",
          'Conclude with a judgement rather than a summary: the beauty does not cancel the murder plan, so decide whether the extract makes Caliban more sympathetic, more dangerous or both, and say which words persuade you.',
          'Stay inside the extract for this task. Its partner task is where the rest of the play and its context belong.',
        ],
      },
      {
        question:
          "In the Act 3, Scene 2 extract, Caliban describes the music of the island, just after Prospero's spirit Ariel has played the conspirators' tune on a tabor and pipe. Explain the importance of magic elsewhere in the play. In your answer, you must consider: how magic is shown; the reasons why magic is important. You must refer to the context of the play in your answer.",
        skill:
          'A theme from the extract explored elsewhere in the play, with context (the second task in the Pearson Edexcel GCSE Shakespeare question)',
        guidance: [
          "Define the different kinds of magic the play shows: Prospero's learned art, Sycorax's witchcraft, and the magic of the theatre itself.",
          'Show magic as protection and control: the storm that Prospero ordered “So safely” that no one was hurt, and the cramps and pinches he uses to keep Caliban working.',
          "Show magic as theatre and judgement: Ariel's harpy and the vanishing banquet (Act 3, Scene 3), and the masque that ends with “Our revels now are ended” (Act 4, Scene 1).",
          "Explain why giving it up matters: “this rough magic / I here abjure”, the drowned book, and the Epilogue's “Now my charms are all o’erthrown”. Prospero can only return to Milan as a man.",
          "Bring in context: King James had published a book on witchcraft and magic, Daemonologie, in 1597, and the play was acted before him at court in 1611. The play sets Prospero's learned art against the “damn’d witch Sycorax”, yet his farewell to magic, “Ye elves of hills”, is modelled on a speech by the sorceress Medea in Ovid's Metamorphoses, so whether the two kinds of magic are really different is open to argument.",
          "Conclude by judging what magic finally represents: power that must be surrendered, or the dramatist's own art.",
        ],
      },
      {
        question:
          "Starting with the extract from Act 5, Scene 1 (from Ariel's “Confin’d together” to Prospero's “And they shall be themselves”), explore how Shakespeare presents ideas about forgiveness. Write about: how Shakespeare presents forgiveness in this extract; how Shakespeare presents forgiveness in the play as a whole.",
        skill: 'Extract and whole-play response: language, the whole text and context',
        guidance: [
          'Set out a thesis: Shakespeare presents forgiveness as a choice made against feeling, prompted from outside, and not shared by everyone it is offered to.',
          "Analyse the extract: Ariel's simile of Gonzalo's tears, the conditional “Mine would, sir, were I human”, Prospero's “One of their kind”, and the antithesis of “virtue” and “vengeance”.",
          'Test the condition “they being penitent” against the rest of the scene: Alonso answers “Thy dukedom I resign”, but Antonio never replies to Prospero at all.',
          "Trace forgiveness through the play: Prospero's anger in Act 1, Scene 2, the harpy's demand for “heart-sorrow” in Act 3, Scene 3, the marriage that unites Milan and Naples, and Caliban's “seek for grace”.",
          "Use context carefully: revenge plots were familiar to Shakespeare's audiences, not least from his own Hamlet, and The Tempest sets one up only to refuse it.",
          'Finish with the Epilogue, where Prospero himself asks to be pardoned, and judge whether forgiveness in the play is complete or only offered.',
        ],
      },
      {
        question:
          "It has been argued that Prospero's forgiveness in Act 5 is less an act of mercy than a final exercise of power. How far do you agree? In your answer, explore Shakespeare's dramatic methods and consider relevant contexts and critical readings.",
        skill: 'A-level essay: argument, dramatic methods, context and critical perspectives',
        guidance: [
          'Define the terms and take a position early: for example, that the play shows forgiveness which is sincere but never between equals.',
          'Evidence for power: the charmed circle, “There stand, / For you are spell-stopp’d”, the private warning that he could “justify you traitors”, and the demand for his dukedom in the same breath as the pardon.',
          'Evidence for mercy: the prompting by Ariel, the renunciation of magic, and his tears for Gonzalo, “Mine eyes, e’en sociable to the show of thine, / Fall fellowly drops”.',
          "Dramatic methods: Antonio's silence, which every production must interpret, Sebastian's aside “The devil speaks in him”, and the Epilogue, in which the forgiver asks for pardon himself.",
          'Critical readings: postcolonial criticism asks what forgiveness means for Caliban, still called a “thing”; readings of Prospero as a figure for the dramatist see the pardon as an artist releasing his creations. Test each against the text rather than listing them.',
          'Context: the first recorded performance was before James I at Whitehall in 1611, so a play about a ruler who pardons his enemies was first seen by a king and his court.',
          "Conclude by weighing whether the play's last words, “set me free”, turn the relationship of power round.",
        ],
      },
    ],
    tips: [
      "Check who speaks the “Abhorred slave” speech in your edition. The First Folio gives it to Miranda; some editions, including the one in this site's reader, move it to Prospero. Either say which you are using or refer to it as the speech; do not build an argument about Miranda's gentleness without taking it into account.",
      "“Hell is empty, / And all the devils are here” is Ferdinand's cry as he jumps from the burning ship, reported by Ariel in Act 1, Scene 2. It is not Ariel's own judgement, and attributing it accurately is a sign of close reading.",
      "Quote the famous lines exactly: it is “such stuff / As dreams are made on”, with on, not of; “The isle is full of noises”, with isle, not island; and “what’s past is prologue” is Antonio's, spoken to persuade Sebastian to murder, not a wise saying of Prospero's.",
      'Do not make Caliban simply a victim or simply a monster. The strongest answers weigh his claim to the island and his poetry against the attempted assault and the murder plot, and explain why Shakespeare gives him both.',
      'Remember that nobody drowns. Answers that treat the storm as a real disaster miss its point, which is that it only looks like one: Prospero says at once that there is “no harm done”.',
      "Antonio never answers Prospero's forgiveness, and his only later words mock Caliban as “marketable”. Use that silence precisely: it is the text's own evidence that the reconciliation is incomplete.",
      "Tie context to lines. The Sea Venture accounts matter because Ariel mentions the “still-vex’d Bermoothes”; Montaigne matters because Gonzalo's commonwealth echoes his essay on cannibals. Context that explains no moment in the play adds little.",
      'Use structure. The play takes place in one afternoon, Act 3 moves through its three plots in turn, and the masque is broken off mid-dance. A sentence on why any of these choices matters lifts an answer beyond character study.',
      'The Pearson Edexcel Shakespeare paper is closed book, so learn short quotations word for word. Three exact words analysed well are worth more than a long line remembered wrongly.',
    ],
  },

  modelAnswer: {
    question:
      'Starting with the extract from Act 1, Scene 2, explore how Shakespeare presents the relationship between Prospero and Caliban, in this extract and in the play as a whole.',
    paragraph:
      "Shakespeare presents the relationship between Prospero and Caliban as a bond of care that has hardened into ownership, and in this extract he gives Caliban the first word. Caliban's claim, “This island’s mine, by Sycorax my mother”, rests on inheritance, the same principle that makes Prospero the rightful Duke of Milan, so the audience cannot dismiss it without questioning Prospero's own title. His memory that “Thou strok’st me and made much of me” recalls the handling of a pet or a small child, which suggests the affection was never between equals. Prospero's reply replaces memory with punishment: Caliban is a slave “Whom stripes may move, not kindness”, a phrase that makes the whip the only language he is said to understand. Yet Caliban answers with the scene's most memorable lines, “You taught me language, and my profit on ’t / Is, I know how to curse”, and the fluent, hammering curse is itself proof of how well he learned. An audience in 1611, a year after the Virginia Company published a report on its new colony, might have seen a ruler educating a “savage”; many modern audiences hear a colonised man turning his master's language against him. Shakespeare keeps both readings alive. He makes the accusation that Caliban tried to violate Miranda one that Caliban does not deny, while giving him the poetry, and Prospero's final judgement, “this thing of darkness I / Acknowledge mine”, sounds as much like a confession as a claim of property.",
    commentary: [
      'It opens with an argument about the whole relationship rather than a description, and every sentence after that tests or proves it.',
      'Each quotation is short, exact and analysed for a particular word or effect, such as “strok’st” and “stripes”, rather than left to speak for itself.',
      'It treats the extract as drama: who speaks first, who answers, and what the audience is made to weigh between them.',
      "Context is tied to a date and to a line, and is used to show how an audience's response could differ, rather than bolted on as a separate fact.",
      'It faces the hardest evidence, the attempted assault, instead of leaving it out, and ends with a judgement that reaches the last act, which is what a whole-play answer needs.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The storm at sea',
      summary:
        'A royal ship is caught in a violent storm. The Boatswain orders the courtiers below, telling them the waves care nothing for rank; the mariners cry that all is lost, and confused voices offstage shout that the ship is splitting.',
      setting: 'On board a ship at sea, in thunder and lightning',
      who: ['The Boatswain', 'Alonso', 'Antonio', 'Sebastian', 'Gonzalo', 'Ferdinand'],
      quote: 'What cares these roarers for the name of king?',
      themes: ['Power and authority', 'Illusion and reality'],
      tension: 5,
      significance:
        "The play opens on what looks like disaster and asks whether rank means anything against nature, before revealing that the storm is Prospero's art.",
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Prospero tells Miranda the past',
      summary:
        'Miranda begs her father to calm the storm. Prospero assures her that no one is hurt, then reveals that twelve years ago he was Duke of Milan, until his brother Antonio, backed by Alonso, King of Naples, overthrew him and set father and daughter adrift.',
      setting: "Before Prospero's cell on the island",
      who: ['Prospero', 'Miranda'],
      quote: 'I have done nothing but in care of thee',
      themes: ['Power and authority', 'Forgiveness and reconciliation'],
      tension: 2,
      significance:
        'The long exposition sets out the crime the rest of the play must answer, and shows Prospero in control of the story itself.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Ariel asks for his freedom',
      summary:
        "Ariel reports that he performed the storm “To every article” and that everyone is safe. When he reminds Prospero of his promised liberty, Prospero angrily recalls freeing him from the witch Sycorax's pine and threatens him with an oak, then promises to free him within two days.",
      setting: "Before Prospero's cell",
      who: ['Prospero', 'Ariel'],
      quote: 'Dost thou forget / From what a torment I did free thee?',
      themes: ['Freedom and servitude', 'Power and authority'],
      tension: 3,
      significance:
        "The first of the play's bargains between master and servant: Ariel's freedom is the reward that the whole plot has to earn.",
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Caliban curses his master',
      summary:
        'Prospero summons Caliban, who claims the island as his inheritance from Sycorax and remembers showing Prospero its springs and fertile places. Prospero says he treated him kindly until Caliban tried to assault Miranda; Caliban replies that learning their language has taught him only to curse.',
      setting: "Before Prospero's cell",
      who: ['Prospero', 'Miranda', 'Caliban'],
      quote: 'This island’s mine, by Sycorax my mother',
      themes: ['Colonialism and otherness', 'Nature vs nurture', 'Freedom and servitude'],
      tension: 4,
      significance:
        "The play's most argued-over relationship is set out in one fierce exchange, and both sides are given a case.",
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Ferdinand meets Miranda',
      summary:
        "Led by Ariel's songs, Ferdinand, who believes his father has drowned, meets Miranda and they fall in love at first sight. Prospero, delighted in his asides, pretends to think him a spy, charms him motionless when he draws his sword, and makes him a prisoner.",
      setting: "Before Prospero's cell, to Ariel's music",
      who: ['Prospero', 'Miranda', 'Ferdinand', 'Ariel'],
      quote: 'At the first sight / They have changed eyes',
      themes: ['Illusion and reality', 'Power and authority'],
      tension: 2,
      significance:
        'The love that will join Milan and Naples begins, watched and tested by the father who planned it.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'The plot to kill the King',
      summary:
        "Gonzalo tries to comfort the grieving Alonso and imagines an ideal commonwealth while Antonio and Sebastian mock him. When Ariel's music sends the others to sleep, Antonio persuades Sebastian to seize the crown of Naples: Antonio will stab the sleeping Alonso while Sebastian kills Gonzalo. Ariel wakes Gonzalo just as they draw their swords.",
      setting: 'Another part of the island',
      who: ['Gonzalo', 'Alonso', 'Antonio', 'Sebastian', 'Ariel'],
      quote: 'My strong imagination sees a crown / Dropping upon thy head',
      themes: ['Power and authority', 'Colonialism and otherness'],
      tension: 4,
      significance:
        'Antonio tries to repeat his crime against Prospero, which shows that the past is not over until someone breaks the pattern.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Caliban finds a new master',
      summary:
        'Caliban, carrying wood and cursing Prospero, hides from the jester Trinculo, who shelters under his cloak from a coming storm. The drunken butler Stephano gives Caliban wine; Caliban takes him for a god, swears to serve him and leads them off singing of freedom.',
      setting: 'Another part of the island, as thunder threatens',
      who: ['Caliban', 'Trinculo', 'Stephano'],
      quote: 'Freedom, high-day! high-day, freedom!',
      themes: ['Freedom and servitude', 'Colonialism and otherness'],
      tension: 2,
      significance:
        'Caliban celebrates freedom in the act of choosing a new master, a comic scene with a bitter edge.',
    },
    {
      where: 'Act 3, Scene 1',
      title: "The log-bearer and the lovers' vows",
      summary:
        "Ferdinand carries logs as Prospero ordered, lightened by thoughts of Miranda. She offers to carry them for him, tells him her name against her father's command, and the two promise to marry while Prospero watches unseen and blesses them.",
      setting: "Before Prospero's cell",
      who: ['Ferdinand', 'Miranda', 'Prospero'],
      quote: 'I am your wife if you will marry me',
      themes: ['Freedom and servitude', 'Forgiveness and reconciliation'],
      tension: 1,
      significance:
        'Service freely chosen for love is set against the forced service of Caliban, and the next generation makes its own promise.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'The plot against Prospero',
      summary:
        "Caliban urges Stephano to kill Prospero during his afternoon sleep, first seizing his books, and promises him Miranda. Ariel, invisible, starts a quarrel by calling out “Thou liest”, then plays their tune, and Caliban calms the frightened pair by describing the island's music.",
      setting: 'Another part of the island',
      who: ['Caliban', 'Stephano', 'Trinculo', 'Ariel'],
      quote: 'Be not afeard. The isle is full of noises',
      themes: ['Power and authority', 'Colonialism and otherness', 'Nature vs nurture'],
      tension: 3,
      significance:
        "The comic plot mirrors the courtly one, and Caliban speaks the play's most beautiful verse in the middle of planning a murder.",
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The vanishing banquet',
      summary:
        'Exhausted, the royal party are offered a banquet by strange spirit shapes. As they move to eat, Ariel appears as a harpy, the feast vanishes, and he accuses Alonso, Antonio and Sebastian of overthrowing Prospero. Alonso runs off in despair for his son; Antonio and Sebastian rush out to fight the spirits.',
      setting: 'Another part of the island, with Prospero watching unseen from above',
      who: ['Ariel', 'Alonso', 'Antonio', 'Sebastian', 'Gonzalo', 'Prospero'],
      quote: 'You are three men of sin',
      themes: ['Forgiveness and reconciliation', 'Illusion and reality'],
      tension: 5,
      significance:
        'Judgement is staged as spectacle, and the guilty are made to face what they did twelve years ago.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The masque broken off',
      summary:
        "Prospero gives Miranda to Ferdinand, warning him to wait for the wedding, and his spirits perform a masque of the goddesses Iris, Ceres and Juno. Suddenly remembering Caliban's plot, he breaks off the dance and tells Ferdinand that the whole world will dissolve like the vanished show. The conspirators, distracted by fine clothes hung out as bait, are hunted off by spirits in the shape of hounds.",
      setting: "Before Prospero's cell",
      who: ['Prospero', 'Ferdinand', 'Miranda', 'Ariel', 'Caliban', 'Stephano', 'Trinculo'],
      quote: 'We are such stuff / As dreams are made on',
      themes: ['Illusion and reality', 'Power and authority'],
      tension: 3,
      significance:
        "The celebration dissolves into a meditation on how brief life is, and the magician's power is shown to be troubled and ageing.",
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Virtue, not vengeance',
      summary:
        'With his enemies held in a spell, Prospero hears Ariel say that he would pity them if he were human, and chooses to forgive. He sends Ariel to release them and renounces his magic, promising to break his staff and drown his book.',
      setting: "Before Prospero's cell, in his magic robes",
      who: ['Prospero', 'Ariel'],
      quote: 'the rarer action is / In virtue than in vengeance',
      themes: ['Forgiveness and reconciliation', 'Power and authority'],
      tension: 4,
      significance:
        'The turning point of the play: the revenge plot the audience expects is refused.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The brave new world',
      summary:
        'Prospero reveals himself to Alonso, who gives back his dukedom and asks pardon, and forgives his brother, who does not reply. He shows Ferdinand and Miranda playing chess; father and son are reunited and Miranda marvels at the strangers. The Boatswain reports the ship unharmed, and Caliban, sent to tidy the cell, resolves to “seek for grace”.',
      setting: "Prospero's cell and the ground before it",
      who: [
        'Prospero',
        'Ariel',
        'The Boatswain',
        'Alonso',
        'Antonio',
        'Sebastian',
        'Gonzalo',
        'Ferdinand',
        'Miranda',
        'Caliban',
        'Stephano',
        'Trinculo',
      ],
      quote: 'O brave new world / That has such people in ’t',
      themes: [
        'Forgiveness and reconciliation',
        'Illusion and reality',
        'Colonialism and otherness',
      ],
      tension: 2,
      significance:
        "Families are restored and wrongs admitted, but Antonio's silence and Caliban's uncertain future keep the ending from being simple.",
    },
    {
      where: 'Epilogue',
      title: 'Prospero asks to be set free',
      summary:
        'Alone on stage with his magic given up, Prospero speaks to the audience in rhyming couplets. He says he is now held by their spell, and asks for their applause to release him and fill his sails, and for their prayers.',
      setting: 'The stage, speaking directly to the audience',
      who: ['Prospero'],
      quote: 'Let your indulgence set me free',
      themes: ['Freedom and servitude', 'Illusion and reality', 'Forgiveness and reconciliation'],
      tension: 1,
      significance:
        'Power passes from the magician to the audience, and the play ends by asking for the forgiveness it has just shown.',
    },
  ],

  relationships: [
    {
      from: 'Prospero',
      to: 'Miranda',
      kind: 'father and daughter',
      note: 'He calls everything he has done “in care of thee”, educates her and chooses her husband, but he also sends her to sleep, silences her and calls her an “advocate for an impostor”. Her pity for the ship and her proposal to Ferdinand show a will of her own.',
    },
    {
      from: 'Prospero',
      to: 'Ariel',
      kind: 'master and spirit servant',
      note: "Freed by Prospero from Sycorax's pine, Ariel serves him for a promised liberty. Prospero calls him “my delicate Ariel” and threatens him with an oak; the bond ends with Ariel set free “to the elements”.",
    },
    {
      from: 'Prospero',
      to: 'Caliban',
      kind: 'master and slave',
      note: "Caliban says he was once stroked and taught, and showed Prospero the island; after his attempt on Miranda he was confined to a rock and made to serve. The last word is Prospero's “this thing of darkness I / Acknowledge mine”, which can be heard as ownership or as responsibility.",
    },
    {
      from: 'Prospero',
      to: 'Antonio',
      kind: 'brothers: the deposed duke and the usurper',
      note: 'Antonio seized Milan while Prospero studied. In Act 5 Prospero forgives “Thy rankest fault” while saying the word brother would infect his mouth, and Antonio never replies.',
    },
    {
      from: 'Prospero',
      to: 'Alonso',
      kind: 'wronged duke and the king who helped depose him',
      note: "Alonso backed Antonio's coup. Grief for his son brings him to repentance, “Thy dukedom I resign”, and the marriage of their children joins the two houses.",
    },
    {
      from: 'Prospero',
      to: 'Gonzalo',
      kind: 'the exile and his preserver',
      note: "Put in charge of casting Prospero adrift, Gonzalo gave the boat food, fresh water, rich garments and books from Prospero's own library “Out of his charity”. In Act 5 Prospero weeps at the sight of him and calls him “My true preserver”.",
    },
    {
      from: 'Miranda',
      to: 'Ferdinand',
      kind: 'lovers, then betrothed',
      note: 'They fall in love at first sight, promise to marry in Act 3, Scene 1 and are discovered playing chess in Act 5. Their match turns the enmity of Milan and Naples into a family.',
    },
    {
      from: 'Alonso',
      to: 'Ferdinand',
      kind: 'father and son',
      note: 'Each believes the other drowned. Their reunion in Act 5, when Ferdinand kneels to his father with “Though the seas threaten, they are merciful”, is the great recognition of the romance.',
    },
    {
      from: 'Antonio',
      to: 'Sebastian',
      kind: 'tempter and would-be murderer',
      note: 'Antonio persuades Sebastian to plot the murder of his sleeping brother, offering to strike Alonso himself while Sebastian kills Gonzalo, and so repeats his own crime against Prospero. Ariel names them, with Alonso, as “three men of sin”.',
    },
    {
      from: 'Sebastian',
      to: 'Alonso',
      kind: 'brothers',
      note: "Sebastian blames Alonso for marrying his daughter to “an African”, then joins the plot to kill him for his crown, a second brother's betrayal to set beside Antonio's.",
    },
    {
      from: 'Caliban',
      to: 'Stephano',
      kind: 'worshipper and false god',
      note: 'Caliban takes the drunken butler for a god who “bears celestial liquor” and plots to make him king of the island, until he calls himself a “thrice-double ass” for it.',
    },
    {
      from: 'Stephano',
      to: 'Trinculo',
      kind: 'shipmates: a butler and a jester',
      note: "Their friendship lasts as long as the wine. Stephano beats Trinculo when Ariel's invisible voice makes it seem that Trinculo has called Caliban a liar.",
    },
    {
      from: 'Caliban',
      to: 'Miranda',
      kind: 'the accused and the accuser',
      note: 'Prospero enslaved Caliban after his attempt to violate Miranda, which Caliban does not deny. In the First Folio it is Miranda who condemns him and says she taught him to speak.',
    },
  ],

  compareWith: [
    {
      title: 'Macbeth',
      href: '/revision/texts/macbeth',
      reason:
        'Set by AQA and Pearson Edexcel beside The Tempest, it shows the murder of a sleeping king, the crime Antonio plots with Sebastian, and supernatural power used to destroy rather than to restore.',
    },
    {
      title: 'The Merchant of Venice',
      href: '/revision/texts/the-merchant-of-venice',
      reason:
        "Also on both GCSE lists, it sets a plea for mercy against revenge and asks, as Caliban's story does, how a society treats the outsider it depends on.",
    },
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        'On the AQA and Pearson Edexcel nineteenth-century lists, it has a created being who learns language, is rejected by his maker and turns to revenge, a close parallel to Prospero and Caliban.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'colonialism',
    'discrimination',
    'supernatural',
    'mythological_religious',
    'addiction',
    'intimate_relationships',
    'mortality',
    'political_ideology',
  ],

  sources: [
    {
      label:
        'The Tempest, Project Gutenberg eBook #1540: the edition held at src/data/full-texts/the-tempest.ts, read in full; every quotation checked against it',
      url: 'https://www.gutenberg.org/ebooks/1540',
    },
    {
      label:
        'First Folio (1623) text of Act 1, Scene 2, Internet Shakespeare Editions: the "Abhorred slave" speech is headed "Mira."',
      url: 'https://internetshakespeare.uvic.ca/doc/Tmp_F1/scene/1.2/index.html',
    },
    {
      label: 'Folger Shakespeare, The Tempest 1.2: gives the "Abhorred slave" speech to Miranda',
      url: 'https://www.folger.edu/explore/shakespeares-works/the-tempest/read/1/2/',
    },
    {
      label: 'Folger Shakespeare Library, The Tempest: first printed in the 1623 First Folio',
      url: 'https://www.folger.edu/explore/shakespeares-works/the-tempest/',
    },
    {
      label:
        'Royal Shakespeare Company, The Tempest: dates and sources (composition 1610-11; Revels Accounts record of 1 November 1611; Strachey, Jourdain, the Virginia Company report of 1610; Ovid and Golding 1567; Montaigne and Florio 1603; the Aeneid and the harpy)',
      url: 'https://www.rsc.org.uk/the-tempest/about-the-play/dates-and-sources',
    },
    {
      label:
        "Wikipedia, The Tempest (1 November 1611 by the King's Men before James I at Whitehall, Hallowmas night; court performance in winter 1612-13; listed first among the comedies in the First Folio; the unities, like The Comedy of Errors; stage directions suggesting the Blackfriars, and Kermode, who agreed it is a Blackfriars play but argued the Globe could easily have staged it too; Prospero's farewell to magic modelled on Medea's invocation in Ovid's Metamorphoses)",
      url: 'https://en.wikipedia.org/wiki/The_Tempest',
    },
    {
      label:
        "Wikipedia, Shakespeare's late romances (Dowden's term, dated both 1875 and 1877 in the same article, so the guide says only the 1870s; Folio listed The Tempest as a comedy)",
      url: 'https://en.wikipedia.org/wiki/Shakespeare%27s_late_romances',
    },
    {
      label:
        "Wikipedia, Blackfriars Theatre (King's Men at Blackfriars in winter and the Globe in summer from 1609)",
      url: 'https://en.wikipedia.org/wiki/Blackfriars_Theatre',
    },
    {
      label: 'Wikipedia, Daemonologie (James VI and I, first published 1597)',
      url: 'https://en.wikipedia.org/wiki/Daemonologie',
    },
    {
      label:
        'A True Declaration of the Estate of the Colonie in Virginia, published by the Council of Virginia, London, 1610 (the Virginia Company report named by the RSC)',
      url: 'https://archive.org/details/truedeclarationo00coun',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature specification, Issue 2, June 2019, Component 1: Section A Shakespeare is a two-part question, part a) close language analysis of an extract of approximately 30 lines, part b) a theme from the extract explored elsewhere in the play with context; closed book',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'Pearson Edexcel 1ET0/01 question paper, June 2023, Question 2 (The Tempest): the wording of parts (a) and (b), including "You must refer to the context of the play in your answer"',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English-Literature/2015/Exam-materials/1et0-01-que-20230518.pdf',
    },
    {
      label:
        'AQA GCSE English Literature 8702 subject content: The Tempest among the six Shakespeare set texts (as recorded in src/lib/board/prescribed-texts.ts, read 19 September 2026)',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content',
    },
    {
      label:
        'Wiktionary, mooncalf (a false conception, after a superstition that the moon caused it; a fool or simpleton)',
      url: 'https://en.wiktionary.org/wiki/mooncalf',
    },
    {
      label:
        'Wiktionary, Miranda (coined by Shakespeare for The Tempest, from Latin mirandus, admirable); Wikipedia, Miranda (given name), agrees',
      url: 'https://en.wiktionary.org/wiki/Miranda',
    },
    {
      label:
        'Wiktionary: welkin, brave, abjure, masque, harpy, dam, plantation, sea change, race (older senses)',
      url: 'https://en.wiktionary.org/wiki/welkin',
    },
    {
      label: "Genesis 1:16 (KJV), the greater and lesser lights, for the echo in Caliban's speech",
      url: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A16&version=KJV',
    },
    {
      label:
        'src/lib/board/prescribed-texts.ts: AQA 8702 and Pearson Edexcel 1ET0 prescribe The Tempest; OCR J352 does not',
    },
  ],
}
