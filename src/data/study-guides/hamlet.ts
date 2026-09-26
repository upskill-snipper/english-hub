import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Hamlet, William Shakespeare (written between about 1599 and 1601). A
 * supplement: the existing page at /revision/texts/hamlet keeps its overview,
 * context, themes, characters and key quotations, and this file adds what that
 * page lacks.
 *
 * SELF-AUDIT (25 September 2026), grading what the page actually renders
 * through TextGuide and InlineStudyEngine, not what its data constants hold:
 * - overview: SUBSTANTIVE. An intro and a four-paragraph plot summary.
 * - context: SUBSTANTIVE. Three developed paragraphs (sources and the revenge
 *   tradition, Purgatory and the Reformation, Essex and the succession).
 * - themes: SUBSTANTIVE. Six developed themes of about a hundred words each.
 * - characters: SUBSTANTIVE. Eight profiles.
 * - keyQuotes: SUBSTANTIVE. Twenty quotations, each with a short analysis.
 * - extracts, languageAnalysis, structureForm, vocabulary, modelAnswer: absent.
 * - examPractice: NOT SUBSTANTIVE. Five essay prompts with no guidance on how
 *   to answer them, and a multiple-choice quiz.
 * So this file writes the passages, language, structure, vocabulary, exam
 * practice and model answer, and the scene data for the animated visuals.
 *
 * Every quotation, in the passages, the scene cards and the prose, was copied
 * from the byte copy of Project Gutenberg #1524 held at
 * src/data/full-texts/hamlet.ts, and the whole play was read in that edition to
 * check who says each line and where. The guide test checks the words; the
 * speakers and scenes were checked by hand.
 *
 * EDITIONS. Hamlet survives in three early texts that differ a great deal, and
 * this edition mixes them: it prints the Folio's "solid flesh" and "protests",
 * but also the Act 4, Scene 4 soliloquy that only the Second Quarto has. The
 * notes say so wherever a student's own copy may read differently, from the
 * Folger textual notes.
 *
 * THEME TITLES on the scene cards follow the six on the existing page, with one
 * change: the page's "Madness" title contains an em dash, which house style
 * does not allow, so the cards use a comma. The cast is wider than the page's
 * eight profiles, because the plot cannot be told without Rosencrantz,
 * Guildenstern, Fortinbras, Marcellus and the Gravedigger.
 */
