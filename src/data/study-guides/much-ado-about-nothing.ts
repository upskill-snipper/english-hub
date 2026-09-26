import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Much Ado About Nothing, William Shakespeare (c. 1598-99). A SUPPLEMENT: the
 * page at /revision/texts/much-ado-about-nothing already carries an overview,
 * context, themes, characters and key quotations, so this file adds what it
 * lacked (passages for close reading, language analysis, structure and form,
 * vocabulary, exam practice and a model answer) and the timeline and character
 * map that the animations are drawn from.
 *
 * Every quotation here, in the extracts, the timeline and inside the prose, was
 * copied from the byte copy of Project Gutenberg #1519 held at
 * src/data/full-texts/much-ado-about-nothing.ts, and its speaker, act and scene
 * were checked by reading the whole play in that edition, not by searching for
 * the phrase alone. Balthasar's song and the hymn at the tomb are described,
 * never quoted, because the house rule forbids reproducing song lyrics.
 *
 * Theme names in the timeline are the page's own theme titles, and character
 * names follow the page's character list, so the two halves of the page agree.
 * Where the page above was found to be wrong while writing this file, the
 * error is recorded in the report that accompanied it rather than repeated.
 */
export const guide: StudyGuide = {
  slug: 'much-ado-about-nothing',
  title: 'Much Ado About Nothing',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: five acts and seventeen scenes, as set by AQA, Pearson Edexcel, OCR and Eduqas for GCSE English Literature.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Written about 1598 to 1599 and first printed in a quarto of 1600. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1519), held on this site as a byte copy.',
  },

  native: {
    overview: '/revision/texts/much-ado-about-nothing',
    context: '/revision/texts/much-ado-about-nothing',
    themes: '/revision/texts/much-ado-about-nothing',
    characters: '/revision/texts/much-ado-about-nothing',
    keyQuotes: '/revision/texts/much-ado-about-nothing',
  },

  extracts: [
    {
      title: 'The merry war begins',
      where: 'Act 1, Scene 1',
      pointer:
        'Before Leonato’s house, soon after Don Pedro’s company arrives: from Beatrice’s “I wonder that you will still be talking” to her “I know you of old.” The passage is prose; its line breaks follow the held edition.',
      text: 'BEATRICE: / I wonder that you will still be talking, Signior Benedick: / nobody marks you. / BENEDICK: / What! my dear Lady Disdain, are you yet living? / BEATRICE: / Is it possible Disdain should die while she hath such meet food / to feed it as Signior Benedick? Courtesy itself must convert to disdain if / you come in her presence. / BENEDICK: / Then is courtesy a turncoat. But it is certain I am loved of all / ladies, only you excepted; and I would I could find in my heart that I had / not a hard heart; for, truly, I love none. / BEATRICE: / A dear happiness to women: they would else have been troubled / with a pernicious suitor. I thank God and my cold blood, I am of your / humour for that. I had rather hear my dog bark at a crow than a man swear / he loves me. / BENEDICK: / God keep your Ladyship still in that mind; so some gentleman or / other shall scape a predestinate scratched face. / BEATRICE: / Scratching could not make it worse, and ’twere such a face / as yours were. / BENEDICK: / Well, you are a rare parrot-teacher. / BEATRICE: / A bird of my tongue is better than a beast of yours. / BENEDICK: / I would my horse had the speed of your tongue, and so good a / continuer. But keep your way, i’ God’s name; I have done. / BEATRICE: / You always end with a jade’s trick: I know you of old.',
      annotations: [
        {
          phrase: 'nobody marks you',
          note: 'Beatrice opens fire by claiming that no one is paying Benedick any attention. “Marks” means notices, so the first words between them are about who is watching whom, in a play built on noting, and the joke is that everyone on stage is watching them.',
        },
        {
          phrase: 'my dear Lady Disdain',
          note: 'Benedick turns Beatrice into a personification of scorn, with “dear” as sarcastic affection. She seizes his word at once and makes Disdain a living creature that feeds on him. This is the pattern of their wit throughout: each takes the other’s word and fires it back.',
        },
        {
          phrase: 'not a hard heart; for, truly, I love none',
          note: 'Benedick’s boast that he loves no one is built as a riddle about his own heart. Played one way it is pure swagger; played another it sounds like a man protesting too much, which prepares the audience for the heart he will offer Beatrice in Act 4.',
        },
        {
          phrase: 'I thank God and my cold blood',
          note: 'Beatrice agrees with Benedick in order to beat him: she too loves no one. Her “cold blood” answers his “hard heart”, so their rival claims match exactly, which suggests to the audience that they are far more alike than either will admit.',
        },
        {
          phrase: 'A bird of my tongue is better than a beast of yours',
          note: 'The insults pass through animals: parrot, bird, beast and finally horse. The balanced antithesis of bird and beast is a small victory in itself, because Beatrice makes her talking sound nimble and his sound brutish in a single line.',
        },
        {
          phrase: 'I know you of old',
          note: 'A jade is a worn-out horse, and Benedick has just pulled out of the race with “I have done”. Her last line suggests a history between them, which she hints at again in Act 2, Scene 1 when she says he once won her heart “with false dice”.',
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents the relationship between Beatrice and Benedick. Write about how Shakespeare presents their relationship in this extract, and how he presents it in the play as a whole.',
    },
    {
      title: 'Claudio rejects Hero at the altar',
      where: 'Act 4, Scene 1',
      pointer:
        'The church, a few lines into the wedding: from Claudio’s “Stand thee by, Friar” to “Her blush is guiltiness, not modesty.” The passage is verse.',
      text: 'CLAUDIO: / Stand thee by, Friar. Father, by your leave: / Will you with free and unconstrained soul / Give me this maid, your daughter? / LEONATO: / As freely, son, as God did give her me. / CLAUDIO: / And what have I to give you back whose worth / May counterpoise this rich and precious gift? / DON PEDRO: / Nothing, unless you render her again. / CLAUDIO: / Sweet Prince, you learn me noble thankfulness. / There, Leonato, take her back again: / Give not this rotten orange to your friend; / She’s but the sign and semblance of her honour. / Behold! how like a maid she blushes here. / O! what authority and show of truth / Can cunning sin cover itself withal. / Comes not that blood as modest evidence / To witness simple virtue? Would you not swear, / All you that see her, that she were a maid, / By these exterior shows? But she is none: / She knows the heat of a luxurious bed; / Her blush is guiltiness, not modesty.',
      annotations: [
        {
          phrase: 'this rich and precious gift',
          note: 'Claudio speaks of Hero as goods handed from one man to another, and he is setting a trap: the language of generous exchange is about to become the language of a refund. Hero herself has no part in the transaction.',
        },
        {
          phrase: 'Nothing, unless you render her again',
          note: 'Don Pedro, who wooed Hero for Claudio in Act 2, now speaks the cue that lets him return her. The title word “Nothing” sits at the start of the line, and the Prince’s part in the humiliation is planned, not accidental.',
        },
        {
          phrase: 'Give not this rotten orange to your friend',
          note: 'Fruit that looks sound and is rotten inside is an image of appearance against reality. It also echoes Beatrice, who in Act 2, Scene 1 called the jealous Claudio “civil as an orange”: the audience may hear the jealousy passing from the accuser to the image he uses.',
        },
        {
          phrase: 'the sign and semblance of her honour',
          note: 'The alliteration makes the charge sound final, but the word “semblance” is Borachio’s: in Act 2, Scene 2 he scripted the lie that Claudio was about to be cheated “with the semblance of a maid”. Claudio is repeating the villains’ script without knowing it, accusing Hero of being a mere appearance while he is himself the victim of one.',
        },
        {
          phrase: 'Behold! how like a maid she blushes here',
          note: 'An imperative that turns the wedding guests into an audience. Claudio reads Hero’s blush as guilt; minutes later the Friar reads the same blushes as proof of innocence. One sign, two readings: the play’s argument about noting in miniature.',
        },
        {
          phrase: 'Her blush is guiltiness, not modesty',
          note: 'The speech ends on a neat antithesis in a single end-stopped line. Its tidy certainty is the problem, because the audience already knows from Borachio’s boast in Act 3, Scene 3 that Claudio saw Margaret, not Hero.',
        },
      ],
      question:
        'Explore how Shakespeare presents Claudio’s attitude to Hero in this extract. Refer closely to the language and structure of the extract in your answer.',
    },
    {
      title: '“Kill Claudio”',
      where: 'Act 4, Scene 1',
      pointer:
        'The empty church after the Friar leads Hero and Leonato away: from Benedick’s “Lady Beatrice, have you wept all this while?” to his “Ha! not for the wide world.” The passage is prose; its line breaks follow the held edition.',
      text: 'BENEDICK: / Lady Beatrice, have you wept all this while? / BEATRICE: / Yea, and I will weep a while longer. / BENEDICK: / I will not desire that. / BEATRICE: / You have no reason; I do it freely. / BENEDICK: / Surely I do believe your fair cousin is wronged. / BEATRICE: / Ah! how much might the man deserve of me that would right her. / BENEDICK: / Is there any way to show such friendship? / BEATRICE: / A very even way, but no such friend. / BENEDICK: / May a man do it? / BEATRICE: / It is a man’s office, but not yours. / BENEDICK: / I do love nothing in the world so well as you: is not that strange? / BEATRICE: / As strange as the thing I know not. It were as possible for / me to say I loved nothing so well as you; but believe me not, and yet / I lie not; I confess nothing, nor I deny nothing. I am sorry for my / cousin. / BENEDICK: / By my sword, Beatrice, thou lovest me. / BEATRICE: / Do not swear by it, and eat it. / BENEDICK: / I will swear by it that you love me; and I will make him eat it / that says I love not you. / BEATRICE: / Will you not eat your word? / BENEDICK: / With no sauce that can be devised to it. I protest I love thee. / BEATRICE: / Why then, God forgive me! / BENEDICK: / What offence, sweet Beatrice? / BEATRICE: / You have stayed me in a happy hour: I was about to protest I loved you. / BENEDICK: / And do it with all thy heart. / BEATRICE: / I love you with so much of my heart that none is left to protest. / BENEDICK: / Come, bid me do anything for thee. / BEATRICE: / Kill Claudio. / BENEDICK: / Ha! not for the wide world.',
      annotations: [
        {
          phrase: 'It is a man’s office, but not yours',
          note: 'Beatrice names the rule of Messina: avenging a woman’s honour is men’s work. The sting is “but not yours”, a challenge to Benedick’s manhood that sets up her demand, and her later cry “O God, that I were a man!”',
        },
        {
          phrase: 'I do love nothing in the world so well as you',
          note: 'Benedick’s first declaration of love to Beatrice is shaped as a paradox built on the title word. Her answer uses the same word three times, ending “I confess nothing, nor I deny nothing”, so that even here, in grief, love is spoken through their shared game with language.',
        },
        {
          phrase: 'By my sword, Beatrice, thou lovest me',
          note: 'Benedick swears on his weapon, the natural oath of a soldier. It is dramatic irony of a painful kind: the sword he offers as a pledge of love is the thing Beatrice is about to ask him to use.',
        },
        {
          phrase: 'Why then, God forgive me',
          note: 'Beatrice treats confessing love as a sin to be forgiven, a joke at her own long scorn. The setting sharpens it: these two exchange private vows in the church where a wedding has just been broken off.',
        },
        {
          phrase: 'Kill Claudio',
          note: 'Soon after the most tender line in the passage comes its shortest, two words with no qualification. Their wit has been all elaboration; this is its opposite, and the change of rhythm is the change of the play from comedy towards tragedy.',
        },
        {
          phrase: 'Ha! not for the wide world',
          note: 'Benedick refuses at once, because his first loyalty is still to his fellow soldier. Before the scene ends he agrees to challenge Claudio, so this refusal marks the last moment his loyalty lies with the men of Don Pedro’s company rather than with Beatrice.',
        },
      ],
      question:
        'Look at this extract. How does Shakespeare create mood and tension for an audience here? Refer closely to details from the extract to support your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Puns on “nothing” and “noting”',
      example:
        'Claudio asks “didst thou note the daughter of Signior Leonato?” and Benedick replies “I noted her not; but I looked on her” (Act 1, Scene 1). Before the song in Act 2, Scene 3, Balthasar warns “There’s not a note of mine that’s worth the noting”, and Don Pedro answers “Notes, notes, forsooth, and nothing!”',
      effect:
        'In the English of Shakespeare’s time “nothing” and “noting” could sound almost the same, which is why the title is usually read as a pun. The wordplay keeps reminding the audience that the plot runs on watching and overhearing, and that the difference between looking and truly noting is where every mistake in Messina happens.',
    },
    {
      technique: 'Hunting, angling and bird-catching imagery',
      example:
        'During the gulling of Benedick, Claudio whispers “Stalk on, stalk on” to Don Pedro, because “the fowl sits”, and “Bait the hook well: this fish will bite” (Act 2, Scene 3). Ursula echoes him for Beatrice: “So angle we for Beatrice”, and afterwards, “She’s lim’d, I warrant you” (Act 3, Scene 1).',
      effect:
        'The matchmakers speak of their friends as prey and of love as a trap, which keeps the scenes comic and lets the audience enjoy the plotters’ skill. The same imagery is uncomfortable on reflection: the kind trick and Don John’s cruel one are both hunts, and the play asks whether the motive is the only difference.',
    },
    {
      technique: 'Military imagery for love and wit',
      example:
        'Leonato explains the “merry war” and the “skirmish of wit” between Beatrice and Benedick (Act 1, Scene 1); Benedick complains “She speaks poniards, and every word stabs” and that he “stood like a man at a mark, with a whole army shooting at me” (Act 2, Scene 1).',
      effect:
        'The men have just come home from a real war, and Beatrice and Benedick carry on fighting with words. The metaphor is playful until Act 4, when “Kill Claudio” asks Benedick to turn the war of words into a real duel, and the language of the comedy suddenly means what it says.',
    },
    {
      technique: 'Malapropism',
      example:
        'Dogberry reports that the watch have “comprehended” two “aspicious persons” (Act 3, Scene 5), for apprehended two suspicious ones; he opens the examination with “Is our whole dissembly appeared?” and tells one of the prisoners he will be “condemned into everlasting redemption” (Act 4, Scene 2).',
      effect:
        'Dogberry reaches for grand official words and grabs their opposites, so his dignity collapses every time he speaks. The deeper joke is structural: the man who cannot say what he means is the one who has found the truth, while the fluent lords of Messina have believed a lie. “Dissembly” is also, by accident, the right word for a play so full of dissembling.',
    },
    {
      technique: 'Antithesis and oxymoron',
      example:
        'Claudio’s farewell to Hero at the altar: “But fare thee well, most foul, most fair! farewell, / Thou pure impiety, and impious purity!” (Act 4, Scene 1).',
      effect:
        'The balanced opposites turn Hero into a paradox, beautiful outside and corrupt within. The polish of the rhetoric is revealing: this is a speech Claudio has had a night to prepare, having vowed in Act 3, Scene 2 to shame her “in the congregation”, and its neatness can suggest how much he enjoys the performance of injured honour.',
    },
    {
      technique: 'Repetition',
      example:
        'Leonato over his fallen daughter: “But mine, and mine I lov’d, and mine I prais’d, / And mine that I was proud on”, and his lament that she has fallen “Into a pit of ink” that the whole sea could not wash clean (Act 4, Scene 1).',
      effect:
        'The fourfold “mine” makes Hero a possession and her disgrace a wound to her father’s pride. The image of ink is a stain that spreads and cannot be removed, which is how Messina thinks of a woman’s lost reputation. The repetition shows that Leonato’s grief is real, and also whose honour he is really mourning.',
    },
    {
      technique: 'Rhetorical questions and the rhythm of anger',
      example:
        'Beatrice asks whether Claudio is not a villain who has “slandered”, “scorned” and “dishonoured” her kinswoman, and a moment later complains that “manhood is melted” into “curtsies, valour into compliment” (Act 4, Scene 1).',
      effect:
        'The triple verbs pile up the charges against Claudio, and the short parallel clauses that follow make her prose sound like a torrent. Her target widens from one man to all the courtly men who are “only turned into tongue”, so her anger becomes a criticism of a society in which men talk about honour and women pay for it.',
    },
    {
      technique: 'Wordplay on names',
      example:
        'Don John: “Leonato’s Hero, your Hero, every man’s Hero” (Act 3, Scene 2); Claudio at the altar: “O Hero! what a Hero hadst thou been” and “Hero itself can blot out Hero’s virtue” (Act 4, Scene 1).',
      effect:
        'Repeating her name, Don John slides from possession to slander in one line: “every man’s Hero” is an accusation. Claudio uses her name as if it were her reputation, and the play suggests that in Messina a woman’s name is what men say about her. Benedick’s name gets the same treatment in comedy, as the men joke about “Benedick the married man”.',
    },
    {
      technique: 'Classical allusion',
      example:
        'Claudio: “You seem to me as Dian in her orb”, but “more intemperate in your blood / Than Venus” (Act 4, Scene 1). Don Pedro calls his matchmaking “one of Hercules’ labours” (Act 2, Scene 1).',
      effect:
        'Claudio can picture Hero only as a goddess: Diana, the goddess of chastity, or Venus, the goddess of love. There is no ordinary woman between the two, which suggests his love was an idealisation all along and could flip into disgust at one false sight.',
    },
  ],

  structureForm: [
    {
      heading: 'A double plot built from one device',
      body: 'Two love stories run side by side, and both are steered by staged scenes that someone overhears. Don Pedro’s kind trick brings Beatrice and Benedick together; Don John’s cruel one parts Claudio and Hero. Shakespeare interleaves them so that the audience cannot miss the parallel: Borachio proposes the window plot in Act 2, Scene 2, between Don Pedro announcing his matchmaking plan and the gulling of Benedick, and Don John makes his accusation in Act 3, Scene 2, straight after Beatrice has been gulled. The method is the same. Only the motive differs, and the play asks how far a method can be trusted when it serves both.',
    },
    {
      heading: 'The first overhearing is wrong',
      body: 'Noting goes astray from the start. In Act 1, Scene 2 Antonio reports that a servant overheard the Prince and Claudio in the orchard and understood that the Prince loved Hero himself; in Act 1, Scene 3 Borachio, who hid “behind the arras” while the two talked, reports correctly that the Prince will woo her for Claudio. Then at the masked ball Don John and Borachio tell Claudio the Prince is wooing for himself, Claudio believes them, and even Benedick believes it. Before the main deception begins, the audience has watched three characters misread the Prince’s wooing, which makes Claudio’s later readiness to believe the worst look like a habit rather than an accident.',
    },
    {
      heading: 'Mirror scenes: the two gullings',
      body: 'Act 2, Scene 3 and Act 3, Scene 1 are built as a pair. Benedick is gulled by men, Beatrice by women; each hides in the garden, each hears that the other is dying of love and that their own pride is to blame, and each ends the scene alone, deciding to love. The form is different, though. Benedick’s soliloquy is rambling prose, arguing himself round (“doth not the appetite alter?”). Beatrice speaks ten lines of rhymed verse, two alternating quatrains and a closing couplet, the rhyme pattern of a Shakespearean sonnet with one quatrain missing. One reading is that her change is the more serious and complete; another is that Shakespeare gives her the love poet’s form she has always mocked, as a gentle joke.',
    },
    {
      heading: 'The scene we never see',
      body: 'The event that drives the whole plot, Borachio wooing Margaret at Hero’s window, is never staged. The audience learns of it in Act 3, Scene 3, when Borachio boasts drunkenly to Conrade and the Watch overhear him. Keeping it offstage has two effects. It protects Hero, since the audience never sees anything that could make them doubt her; and it puts the audience where Messina is, relying on report. We believe Borachio because he is gloating to an accomplice, and the Watch arrest him on the strength of hearing it, which is exactly the kind of evidence Claudio trusted.',
    },
    {
      heading: 'Dramatic irony and the truth delayed',
      body: 'The truth is caught before the wedding, and then held up. In Act 3, Scene 5, Dogberry and Verges come to Leonato to report the arrest of two “aspicious persons”, but their rambling tries his patience (“Neighbours, you are tedious”) and he sends them away to examine the prisoners themselves, because he is late for the church. So the audience enters Act 4 knowing that Hero is innocent and that the proof exists. The wedding is watched not with suspense about what is true but with dread about how much harm will be done before the truth arrives.',
    },
    {
      heading: 'Prose and verse',
      body: 'Most of the play is in prose, and prose is the medium of wit: Beatrice, Benedick and Dogberry speak it for most of the play. Verse marks formal and romantic speech. Claudio confides his love to Don Pedro in blank verse in Act 1, Scene 1, and the accusation and its aftermath in the church are mostly in verse, until Beatrice and Benedick are left alone and speak their love, and “Kill Claudio”, in prose. The switch can be read as a signal: the lovers are most honest in the plain form, while Claudio is most dangerous when his feelings take on the dignity of verse.',
    },
    {
      heading: 'A comedy that passes through a death',
      body: 'The Friar’s plan gives the play a shape of death and return. He tells Hero “Come, lady, die to live”, her supposed death is mourned with an epitaph at the family monument in Act 5, Scene 3, and in Act 5, Scene 4 she unmasks and tells Claudio “One Hero died defil’d, but I do live”. The play ends with two marriages agreed and a dance, as a comedy should. But the route there runs through a public shaming, a father who wishes his daughter dead and a demand for a killing, and the strongest answers ask whether a comic ending can undo what the middle of the play has shown.',
    },
    {
      heading: 'Two weddings, two masks',
      body: 'The ending repeats the beginning with a difference. The masked ball of Act 2, Scene 1 returns in the masked ladies of Act 5, Scene 4, and the failed wedding of Act 4 returns as a second wedding. This time Claudio, who trusted his eyes at the window, must marry without seeing: “Sweet, let me see your face”, he asks, and Leonato refuses until he has sworn. Beatrice and Benedick, meanwhile, are exposed by sonnets in their own handwriting, “our own hands against our hearts”, so that written proof finally does what overheard talk did earlier, and this time it is true.',
    },
    {
      heading: 'An unsettled close',
      body: 'Not everything is tied up. Don Pedro, who made both matches, is left alone; Benedick tells him “Prince, thou art sad” and “get thee a wife, get thee a wife”. News comes that Don John has been captured and brought back, but Benedick puts off his punishment until tomorrow and calls for the pipers. Hero is given no speech about what she has suffered. The festive ending is real, but it is also brisk, and a production can make the audience feel either the relief of the dance or the silences underneath it.',
    },
    {
      heading: 'What the first printing shows',
      body: 'The play was first printed in a quarto of 1600 and then in the First Folio of 1623. In the examination scene, Act 4, Scene 2, the quarto’s speech headings give the names of the actors Will Kemp and Richard Cowley instead of Dogberry and Verges, which suggests the parts were written with the company’s two clowns in mind. The early text also leaves decisions to editors. In Act 5, Scene 4 the quarto gives the line that silences Beatrice with a kiss to Leonato; this edition, like the Folger edition, gives “Peace! I will stop your mouth” to Benedick. Who speaks it changes the moment: a lover ending the game, or an uncle ending a woman’s speech.',
    },
  ],

  vocabulary: [
    {
      term: 'Noting',
      definition:
        'Observing, overhearing or taking note. In Shakespeare’s English it could sound almost the same as “nothing”, which is why the title is usually read as a pun.',
    },
    {
      term: 'Gull',
      definition:
        'As a noun, a trick; as a verb, to trick someone. Benedick almost suspects the staged conversation is “a gull” (Act 2, Scene 3), which is why the two tricks on the lovers can be called gulling scenes.',
    },
    {
      term: 'Merry war',
      definition:
        'Leonato’s name for the running contest of insults between Beatrice and Benedick (Act 1, Scene 1): a fight that both sides seem to enjoy.',
    },
    {
      term: 'Malapropism',
      definition:
        'The comic misuse of a word in place of one that sounds like it, as when Dogberry says “aspicious” for suspicious. Such a mistake is also called a Dogberryism, after this play’s constable.',
    },
    {
      term: 'Soliloquy',
      definition:
        'A speech in which a character alone on stage speaks their thoughts aloud. Benedick’s in Act 2, Scene 3 and Beatrice’s in Act 3, Scene 1 show each deciding to love.',
    },
    {
      term: 'Aside',
      definition:
        'A remark the audience hears but other characters on stage are meant not to. Benedick’s asides while he eavesdrops in Act 2, Scene 3 let the audience watch the trick working.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not. From Act 3, Scene 3 the audience knows Hero is innocent, so the wedding scene is watched in dread.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of ten syllables with a regular beat. Most of this play is in prose, so the moments in verse, such as the accusation in the church, stand out.',
    },
    {
      term: 'Headborough',
      definition:
        'A parish peace officer or under-constable. It is Verges’s title in the cast list, as partner to Dogberry, the constable.',
    },
    {
      term: 'The Watch',
      definition:
        'Ordinary citizens appointed to patrol the streets at night and arrest wrongdoers. Dogberry’s watchmen overhear Borachio and arrest him in Act 3, Scene 3.',
    },
    {
      term: 'Sexton',
      definition:
        'A church official who looks after the building and churchyard. In Act 4, Scene 2 the Sexton is the one person who conducts the examination sensibly.',
    },
    {
      term: 'Haggard',
      definition:
        'A hawk caught wild as an adult, hard to tame. Hero calls Beatrice’s spirits as wild “As haggards of the rock”, and Beatrice answers the image by promising to tame her “wild heart”.',
    },
    {
      term: 'Limed',
      definition:
        'Caught with birdlime, a sticky substance smeared on branches to trap birds. Ursula’s “She’s lim’d” means Beatrice has been caught by the trick.',
    },
    {
      term: 'Requite',
      definition:
        'To return someone’s love. Both lovers use it on deciding to love: Benedick decides that Beatrice’s love “must be requited”, and Beatrice promises “I will requite thee”.',
    },
    {
      term: 'Misprision',
      definition:
        'A mistake or misunderstanding. The Friar suspects “some strange misprision in the princes” (Act 4, Scene 1), the first calm diagnosis of what has gone wrong.',
    },
    {
      term: 'Cuckold',
      definition:
        'A man whose wife is unfaithful to him, mocked in Shakespeare’s time as wearing horns. The play’s many jokes about horns, and Beatrice’s devil, an “old cuckold, with horns on his head”, suggest a male fear of being deceived that lies behind the play’s jokes about marriage.',
    },
    {
      term: 'Arras',
      definition:
        'A tapestry hung on a wall. In Act 1, Scene 3 Borachio reports that he hid behind one to overhear the Prince and Claudio, one of the play’s many eavesdroppings.',
    },
    {
      term: 'Epitaph',
      definition:
        'A short text written in memory of someone who has died. Claudio reads Hero’s at the family monument in Act 5, Scene 3.',
    },
    {
      term: 'Hymen',
      definition:
        'The classical god of marriage. After the mourning at the tomb, Claudio hopes Hymen will bring a luckier outcome to the second wedding.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Starting with the extract from Act 1, Scene 1 (from Beatrice’s “I wonder that you will still be talking” to “I know you of old”), explore how Shakespeare presents the relationship between Beatrice and Benedick. Write about how Shakespeare presents their relationship in this extract, and how he presents it in the play as a whole.',
        skill: 'Extract and whole-play essay: language analysis, whole-text argument and context',
        guidance: [
          'Open with an argument, not a summary: for example, that the merry war is a defence both characters use, and that the play moves them from performing scorn to speaking plainly.',
          'Analyse the extract closely: how each seizes the other’s words (“Lady Disdain”, “courtesy a turncoat”), the matching claims of a “hard heart” and “cold blood”, and the animal insults that end with Benedick giving up the race.',
          'Pick up the hint of a past in “I know you of old”, and link it to Act 2, Scene 1, where Beatrice says Benedick once won her heart “with false dice”.',
          'Move to the gulling scenes: compare Benedick’s prose soliloquy in Act 2, Scene 3 with Beatrice’s rhymed verse in Act 3, Scene 1, and ask why both change their minds on hearing that their pride is to blame.',
          'Treat Act 4, Scene 1 as the turning point: love declared in a church after Hero’s shaming, then “Kill Claudio”, which tests whether Benedick’s love will turn into action.',
          'End with Act 5, Scene 4: the sonnets in their own handwriting, the last round of sparring, and the kiss. Say whether the ending changes them or only lets them keep fighting in a new way.',
          'Weave in context where it sharpens a point: what Messina expects of women’s speech and obedience, heard in Antonio’s advice to Hero to “be ruled by your father”, which Beatrice mocks at once.',
        ],
      },
      {
        question:
          'Part (a): Explore how Shakespeare presents Claudio’s attitude to Hero in the extract from Act 4, Scene 1 (from “Stand thee by, Friar” to “Her blush is guiltiness, not modesty”). Refer closely to the language and structure of the extract in your answer.',
        skill: 'Close language analysis of an extract',
        guidance: [
          'Give an overview first: Claudio turns a wedding into a public trial, and he stages it like a performance.',
          'Analyse the language of exchange at the start (“this rich and precious gift”, “render her again”, “take her back again”) and what it shows about how Hero is valued.',
          'Analyse the imagery and its irony: the “rotten orange”, and the word “semblance”, which Borachio used in Act 2, Scene 2 when he scripted the lie Don John would tell.',
          'Comment on structure: Claudio’s questions to Leonato set a trap; Don Pedro gives him his cue; the imperative “Behold!” directs everyone’s eyes; the speech closes on an end-stopped antithesis.',
          'Stay inside the extract for this part. The whole play belongs in part (b).',
        ],
      },
      {
        question:
          'Part (b): In the extract, Claudio rejects Hero because he believes she has dishonoured him. Explain the importance of honour elsewhere in the play. In your answer you should consider how honour is shown and why it matters so much to the characters, and refer to the context of the play.',
        skill: 'Whole-text response: theme, character and context',
        guidance: [
          'Define honour in two ways from the start: for the men, reputation and courage; for women, chastity, judged by what others say.',
          'Show how Don John uses Claudio’s honour against him in Act 3, Scene 2, telling him “it would better fit your honour” to change his mind, and how Claudio chooses the most public place, “the congregation”, to repair it.',
          'Analyse Leonato in Act 4, Scene 1: “Death is the fairest cover for her shame”, then his challenge to Claudio in Act 5, Scene 1 “with grey hairs and bruise of many days”.',
          'Use Beatrice: avenging honour is “a man’s office”, so she must ask Benedick to act, and his challenge to Claudio shows him choosing a woman’s cause over the brotherhood of soldiers.',
          'Explain how honour is restored: the Friar’s plan, Claudio’s epitaph declaring Hero “Done to death by slanderous tongues”, and Hero’s public “surely as I live, I am a maid”. Ask whether anything has changed except her reputation.',
          'Link to context throughout, briefly and precisely: a society in which a daughter’s reputation belonged to her family, and in which men settled insults with swords.',
        ],
      },
      {
        question:
          'How far does Shakespeare present Claudio as a man the audience can forgive? Explore at least two moments from the play to support your ideas.',
        skill: 'Discursive whole-text essay: character, methods and evaluation',
        guidance: [
          'Set out both cases in the introduction: Claudio is young and cleverly deceived; he is also quick to suspect and chooses a public, cruel way to act.',
          'Look at his first scenes: love at first sight, the question “Hath Leonato any son, my lord?”, which can be played as practical or as mercenary, and his instant belief in Act 2, Scene 1 that the Prince has betrayed him.',
          'Analyse the decision in Act 3, Scene 2 to shame Hero “in the congregation”, made before he has seen anything, and the rehearsed rhetoric of the wedding.',
          'Use Act 5, Scene 1: he and Don Pedro joke to Benedick about nearly having “our two noses snapped off” by two old men after Hero’s supposed death, then hears Borachio’s confession and says “I have drunk poison whiles he utter’d it”.',
          'Judge his defence, “sinn’d I not / But in mistaking”, and his penance: the epitaph and the vow “Yearly will I do this rite”, then his willingness to marry a bride unseen. Note that his line about marrying her even “were she an Ethiope” relies on the racial prejudice of Shakespeare’s time.',
          'Reach a clear verdict and give the alternative its due: for example, that the play forgives him because comedy needs a wedding, but gives the audience enough to withhold its own forgiveness.',
        ],
      },
      {
        question: 'Write about how Shakespeare presents deception in Much Ado About Nothing.',
        skill: 'Whole-play essay: themes, language, structure and form',
        guidance: [
          'Argue that the play is less interested in lies than in belief: the same method produces joy and near-tragedy, depending on who uses it and why.',
          'Compare the three staged deceptions: the two gullings in the garden and Borachio’s scene at the window, and explain why the window scene is reported rather than shown.',
          'Show that deception is also self-deception: Beatrice and Benedick have been hiding their feelings from themselves, which is why the tricks work so quickly.',
          'Include the deceptions that heal as well as those that harm: the Friar’s plan for Hero to “die to live”, and the masked bride of the last scene.',
          'Use Dogberry and the Watch to show that the truth comes out through clumsy, honest listening, and is nearly lost through Leonato’s haste in Act 3, Scene 5.',
          'Conclude by judging whether the play trusts deception by the end, or leaves the audience uneasy about how easily people in Messina believe what they are shown.',
        ],
      },
    ],
    tips: [
      'Use the pun in the title precisely. Do not just say the play is about noting; show a moment where noting goes wrong, such as the blush that Claudio and the Friar read in opposite ways.',
      'Keep the three tricks distinct. The gullings of Benedick and Beatrice are staged conversations meant to be overheard; the window scene is a performance meant to be watched. Comparing their methods and motives is a strong structural point.',
      'Remember what the play does not show. The window scene happens offstage and is reported by Borachio in Act 3, Scene 3; an answer that describes it as a scene the audience watches has misremembered the play.',
      'Quote accurately, because this play is often misquoted. Beatrice’s words are “O God, that I were a man!”, followed by the wish to “eat his heart in the market-place”, and Benedick’s first answer to “Kill Claudio” is “Ha! not for the wide world”.',
      'Give Dogberry a serious point. The truth is found by the Watch, and it is held up only because Leonato is too busy to listen in Act 3, Scene 5. That is dramatic irony, not just comic relief.',
      'Avoid calling Claudio simply a villain or a victim. Use his own defence, “sinn’d I not / But in mistaking”, and argue whether the play accepts it.',
      'Notice prose and verse. Beatrice and Benedick speak their love, and “Kill Claudio”, in prose, while Claudio accuses Hero in verse: say what that contrast suggests.',
      'Check how your own board treats context in the Shakespeare question. Pearson Edexcel asks for context in the second part of its two-part question, while the Eduqas specification describes its Shakespeare section in terms of language, structure, form, themes and characters.',
    ],
  },

  modelAnswer: {
    question:
      'In the extract from Act 4, Scene 1, Claudio rejects Hero because he believes she has dishonoured him. Explain the importance of honour elsewhere in the play.',
    paragraph:
      'Shakespeare presents honour in Messina as something that exists in other people’s eyes, which is why a performance can destroy it and another performance can restore it. Don John appeals to status as much as to evidence: his offer to show Claudio the window ends with the claim that “it would better fit your honour” to change his mind, and Claudio’s response is revealing, since he will shame her “in the congregation, where I should wed”. He chooses the most public place in the play because his reputation must be seen to be repaired. Leonato follows the same logic. The repetition in “But mine, and mine I lov’d, and mine I prais’d” suggests that what he mourns is less his daughter than his pride in her, and he wishes her dead because “Death is the fairest cover for her shame”. Even the cure is theatre: the Friar tells Hero to “die to live”, Claudio hangs an epitaph declaring her “Done to death by slanderous tongues”, and Hero must announce before witnesses, “surely as I live, I am a maid.” One reading is that the comedy repairs the damage. A more convincing one is that it repairs only the reputation, leaving untouched the code that nearly killed her, which may be why the second wedding can feel uneasy in performance.',
    commentary: [
      'The first sentence is an argument about honour, not a definition of it, and every later sentence proves part of that claim.',
      'Quotations are short, exact and embedded, and each is analysed for what it shows: “mine” for possession, “the congregation” for publicity, “die to live” for theatre.',
      'It ranges across the play, from Don John’s accusation in Act 3 to the last scene, as a question on the theme elsewhere in the play requires.',
      'Context is built into the argument, a society in which a woman’s honour is a matter of public report, rather than added as a separate paragraph.',
      'It ends by weighing two readings and saying which is more convincing and why, which is what lifts an answer from explanation to evaluation.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The soldiers come home',
      summary:
        'News arrives that Don Pedro’s army is returning in victory, and Beatrice at once asks mockingly after Benedick. The two resume their war of words. Claudio confesses to Benedick and then to Don Pedro that he loves Hero, and Don Pedro offers to woo her for him in disguise at that night’s revels.',
      setting: 'Before Leonato’s house in Messina',
      who: ['Leonato', 'Beatrice', 'Benedick', 'Claudio', 'Don Pedro', 'Hero', 'Don John'],
      quote: 'There is a kind of merry war',
      themes: ['Language and wit', 'Love and deception', 'Noting and misinterpretation'],
      tension: 1,
      significance:
        'Both love plots begin here, and so does the habit of wooing by proxy that the rest of the play puts under strain.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Don John’s discontent',
      summary:
        'Don John, recently reconciled with his brother the Prince after standing out against him, tells Conrade he will not pretend to be content. Borachio brings news that he overheard the plan for Don Pedro to win Hero for Claudio, and Don John resolves to cross the young man who has all the glory.',
      setting: 'Another room in Leonato’s house',
      who: ['Don John', 'Conrade', 'Borachio'],
      quote: 'let me be that I am, and seek not to alter me',
      themes: ['Appearance versus reality', 'Honour and reputation'],
      tension: 2,
      significance:
        'The villain announces himself openly to the audience, so every later deception is watched with knowledge the characters lack.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'The masked ball',
      summary:
        'At the dance, Don Pedro woos Hero in Claudio’s name, and a masked Benedick hears Beatrice call him “the Prince’s jester”. Don John tells Claudio the Prince is wooing for himself, and Claudio believes it at once, until Don Pedro tells him that he has won Hero for him. The wedding is fixed for a week away, and Don Pedro plans to make a match of Beatrice and Benedick.',
      setting: 'A hall in Leonato’s house, during a masked dance',
      who: [
        'Don Pedro',
        'Hero',
        'Beatrice',
        'Benedick',
        'Claudio',
        'Don John',
        'Borachio',
        'Leonato',
      ],
      quote: 'Friendship is constant in all other things / Save in the office and affairs of love',
      themes: ['Appearance versus reality', 'Noting and misinterpretation', 'Love and deception'],
      tension: 2,
      significance:
        'Claudio’s first false belief, easily planted and quickly cleared, shows how ready he is to trust the worst.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Borachio’s plan',
      summary:
        'Borachio proposes to woo Hero’s gentlewoman Margaret at Hero’s chamber window, calling her Hero, while Don John brings the Prince and Claudio to watch on the night before the wedding. Don John promises him a thousand ducats if it works.',
      setting: 'Another room in Leonato’s house',
      who: ['Don John', 'Borachio'],
      quote: 'Proof enough to misuse the Prince, to vex Claudio, to undo Hero',
      themes: ['Love and deception', 'Honour and reputation', 'Appearance versus reality'],
      tension: 3,
      significance:
        'The malicious deception is planned in the scene between the kind plot’s announcement and its first performance, so the two are set side by side.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'Benedick in the garden',
      summary:
        'Benedick mocks Claudio for becoming a lover, then hides as Don Pedro, Claudio and Leonato arrive. After Balthasar’s song, they discuss, knowing he is listening, how Beatrice is dying of love for him. Left alone, Benedick decides the love must be returned, and reads a double meaning into Beatrice’s rude invitation to dinner.',
      setting: 'Leonato’s garden, with an arbour to hide in',
      who: ['Benedick', 'Don Pedro', 'Claudio', 'Leonato', 'Balthasar', 'Beatrice'],
      quote: 'This can be no trick',
      themes: ['Noting and misinterpretation', 'Love and deception', 'Language and wit'],
      tension: 2,
      significance:
        'The first gulling shows overheard speech working as a kind trick, the mirror of the cruel one to come.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Beatrice in the bower',
      summary:
        'Hero sends Margaret to lure Beatrice into the bower, and Hero and Ursula, walking where she can hear, talk of Benedick’s hidden love and of Beatrice’s pride and scorn. Alone, Beatrice resolves in rhymed verse to give up contempt and return his love.',
      setting: 'Leonato’s garden, beside a bower of honeysuckle',
      who: ['Hero', 'Ursula', 'Margaret', 'Beatrice'],
      quote: 'Contempt, farewell! and maiden pride, adieu!',
      themes: ['Noting and misinterpretation', 'Gender and power', 'Love and deception'],
      tension: 2,
      significance:
        'Hero, usually quiet, directs the scene and speaks most of it, and Beatrice changes in a single short speech.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Don John’s accusation',
      summary:
        'Benedick, newly shaved and claiming toothache, is teased by his friends. Don John then tells Don Pedro and Claudio that Hero is disloyal and offers to show them her chamber window entered that night. Claudio vows that if he sees anything he will shame her at the wedding, and Don Pedro agrees to join him.',
      setting: 'A room in Leonato’s house',
      who: ['Don Pedro', 'Claudio', 'Benedick', 'Leonato', 'Don John'],
      quote: 'Leonato’s Hero, your Hero, every man’s Hero',
      themes: ['Honour and reputation', 'Noting and misinterpretation', 'Gender and power'],
      tension: 4,
      significance:
        'Claudio decides how he will punish Hero before he has seen any evidence at all.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The Watch overhear',
      summary:
        'Dogberry gives the Watch absurd instructions and leaves. Sheltering from the rain, Borachio boasts to Conrade that he wooed Margaret at Hero’s window while the Prince and Claudio watched, deceived, and that Claudio will shame Hero in church. The Watch arrest them both.',
      setting: 'A street in Messina at night, in the rain',
      who: ['Dogberry', 'Verges', 'The Watch', 'Borachio', 'Conrade'],
      quote: 'I have tonight wooed Margaret',
      themes: ['Noting and misinterpretation', 'Appearance versus reality'],
      tension: 3,
      significance:
        'The truth is found by overhearing, the same method that caused the harm, and by the least clever people in the play.',
    },
    {
      where: 'Act 3, Scene 5',
      title: 'Too busy to listen',
      summary:
        'Dogberry and Verges come to Leonato on the morning of the wedding to report the arrest, but they ramble so much that he loses patience. He tells them to examine the prisoners themselves and hurries off to the church.',
      setting: 'A room in Leonato’s house, the wedding morning',
      who: ['Leonato', 'Dogberry', 'Verges'],
      quote: 'Neighbours, you are tedious',
      themes: ['Noting and misinterpretation', 'Language and wit'],
      tension: 3,
      significance:
        'The chance to prevent the disaster is lost through haste, so the audience enters the wedding knowing the proof exists.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The wedding',
      summary:
        'At the altar Claudio refuses Hero and accuses her before everyone of meeting a lover at her window; Don Pedro and Don John support him, and Hero faints. Leonato wishes her dead. The Friar, sure of her innocence, proposes they announce that she has died until the truth comes out.',
      setting: 'Inside a church',
      who: [
        'Claudio',
        'Hero',
        'Leonato',
        'Don Pedro',
        'Don John',
        'Friar Francis',
        'Beatrice',
        'Benedick',
      ],
      quote: 'Give not this rotten orange to your friend',
      themes: ['Honour and reputation', 'Gender and power', 'Appearance versus reality'],
      tension: 5,
      significance:
        'The comedy comes closest to tragedy, and the play’s ideas about honour are shown at their most destructive.',
    },
    {
      where: 'Act 4, Scene 1, the empty church',
      title: '“Kill Claudio”',
      summary:
        'Left alone, Benedick and Beatrice confess their love. When he asks what he can do for her, she asks him to kill Claudio. He refuses, she says there is no love in him, and at last, convinced that Hero has been wronged, he agrees to challenge his friend.',
      setting: 'The church, emptied after the failed wedding',
      who: ['Beatrice', 'Benedick'],
      quote: 'Kill Claudio',
      themes: ['Gender and power', 'Honour and reputation', 'Love and deception'],
      tension: 5,
      significance:
        'Love is finally spoken plainly, and it is immediately tested by a demand for violence.',
    },
    {
      where: 'Act 4, Scene 2',
      title: 'The examination',
      summary:
        'Dogberry, Verges and the Sexton examine Borachio and Conrade in a comic parody of a trial. The Sexton gets to the truth, reports that Don John has secretly fled, and goes ahead to Leonato. Conrade calls Dogberry an ass, to his lasting outrage.',
      setting: 'A prison',
      who: ['Dogberry', 'Verges', 'The Sexton', 'Borachio', 'Conrade', 'The Watch'],
      quote: 'O that he were here to write me down an ass!',
      themes: ['Language and wit', 'Noting and misinterpretation'],
      tension: 3,
      significance:
        'Comedy returns straight after the church scene, and with it the proof that will undo the slander.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Challenges and confession',
      summary:
        'Leonato and his brother Antonio challenge Claudio, who refuses to fight old men; then Benedick coldly challenges him too. Dogberry brings in the prisoners and Borachio confesses everything. Claudio accepts Leonato’s penance: to clear Hero’s name at her tomb and marry her cousin, said to be almost her copy.',
      setting: 'Before Leonato’s house',
      who: ['Leonato', 'Antonio', 'Claudio', 'Don Pedro', 'Benedick', 'Dogberry', 'Borachio'],
      quote: 'I have drunk poison whiles he utter’d it',
      themes: ['Honour and reputation', 'Noting and misinterpretation'],
      tension: 4,
      significance:
        'The truth reaches Claudio, and the play must decide what, if anything, he owes for acting on a lie.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'At the tomb',
      summary:
        'At night Claudio and Don Pedro come with music and tapers to the monument of Leonato’s family. Claudio reads an epitaph declaring Hero killed by slander, hangs it on the tomb and vows to repeat the rite every year, before dawn breaks.',
      setting: 'Leonato’s family monument, at night',
      who: ['Claudio', 'Don Pedro'],
      quote: 'Done to death by slanderous tongues',
      themes: ['Honour and reputation', 'Appearance versus reality'],
      tension: 2,
      significance:
        'A public act of mourning restores Hero’s good name before she herself is restored.',
    },
    {
      where: 'Act 5, Scene 4',
      title: 'The second wedding',
      summary:
        'Claudio agrees to marry a masked bride without seeing her face. She unmasks, and it is Hero. Beatrice and Benedick deny their love until sonnets in their own handwriting are produced; they agree to marry. News comes that Don John has been captured, and Benedick calls for a dance.',
      setting: 'A room in Leonato’s house',
      who: [
        'Claudio',
        'Hero',
        'Beatrice',
        'Benedick',
        'Leonato',
        'Don Pedro',
        'Antonio',
        'Friar Francis',
      ],
      quote: 'One Hero died defil’d, but I do live',
      themes: ['Appearance versus reality', 'Love and deception', 'Language and wit'],
      tension: 2,
      significance:
        'The ending mirrors the failed wedding and the masked ball, and leaves the audience to judge how complete the happiness is.',
    },
  ],

  relationships: [
    {
      from: 'Beatrice',
      to: 'Benedick',
      kind: 'sparring partners, then lovers',
      note: 'Their merry war hides a history and a match of minds. Tricked into admitting love, they speak it plainly only after Hero’s shaming, and it is tested at once by “Kill Claudio”.',
    },
    {
      from: 'Claudio',
      to: 'Hero',
      kind: 'betrothed',
      note: 'Love at first sight, wooed by proxy and broken by a lie. He shames her at their wedding and marries her at the second, and she marries him without a word of complaint.',
    },
    {
      from: 'Don Pedro',
      to: 'Don John',
      kind: 'brothers, one legitimate and one not',
      note: 'The Prince has lately taken back the brother who stood out against him. Don John repays him by making him an instrument of the slander, and flees Messina before it is exposed.',
    },
    {
      from: 'Beatrice',
      to: 'Hero',
      kind: 'cousins',
      note: 'Opposites in speech, one witty and one quiet, and close enough to have shared a bed for a year. When Hero is accused, Beatrice is the first to insist that her cousin “is belied”.',
    },
    {
      from: 'Leonato',
      to: 'Hero',
      kind: 'father and daughter',
      note: 'A proud and loving father who turns on her at the altar and wishes her dead, then challenges Claudio once he believes she was wronged.',
    },
    {
      from: 'Benedick',
      to: 'Claudio',
      kind: 'fellow soldiers and friends',
      note: 'Close companions in Don Pedro’s company until Benedick challenges Claudio for Beatrice’s sake. At the end he forgives him and tells him to love Hero.',
    },
    {
      from: 'Don Pedro',
      to: 'Claudio',
      kind: 'prince and favoured young lord',
      note: 'Don Pedro woos Hero for Claudio and later joins him in disgracing her, so the patron’s support makes the accusation far more damaging.',
    },
    {
      from: 'Don John',
      to: 'Borachio',
      kind: 'master and paid follower',
      note: 'Borachio devises the window plot for a thousand ducats; caught by the Watch, he confesses and takes the blame, clearing Margaret.',
    },
    {
      from: 'Borachio',
      to: 'Margaret',
      kind: 'suitor and unknowing accomplice',
      note: 'He uses her favour to stage the window scene. Borachio insists she did not know what she was doing, though Leonato still judges her at fault.',
    },
    {
      from: 'Dogberry',
      to: 'Verges',
      kind: 'constable and partner',
      note: 'A comic double act whose muddled authority catches the villains, and whose rambling delays the truth until after the wedding.',
    },
    {
      from: 'Leonato',
      to: 'Beatrice',
      kind: 'uncle and niece',
      note: 'She lives in his household as his niece. He teases her for refusing husbands, helps trick Benedick for her, and gives his blessing when the two agree to marry.',
    },
  ],

  compareWith: [
    {
      title: 'Romeo and Juliet',
      href: '/revision/texts/romeo-and-juliet',
      reason:
        'Set by all four of this play’s boards: there too a friar arranges a feigned death to save a young bride, and the same device ends in tragedy rather than a wedding.',
    },
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        'On the Eduqas list beside this play: a villain persuades a soldier that the woman he loves is unfaithful by arranging false proof, the plot of Much Ado taken to its tragic end.',
    },
    {
      title: 'Twelfth Night',
      href: '/revision/texts/twelfth-night',
      reason:
        'Set by Edexcel and Eduqas: another comedy in which plotters hide to watch a trick work, as Maria’s forged letter gulls Malvolio, and in which the laughter has a cruel edge.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'intimate_relationships',
    'discrimination',
    'mythological_religious',
  ],

  sources: [
    {
      label:
        'Much Ado about Nothing, Project Gutenberg eBook #1519: the edition held as a byte copy in src/data/full-texts, from which every quotation, extract and scene reference in this file was copied and checked, with its speaker, by reading the whole play',
      url: 'https://www.gutenberg.org/ebooks/1519',
    },
    {
      label:
        'Project Gutenberg #1519 plain text: the Dramatis Personae (Leonato, Governor of Messina; Verges, a Headborough; Don John, bastard brother of Don Pedro)',
      url: 'https://www.gutenberg.org/cache/epub/1519/pg1519.txt',
    },
    {
      label:
        'Folger Shakespeare Library, Much Ado About Nothing, An Introduction to This Text: first printed in 1600 as a quarto; the Folio based on the quarto; the quarto speech prefixes contain the names of the clowns Will Kemp and Richard Cowley',
      url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/an-introduction-to-this-text/',
    },
    {
      label:
        'Folger Shakespeare Library, Much Ado About Nothing, Textual Notes: in 4.2 the quarto prefixes read Kemp and Cowley for Dogberry and Verges; at 5.4.102 the quarto gives the kiss line to Leonato, modern editors to Benedick',
      url: 'https://www.folger.edu/explore/shakespeares-works/much-ado-about-nothing/textual-notes/',
    },
    {
      label:
        'Royal Shakespeare Company, Much Ado About Nothing, Dates and sources: probably written between 1598 and 1599; quarto by 1600; Will Kemp known for playing Dogberry',
      url: 'https://www.rsc.org.uk/much-ado-about-nothing/about-the-play/dates-and-sources',
    },
    {
      label:
        'Wikipedia, Much Ado About Nothing: written 1598 to 1599; 1600 quarto and 1623 Folio; nothing and noting as near-homophones; the play predominantly in prose; Kempe as Dogberry and Cowley as Verges',
      url: 'https://en.wikipedia.org/wiki/Much_Ado_About_Nothing',
    },
    {
      label:
        'AQA GCSE English Literature 8702, specification at a glance: Paper 1 Section A, one question on the play, writing in detail about an extract and then about the play as a whole; Much Ado About Nothing on the Shakespeare list',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-literature-8702/specification/specification-at-a-glance',
    },
    {
      label:
        'Pearson Edexcel GCSE English Literature 1ET0 specification, Issue 2, June 2019: Component 1 Section A, a two-part question, part (a) close language analysis of an extract of about 30 lines, part (b) a theme from the extract explored elsewhere in the play, with context; closed book',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'OCR GCSE English Literature J352 specification: Component 02 Section B Shakespeare, one question from a choice of an extract-based question making links to the whole text or a discursive question; closed text',
      url: 'https://www.ocr.org.uk/Images/168995-specification-accredited-gcse-english-literature-j352.pdf',
    },
    {
      label:
        'Eduqas GCSE English Literature specification, Version 4, August 2024: Component 1 Section A Shakespeare, one extract-based question and one essay on the text as a whole, testing language, structure, form, themes and characters, with spelling, punctuation and grammar',
      url: 'https://www.eduqas.co.uk/media/42ldm0wa/eduqas-gcse-english-literature-spec-from-2015.pdf',
    },
    {
      label:
        'Wiktionary definitions checked for the vocabulary list: Dogberryism, malapropism, headborough, haggard, lime (birdlime), requite, misprision, cuckold, gull, arras, epitaph, sexton, Hymen, jade',
      url: 'https://en.wiktionary.org/wiki/Dogberryism',
    },
    {
      label:
        'Held editions of Romeo and Juliet, Othello and Twelfth Night in src/data/full-texts, checked for the comparison notes: Friar Lawrence gives Juliet the vial; Othello demands “the ocular proof”; Maria sends the plotters into the box-tree and forges the letter',
    },
  ],
}