export const guide: StudyGuide = {
  slug: 'hamlet',
  title: 'Hamlet',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    'The whole play: five acts and twenty scenes, set in and around the royal castle of Elsinore in Denmark.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Written between about 1599 and 1601, and printed in three early versions: the First Quarto of 1603, the Second Quarto of 1604 to 1605 and the First Folio of 1623. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1524) held on this site, which combines readings from the Second Quarto and the Folio. Your own edition may differ from it in line numbers, punctuation and, in places, a word.',
  },

  native: {
    overview: '/revision/texts/hamlet',
    context: '/revision/texts/hamlet',
    themes: '/revision/texts/hamlet',
    characters: '/revision/texts/hamlet',
    keyQuotes: '/revision/texts/hamlet',
  },

  extracts: [
    {
      title: "Hamlet's first soliloquy",
      where: 'Act 1, Scene 2',
      pointer:
        'The first time Hamlet is alone, straight after Claudius and the court leave: from “O that this too too solid flesh would melt” to “But break, my heart, for I must hold my tongue.”, just before Horatio enters.',
      text: 'O that this too too solid flesh would melt, / Thaw, and resolve itself into a dew! / Or that the Everlasting had not fix’d / His canon ’gainst self-slaughter. O God! O God! / How weary, stale, flat, and unprofitable / Seem to me all the uses of this world! / Fie on’t! Oh fie! ’tis an unweeded garden / That grows to seed; things rank and gross in nature / Possess it merely. That it should come to this! / But two months dead—nay, not so much, not two: / So excellent a king; that was to this / Hyperion to a satyr; so loving to my mother, / That he might not beteem the winds of heaven / Visit her face too roughly. Heaven and earth! / Must I remember? Why, she would hang on him / As if increase of appetite had grown / By what it fed on; and yet, within a month— / Let me not think on’t—Frailty, thy name is woman! / A little month, or ere those shoes were old / With which she followed my poor father’s body / Like Niobe, all tears.—Why she, even she— / O God! A beast that wants discourse of reason / Would have mourn’d longer,—married with mine uncle, / My father’s brother; but no more like my father / Than I to Hercules. Within a month, / Ere yet the salt of most unrighteous tears / Had left the flushing in her galled eyes, / She married. O most wicked speed, to post / With such dexterity to incestuous sheets! / It is not, nor it cannot come to good. / But break, my heart, for I must hold my tongue.',
      annotations: [
        {
          phrase: 'O that this too too solid flesh would melt',
          note: "Hamlet's first wish is not for revenge, which he knows nothing of yet, but to dissolve, to stop existing. Check your own copy: this edition follows the Folio's “solid”, while the Second Quarto prints “sallied”, which many editors read as sullied, so in some editions the flesh is not heavy but stained.",
        },
        {
          phrase: 'His canon ’gainst self-slaughter',
          note: "A canon is a church law. Only God's prohibition of suicide holds him back, which introduces the religious fear of what comes after death that returns in “To be, or not to be” and in the argument over Ophelia's burial in Act 5, Scene 1.",
        },
        {
          phrase: '’tis an unweeded garden',
          note: "The world, and by implication Denmark, becomes a neglected garden taken over by rank weeds. It is the first of the play's images of rot and disease, and it gains a sharper edge in Act 1, Scene 5, when the Ghost reveals that he was murdered while sleeping in his orchard.",
        },
        {
          phrase: 'Hyperion to a satyr',
          note: 'Hyperion is a Titan of Greek myth, the father of the sun and sometimes a name for the sun itself; a satyr is a lustful woodland creature, by Shakespeare’s time pictured as part man and part goat. The comparison makes the dead king divine and Claudius bestial, and shows how Hamlet thinks in extremes. An audience may wonder whether any real man could live up to the father Hamlet describes.',
        },
        {
          phrase: 'Frailty, thy name is woman!',
          note: "The apostrophe turns his mother's remarriage into a verdict on all women, and the misogyny does not stay in soliloquy: it resurfaces in his treatment of Ophelia in Act 3, Scene 1. The line is personal grief hardening into a general contempt.",
        },
        {
          phrase: 'within a month',
          note: 'The time keeps shrinking as he speaks: two months, then not two, then a month, then “A little month”. The dashes and broken-off clauses show a mind circling back to the same wound, unable to finish a thought, which is the soliloquy acting out his distress rather than describing it.',
        },
        {
          phrase: 'to incestuous sheets',
          note: "Marriage to a dead brother's widow counted as incest under the rule in the Book of Leviticus, and the Ghost uses the same word of Claudius in Act 1, Scene 5. The image is also physical and sexual: Hamlet's disgust fixes on the marriage bed, as it does again in the closet scene.",
        },
        {
          phrase: 'But break, my heart, for I must hold my tongue.',
          note: 'The speech ends in enforced silence. The most talkative character in the play, who speaks nearly three times as many words as anyone else in it, cannot say any of this aloud at court, and the tension between what he thinks and what he may say is the tension the whole play runs on, until his last words, “The rest is silence.”',
        },
      ],
      question:
        "Explore the significance of this soliloquy in relation to Shakespeare's presentation of Hamlet's state of mind, in Act 1 and in the play as a whole.",
    },
    {
      title: '“To be, or not to be”',
      where: 'Act 3, Scene 1',
      pointer:
        'Hamlet enters while Claudius and Polonius are hidden, planning to watch him meet Ophelia: from “To be, or not to be, that is the question:” to “And lose the name of action.”, just before he sees Ophelia.',
      text: 'To be, or not to be, that is the question: / Whether ’tis nobler in the mind to suffer / The slings and arrows of outrageous fortune, / Or to take arms against a sea of troubles, / And by opposing end them? To die—to sleep, / No more; and by a sleep to say we end / The heart-ache, and the thousand natural shocks / That flesh is heir to: ’tis a consummation / Devoutly to be wish’d. To die, to sleep. / To sleep, perchance to dream—ay, there’s the rub, / For in that sleep of death what dreams may come, / When we have shuffled off this mortal coil, / Must give us pause. There’s the respect / That makes calamity of so long life. / For who would bear the whips and scorns of time, / The oppressor’s wrong, the proud man’s contumely, / The pangs of dispriz’d love, the law’s delay, / The insolence of office, and the spurns / That patient merit of the unworthy takes, / When he himself might his quietus make / With a bare bodkin? Who would these fardels bear, / To grunt and sweat under a weary life, / But that the dread of something after death, / The undiscover’d country, from whose bourn / No traveller returns, puzzles the will, / And makes us rather bear those ills we have / Than fly to others that we know not of? / Thus conscience does make cowards of us all, / And thus the native hue of resolution / Is sicklied o’er with the pale cast of thought, / And enterprises of great pith and moment, / With this regard their currents turn awry / And lose the name of action.',
      annotations: [
        {
          phrase: 'To be, or not to be, that is the question',
          note: 'The antithesis is stark, but the question is left open: to be or not to be what, or to do what? One reading is that he is weighing suicide; another is that he is weighing action, since taking arms may mean certain death. The speech never uses the word I, so a private crisis becomes a question about everyone.',
        },
        {
          phrase: 'Or to take arms against a sea of troubles',
          note: 'The mixed metaphor is deliberate in effect, whatever its origin: no one can fight the sea with weapons. Resistance is pictured as heroic and hopeless at once, which is exactly how revenge against a king looks to Hamlet at this point.',
        },
        {
          phrase: 'ay, there’s the rub',
          note: 'A rub is a difficulty, and in the game of bowls an obstacle that knocks a bowl off its course. The image fits: his reasoning runs smoothly towards death as sleep, then is deflected by the thought of dreams, of what might follow.',
        },
        {
          phrase: 'this mortal coil',
          note: 'Coil here means noise, turmoil and bustle, not a spiral. To shuffle off this mortal coil is to get free of the troubled business of human life, and the phrase makes life sound like a heavy garment that could simply be shrugged away.',
        },
        {
          phrase: 'The undiscover’d country, from whose bourn',
          note: "Death is a country with a boundary no traveller crosses back over. Yet the audience has seen a traveller return: the Ghost. Some readers take the line as a sign of Hamlet's renewed doubt about the Ghost, which he has just decided to test; others see it as the speech reaching past the plot to a universal fear.",
        },
        {
          phrase: 'Thus conscience does make cowards of us all',
          note: "Conscience can mean moral scruple, and in Shakespeare's English it could also mean consciousness or thought. Both senses are alive here: knowing too much, and fearing judgement, turn potential heroes into cowards. It is Hamlet's own diagnosis of his delay, and the rest of the play tests it.",
        },
        {
          phrase: 'Is sicklied o’er with the pale cast of thought',
          note: "Resolution has a healthy, ruddy natural colour, and thought paints it over with a sick pallor. The image of illness links the speech to the play's disease imagery, but here the disease is inside the thinker rather than in the state.",
        },
        {
          phrase: 'And lose the name of action.',
          note: 'The long speech ends on the word the play keeps demanding. It then breaks off entirely when he sees Ophelia, so the soliloquy itself enacts what it describes: thought runs its course and no action follows.',
        },
      ],
      question:
        'Explore the significance of this soliloquy in relation to the presentation of thought and action in the play as a whole.',
    },
    {
      title: 'Hamlet spares the praying King',
      where: 'Act 3, Scene 3',
      pointer:
        "After Claudius kneels at the end of his own soliloquy: from Hamlet's “Now might I do it pat, now he is praying.” to the King's couplet ending “Words without thoughts never to heaven go.”",
      text: 'HAMLET: / Now might I do it pat, now he is praying. / And now I’ll do’t. And so he goes to heaven; / And so am I reveng’d. That would be scann’d: / A villain kills my father, and for that / I, his sole son, do this same villain send / To heaven. O, this is hire and salary, not revenge. / He took my father grossly, full of bread, / With all his crimes broad blown, as flush as May; / And how his audit stands, who knows save heaven? / But in our circumstance and course of thought, / ’Tis heavy with him. And am I then reveng’d, / To take him in the purging of his soul, / When he is fit and season’d for his passage? No. / Up, sword, and know thou a more horrid hent: / When he is drunk asleep; or in his rage, / Or in th’incestuous pleasure of his bed, / At gaming, swearing; or about some act / That has no relish of salvation in’t, / Then trip him, that his heels may kick at heaven, / And that his soul may be as damn’d and black / As hell, whereto it goes. My mother stays. / This physic but prolongs thy sickly days. / [Exit.] / The King rises and advances. / KING: / My words fly up, my thoughts remain below. / Words without thoughts never to heaven go.',
      annotations: [
        {
          phrase: 'Now might I do it pat, now he is praying.',
          note: 'For the first time since the Mousetrap proved Claudius guilty, the King is alone and defenceless. The plain monosyllables and the repeated “now” give the line urgency, and an audience might expect the play to end here.',
        },
        {
          phrase: 'That would be scann’d',
          note: 'To scan is to examine closely, as a scholar examines a text. The second half of this line is where the speech turns: the student from Wittenberg stops to analyse, and the moment for action passes while he reasons.',
        },
        {
          phrase: 'this is hire and salary, not revenge',
          note: 'Revenge is imagined as a transaction that must balance, and his “audit” a few lines later continues the language of accounts. Killing Claudius at prayer would reward him rather than repay him, so Hamlet refuses a revenge that does not match the crime exactly.',
        },
        {
          phrase: 'He took my father grossly, full of bread',
          note: "The father died with his sins upon him, as the Ghost complained in Act 1, Scene 5 (“Unhous’led, disappointed, unanel’d”), so he is suffering in fires. Hamlet wants Claudius's death to be at least as spiritually disastrous, which draws on Catholic ideas of the afterlife, such as Purgatory, that the Church of England had officially rejected.",
        },
        {
          phrase: 'And that his soul may be as damn’d and black',
          note: 'He wants not only death but damnation, which the Ghost never asked for. Some readers find this the most shocking speech in the play. It makes it hard to accept the view that Hamlet delays because he is too gentle; here his thinking produces a crueller revenge, not a kinder one.',
        },
        {
          phrase: 'My words fly up, my thoughts remain below.',
          note: 'The couplet delivers the dramatic irony. Claudius could not pray, so the soul Hamlet feared to send to heaven was never in a state of grace. His whole reasoning rests on a false appearance, and the audience, which heard the failed prayer, knows it.',
        },
      ],
      question:
        'Explore the significance of this extract in relation to the presentation of revenge in the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Imagery of disease, rot and poison',
      example:
        'Hamlet sees the world as “an unweeded garden” (Act 1, Scene 2); he warns Gertrude that excuses “will but skin and film the ulcerous place, / Whilst rank corruption, mining all within, / Infects unseen” (Act 3, Scene 4); Claudius says of Hamlet “For like the hectic in my blood he rages, / And thou must cure me” (Act 4, Scene 3).',
      effect:
        'Denmark is pictured as a sick body whose infection is hidden beneath healthy skin. The imagery makes the murder a political as well as a personal crime, since the corruption at the head spreads outward, and it prepares the final scene, in which poison kills the royal family in public.',
    },
    {
      technique: 'Poison poured into the ear',
      example:
        'The Ghost says Claudius “in the porches of my ears did pour / The leperous distilment”, and that “the whole ear of Denmark / Is by a forged process of my death / Rankly abus’d” (Act 1, Scene 5). Claudius later fears Laertes “wants not buzzers to infect his ear / With pestilent speeches of his father’s death” (Act 4, Scene 5).',
      effect:
        "The literal murder becomes a metaphor for the way words work in this court: lies, rumours and spying enter through the ear and corrupt the mind. The Mousetrap turns the weapon round, showing Claudius his own crime, with Lucianus pouring poison into a sleeper's ears, as a way of infecting his conscience.",
    },
    {
      technique: "Antithesis and oxymoron in Claudius's rhetoric",
      example:
        "Claudius takes his brother's widow “With mirth in funeral, and with dirge in marriage, / In equal scale weighing delight and dole” (Act 1, Scene 2).",
      effect:
        'The balanced pairs sound judicious, as if grief and joy had been weighed on scales and fairly settled. The smoothness is the point: it makes an indecent haste sound reasonable. Claudius admits the gap himself in an aside in Act 3, Scene 1, comparing his deed to “my most painted word”.',
    },
    {
      technique: 'Puns and quibbles',
      example:
        "Hamlet's first line is an aside, “A little more than kin, and less than kind.”, and his first reply to Claudius is “I am too much i’ the sun.” (Act 1, Scene 2). With Polonius he answers “Words, words, words.” (Act 2, Scene 2).",
      effect:
        "Wordplay is Hamlet's weapon when he cannot speak openly. Kin and kind separate family ties from natural feeling, and many readers hear son behind sun, so a polite answer carries an insult to his new father. The punning lets him attack while seeming merely odd, which is how the antic disposition works.",
    },
    {
      technique: 'Rhetorical questions and self-interrogation',
      example:
        'After the Player weeps for Hecuba, Hamlet asks “Am I a coward? / Who calls me villain, breaks my pate across?” (Act 2, Scene 2); in Act 4, Scene 4 he asks “What is a man / If his chief good and market of his time / Be but to sleep and feed?”',
      effect:
        'The soliloquies are arguments with himself, driven by questions he cannot answer. The questions dramatise his self-contempt and let the audience watch a mind put itself on trial. They also show why the delay is interesting on stage: the conflict is internal, and the questions are the action.',
    },
    {
      technique: 'Accumulation of insults and epithets',
      example:
        '“Bloody, bawdy villain! / Remorseless, treacherous, lecherous, kindless villain!” (Act 2, Scene 2), followed within a few lines by his disgust that he must “unpack my heart with words”.',
      effect:
        'The piling-up of adjectives shows fury looking for an outlet, and Hamlet himself notices that the outlet is only language. The speech turns on that recognition, from cursing to planning the Mousetrap, so a moment of verbal excess becomes a turning point in the plot.',
    },
    {
      technique: 'Imagery of acting and performance',
      example:
        'Hamlet says of the outward signs of grief “These indeed seem, / For they are actions that a man might play” (Act 1, Scene 2); he tells the players their purpose is “to hold as ’twere the mirror up to nature” (Act 3, Scene 2); dying, he addresses those who “are but mutes or audience to this act” (Act 5, Scene 2).',
      effect:
        'The play keeps reminding its audience that it is watching actors. Hamlet distrusts performance and yet performs madness; the court is full of people playing parts. By the last scene the characters on stage and the audience in the theatre are joined as spectators of the same tragedy.',
    },
    {
      technique: 'Musical instruments and playing upon people',
      example:
        'Hamlet praises Horatio as “not a pipe for Fortune’s finger / To sound what stop she please” (Act 3, Scene 2); he rounds on Guildenstern with the recorder, “you would seem to know my stops”; Ophelia describes his mind “Like sweet bells jangled out of tune and harsh” (Act 3, Scene 1).',
      effect:
        "To be played upon is to be manipulated, and the image cluster maps the court's spying. Horatio is valued because no one can play him; Rosencrantz and Guildenstern fail because they cannot even play a pipe. Ophelia's bells show a fine instrument ruined, and the image returns grimly when her own mind breaks.",
    },
    {
      technique: 'Classical and mythological allusion',
      example:
        'Old Hamlet is “Hyperion to a satyr” and Gertrude followed his coffin “Like Niobe, all tears” (Act 1, Scene 2); in the closet scene his portrait shows “Hyperion’s curls, the front of Jove himself” (Act 3, Scene 4).',
      effect:
        "Hamlet builds his father into a god, and every comparison drives Claudius further down towards the beast. The allusions reveal the scale of his idealisation, and some readers find in them a son who cannot see either man as merely human. Niobe, who wept for her children until she turned to stone, makes Gertrude's quick recovery look all the worse.",
    },
    {
      technique: 'The symbolism of flowers',
      example:
        'Mad, Ophelia hands out flowers: “There’s rosemary, that’s for remembrance” and pansies “for thoughts”, and she would give violets, “but they wither’d all when my father died” (Act 4, Scene 5). Laertes calls it “A document in madness”.',
      effect:
        'In madness Ophelia speaks in the language of flowers, which lets her say what she could not say sane: that her father is dead and faithfulness, which violets stood for, has withered. Laertes reads it as a lesson, but the audience may notice that even her grief is being interpreted for her by a man.',
    },
    {
      technique: 'The command to remember',
      example:
        "The Ghost's parting words before it leaves the stage in Act 1, Scene 5 are “Adieu, adieu, adieu. Remember me.”; Hamlet vows to clear “from the table of my memory” everything but that command; the Player King warns that “Most necessary ’tis that we forget” (Act 3, Scene 2).",
      effect:
        'Remembering is the duty the Ghost imposes, not simply killing, and the play keeps testing it: Gertrude has forgotten too soon, the Player King argues that all vows fade, and Hamlet needs a second visit in the closet scene “to whet thy almost blunted purpose”. Memory becomes a measure of love and of loyalty.',
    },
  ],

  structureForm: [
    {
      heading: 'Three texts, and which one you are reading',
      body: "Hamlet survives in three early printed versions. The First Quarto of 1603 is little more than half as long as the others and has often been dismissed as unreliable. The Second Quarto of 1604 to 1605 claimed to be printed from the true and perfect copy. The First Folio of 1623 has some eighty-five lines the Second Quarto lacks, and lacks about two hundred of the Second Quarto's. Most modern editions, like the one quoted here, combine the two longer texts. That matters in an exam: Hamlet's soliloquy in Act 4, Scene 4 appears only in the Second Quarto, the exchange in which he calls Denmark a prison appears only in the Folio, and single words differ, so check any quotation against your own copy.",
    },
    {
      heading: 'A revenge tragedy that delays itself',
      body: 'The play uses the conventions of revenge tragedy that playwrights such as Thomas Kyd had established on the English stage: a ghost demanding vengeance, an avenger who feigns madness, a scheming villain, a play within the play and a bloody final scene. The command comes in Act 1, Scene 5; the revenge comes in the last minutes of Act 5. Between them Shakespeare fills the gap with tests, spying, a play, a killing by mistake and a voyage. The text even measures the delay. In Act 1, Scene 2 his father is “But two months dead”; at the Mousetrap Ophelia corrects him, “’tis twice two months”. The structure makes delay the subject, not a flaw to be explained away.',
    },
    {
      heading: 'Three sons, three dead fathers, and a player',
      body: "The plot is built on parallels. Hamlet, Laertes and Fortinbras all have fathers who died violently, and each responds differently: Laertes storms back from France and threatens the King within a single scene, and Fortinbras marches on Poland for a worthless patch of ground. Hamlet himself sees the likeness in Act 5, Scene 2, in lines found only in the Folio: “by the image of my cause I see / The portraiture of his”. There is a fourth avenger in the Player's speech in Act 2, Scene 2: Pyrrhus, poised to kill Priam, “like a neutral to his will and matter, / Did nothing”, until vengeance sets him to work again. Hamlet chooses this speech himself, and the soliloquy that follows it is his first open attack on his own delay, so the Player's pause holds up a mirror to his.",
    },
    {
      heading: 'The soliloquies, and their end',
      body: "Hamlet speaks alone, or unheard, seven times: after the court leaves in Act 1, Scene 2; after the Ghost's exit in Act 1, Scene 5; after the players in Act 2, Scene 2; in “To be, or not to be” in Act 3, Scene 1; at the “witching time of night” in Act 3, Scene 2; over the praying King in Act 3, Scene 3; and on Fortinbras's army in Act 4, Scene 4. Then they stop. In Act 5 he talks to Horatio instead, and his language turns from self-questioning to trust in providence: “There’s a divinity that shapes our ends, / Rough-hew them how we will.” One reading sees a man who has found peace; another sees a man who has given up choosing, and waits for events to choose for him.",
    },
    {
      heading: 'The play within the play',
      body: 'Theatre sits at the centre of the structure. The players arrive in Act 2, Scene 2, Hamlet gives them his advice on acting at the start of Act 3, Scene 2, and The Murder of Gonzago, which he renames The Mousetrap, is played close to the midpoint of the action. Its rhymed, old-fashioned verse (“Full thirty times hath Phoebus’ cart gone round”) sets it apart from the play around it. Hamlet introduces the murderer as “This is one Lucianus, nephew to the King.”, so the court sees a nephew killing a king: the performance accuses Claudius and threatens him in the same moment. Even the ending returns to theatre, as Horatio asks that the bodies be placed “High on a stage”.',
    },
    {
      heading: 'Verse, prose and song',
      body: "Most of the court speaks blank verse, unrhymed lines of ten syllables and five stresses. Hamlet uses verse for his soliloquies but slips into prose for his antic scenes, baiting Polonius and fencing with Rosencrantz and Guildenstern, so a change of form marks a change of mask. The gravediggers speak prose, and Ophelia's madness breaks into prose and snatches of song, her mind no longer held in verse. Rhyming couplets close scenes and seal decisions: “The play’s the thing / Wherein I’ll catch the conscience of the King.” ends Act 2, and Claudius's couplet about words without thoughts closes his failed prayer.",
    },
    {
      heading: 'Hamlet absent: the shape of Act 4',
      body: "After the Act 4, Scene 4 soliloquy Hamlet leaves the stage and does not return until the graveyard in Act 5, Scene 1. In his absence the play shows the consequences of the killing of Polonius: Ophelia's madness, Laertes's rebellion and Claudius's new plot. Hamlet's adventures at sea, including the pirate ship, happen offstage and reach the audience only through a letter (Act 4, Scene 6) and his own account (Act 5, Scene 2). The effect is that he returns changed and the audience has to piece together how, which makes the calm of Act 5 feel both earned and a little mysterious.",
    },
    {
      heading: 'Opening and closing',
      body: "The play begins at midnight on the battlements with a question, “Who’s there?”, asked by the man arriving to relieve the guard rather than by the guard himself, so from the first line nobody is sure who should be challenging whom. Francisco adds that he is “sick at heart”. The ending answers the question with a stranger: Fortinbras of Norway, to whom Hamlet gives “my dying voice”, takes the throne, and orders a soldier's funeral for a prince who spent the play thinking. Soldiers open the play and soldiers close it, with “Go, bid the soldiers shoot.”, and Denmark, which feared invasion in Act 1, is handed to its rival without a battle.",
    },
  ],

  vocabulary: [
    {
      term: 'Arras',
      definition:
        "A tapestry or wall hanging. Polonius plans to hide behind one to watch Hamlet and Ophelia (Act 2, Scene 2), and hides behind one in Gertrude's closet, where Hamlet stabs him through it (Act 3, Scene 4).",
    },
    {
      term: 'Antic disposition',
      definition:
        'Antic means grotesque, clownish or absurd. In Act 1, Scene 5 Hamlet warns Horatio and Marcellus that he may choose “To put an antic disposition on”: to act mad on purpose.',
    },
    {
      term: 'Closet',
      definition:
        "In Shakespeare's time a private room, not a cupboard. The confrontation in Act 3, Scene 4 is called the closet scene because it happens in Gertrude's private chamber.",
    },
    {
      term: 'Purgatory',
      definition:
        'In Catholic teaching, a state after death in which souls are purified before entering heaven. The Ghost is “Doom’d for a certain term to walk the night” until his sins are burned away. The Church of England had condemned the doctrine in the Thirty-nine Articles, finalised in 1571.',
    },
    {
      term: 'Unhous’led, unanel’d',
      definition:
        'Without having received the Eucharist, and without being anointed with holy oil before dying. The Ghost uses both words (Act 1, Scene 5) to say he was killed without the last rites, with no chance to confess.',
    },
    {
      term: 'Incestuous',
      definition:
        "The Book of Leviticus forbids a man to marry his brother's wife, so the marriage of Claudius and Gertrude can be called incest. The Ghost calls Claudius “that incestuous, that adulterate beast” (Act 1, Scene 5).",
    },
    {
      term: 'Wittenberg',
      definition:
        'The German university town where Hamlet and Horatio study, famous as the place where Martin Luther published his Ninety-five Theses in 1517, the start of the Protestant Reformation. Claudius refuses to let Hamlet go back there (Act 1, Scene 2).',
    },
    {
      term: 'Quietus',
      definition:
        'A release, and so death; also the final settling of a debt. Hamlet asks why anyone would endure life “When he himself might his quietus make / With a bare bodkin?” (Act 3, Scene 1).',
    },
    {
      term: 'Bodkin',
      definition: 'A small dagger. In “To be, or not to be” a bare bodkin is an unsheathed blade.',
    },
    {
      term: 'Fardels',
      definition:
        'Bundles or burdens, the loads a person carries through a weary life, in “Who would these fardels bear” (Act 3, Scene 1).',
    },
    {
      term: 'Bourn',
      definition:
        'A boundary or limit. Death is the country “from whose bourn / No traveller returns” (Act 3, Scene 1).',
    },
    {
      term: 'Rub',
      definition:
        "A difficulty or obstacle; in the game of bowls, anything that knocks a bowl off its course. “ay, there’s the rub” marks the point where Hamlet's argument is deflected.",
    },
    {
      term: 'Mortal coil',
      definition:
        'Coil here is an old word for noise, turmoil and bustle, so the mortal coil is the troubled business of human life, not a spiral.',
    },
    {
      term: 'Conscience',
      definition:
        'Moral sense of right and wrong, and in older English also consciousness or thought. Both meanings sit inside “Thus conscience does make cowards of us all” (Act 3, Scene 1).',
    },
    {
      term: 'Hoist with his own petard',
      definition:
        'A petard was a small bomb used to blow open gates, so to be hoist with your own petard is to be blown up by your own device. Hamlet uses it in Act 3, Scene 4, of his resolve to turn back on Rosencrantz and Guildenstern the scheme they carry to England. The passage is in the Second Quarto only, so some editions leave it out.',
    },
    {
      term: 'Foil',
      definition:
        "A blunted fencing sword; a thin leaf of metal placed behind a jewel to make it shine; and, from that second sense, a character who sets off another by contrast. Hamlet's pun “I’ll be your foil, Laertes” (Act 5, Scene 2) plays on the sword and the jewel's setting: his lack of skill, he says, will make Laertes shine.",
    },
    {
      term: 'Unbated',
      definition:
        'Not blunted. Claudius plans that Laertes should choose “A sword unbated” for the fencing match (Act 4, Scene 7), and Laertes poisons its point.',
    },
    {
      term: 'Crowner',
      definition:
        'An old form of coroner. The gravediggers argue over whether the crowner was right to allow Ophelia a Christian burial (Act 5, Scene 1).',
    },
    {
      term: 'Argal',
      definition:
        "The Gravedigger's comic mangling of the Latin ergo, therefore, used in his mock-logical proof that Ophelia drowned herself on purpose (Act 5, Scene 1).",
    },
    {
      term: 'Maimed rites',
      definition:
        "A funeral cut short. Hamlet notices the reduced ceremony at Ophelia's burial, and the Priest explains that because “Her death was doubtful” she has been allowed only what the church permits.",
    },
    {
      term: 'Soliloquy',
      definition:
        'A speech in which a character alone on stage, or unheard, speaks their thoughts. Hamlet has seven, and none after Act 4, Scene 4.',
    },
    {
      term: 'Revenge tragedy',
      definition:
        'A kind of tragedy, influenced by the Roman playwright Seneca, built around a wrong and its avenging. Its conventions include a ghost, feigned madness, a play within the play and a bloody ending, and Hamlet uses all of them.',
    },
    {
      term: 'Metatheatre',
      definition:
        "Theatre that draws attention to itself as theatre, as in the Player's speech, Hamlet's advice to the actors and The Mousetrap.",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Read Act 3, Scene 3 from “Now might I do it pat, now he is praying.” to “Words without thoughts never to heaven go.” Explore the significance of this extract in relation to the presentation of revenge in the play as a whole.',
        skill:
          'A-level extract-based essay: close analysis of language and dramatic method, linked to the whole play and its context',
        guidance: [
          "Set up the dramatic situation in a sentence: the Mousetrap has just confirmed Claudius's guilt, and the audience has heard him confess the murder and struggle to pray, which Hamlet has not.",
          'Analyse the turn at “That would be scann’d”: the scholar stops to examine, and the moment for action passes inside a single line.',
          'Show how revenge is imagined as an account that must balance: “hire and salary, not revenge”, and “how his audit stands”.',
          'Link back to Act 1, Scene 5: the father died “Unhous’led, disappointed, unanel’d”, so Hamlet wants a death as spiritually disastrous. Bring in the context of Purgatory, a Catholic belief the Church of England had rejected, which Stephen Greenblatt explores in Hamlet in Purgatory (2001).',
          "Judge how extreme the wish is. Wanting Claudius's soul “as damn’d and black / As hell” goes beyond anything the Ghost asked. Is this scruple, or a crueller kind of revenge? Take a view.",
          "Use the closing couplet as dramatic irony: Hamlet's whole calculation rests on a false appearance, which ties the extract to the theme of appearance and reality.",
          "Reach across the play: in the next scene Hamlet kills Polonius without thinking (“Is it the King?”), and in Act 4, Scene 7 Laertes says he would cut Hamlet's throat in church, with Claudius agreeing that “Revenge should have no bounds.” The contrast shows what kind of avenger Hamlet refuses to be.",
          "Test a critical view, such as Coleridge's idea that Hamlet is disabled by too much reflection, against the scene, and conclude.",
        ],
      },
      {
        question: 'How far do you agree that Hamlet delays his revenge because he thinks too much?',
        skill:
          'A-level essay: a sustained argument across the whole play, with dramatic methods and critical views',
        guidance: [
          'Open with a clear thesis that does more than agree. One strong line: thinking does not stop Hamlet acting so much as decide what kind of act he will accept.',
          'Give the case for: “the pale cast of thought” in Act 3, Scene 1, and his own suspicion in Act 4, Scene 4 of “thinking too precisely on th’event”.',
          'Give the case against: when he does not stop to think he acts fast and violently. He kills Polonius, rewrites the death warrant for Rosencrantz and Guildenstern and boards a pirate ship, and in Act 5, Scene 2 he praises his own rashness: “Rashly, / And prais’d be rashness for it”.',
          'Weigh other explanations. He needs proof, because “The spirit that I have seen / May be the devil” (Act 2, Scene 2); he wants a theologically complete revenge (Act 3, Scene 3); A. C. Bradley, in Shakespearean Tragedy (1904), blamed a deep melancholy; psychoanalytic critics following Freud, such as Ernest Jones in Hamlet and Oedipus (1949), read the delay as Oedipal.',
          "Use structure: the foils who act (Laertes, Fortinbras), the Player's Pyrrhus who pauses and then strikes, and the text's own measure of time, from two months to “twice two months”.",
          "Consider T. S. Eliot's argument in Hamlet and His Problems (1919) that Hamlet's emotion exceeds anything in the plot to explain it, which moves the problem from the character to the play. Decide whether you agree.",
          "End with Act 5: the soliloquies stop, Hamlet trusts that “The readiness is all.”, and the revenge happens only when Claudius's treachery is exposed in front of the court. Judge whether that ending rewards patience or simply lets events decide.",
        ],
      },
      {
        question:
          'How far do you agree that Gertrude and Ophelia are presented only through the eyes of the men who judge them?',
        skill: 'A-level essay: gender, dramatic methods, context and critical views',
        guidance: [
          "Start with the evidence for the view: Gertrude has no soliloquy, Ophelia has only one short one in Act 3, Scene 1, lamenting Hamlet's “noble mind”, and men constantly speak about them, from Hamlet's “Frailty, thy name is woman!” to the Ghost's “most seeming-virtuous queen” and the warnings of Laertes and Polonius in Act 1, Scene 3.",
          'Ophelia is obedient (“I shall obey, my lord.”), then used as bait in Act 3, Scene 1. Analyse the double meaning of “nunnery”, which could mean a convent and was also slang for a brothel.',
          "In madness (Act 4, Scene 5) Ophelia speaks most freely, in songs and flowers, yet Laertes immediately interprets her: “A document in madness”. Elaine Showalter's essay Representing Ophelia (1985) is useful on how she has become a symbol of the distraught woman.",
          "Her death is told, not shown. Gertrude's lyrical report in Act 4, Scene 7 presents an accident, while the gravediggers and the Priest (“Her death was doubtful”) argue over suicide, and two men fight in her grave.",
          "Gertrude is judged by her husband's ghost and her son, but the text never says she knew of the murder, as Carolyn Heilbrun argued in a 1957 essay defending her. Use the closet scene (“Thou turn’st mine eyes into my very soul”) and her report of Hamlet as mad in Act 4, Scene 1, which can be read as keeping his secret, as he asked.",
          'Look at her last choice. Claudius orders “Gertrude, do not drink.” and she replies “I will, my lord; I pray you pardon me.” Whether this is innocent, defiant or a deliberate sacrifice is left open, but her dying words warn her son.',
          "Context: daughters were expected to obey fathers, and a queen's remarriage was a political act as well as a private one, which is why the court's approval of it matters in Act 1, Scene 2.",
          'Conclude with a judgement: are the women silenced by the play, or does the play show them being silenced, and invite the audience to notice?',
        ],
      },
      {
        question:
          'Explore the ways in which Shakespeare presents acting and performance in Hamlet.',
        skill:
          'A-level essay: a theme traced across the whole play, with dramatic methods and context',
        guidance: [
          "Begin with Hamlet's claim to be the one person not performing, “I have that within which passeth show” (Act 1, Scene 2), in a court where Claudius admits his “most painted word”.",
          'Analyse the antic disposition as a performance that the audience cannot always tell from the real thing, from “To put an antic disposition on” to “It is not madness / That I have utter’d.” in the closet scene and his apology in Act 5 that blames his madness.',
          'Use the players. The First Player weeps for Hecuba, a fiction, and Hamlet is shamed into planning a play that will reveal a truth.',
          "Analyse the advice to the players (“the mirror up to nature”) and The Mousetrap itself, including the detail that the murderer is the King's nephew.",
          'Show that spying makes audiences of the characters: Claudius and Polonius “seeing unseen” in Act 3, Scene 1, Rosencrantz and Guildenstern acting friendship, and Polonius behind the arras.',
          'Add theatrical context: Shakespeare almost certainly wrote the role for Richard Burbage, the leading tragic actor of his company, so the first audiences probably watched a famous actor playing a man who lectures actors.',
          "End with the final scene's theatre: Hamlet addresses the “mutes or audience to this act”, and Horatio asks for the bodies to be placed “High on a stage” so that the story can be told. Conclude on what the play suggests about performance and truth.",
        ],
      },
    ],
    tips: [
      "Check your quotations against your own edition. Hamlet exists in three early texts, and familiar lines differ: this edition's “solid flesh” is sullied in many others, and its Gertrude says “The lady protests too much”, where the Second Quarto reads doth protest.",
      'Keep quotations short and embedded. Four exact words, analysed closely, are worth more than a famous line half-remembered.',
      'Never simply call Hamlet indecisive. He acts rashly and violently several times; the strongest answers ask why he acts at some moments and not at others.',
      "Use the foils as evidence, not as a list: Laertes, Fortinbras and the Player's Pyrrhus each show a different kind of revenge, and comparing them builds a whole-play argument quickly.",
      "Give Gertrude and Ophelia their own scenes. The closet scene, Act 4, Scene 5 and Gertrude's last drink are often skipped in revision, and answers that read them closely stand out.",
      "Name critics as positions to test, with a date: Coleridge on reflection, Bradley on melancholy, Eliot on the play's problems, Showalter on Ophelia, Heilbrun on Gertrude, Greenblatt on Purgatory. Agree or disagree, and say why.",
      "Weave context into the analysis. The Ghost's Purgatory, a Catholic idea in a Protestant England, matters because it helps explain why Hamlet fears the Ghost may be a devil, and it shapes his reasoning when he spares the praying King.",
      'Write about the play as theatre: the Ghost cries “under the stage”, Hamlet talks to “this fellow in the cellarage”, and a play is performed inside the play. Staging choices are evidence of meaning.',
    ],
  },

  modelAnswer: {
    question: 'How far do you agree that Hamlet delays his revenge because he thinks too much?',
    paragraph:
      "Shakespeare gives Hamlet a theory of his own delay, but the play invites the audience to doubt it. In the “To be, or not to be” soliloquy he claims that “the native hue of resolution / Is sicklied o’er with the pale cast of thought”, an image in which thinking is an illness that drains the healthy colour from a face, so that resolution is not defeated but made sick. Tellingly, the whole argument avoids the word “I”: Hamlet speaks of “us all”, as if his own case were only an example. Yet when the play next gives him a clear chance, in Act 3, Scene 3, thought does not stop him acting so much as redirect his violence. Finding Claudius alone and apparently praying, he reasons that to kill him now would send his soul “To heaven”, which would be “hire and salary, not revenge”, and he resolves to wait until that soul may be “as damn’d and black / As hell”. This is not the scruple of a man who thinks too much about right and wrong; it is a revenge more complete than anything the Ghost demanded. The couplet that follows adds a dramatic irony only the audience can see: “My words fly up, my thoughts remain below.” Claudius was not truly praying, so Hamlet's careful reasoning rests on a false appearance. Coleridge's view that Hamlet is a man disabled by reflection therefore explains the soliloquies better than it explains this scene, where intellect serves cruelty; and within minutes, in his mother's closet, the same man stabs through the arras without thinking at all.",
    commentary: [
      'It answers the question in its first sentence and then complicates it, so the paragraph argues rather than lists.',
      'Every quotation is short, exact and embedded, and each is followed by what it shows: the illness image, the absent “I”, the language of accounts.',
      'It sets two moments against each other, the soliloquy of Act 3, Scene 1 and the prayer scene of Act 3, Scene 3, which shows structure without retelling the plot.',
      'It uses dramatic irony as a dramatic method, pointing to what the audience knows and Hamlet does not.',
      'It tests a named critic against the evidence instead of borrowing his authority, and ends by reaching forward to the next scene, which is what lifts a competent paragraph to a strong one.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The Ghost on the battlements',
      summary:
        'At midnight the sentries Barnardo and Marcellus bring the sceptical scholar Horatio to see an apparition. It appears twice, in armour and looking like the dead King, but will not speak. Horatio explains that Denmark is arming against young Fortinbras of Norway, and they decide to tell Prince Hamlet.',
      setting: 'The castle platform at Elsinore, at midnight, bitterly cold',
      who: ['Barnardo', 'Francisco', 'Marcellus', 'Horatio', 'The Ghost'],
      quote: 'In the same figure, like the King that’s dead.',
      themes: ['Death and mortality', 'Corruption and decay', 'Appearance vs reality'],
      tension: 3,
      significance:
        'The play opens on fear, uncertainty and a threat from abroad, and the dead refuse to stay buried.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'The new King and the mourning son',
      summary:
        "Claudius, now King and married to his brother's widow Gertrude, deals smoothly with Norway and lets Laertes return to France. He and Gertrude urge Hamlet to stop mourning and refuse to let him go back to Wittenberg. Alone, Hamlet wishes he could die; then Horatio tells him of the Ghost.",
      setting: 'A room of state in the castle, with the whole court present',
      who: [
        'Claudius',
        'Gertrude',
        'Hamlet',
        'Laertes',
        'Polonius',
        'Horatio',
        'Marcellus',
        'Barnardo',
      ],
      quote: 'Seems, madam! Nay, it is; I know not seems.',
      themes: ['Appearance vs reality', 'Family and duty', 'Corruption and decay'],
      tension: 2,
      significance:
        'The public court and the private grief are set side by side, and Hamlet claims to be the only one not acting.',
    },
    {
      where: 'Act 1, Scene 3',
      title: 'Ophelia is warned',
      summary:
        'Before leaving for France, Laertes warns his sister Ophelia that Hamlet cannot freely choose a wife. Polonius gives Laertes a string of precepts, then questions Ophelia and orders her to stop speaking with Hamlet altogether.',
      setting: "A room in Polonius's house",
      who: ['Laertes', 'Ophelia', 'Polonius'],
      quote: 'I shall obey, my lord.',
      themes: ['Family and duty', 'Appearance vs reality'],
      tension: 1,
      significance:
        "Ophelia's love is placed under her father's control, and her obedience sets up her later breakdown.",
    },
    {
      where: 'Act 1, Scene 4',
      title: 'Hamlet follows the Ghost',
      summary:
        "On the platform Hamlet hears the King's noisy drinking and condemns it. The Ghost beckons him away; Horatio fears it may lure him to madness, but Hamlet breaks free of his friends and follows.",
      setting:
        "The castle platform at night, with cannon and trumpets sounding from the King's feast",
      who: ['Hamlet', 'Horatio', 'Marcellus', 'The Ghost'],
      quote: 'Something is rotten in the state of Denmark.',
      themes: ['Corruption and decay', 'Madness, real and performed', 'Death and mortality'],
      tension: 4,
      significance: 'Hamlet commits himself to the Ghost against the warnings of reason.',
    },
    {
      where: 'Act 1, Scene 5',
      title: "The Ghost's command",
      summary:
        'The Ghost says he is suffering in fires for his sins, that Claudius seduced his queen with his wit and gifts, and that Claudius murdered him by pouring poison into his ear as he slept. He commands revenge but tells Hamlet to leave Gertrude to heaven. Hamlet swears his friends to secrecy and warns them he may pretend to be mad.',
      setting: 'A remote part of the castle, near dawn',
      who: ['The Ghost', 'Hamlet', 'Horatio', 'Marcellus'],
      quote: 'Adieu, adieu, adieu. Remember me.',
      themes: ['Revenge and delay', 'Family and duty', 'Death and mortality'],
      tension: 5,
      significance:
        'The revenge plot is set in motion, and so is the antic disposition that will cover it.',
    },
    {
      where: 'Act 2, Scene 1',
      title: "Ophelia's fright",
      summary:
        'Polonius sends his servant Reynaldo to spy on Laertes in Paris. Ophelia rushes in: Hamlet has come to her room half-dressed, stared at her face in silence and left. Polonius decides that her rejection has driven him mad with love.',
      setting: "A room in Polonius's house",
      who: ['Polonius', 'Reynaldo', 'Ophelia'],
      quote: 'This is the very ecstasy of love',
      themes: ['Madness, real and performed', 'Appearance vs reality', 'Family and duty'],
      tension: 2,
      significance:
        "The first sign of the antic disposition is seen only through Ophelia's report, so the audience cannot tell whether it is real.",
    },
    {
      where: 'Act 2, Scene 2',
      title: 'Spies and players',
      summary:
        "Claudius and Gertrude recruit Hamlet's old schoolfellows Rosencrantz and Guildenstern to find out what troubles him. Polonius reads Hamlet's love letter to the King and plans to watch Hamlet with Ophelia. Hamlet baits Polonius, makes his friends admit they were sent for, and welcomes a company of travelling players.",
      setting: 'A room in the castle',
      who: [
        'Claudius',
        'Gertrude',
        'Rosencrantz',
        'Guildenstern',
        'Polonius',
        'Hamlet',
        'The First Player',
      ],
      quote: 'I am but mad north-north-west.',
      themes: ['Madness, real and performed', 'Appearance vs reality'],
      tension: 3,
      significance: 'Everyone is now watching Hamlet, and Hamlet knows it.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The rogue and peasant slave',
      summary:
        "Moved by the Player's speech about Hecuba, Hamlet is left alone and attacks himself for doing nothing when an actor can weep for a fiction. He decides the Ghost might be a devil and plans to have the players act a murder like his father's before Claudius.",
      setting: 'The same room, emptied of the court',
      who: ['Hamlet', 'The First Player'],
      quote: 'The spirit that I have seen / May be the devil',
      themes: ['Revenge and delay', 'Appearance vs reality'],
      tension: 3,
      significance: 'Doubt about the Ghost gives Hamlet a reason to test before he acts.',
    },
    {
      where: 'Act 3, Scene 1',
      title: '“To be, or not to be” and the nunnery scene',
      summary:
        'While Claudius and Polonius hide, Hamlet speaks his most famous soliloquy, then meets Ophelia, tells her he loved her once and then that he did not, and orders her to a nunnery. Claudius, unconvinced it is love-madness, decides to send Hamlet to England.',
      setting: 'A room in the castle, with the King and Polonius hidden',
      who: ['Claudius', 'Polonius', 'Gertrude', 'Ophelia', 'Hamlet', 'Rosencrantz', 'Guildenstern'],
      quote: 'O, what a noble mind is here o’erthrown!',
      themes: ['Death and mortality', 'Madness, real and performed', 'Appearance vs reality'],
      tension: 4,
      significance:
        'Ophelia is used as bait and broken by it, and the King begins to plan against Hamlet.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'The Mousetrap',
      summary:
        'Hamlet instructs the players and asks Horatio to watch the King. A dumb show and then the play itself show a king poisoned as he sleeps in his garden, in the play by his nephew. Claudius rises, calls for light and leaves; Hamlet is sure the Ghost told the truth, and goes to his mother.',
      setting: 'A hall in the castle, the court seated as an audience',
      who: [
        'Hamlet',
        'Horatio',
        'Claudius',
        'Gertrude',
        'Ophelia',
        'Polonius',
        'Rosencrantz',
        'Guildenstern',
        'The First Player',
      ],
      quote: 'What, frighted with false fire?',
      themes: ['Appearance vs reality', 'Revenge and delay', 'Corruption and decay'],
      tension: 4,
      significance:
        'Close to the middle of the play: guilt is exposed, and from here Claudius is on the attack.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The King at prayer',
      summary:
        "Claudius orders Rosencrantz and Guildenstern to take Hamlet to England. Alone, he confesses his brother's murder and tries to pray. Hamlet comes upon him kneeling but will not kill him at prayer, in case his soul goes to heaven, and leaves. Claudius rises: his prayer was empty.",
      setting: 'A room in the castle',
      who: ['Claudius', 'Rosencrantz', 'Guildenstern', 'Polonius', 'Hamlet'],
      quote: 'My words fly up, my thoughts remain below.',
      themes: ['Revenge and delay', 'Corruption and decay', 'Appearance vs reality'],
      tension: 4,
      significance:
        'The clearest chance for revenge is refused, for a reason that rests on a false appearance.',
    },
    {
      where: 'Act 3, Scene 4',
      title: 'The closet scene',
      summary:
        "Polonius hides behind the arras in Gertrude's room. When she cries for help and a voice behind it cries out too, Hamlet stabs through it, hoping it is the King, and kills Polonius. He condemns her marriage until the Ghost appears, seen only by him, to sharpen his purpose. Gertrude promises to keep his secret.",
      setting: "Gertrude's private chamber, at night",
      who: ['Gertrude', 'Polonius', 'Hamlet', 'The Ghost'],
      quote: 'Thou wretched, rash, intruding fool, farewell!',
      themes: ['Family and duty', 'Madness, real and performed', 'Revenge and delay'],
      tension: 5,
      significance: 'The rash killing of the wrong man sets off every death that follows.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'Sent to England',
      summary:
        'Hamlet, who has hidden the body, mocks the King, saying Polonius is at supper where worms are eating him. Claudius sends him to England at once, and alone reveals that his sealed letters order the King of England to put Hamlet to death.',
      setting: 'A room in the castle',
      who: ['Claudius', 'Hamlet', 'Rosencrantz', 'Guildenstern'],
      quote: 'The present death of Hamlet. Do it, England',
      themes: ['Death and mortality', 'Corruption and decay'],
      tension: 3,
      significance: 'Claudius now openly plots murder, and the audience knows what Hamlet carries.',
    },
    {
      where: 'Act 4, Scene 4',
      title: "Fortinbras's army",
      summary:
        'On the way to the ship Hamlet meets the army of Fortinbras, marching to fight Poland for a worthless patch of ground. Alone, he compares himself with men who die for a straw and vows that his thoughts will now be bloody. This soliloquy appears only in the Second Quarto.',
      setting: 'A plain in Denmark, with soldiers marching',
      who: ['Fortinbras', 'Hamlet', 'Rosencrantz', 'Guildenstern'],
      quote: 'My thoughts be bloody or be nothing worth.',
      themes: ['Revenge and delay', 'Family and duty'],
      tension: 3,
      significance:
        'The last soliloquy: Hamlet leaves Denmark promising bloodshed and is absent for the rest of Act 4.',
    },
    {
      where: 'Act 4, Scene 5',
      title: 'Ophelia mad, Laertes in arms',
      summary:
        "Ophelia, driven mad by her father's death, sings fragments of songs before the King and Queen. Laertes breaks in at the head of a crowd demanding revenge; Claudius calms him. Ophelia returns and hands out flowers, and Laertes agrees to hear the King's account of his father's death.",
      setting: 'A room in the castle, its doors broken in',
      who: ['Gertrude', 'Horatio', 'Ophelia', 'Claudius', 'Laertes'],
      quote: 'There’s rosemary, that’s for remembrance',
      themes: ['Madness, real and performed', 'Family and duty', 'Revenge and delay'],
      tension: 4,
      significance:
        'Real madness appears beside the feigned kind, and a second avenger arrives who does not delay.',
    },
    {
      where: 'Act 4, Scene 7',
      title: 'The plot, and a drowning',
      summary:
        'Horatio has learned from a letter that Hamlet escaped on a pirate ship; now a letter tells Claudius that Hamlet is back in Denmark, alone. Claudius and Laertes plan a fencing match with an unblunted sword, which Laertes will poison, and a poisoned cup in reserve. Gertrude brings word that Ophelia has drowned.',
      setting: 'A room in the castle',
      who: ['Claudius', 'Laertes', 'Gertrude'],
      quote: 'To cut his throat i’ th’ church.',
      themes: ['Revenge and delay', 'Corruption and decay', 'Death and mortality'],
      tension: 4,
      significance:
        'Laertes would kill Hamlet even in a church, where Hamlet would not kill a man at prayer, and Claudius turns grief into a weapon.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The graveyard',
      summary:
        "Two gravediggers joke about whether a suicide should have Christian burial. Hamlet and Horatio arrive; Hamlet talks with the Gravedigger, who turns up the skull of Yorick, the King's jester when Hamlet was a child, and Hamlet reflects that even Alexander the Great turned to dust.",
      setting: 'A churchyard, with a grave being dug',
      who: ['The Gravedigger', 'Hamlet', 'Horatio'],
      quote: 'Alas, poor Yorick.',
      themes: ['Death and mortality'],
      tension: 2,
      significance:
        'Before the violence of the ending, the play looks death in the face and finds a joke and a skull.',
    },
    {
      where: 'Act 5, Scene 1',
      title: "Ophelia's funeral",
      summary:
        "Ophelia's coffin arrives with reduced rites because her death was doubtful. Laertes leaps into the grave; Hamlet comes forward, declares himself and leaps in after him, and the two grapple until they are pulled apart.",
      setting: 'The churchyard, at the open grave',
      who: ['Laertes', 'Hamlet', 'Claudius', 'Gertrude', 'Horatio'],
      quote: 'This is I, / Hamlet the Dane.',
      themes: ['Death and mortality', 'Family and duty', 'Madness, real and performed'],
      tension: 4,
      significance: 'Hamlet reclaims his royal name over the grave of the woman he rejected.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The readiness is all',
      summary:
        "Hamlet tells Horatio how he found the order for his death and forged a new one condemning Rosencrantz and Guildenstern. The courtier Osric brings the King's wager on a fencing match with Laertes. Hamlet admits a misgiving but accepts, trusting in providence.",
      setting: 'A hall in the castle',
      who: ['Hamlet', 'Horatio', 'Osric'],
      quote: 'The readiness is all.',
      themes: ['Death and mortality', 'Revenge and delay'],
      tension: 3,
      significance: 'A calmer Hamlet goes to his death having stopped trying to control events.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The duel',
      summary:
        "Gertrude drinks from the poisoned cup against Claudius's order. Laertes wounds Hamlet with the poisoned blade; in a scuffle they exchange swords and Hamlet wounds Laertes. The Queen dies, Laertes confesses the plot, and Hamlet kills Claudius with the sword and the poison.",
      setting: 'The hall, the court watching the match',
      who: ['Hamlet', 'Laertes', 'Claudius', 'Gertrude', 'Osric', 'Horatio'],
      quote: 'I am justly kill’d with mine own treachery.',
      themes: ['Revenge and delay', 'Corruption and decay', 'Death and mortality'],
      tension: 5,
      significance: 'The revenge is finally done, in public, by means Claudius himself prepared.',
    },
    {
      where: 'Act 5, Scene 2',
      title: 'The rest is silence',
      summary:
        "Laertes and Hamlet exchange forgiveness before Laertes dies. Hamlet stops Horatio from drinking the poison so that he can live to tell the story, names Fortinbras as the next King, and dies. Fortinbras arrives, claims the throne and orders a soldier's funeral for Hamlet.",
      setting: 'The hall, among the bodies',
      who: ['Hamlet', 'Horatio', 'Laertes', 'Fortinbras', 'Osric'],
      quote: 'Absent thee from felicity awhile',
      themes: ['Death and mortality', 'Family and duty'],
      tension: 4,
      significance:
        'The royal line of Denmark ends, and a foreign prince whose father lost lands to old Hamlet inherits the whole kingdom.',
    },
  ],

  relationships: [
    {
      from: 'Hamlet',
      to: 'The Ghost',
      kind: 'son and father',
      note: 'The Ghost commands revenge and memory, and Hamlet vows to wipe everything else from his mind. Doubt about whether the Ghost is honest or a devil shapes the first half of the play.',
    },
    {
      from: 'Hamlet',
      to: 'Claudius',
      kind: 'nephew and uncle, now stepson and stepfather',
      note: 'Claudius calls Hamlet his son in public and plans his death in private; Hamlet mocks him, tests him and finally kills him. The two circle each other for the whole play.',
    },
    {
      from: 'Hamlet',
      to: 'Gertrude',
      kind: 'son and mother',
      note: 'Hamlet is disgusted by her remarriage and confronts her in the closet scene. She keeps his secret afterwards, and her dying words warn him about the drink.',
    },
    {
      from: 'Claudius',
      to: 'Gertrude',
      kind: 'husband and wife, once brother-in-law and sister-in-law',
      note: "By Hamlet's account Claudius married his brother's widow within a month of the funeral. He later tells Laertes she is so bound to his life that he could not act against her son openly. She drinks the poison he prepared.",
    },
    {
      from: 'Claudius',
      to: 'The Ghost',
      kind: 'murderer and murdered brother',
      note: 'Claudius poisoned his brother to take his crown and queen. His own soliloquy calls it “A brother’s murder!”, the oldest crime of all.',
    },
    {
      from: 'Hamlet',
      to: 'Ophelia',
      kind: 'former lovers',
      note: "Their courtship is ended by her father's order. Hamlet treats her cruelly in the nunnery scene and the Mousetrap scene, kills her father, and claims at her grave that he loved her more than forty thousand brothers.",
    },
    {
      from: 'Polonius',
      to: 'Ophelia',
      kind: 'father and daughter',
      note: "Polonius orders her to reject Hamlet, then uses her to spy on him. His death by Hamlet's hand drives her mad.",
    },
    {
      from: 'Polonius',
      to: 'Laertes',
      kind: 'father and son',
      note: 'Polonius sends Laertes off with advice and then has him spied on in Paris. His killing brings Laertes home in arms for revenge.',
    },
    {
      from: 'Laertes',
      to: 'Ophelia',
      kind: 'brother and sister',
      note: 'Laertes warns her against Hamlet in Act 1, grieves at her madness in Act 4, and leaps into her grave in Act 5.',
    },
    {
      from: 'Hamlet',
      to: 'Laertes',
      kind: 'foils and rivals',
      note: "Both are sons avenging murdered fathers. Laertes acts at once and lets Claudius use him; Hamlet sees his own cause in Laertes's, and they forgive each other as they die.",
    },
    {
      from: 'Claudius',
      to: 'Laertes',
      kind: 'manipulator and instrument',
      note: "Claudius calms Laertes's rebellion by redirecting his anger at Hamlet, then designs the poisoned match. Laertes, dying, names the King as the one to blame.",
    },
    {
      from: 'Hamlet',
      to: 'Horatio',
      kind: 'friends and fellow students',
      note: 'Horatio is the one person Hamlet trusts completely, praised as a man not ruled by passion. Hamlet stops him from dying so that he can tell the story.',
    },
    {
      from: 'Hamlet',
      to: 'Rosencrantz',
      kind: 'schoolfellows turned spies',
      note: 'Summoned by the King to find out what troubles Hamlet, Rosencrantz and Guildenstern are seen through at once. Hamlet sends them to their deaths in England with a forged commission.',
    },
    {
      from: 'Hamlet',
      to: 'Guildenstern',
      kind: 'schoolfellows turned spies',
      note: 'Guildenstern admits they were sent for and cannot play the recorder Hamlet offers him, which Hamlet turns into a rebuke for trying to play upon him.',
    },
    {
      from: 'Hamlet',
      to: 'Polonius',
      kind: 'mocker and target',
      note: 'Hamlet ridicules Polonius under cover of madness and kills him by mistake through the arras, calling him a rash, intruding fool.',
    },
    {
      from: 'Hamlet',
      to: 'Fortinbras',
      kind: 'rival princes',
      note: 'Fortinbras is the son who acts, first against Denmark and then against Poland. Hamlet gives him his dying voice, and Fortinbras inherits the throne.',
    },
  ],

  compareWith: [
    {
      title: 'Othello',
      href: '/revision/texts/othello',
      reason:
        'A tragedy registered for the same A-level boards: Hamlet stages a play to test a suspicion, where Iago stages scenes to create one, and both plays turn on what watching can prove.',
    },
    {
      title: 'King Lear',
      href: '/revision/texts/king-lear',
      reason:
        "Another tragedy on the same boards that sets real madness beside feigned madness: Lear's breakdown and Edgar's disguise as Poor Tom make a close comparison with Ophelia and Hamlet's antic disposition.",
    },
    {
      title: 'The Tempest',
      href: '/revision/texts/the-tempest',
      reason:
        "Registered for two of the same A-level boards: Prospero, put out of his dukedom by his brother, has his enemies in his power in Act 5, Scene 1 and chooses virtue over vengeance, the opposite of the revenge Hamlet's father demands.",
    },
  ],

  // The Second Quarto's reading in Act 1, Scene 2, quoted in a note to show
  // how editions differ; the held edition prints the Folio's "solid".
  quotesFromElsewhere: ['sallied'],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'supernatural',
    'mythological_religious',
    'crime_injustice',
    'intimate_relationships',
    'addiction',
  ],

  sources: [
    {
      label:
        'Hamlet, Project Gutenberg eBook #1524: the modern-spelling edition held as a byte copy in src/data/full-texts/hamlet.ts, from which every quotation and all three passages were copied, with speakers and scenes checked by reading the whole play',
      url: 'https://www.gutenberg.org/ebooks/1524',
    },
    {
      label:
        'Folger Shakespeare Library, Hamlet, An Introduction to This Text: the First Quarto of 1603 is little more than half as long as the others; the Second Quarto of 1604/1605 claimed the true and perfect copy; the Folio has some eighty-five lines not in the Second Quarto and lacks about two hundred of its lines',
      url: 'https://www.folger.edu/explore/shakespeares-works/hamlet/an-introduction-to-this-text/',
    },
    {
      label:
        'Folger Shakespeare Library, Hamlet, Textual Notes: 4.4.10-69 Q2 only (the Captain and the soliloquy); 2.2.258-89 F only (the Denmark is a prison exchange); 1.2.133 sullied, Q2 sallied, F solid; 3.2.254 doth protest Q2, protests F; 3.4.225-33 Q2 only (the letters and the petard); 5.2.77-91 F only (the image of my cause)',
      url: 'https://www.folger.edu/explore/shakespeares-works/hamlet/textual-notes/',
    },
    {
      label:
        "Wikipedia, Hamlet: written between 1599 and 1601; Shakespeare's longest play; Q1 1603, Q2 1604, F1 1623; Saxo's Amleth and Belleforest's Histoires tragiques of 1570; the lost Ur-Hamlet; Wittenberg and Luther's theses of 1517; the Ghost in purgatory, dying without last rites; the role almost certainly written for Richard Burbage; Ernest Jones, Hamlet and Oedipus (1949)",
      url: 'https://en.wikipedia.org/wiki/Hamlet',
    },
    {
      label:
        "Wikipedia, Critical approaches to Hamlet: Coleridge on excessive introspection; Bradley on melancholy; Eliot's Hamlet and His Problems (1919); Freud's Oedipal reading; Showalter on Ophelia; Carolyn Heilbrun's 1957 essay on Gertrude, that the text never hints she knew of the poisoning; Greenblatt, Hamlet in Purgatory (2001)",
      url: 'https://en.wikipedia.org/wiki/Critical_approaches_to_Hamlet',
    },
    {
      label: 'Wikipedia, A. C. Bradley: Shakespearean Tragedy (1904)',
      url: 'https://en.wikipedia.org/wiki/A._C._Bradley',
    },
    {
      label:
        "Wikipedia, Objective correlative: T. S. Eliot's Hamlet and His Problems (1919), arguing that Hamlet's emotion exceeds the facts of the play",
      url: 'https://en.wikipedia.org/wiki/Objective_correlative',
    },
    {
      label:
        "Wikipedia, Ophelia: nunnery as slang for a brothel; Showalter's Representing Ophelia (1985); Gertrude reports the drowning as an accident while the sexton insists on suicide",
      url: 'https://en.wikipedia.org/wiki/Ophelia',
    },
    {
      label:
        "Wikipedia, Revenge tragedy: Seneca's influence; conventions established by Kyd, including a ghost, feigned madness, a play within a play and a Machiavellian villain",
      url: 'https://en.wikipedia.org/wiki/Revenge_tragedy',
    },
    {
      label:
        'Wikipedia, Thirty-nine Articles: finalised in 1571; Article 22 condemns the Catholic teaching on purgatory',
      url: 'https://en.wikipedia.org/wiki/Thirty-nine_Articles',
    },
    {
      label: "Wikipedia, Leviticus 18: a brother's wife listed among the forbidden relationships",
      url: 'https://en.wikipedia.org/wiki/Leviticus_18',
    },
    {
      label:
        'Wiktionary, for the glosses: arras, antic, closet, bodkin, quietus, fardel, bourn, rub, coil, conscience (obsolete sense: consciousness), petard, foil, bate and unbated, crowner, argal, unhouseled, unaneled, satyr',
      url: 'https://en.wiktionary.org/',
    },
    {
      label:
        'Wikipedia, Niobe: her children killed by Apollo and Artemis; turned to stone, still weeping',
      url: 'https://en.wikipedia.org/wiki/Niobe',
    },
    {
      label:
        'Wikipedia, Hyperion (Titan): a Titan, father of Helios (the Sun), and in Homer sometimes a name for the sun itself; Wikipedia, Satyr: pictured with the legs and horns of goats since the Renaissance',
      url: 'https://en.wikipedia.org/wiki/Hyperion_(Titan)',
    },
    {
      label:
        "Wikipedia, Richard Burbage, and Wikipedia, Hamlet: the chief tragedian of Shakespeare's company, the Lord Chamberlain's Men, for whom Shakespeare almost certainly wrote the role of Hamlet",
      url: 'https://en.wikipedia.org/wiki/Richard_Burbage',
    },
    {
      label:
        "Held editions of Othello, King Lear and The Tempest in src/data/full-texts: checked for the comparison notes (Edgar's Poor Tom in King Lear, Act 2, Scene 3; Prospero put out of Milan by his brother, and his choice of virtue over vengeance in The Tempest, Act 5, Scene 1)",
    },
  ],
}
