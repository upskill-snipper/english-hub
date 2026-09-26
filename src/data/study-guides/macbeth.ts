import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Macbeth, William Shakespeare (c. 1606). A SUPPLEMENT: the page at
 * /revision/texts/macbeth already carries the overview, context, themes,
 * characters, quotations, language, structure, exam practice and model answer,
 * so this file adds only what that page lacked: close-reading extracts and a
 * glossary, plus the scene timeline and character map the visuals draw.
 *
 * No edition of Macbeth is held in src/data/full-texts, so the guide test cannot
 * check these quotations mechanically. Every quotation here, in the extracts,
 * on the scene cards and inside the prose, was copied from the Folger
 * Shakespeare Library's online text, scene by scene, and its wording checked
 * against the MIT Shakespeare text and Project Gutenberg eBook #1533; speakers
 * and scenes were confirmed on the Folger page for that scene. Where editions
 * differ (Folger's "you murd'ring ministers" is "your" in the Gutenberg text;
 * Folger's "one-half world" and "whereabouts" are "one halfworld" and
 * "whereabout" in the MIT text), the guide follows the Folger text and says so
 * in rights.acknowledgement.
 *
 * The exception is the two extracts added on 26 September 2026 (1.3 and 5.3),
 * which print the Gutenberg text because Folger Digital Texts are licensed for
 * non-commercial use only; the note above the extracts says why and how. The
 * same licence bears on everything else here that follows Folger, which has
 * not been re-examined.
 *
 * A fact-check pass (September 2026) searched every quotation, speaker and
 * scene against the full Folger text (Mowat and Werstine) and found them all.
 * It corrected the plot instead: Duncan does not "greet" Macbeth in 1.2 (Macbeth
 * is not on stage); Malcolm is hailed king at the end, not crowned; the first
 * prophecy in 1.3 is Glamis, which Macbeth already holds, so it is the Cawdor
 * prophecy that comes true within minutes; "Beware Macduff" is not misleading,
 * so only the second and third apparitions are. Several readings stated as
 * fact were also softened into readings.
 *
 * Two errors on the existing pages were avoided here and are worth fixing there
 * (see the report that accompanied this file): "God's benison go with you" is
 * the Old Man's line in 2.4, not Duncan's in 1.6; and "Why should I play the
 * Roman fool" opens 5.8.
 */
export const guide: StudyGuide = {
  slug: 'macbeth',
  title: 'Macbeth',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    "The whole play, in five acts: from the witches' first meeting in Act 1, Scene 1 to Macbeth's death and Malcolm's victory in Act 5, Scene 8. The play survives only in the First Folio of 1623, so every modern edition, including the one your school uses, is edited from that single text.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "First printed in the First Folio (1623). Quotations and scene numbers follow the Folger Shakespeare Library's edition, edited by Barbara A. Mowat and Paul Werstine, with its editorial brackets removed, and were checked against the MIT Shakespeare text and Project Gutenberg eBook #1533. The two passages printed from Act 1, Scene 3 and Act 5, Scene 3, and the notes on them, follow Project Gutenberg's text instead, with its older spellings such as “wither'd”. Punctuation, spelling and line numbers differ slightly between editions, so find each passage in your own copy by its opening words.",
  },

  native: {
    overview: '/revision/texts/macbeth',
    context: '/revision/texts/macbeth',
    themes: '/revision/texts/macbeth',
    characters: '/revision/texts/macbeth',
    keyQuotes: '/revision/texts/macbeth',
    languageAnalysis: '/revision/texts/macbeth',
    structureForm: '/revision/texts/macbeth',
    examPractice: '/revision/texts/macbeth',
    modelAnswer: '/revision/texts/macbeth',
  },

  // The existing page already walks through Macbeth's "If it were done"
  // soliloquy (1.7) line by line, so these are chosen to complement it: the
  // prophecies that start everything, Lady Macbeth at her strongest, Macbeth on
  // the brink, Lady Macbeth broken, and Macbeth at bay.
  //
  // The first and last were added on 26 September 2026, and they print Project
  // Gutenberg eBook #1533, not the Folger text the rest of this file follows.
  // They were first cut from the Folger pages for 1.3 and 5.3, but Folger's
  // copyright policy (folger.edu/copyright-policy, read 26 September 2026)
  // licenses Folger Digital Texts under CC BY-NC 3.0 and says the texts may
  // not be used "for commercial purposes", and this site is commercial. So
  // each passage was cut again from the Gutenberg file by script, never
  // retyped, and matched line for line against the Folger scene: the same 32
  // and 31 lines, the same speakers, nothing dropped. The two differ in
  // spelling and elision ("wither'd", "call'd", "pronounc'd", "favours",
  // "honour"), in punctuation, in "ye" for "you" twice in 1.3 ("Are ye
  // fantastical") and in "the inhabitants" for "th' inhabitants". The
  // annotations, notes and pointers of these two quote Gutenberg too,
  // including their lines from other scenes, and every quotation in them was
  // matched against the Gutenberg file by script, case and marks included.
  //
  // They also carry the play's own words for the Witches, Banquo and Malcolm,
  // which the comic portraits in src/data/comics/macbeth point to: the comics
  // test checks every marker phrase against these quotations, so rewording a
  // line here can unregister a portrait. The Witches' first marker is
  // therefore "So wither'd", Gutenberg's spelling.
  extracts: [
    {
      title: "The witches' prophecies",
      where: 'Act 1, Scene 3',
      pointer:
        "Macbeth and Banquo come upon the witches on the heath, just after Macbeth's first line, “So foul and fair a day I have not seen”: from Banquo's “How far is't call'd to Forres?” to “Banquo and Macbeth, all hail!”, just before Macbeth orders them to stay and “tell me more”.",
      text: "BANQUO: How far is't call'd to Forres?—What are these, / So wither'd, and so wild in their attire, / That look not like the inhabitants o' th' earth, / And yet are on't?—Live you? or are you aught / That man may question? You seem to understand me, / By each at once her choppy finger laying / Upon her skinny lips. You should be women, / And yet your beards forbid me to interpret / That you are so. / MACBETH: Speak, if you can;—what are you? / FIRST WITCH: All hail, Macbeth! hail to thee, Thane of Glamis! / SECOND WITCH: All hail, Macbeth! hail to thee, Thane of Cawdor! / THIRD WITCH: All hail, Macbeth! that shalt be king hereafter! / BANQUO: Good sir, why do you start and seem to fear / Things that do sound so fair?—I' th' name of truth, / Are ye fantastical, or that indeed / Which outwardly ye show? My noble partner / You greet with present grace and great prediction / Of noble having and of royal hope, / That he seems rapt withal. To me you speak not. / If you can look into the seeds of time, / And say which grain will grow, and which will not, / Speak then to me, who neither beg nor fear / Your favours nor your hate. / FIRST WITCH: Hail! / SECOND WITCH: Hail! / THIRD WITCH: Hail! / FIRST WITCH: Lesser than Macbeth, and greater. / SECOND WITCH: Not so happy, yet much happier. / THIRD WITCH: Thou shalt get kings, though thou be none: / So all hail, Macbeth and Banquo! / FIRST WITCH: Banquo and Macbeth, all hail!",
      annotations: [
        {
          phrase: "So wither'd, and so wild in their attire",
          note: "It is Banquo, not Macbeth, who describes the witches, and after “wither'd” and “wild” he turns to what they are not: they “look not like the inhabitants o' th' earth, / And yet are on't”. Everything about them sits on a border, earthly and unearthly, living and something else. The play never settles exactly what they are, so an answer can weigh more than one reading.",
        },
        {
          phrase:
            'You should be women, / And yet your beards forbid me to interpret / That you are so',
          note: "Banquo's sentence cannot settle: they “should be” women, and yet the beards say otherwise. The witches blur man and woman just as their chant in Act 1, Scene 1 blurs fair and foul. Two scenes later Lady Macbeth asks the spirits to “unsex me here”, so the play's two most sinister female presences both seem to unsettle what a woman was expected to be.",
        },
        {
          phrase: 'All hail, Macbeth! that shalt be king hereafter!',
          note: 'The three greetings climb: Thane of Glamis, the title Macbeth already holds; Thane of Cawdor, which Duncan has already given him in Act 1, Scene 2, though Macbeth does not yet know it; and king. The first two make the third sound like the next step. Here the witches never tell him to kill anyone. How he becomes king is left to him, and that gap is where an answer about fate and free will begins.',
        },
        {
          phrase: 'why do you start and seem to fear / Things that do sound so fair?',
          note: "Banquo sees his friend “start”, flinch, at good news, and asks the question an audience may be asking too: why should a promise of the crown frighten him? A common reading is that the prophecy names a wish Macbeth already had, and later in the scene he admits to a “horrid image” that makes his hair stand on end. “Fair” echoes the witches' “Fair is foul” and Macbeth's own first line, “So foul and fair a day I have not seen”, while “seem” touches the play's concern with appearances.",
        },
        {
          phrase: 'That he seems rapt withal',
          note: "“Rapt” means carried away, lost in thought. It is the first glimpse of the private Macbeth the soliloquies will show, and Banquo remarks on it again later in the scene: “Look, how our partner's rapt.” While Macbeth is lost inside himself, it is Banquo who questions the witches.",
        },
        {
          phrase:
            'If you can look into the seeds of time, / And say which grain will grow, and which will not',
          note: "Banquo pictures the future as a field of seed, some of which will grow and some will not. The image suits the prophecy he is about to receive, which ends with his children, the seed of a family line: he will father kings without being one. He claims to “neither beg nor fear” their favours, a steadiness set against Macbeth's silence. Alone in Act 3, Scene 1, though, he suspects foul play (“I fear, / Thou play'dst most foully for't”), tells no one, and wonders whether the prophecies may “set me up in hope”.",
        },
        {
          phrase: 'Lesser than Macbeth, and greater',
          note: "The first two riddles are paradoxes that only make sense if a word shifts its meaning. The usual reading is that Banquo will be lower in rank than Macbeth but greater in what he leaves behind, and less fortunate (an old sense of “happy”) in his own life but “happier” in his descendants. The witches' habit of speaking in double senses becomes dangerous in Act 4, when the second and third apparitions equivocate: their words are true, but not in the sense Macbeth takes them.",
        },
        {
          phrase: 'Thou shalt get kings, though thou be none',
          note: "“Get” means beget, to father. This is the line Macbeth cannot forget: in Act 3, Scene 1, among his reasons for fearing Banquo, he broods that the witches “hail'd him father to a line of kings” and placed “a fruitless crown” on his own head, and in Act 4 he is shown that line of kings. King James I was believed in Shakespeare's day to descend from Banquo, which may be why Shakespeare's Banquo takes no part in the murder, when in Shakespeare's source, Holinshed's Chronicles, he helps Macbeth kill Duncan.",
        },
      ],
      question:
        "Starting with this extract, explore how Shakespeare presents the witches' influence on Macbeth. Write about how Shakespeare presents the witches in this extract, and how he presents their influence on Macbeth in the play as a whole.",
    },
    {
      title: 'Lady Macbeth calls on the spirits',
      where: 'Act 1, Scene 5',
      pointer:
        "Lady Macbeth's soliloquy after the messenger's news that “The King comes here tonight”: from “The raven himself is hoarse” to “To cry ‘Hold, hold!’”, just before Macbeth enters.",
      text: "The raven himself is hoarse / That croaks the fatal entrance of Duncan / Under my battlements. Come, you spirits / That tend on mortal thoughts, unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty. Make thick my blood. / Stop up th' access and passage to remorse, / That no compunctious visitings of nature / Shake my fell purpose, nor keep peace between / Th' effect and it. Come to my woman's breasts / And take my milk for gall, you murd'ring ministers, / Wherever in your sightless substances / You wait on nature's mischief. Come, thick night, / And pall thee in the dunnest smoke of hell, / That my keen knife see not the wound it makes, / Nor heaven peep through the blanket of the dark / To cry ‘Hold, hold!’",
      annotations: [
        {
          phrase: 'The raven himself is hoarse',
          note: "The raven was a traditional bird of ill omen, and Lady Macbeth hears it croaking itself hoarse over Duncan's “fatal entrance”. The king has only been announced, yet in her mind he is already dead: the murder is decided before her husband has even arrived home.",
        },
        {
          phrase: 'unsex me here',
          note: 'The imperatives “Come, you spirits” and “unsex me here” are an invocation, the language of someone summoning spirits. She asks to be stripped of the gentleness her world expected of women, which suggests she believes cruelty is not natural to her and must be put there. A Jacobean audience would probably also hear a woman calling on spirits as close to witchcraft.',
        },
        {
          phrase: 'from the crown to the toe top-full',
          note: 'The image is of a body as a vessel, filled from head to foot with cruelty. “Crown” can also be heard as a pun: the crown of the head, and the crown of Scotland she wants for her husband, as if the cruelty and the ambition filled her together.',
        },
        {
          phrase: "Stop up th' access and passage to remorse",
          note: 'She imagines conscience as something that travels through the body and can be blocked, like a passage sealed shut. The whole play proves her wrong: in Act 5, Scene 1 the remorse she walled up comes back in her sleep, and the Doctor says “More needs she the divine than the physician”.',
        },
        {
          phrase: 'take my milk for gall',
          note: "Milk is the sign of a mother's nurture; gall is bitter bile. Earlier in the scene she feared her husband was “too full o' th' milk of human kindness”, so here she asks for the very quality she despises in him to be poisoned in herself. Motherhood is turned inside out.",
        },
        {
          phrase: 'Come, thick night',
          note: 'Darkness is summoned to hide the deed, exactly as Macbeth asked in the previous scene, “Stars, hide your fires”. Husband and wife, speaking separately, reach for the same image, which suggests how closely their desires already match before they have spoken of murder together.',
        },
        {
          phrase: 'That my keen knife see not the wound it makes',
          note: 'The knife is personified as if it had eyes, so that even the weapon must not witness the crime. She means to strike the blow herself. In Act 2, Scene 2 she cannot, because Duncan “resembled / My father as he slept”, the first crack in the cruelty she prays for here.',
        },
        {
          phrase: 'Nor heaven peep through the blanket of the dark',
          note: 'Heaven is pictured as a watcher who might peep through and cry “Hold, hold!”, meaning stop. The homely word “blanket” makes the night a bedcover over a sleeping house. At the end of the play Macbeth damns whoever first cries “Hold! Enough!”, so the cry she fears here returns in his last words.',
        },
      ],
      question:
        "Starting with this speech, explore how Shakespeare presents Lady Macbeth's attitude to evil. Write about how she speaks in this soliloquy, and how Shakespeare presents her attitude to evil in the play as a whole.",
    },
    {
      title: 'The dagger soliloquy',
      where: 'Act 2, Scene 1',
      pointer:
        "The end of the scene, after Macbeth sends his servant away: from “Is this a dagger which I see before me” to “That summons thee to heaven or to hell”, as Macbeth leaves for Duncan's room.",
      text: "Is this a dagger which I see before me, / The handle toward my hand? Come, let me clutch thee. / I have thee not, and yet I see thee still. / Art thou not, fatal vision, sensible / To feeling as to sight? Or art thou but / A dagger of the mind, a false creation / Proceeding from the heat-oppressèd brain? / I see thee yet, in form as palpable / As this which now I draw. / Thou marshal'st me the way that I was going, / And such an instrument I was to use. / Mine eyes are made the fools o' th' other senses / Or else worth all the rest. I see thee still, / And, on thy blade and dudgeon, gouts of blood, / Which was not so before. There's no such thing. / It is the bloody business which informs / Thus to mine eyes. Now o'er the one-half world / Nature seems dead, and wicked dreams abuse / The curtained sleep. Witchcraft celebrates / Pale Hecate's off'rings, and withered murder, / Alarumed by his sentinel, the wolf, / Whose howl's his watch, thus with his stealthy pace, / With Tarquin's ravishing strides, towards his design / Moves like a ghost. Thou sure and firm-set earth, / Hear not my steps, which way they walk, for fear / Thy very stones prate of my whereabouts / And take the present horror from the time, / Which now suits with it. Whiles I threat, he lives. / Words to the heat of deeds too cold breath gives. / [A bell rings.] / I go, and it is done. The bell invites me. / Hear it not, Duncan, for it is a knell / That summons thee to heaven or to hell.",
      annotations: [
        {
          phrase: 'Is this a dagger which I see before me',
          note: 'The soliloquy opens with a question, and questions dominate its first half. Macbeth cannot trust his own senses, and the audience is left unsure too: the play never settles whether the dagger is a supernatural sign or a hallucination, which is exactly the uncertainty an answer should explore.',
        },
        {
          phrase: 'A dagger of the mind, a false creation',
          note: 'Macbeth diagnoses himself: the dagger may come from a “heat-oppressèd brain”, a mind feverish with what it plans. The more convincing reading is that guilt is already at work before the crime, since the vision appears only after he has decided to kill.',
        },
        {
          phrase: "Thou marshal'st me the way that I was going",
          note: 'To marshal is to lead, as an officer leads troops. But the dagger leads him only “the way that I was going”. This is the key line for any question about fate and free will: whatever the vision is, it points him where he has already chosen to go, and in Act 1 he had hoped “chance may crown me / Without my stir”.',
        },
        {
          phrase: 'gouts of blood',
          note: "The vision changes as he watches: drops of blood appear on the blade and handle that “was not so before”. Blood becomes the play's chief image of guilt, from Macbeth's “Will all great Neptune's ocean wash this blood / Clean from my hand?” in the next scene to Lady Macbeth's sleepwalking.",
        },
        {
          phrase: 'It is the bloody business which informs / Thus to mine eyes',
          note: "He argues himself out of the vision: “There's no such thing”, only the murder shaping what he sees. The shift from terror to explanation shows a man trying to control his conscience with reason, a pattern that returns throughout the play, where reason never silences his conscience for long.",
        },
        {
          phrase: "Witchcraft celebrates / Pale Hecate's off'rings",
          note: 'Hecate was the goddess of witchcraft. Macbeth pictures half the world asleep while witches make offerings and wicked dreams disturb sleepers, so the night he enters is a night that belongs to the powers he met on the heath. The sleep imagery prepares for the voice that cries he has murdered sleep.',
        },
        {
          phrase: 'withered murder',
          note: "Murder is personified as a gaunt figure, woken by the wolf's howl, stealing towards its victim and moving “like a ghost”. Many readers see Macbeth picturing himself here in the third person, as murder itself, as if the deed were done by someone else. That distance may be how he makes himself able to act.",
        },
        {
          phrase: 'Words to the heat of deeds too cold breath gives',
          note: "A rhyming couplet with “lives” ends his thinking: talking only cools the heat that action needs. Then the bell rings. The soliloquy that began with doubt ends with a man who has stopped arguing, and the final couplet, rhyming “knell” with “hell”, makes the summons to Duncan sound like a summons to Macbeth's own soul.",
        },
      ],
      question:
        "Starting with this soliloquy, explore how Shakespeare presents Macbeth's state of mind before he murders Duncan. Write about how Shakespeare presents Macbeth in this extract, and how far Macbeth is driven by forces outside himself in the play as a whole.",
    },
    {
      title: 'The sleepwalking scene',
      where: 'Act 5, Scene 1',
      pointer:
        "The middle of the scene, after the Gentlewoman tells the Doctor that Lady Macbeth rubs her hands as if washing them: from “Yet here's a spot” to “To bed, to bed, to bed” and her exit.",
      text: "LADY MACBETH: Yet here's a spot. / DOCTOR: Hark, she speaks. I will set down what comes from her, to satisfy my remembrance the more strongly. / LADY MACBETH: Out, damned spot, out, I say! One. Two. Why then, 'tis time to do 't. Hell is murky. Fie, my lord, fie, a soldier and afeard? What need we fear who knows it, when none can call our power to account? Yet who would have thought the old man to have had so much blood in him? / DOCTOR: Do you mark that? / LADY MACBETH: The Thane of Fife had a wife. Where is she now? What, will these hands ne'er be clean? No more o' that, my lord, no more o' that. You mar all with this starting. / DOCTOR: Go to, go to. You have known what you should not. / GENTLEWOMAN: She has spoke what she should not, I am sure of that. Heaven knows what she has known. / LADY MACBETH: Here's the smell of the blood still. All the perfumes of Arabia will not sweeten this little hand. O, O, O! / DOCTOR: What a sigh is there! The heart is sorely charged. / GENTLEWOMAN: I would not have such a heart in my bosom for the dignity of the whole body. / DOCTOR: Well, well, well. / GENTLEWOMAN: Pray God it be, sir. / DOCTOR: This disease is beyond my practice. Yet I have known those which have walked in their sleep, who have died holily in their beds. / LADY MACBETH: Wash your hands. Put on your nightgown. Look not so pale. I tell you yet again, Banquo's buried; he cannot come out on 's grave. / DOCTOR: Even so? / LADY MACBETH: To bed, to bed. There's knocking at the gate. Come, come, come, come. Give me your hand. What's done cannot be undone. To bed, to bed, to bed.",
      annotations: [
        {
          phrase: 'Out, damned spot, out, I say!',
          note: 'The woman who once gave orders to spirits now gives orders to a stain, and it will not obey. “Damned” carries its full religious weight: she speaks as if the mark is on her soul. Her speech is broken prose, not the controlled verse of Act 1, and its fragments jump between moments.',
        },
        {
          phrase: 'Hell is murky',
          note: 'In Act 1 she called on night to wrap itself “in the dunnest smoke of hell”. Now hell is not a useful darkness to hide in but a place she seems to see and dread. One reading is that she has realised her damnation; another is simply that her nightmares have taken her there.',
        },
        {
          phrase: 'Fie, my lord, fie, a soldier and afeard?',
          note: "She replays her own taunts from the night of the murder, still attacking her husband's courage as she did with “When you durst do it, then you were a man”. The sleepwalker is trapped in the scene she once controlled, speaking lines to a husband who is not there.",
        },
        {
          phrase: 'who would have thought the old man to have had so much blood in him',
          note: 'The horror she refused to show in Act 2, when she said “A little water clears us of this deed”, surfaces here. She does not name Duncan here; he is only “the old man”, as if even now she cannot say it, and the amount of blood is what she remembers.',
        },
        {
          phrase: 'The Thane of Fife had a wife. Where is she now?',
          note: 'A jingling rhyme, almost a nursery rhyme, about the murder of Lady Macduff. Lady Macbeth played no part in that killing, which Macbeth ordered alone, yet she knows of it and it haunts her. Her guilt has spread to cover crimes she did not plan, and the childish sound makes it more disturbing.',
        },
        {
          phrase: 'All the perfumes of Arabia will not sweeten this little hand',
          note: "Hyperbole that echoes Macbeth's fear in Act 2 that no ocean could wash his hand clean. Arabia was famous for perfumes, yet all of them cannot remove a smell. “Little hand” shrinks her: this is the hand that once meant to hold the “keen knife”.",
        },
        {
          phrase: 'This disease is beyond my practice',
          note: 'The Doctor and the Gentlewoman are sober witnesses, and he even means to “set down” what she says, so her private breakdown becomes testimony. He recognises that her sickness is not of the body: after she leaves he says “More needs she the divine than the physician”, meaning she needs a priest, not a doctor.',
        },
        {
          phrase: "What's done cannot be undone",
          note: "The word “done” has run through the play, from Macbeth's “I go, and it is done” as the bell rang. Here it becomes final and hopeless: nothing can reverse the murder. Her last words, “To bed, to bed, to bed”, send her back to the night of Duncan's killing, when the knocking at the gate began.",
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents the effects of guilt. Write about how Shakespeare presents Lady Macbeth in this extract, and how he presents guilt in the play as a whole.',
    },
    {
      title: 'Macbeth at bay',
      where: 'Act 5, Scene 3',
      pointer:
        'The opening of the scene in the castle at Dunsinane, as reports come in that his thanes are deserting to the English: from “Bring me no more reports” to “Which the poor heart would fain deny, and dare not”, as he calls again for Seyton.',
      text: "MACBETH: Bring me no more reports; let them fly all: / Till Birnam wood remove to Dunsinane / I cannot taint with fear. What's the boy Malcolm? / Was he not born of woman? The spirits that know / All mortal consequences have pronounc'd me thus: / “Fear not, Macbeth; no man that's born of woman / Shall e'er have power upon thee.”—Then fly, false thanes, / And mingle with the English epicures: / The mind I sway by, and the heart I bear, / Shall never sag with doubt nor shake with fear. / [Enter a Servant.] / The devil damn thee black, thou cream-fac'd loon! / Where gott'st thou that goose look? / SERVANT: There is ten thousand— / MACBETH: Geese, villain? / SERVANT: Soldiers, sir. / MACBETH: Go prick thy face and over-red thy fear, / Thou lily-liver'd boy. What soldiers, patch? / Death of thy soul! those linen cheeks of thine / Are counsellors to fear. What soldiers, whey-face? / SERVANT: The English force, so please you. / MACBETH: Take thy face hence. / [Exit Servant.] / Seyton!—I am sick at heart, / When I behold—Seyton, I say!—This push / Will cheer me ever or disseat me now. / I have liv'd long enough: my way of life / Is fall'n into the sere, the yellow leaf; / And that which should accompany old age, / As honour, love, obedience, troops of friends, / I must not look to have; but, in their stead, / Curses, not loud but deep, mouth-honour, breath, / Which the poor heart would fain deny, and dare not.",
      annotations: [
        {
          phrase: 'Bring me no more reports; let them fly all',
          note: 'He opens with orders, as a king should, but the orders are to stop the news and let his thanes desert. Macbeth sounds less like a king ruling Scotland than a man waiting to be proved safe, and his confidence seems to rest entirely on the two prophecies he repeats to himself in the next lines.',
        },
        {
          phrase: "What's the boy Malcolm? / Was he not born of woman?",
          note: "Macbeth sneers at Malcolm as a “boy”, the word he throws at the servant a moment later, “Thou lily-liver'd boy”. The question is meant to be scornful, but it is a trap he sets for himself: he hears “born of woman” in its ordinary sense, while the prophecy is waiting for the one man who, as Act 5, Scene 8 reveals, was “Untimely ripp'd” from his mother's womb. An audience that has learned to distrust the witches' words may already suspect a trick he cannot see.",
        },
        {
          phrase: 'Shall never sag with doubt nor shake with fear',
          note: 'A rhyming couplet (“bear” and “fear”) that sounds final and certain, the way a speech often closes. The alliteration of “sag” and “shake” gives the boast a strong beat. It is interrupted at once by a frightened servant, and within a dozen lines the certainty has collapsed into “I am sick at heart”.',
        },
        {
          phrase: "The devil damn thee black, thou cream-fac'd loon!",
          note: "Macbeth turns on a frightened servant with insults about his pallor and cowardice: “cream-fac'd”, “linen cheeks”, “whey-face”, “lily-liver'd”. Each accuses the servant of the fear Macbeth has just said he will never feel, which suggests the fear is really his own, turned on someone who cannot answer back. It is a long way from the “brave Macbeth” of Act 1, Scene 2.",
        },
        {
          phrase: 'I am sick at heart',
          note: 'The first admission of weakness in the scene, spoken between his shouts for Seyton, the officer who attends him. The sentence is broken off by those shouts, and the bravado cracks. From here the speech turns from orders to reflection, and Macbeth looks at his own life instead of at his enemies.',
        },
        {
          phrase: "my way of life / Is fall'n into the sere, the yellow leaf",
          note: "“Sere” means dry and withered. Macbeth pictures his life as a leaf in autumn, dried out and ready to fall. In the next scene Malcolm's soldiers cut boughs from Birnam Wood to carry towards Dunsinane, so the living wood comes for a man who already feels like a dead leaf.",
        },
        {
          phrase: 'As honour, love, obedience, troops of friends',
          note: 'He lists what old age should bring, and knows he has lost all of it. In Act 1, Scene 7 he hesitated over the murder because he had “bought / Golden opinions from all sorts of people”; now he expects only “Curses, not loud but deep” and “mouth-honour”, respect that is spoken and not meant. The tyrant has the crown and none of the loyalty it should command.',
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents Macbeth as a tyrant. Write about how Shakespeare presents Macbeth in this extract, and how he presents Macbeth as a tyrant in the play as a whole.',
    },
  ],

  vocabulary: [
    {
      term: 'Thane',
      definition:
        "A title for a nobleman. In medieval Scotland a thane was a clan chief or baron who held his land from the king. Macbeth is Thane of Glamis, Duncan makes him Thane of Cawdor after the old thane's treason (1.2), and Macduff is Thane of Fife.",
    },
    {
      term: 'Weird Sisters',
      definition:
        'The name the witches go by in the play: Banquo dreams of them by it, and Macbeth goes to visit them by it (some editions print Weïrd, to show it is sounded as two syllables). Weird comes from the Old English wyrd, meaning fate or destiny, so the name makes them sisters of fate rather than simply strange women. The modern sense of odd grew up much later, partly from this play.',
    },
    {
      term: 'Hurly-burly',
      definition:
        "A noisy, confused uproar, especially of battle. The Second Witch's “When the hurly-burly's done” (1.1) places the opening in the chaos of war.",
    },
    {
      term: "Bellona's bridegroom",
      definition:
        "Ross's name for Macbeth in 1.2. Bellona was the Roman goddess of war, so her bridegroom is a warrior fit to be the husband of war itself. It shows how the court sees Macbeth before he ever appears.",
    },
    {
      term: 'Harbinger',
      definition:
        "Originally an officer who rode ahead of a king to arrange his lodgings; later, anything that announces what is coming. In 1.4 Macbeth offers to ride ahead to Inverness as “the harbinger” of Duncan's visit, and the word gains a dark irony: he is preparing the king's death.",
    },
    {
      term: 'Compunctious',
      definition:
        'Feeling guilt or scruples; a compunction is a prick of conscience. Lady Macbeth prays that no “compunctious visitings of nature” (1.5) will shake her resolve.',
    },
    {
      term: 'Fell',
      definition:
        "As an adjective, fierce, cruel or deadly. Lady Macbeth's “fell purpose” (1.5) is her murderous intention.",
    },
    {
      term: 'Gall',
      definition:
        'Bile, the bitter fluid of the liver, and so bitterness itself. When Lady Macbeth asks spirits to “take my milk for gall” (1.5), she asks for nurture to be turned into poison.',
    },
    {
      term: 'Pall',
      definition:
        'As a verb, to wrap or cover, as a coffin is covered with a pall, the heavy cloth laid over it at a funeral. “Pall thee in the dunnest smoke of hell” (1.5) dresses the night in a shroud.',
    },
    {
      term: 'Dun, dunnest',
      definition:
        'Dun is a dull greyish brown. Dunnest, its superlative, means the murkiest and darkest possible.',
    },
    {
      term: 'Trammel up',
      definition:
        'A trammel was a kind of net for catching fish. Macbeth wishes the murder could “trammel up the consequence” (1.7), catching every result in a net so that nothing follows from it.',
    },
    {
      term: 'Surcease',
      definition:
        "An ending or stopping. In “With his surcease success” (1.7) it is usually taken to mean Duncan's death, and the near echo of surcease and success suggests Macbeth wishing the two could be one event.",
    },
    {
      term: 'Dudgeon',
      definition:
        "The handle or hilt of a dagger; the word first named the wood that knife handles were made from. Macbeth sees blood on the imagined dagger's “blade and dudgeon” (2.1).",
    },
    {
      term: 'Gouts',
      definition:
        'Drops, splashes or clots of liquid, especially blood: the “gouts of blood” Macbeth sees appear on the dagger (2.1). Not the joint disease of the same name.',
    },
    {
      term: 'Knell',
      definition:
        "The slow tolling of a bell for a death or funeral. The bell that is Macbeth's signal becomes, in his words, a knell for Duncan: “it is a knell / That summons thee to heaven or to hell” (2.1).",
    },
    {
      term: 'Hecate',
      definition:
        'In Greek religion a goddess of magic, the night and crossroads, later linked above all with witchcraft. Macbeth imagines witchcraft making offerings to her (2.1), and she appears to the witches in 3.5, angry that they dealt with Macbeth without her, and again in 4.1. Many scholars think her passages were added by another dramatist, Thomas Middleton.',
    },
    {
      term: 'Incarnadine',
      definition:
        'To turn red. Macbeth fears his bloody hand will “The multitudinous seas incarnadine, / Making the green one red” (2.2). This line is the earliest known use of incarnadine as a verb.',
    },
    {
      term: 'Equivocator',
      definition:
        "Someone who uses words with two meanings in order to mislead while claiming not to lie. The Porter imagines one arriving at hell's gate who “could not equivocate to heaven” (2.3). Many readers connect this with the Jesuit priest Henry Garnet, tried in March 1606 over the Gunpowder Plot, who had written in defence of equivocation. The witches' prophecies equivocate in exactly this way.",
    },
    {
      term: 'Benison',
      definition:
        "A blessing. It is the Old Man, not Duncan, who says “God's benison go with you” as he parts from Ross in 2.4, blessing those who make good out of bad.",
    },
    {
      term: 'Seeling',
      definition:
        "In falconry, to seel a young hawk was to sew its eyelids shut while it was tamed. Macbeth's “Come, seeling night” (3.2) asks darkness to blind the eye of day so that Banquo's murder goes unseen.",
    },
    {
      term: 'Chuck',
      definition:
        "A term of endearment, like chick or darling. Macbeth's “dearest chuck” (3.2) is tender in the very speech in which he keeps the plan to kill Banquo from his wife.",
    },
    {
      term: 'Loon',
      definition:
        "A worthless fellow, a fool. Macbeth's insult to a terrified servant, “cream-faced loon” (5.3), shows how far his self-control has frayed.",
    },
    {
      term: 'Sere',
      definition:
        "Dry and withered, like leaves in autumn. In 5.3 Macbeth says his way of life “Is fall'n into the sere, the yellow leaf”, old without the friends and honour old age should bring.",
    },
    {
      term: 'Physic',
      definition:
        "Medicine, or the art of healing. “Throw physic to the dogs” (5.3) is Macbeth's scornful reply when the Doctor says a sick mind must heal itself.",
    },
    {
      term: 'Apparition',
      definition:
        'A ghostly vision or spirit. In 4.1 the witches raise three: an armed head that warns “Beware Macduff”, a bloody child who says “none of woman born / Shall harm Macbeth”, and a crowned child holding a tree who promises safety until Birnam Wood comes to Dunsinane.',
    },
    {
      term: 'Regicide',
      definition:
        "The killing of a king, or a person who kills one. It is the crime at the centre of the play, and the natural world's disorder after it (2.4) shows how gravely the play treats it.",
    },
    {
      term: 'Tyranny, tyrant',
      definition:
        "Rule by cruelty and fear rather than by right and justice. Macduff's “Bleed, bleed, poor country! / Great tyranny” (4.3) names what Macbeth's reign has become.",
    },
    {
      term: 'Soliloquy',
      definition:
        "A speech in which a character alone on stage speaks their thoughts aloud, so the audience hears what no other character does. Lady Macbeth's invocation (1.5) and Macbeth's dagger speech (2.1) are soliloquies.",
    },
    {
      term: 'Aside',
      definition:
        "A short remark spoken to the audience or to oneself that, by stage convention, the other characters present do not hear. Macbeth's “Stars, hide your fires” (1.4) is spoken in front of the king.",
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not. Duncan admires how “This castle hath a pleasant seat” (1.6) as he arrives at the house where the audience knows he will be murdered.',
    },
    {
      term: 'Blank verse',
      definition:
        'Unrhymed lines of iambic pentameter: ten syllables with five stresses, each foot rising from unstressed to stressed. Most of the nobles speak it. Rhyming couplets often round off a scene, as at the end of the dagger soliloquy.',
    },
    {
      term: 'Trochaic tetrameter',
      definition:
        "Lines of four beats in which each foot falls from stressed to unstressed, the chanting rhythm of the witches' spells, as in “Double, double toil and trouble” (4.1). It marks them off from the blank verse of the human characters.",
    },
    {
      term: 'Prose',
      definition:
        'Speech without metre. Shakespeare gives it to the Porter (2.3) and to Lady Macbeth sleepwalking (5.1): the queen who commanded spirits in verse in Act 1 speaks in broken prose at the end.',
    },
    {
      term: 'Tragic hero',
      definition:
        'A central character of high standing whose own flaw or error brings about their downfall, while the audience still feels something for them. In 1.7 Macbeth admits that nothing drives him but “Vaulting ambition”, which is often read as his fatal flaw.',
    },
  ],

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The witches meet',
      summary:
        "In thunder and lightning, three witches agree to meet again on the heath “When the battle's lost and won”, there to meet Macbeth. Their closing chant turns good and bad upside down before a single human has spoken.",
      setting: 'An open place in a storm',
      who: ['The Witches'],
      quote: 'Fair is foul, and foul is fair',
      themes: ['The Supernatural', 'Appearance vs Reality'],
      tension: 3,
      significance:
        'The play begins with the supernatural, and its first paradox warns that nothing in Scotland will be what it seems.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Brave Macbeth',
      summary:
        "A wounded captain (a sergeant in some editions) tells King Duncan how Macbeth cut his way through the rebel army and killed the traitor Macdonwald. Ross brings news of victory over the invading Norwegians and of the Thane of Cawdor's treachery, and Duncan orders Cawdor's execution and gives his title to Macbeth.",
      setting: "King Duncan's camp, near the battle",
      who: ['Duncan', 'Malcolm', 'Ross'],
      quote: 'O valiant cousin, worthy gentleman',
      themes: ['Kingship and Power', 'Gender and Masculinity'],
      tension: 3,
      significance:
        "Macbeth is praised for ferocious violence in the king's service before he appears; the play will show that violence turned against the king.",
    },
    {
      where: 'Act 1, Scene 3',
      title: 'The prophecies',
      summary:
        'On the heath the witches hail Macbeth as Thane of Glamis, Thane of Cawdor and future king, and tell Banquo he will father kings without being one. Ross and Angus then bring the news that Macbeth is Thane of Cawdor, and Macbeth is shaken by a “horrid image” of what he might do.',
      setting: 'A heath',
      who: ['The Witches', 'Macbeth', 'Banquo', 'Ross'],
      quote: 'All hail, Macbeth, that shalt be king hereafter',
      themes: ['The Supernatural', 'Ambition'],
      tension: 4,
      significance:
        "The Cawdor prophecy comes true within minutes, which gives the promise of kingship its force; Banquo's warning that the “instruments of darkness tell us truths” shows another way to hear it.",
    },
    {
      where: 'Act 1, Scene 4',
      title: 'The Prince of Cumberland',
      summary:
        "Duncan, who admits there is no art to read a traitor's mind in his face, greets Macbeth warmly and then names his son Malcolm heir to the throne. In an aside Macbeth sees Malcolm as a step he must fall on or leap over, and asks the stars to hide his desires.",
      setting: "Duncan's court",
      who: ['Duncan', 'Macbeth', 'Malcolm'],
      quote: 'Stars, hide your fires; / Let not light see my black and deep desires',
      themes: ['Ambition', 'Appearance vs Reality', 'Kingship and Power'],
      tension: 3,
      significance:
        'Dramatic irony: the king who cannot read faces trusts the man hiding murder behind his own.',
    },
    {
      where: 'Act 1, Scene 5',
      title: "Lady Macbeth's invocation",
      summary:
        "Lady Macbeth reads her husband's letter and fears he is too kind “To catch the nearest way”. Told the king is coming that night, she calls on spirits to “unsex” her; when Macbeth arrives she tells him to hide his intentions and “Leave all the rest to me”.",
      setting: "Macbeth's castle at Inverness",
      who: ['Lady Macbeth', 'Macbeth'],
      quote: "Look like th' innocent flower, / But be the serpent under 't",
      themes: ['Ambition', 'Gender and Masculinity', 'Appearance vs Reality', 'The Supernatural'],
      tension: 4,
      significance:
        'Lady Macbeth resolves on murder while her husband is still wavering, and her appeal to spirits invites comparison with the witches.',
    },
    {
      where: 'Act 1, Scene 6',
      title: 'Duncan arrives',
      summary:
        'Duncan praises the sweet air around the castle, Banquo notices the martlets nesting in its walls, and Lady Macbeth welcomes the king with elaborate courtesy, as a perfect hostess.',
      setting: "Outside Macbeth's castle",
      who: ['Duncan', 'Banquo', 'Lady Macbeth'],
      quote: 'This castle hath a pleasant seat',
      themes: ['Appearance vs Reality', 'Kingship and Power'],
      tension: 2,
      significance:
        'A calm scene built on dramatic irony: the audience knows what waits inside, which makes its gentleness hard to watch.',
    },
    {
      where: 'Act 1, Scene 7',
      title: 'Macbeth wavers',
      summary:
        "Alone during the feast, Macbeth argues himself out of the murder and tells his wife “We will proceed no further in this business”. She attacks his courage, tells him to “screw your courage to the sticking place”, and explains how Duncan's servants can be drugged and blamed. He agrees.",
      setting: "Macbeth's castle, during the feast",
      who: ['Macbeth', 'Lady Macbeth'],
      quote: 'When you durst do it, then you were a man',
      themes: ['Ambition', 'Gender and Masculinity', 'Guilt and Conscience'],
      tension: 4,
      significance:
        'The last point at which Macbeth could turn back, and the argument that wins is about manhood rather than the crown.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'The dagger',
      summary:
        'Late at night Banquo, unable to rest, admits he has dreamt of the witches; Macbeth replies “I think not of them”. Alone, Macbeth sees a dagger in the air pointing him towards Duncan, and when the bell rings he goes.',
      setting: "Inside Macbeth's castle, late at night",
      who: ['Banquo', 'Fleance', 'Macbeth'],
      quote: 'Is this a dagger which I see before me',
      themes: ['The Supernatural', 'Guilt and Conscience', 'Ambition'],
      tension: 4,
      significance:
        'Whether the dagger is supernatural or a guilty hallucination, it leads Macbeth where he had already chosen to go.',
    },
    {
      where: 'Act 2, Scene 2',
      title: 'The murder',
      summary:
        'Duncan is killed offstage. Macbeth returns with the bloody daggers, shaken that he could not say amen and by a voice crying “Macbeth does murder sleep”. He will not go back, so Lady Macbeth takes the daggers to smear the sleeping grooms with blood, and knocking begins at the gate.',
      setting: "Macbeth's castle, the same night",
      who: ['Macbeth', 'Lady Macbeth'],
      quote: 'A little water clears us of this deed',
      themes: ['Guilt and Conscience', 'Gender and Masculinity'],
      tension: 5,
      significance:
        'The crime is never shown; the play shows its cost instead, and her confidence about water is the line Act 5 destroys.',
    },
    {
      where: 'Act 2, Scene 3',
      title: 'The discovery',
      summary:
        "Answering the knocking, the Porter pretends to be the “porter of hell gate”. Macduff finds the king murdered and cries “O horror, horror, horror”; Macbeth says he killed the grooms in fury, and Duncan's sons, fearing for their lives, flee to England and Ireland.",
      setting: "Macbeth's castle, after the murder",
      who: ['The Porter', 'Macduff', 'Lennox', 'Macbeth', 'Lady Macbeth', 'Malcolm', 'Donalbain'],
      quote: "There's daggers in men's smiles",
      themes: ['Appearance vs Reality', 'Kingship and Power', 'Guilt and Conscience'],
      tension: 5,
      significance:
        'Macbeth kills again to cover the first crime, and the princes read the court more truly than anyone: smiling faces hide knives.',
    },
    {
      where: 'Act 2, Scene 4',
      title: 'Nature in disorder',
      summary:
        "Ross and an Old Man describe unnatural events: darkness by day, a falcon killed by an owl, Duncan's horses turned wild. Macduff reports that the fled princes are suspected and that Macbeth has gone to Scone to be crowned; he himself will go home to Fife, and the Old Man blesses them with “God's benison go with you”.",
      setting: "Outside Macbeth's castle, by day",
      who: ['Ross', 'The Old Man', 'Macduff'],
      quote: "'Tis unnatural, / Even like the deed that's done",
      themes: ['Kingship and Power', 'The Supernatural'],
      tension: 2,
      significance:
        "The natural world recoils from the killing of a king, and Macduff's refusal to attend the coronation is the first sign of resistance.",
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Banquo suspects',
      summary:
        "Alone, Banquo fears that Macbeth “played'st most foully” for the crown, and remembers he was promised to be the “root and father / Of many kings”. Macbeth, now king, fears exactly that, and persuades two murderers to kill Banquo and his son Fleance.",
      setting: 'The royal palace',
      who: ['Banquo', 'Macbeth', 'The Murderers'],
      quote: 'To be thus is nothing, / But to be safely thus',
      themes: ['Kingship and Power', 'Ambition'],
      tension: 3,
      significance:
        'The crown brings no security: Macbeth has a “fruitless crown”, and to keep it he must go on killing.',
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Scorpions in the mind',
      summary:
        "Lady Macbeth finds that the crown has brought no contentment: “Naught's had, all's spent”. Macbeth, shaken nightly by “terrible dreams”, says they have “scorched the snake, not killed it”, and hints at a new crime while keeping it from her: “Be innocent of the knowledge, dearest chuck”.",
      setting: 'The royal palace',
      who: ['Macbeth', 'Lady Macbeth'],
      quote: 'O, full of scorpions is my mind, dear wife',
      themes: ['Guilt and Conscience', 'Ambition'],
      tension: 3,
      significance:
        'The partnership reverses: he now plans alone, and she is shut out of the crimes she once directed.',
    },
    {
      where: 'Act 3, Scene 3',
      title: 'The ambush',
      summary:
        "At dusk three murderers wait for Banquo and Fleance on the road to the palace. Banquo is killed, but the light goes out, and the murderers realise “There's but one down. The son is fled.”",
      setting: 'A road near the palace, at dusk',
      who: ['The Murderers', 'Banquo', 'Fleance'],
      quote: 'Fly, good Fleance, fly, fly, fly',
      themes: ['Kingship and Power', 'Ambition'],
      tension: 5,
      significance:
        "Fleance's escape keeps alive the line of kings the witches promised Banquo, so Macbeth's plan fails at its heart.",
    },
    {
      where: 'Act 3, Scene 4',
      title: 'The banquet',
      summary:
        "At the feast Macbeth learns Banquo is dead and Fleance has escaped. Banquo's ghost, seen only by Macbeth, twice appears, the first time sitting in Macbeth's own place; Lady Macbeth tells the lords “My lord is often thus” and sends them away. Afterwards Macbeth, noting that Macduff refused to come, resolves to see the witches again.",
      setting: 'The banqueting hall of the palace',
      who: ['Macbeth', 'Lady Macbeth', 'Banquo', 'The Murderers'],
      quote: 'Thou canst not say I did it',
      themes: ['Guilt and Conscience', 'The Supernatural', 'Kingship and Power'],
      tension: 5,
      significance:
        'The public face of the reign cracks in front of the nobles, and Macbeth decides that he is “in blood / Stepped in so far” that going back is pointless.',
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The apparitions',
      summary:
        "Around their cauldron the witches show Macbeth three apparitions: an armed head warning “Beware Macduff”, a bloody child promising that “none of woman born / Shall harm Macbeth”, and a crowned child who says he is safe until Birnam Wood comes to Dunsinane. A line of eight kings, Banquo's descendants, follows. Told Macduff has fled to England, Macbeth decides to attack his family.",
      setting: "The witches' meeting place, around a cauldron",
      who: ['The Witches', 'Macbeth', 'Lennox'],
      quote: 'By the pricking of my thumbs, / Something wicked this way comes',
      themes: ['The Supernatural', 'Appearance vs Reality', 'Kingship and Power'],
      tension: 4,
      significance:
        'The second and third prophecies are literally true yet misleading; Macbeth hears only the comfort and wants to “make assurance double sure”.',
    },
    {
      where: 'Act 4, Scene 2',
      title: "Macduff's family",
      summary:
        'Lady Macduff, told by Ross that her husband has fled, says “His flight was madness”. A messenger warns her to escape, but murderers sent by Macbeth arrive, kill her young son and pursue her from the stage.',
      setting: "Macduff's castle in Fife",
      who: ['Lady Macduff', 'Ross', 'The Murderers'],
      quote: 'I have done no harm',
      themes: ['Kingship and Power', 'Gender and Masculinity'],
      tension: 5,
      significance:
        'The killing of a family that threatens no one shows Macbeth as a tyrant, and gives Macduff his cause.',
    },
    {
      where: 'Act 4, Scene 3',
      title: 'Malcolm tests Macduff',
      summary:
        "In England, Malcolm tests Macduff by claiming vices so great that Macbeth would seem “as pure as snow” beside him; Macduff's despair for Scotland convinces him, and he takes it all back. Ross then brings the news that Macduff's wife and children have been killed, and Malcolm urges him to “Dispute it like a man”.",
      setting: 'England',
      who: ['Malcolm', 'Macduff', 'Ross'],
      quote: 'But I must also feel it as a man',
      themes: ['Kingship and Power', 'Gender and Masculinity', 'Appearance vs Reality'],
      tension: 4,
      significance:
        "Macduff's answer offers a different idea of manhood from Lady Macbeth's: a man can grieve and still act, and his grief becomes “the whetstone of your sword”.",
    },
    {
      where: 'Act 5, Scene 1',
      title: 'The sleepwalking',
      summary:
        'A doctor and a gentlewoman watch Lady Macbeth walk in her sleep, rubbing her hands as if washing them and reliving the murders of Duncan, Lady Macduff and Banquo. The Doctor says “More needs she the divine than the physician”.',
      setting: 'The castle at Dunsinane, at night',
      who: ['The Gentlewoman', 'The Doctor', 'Lady Macbeth'],
      quote: "Here's the smell of the blood still",
      themes: ['Guilt and Conscience', 'Gender and Masculinity'],
      tension: 4,
      significance:
        'The remorse she tried to block in Act 1 returns, and the woman who commanded in verse can speak only broken prose.',
    },
    {
      where: 'Act 5, Scene 3',
      title: 'Macbeth at bay',
      summary:
        "“Bring me no more reports”: with his thanes deserting and the English army near, Macbeth clings to the prophecies, abuses a terrified servant and admits his life has withered. The Doctor cannot cure Lady Macbeth's mind; the patient “Must minister to himself”.",
      setting: 'The castle at Dunsinane',
      who: ['Macbeth', 'The Doctor'],
      quote: 'Throw physic to the dogs',
      themes: ['Kingship and Power', 'Guilt and Conscience'],
      tension: 3,
      significance:
        'The tyrant has the crown and nothing it should bring: no honour, love or friends, only fear and bravado.',
    },
    {
      where: 'Act 5, Scene 4',
      title: 'Birnam Wood',
      summary:
        "Near Birnam Wood, Malcolm orders every soldier to cut down a bough and carry it before him, so that Macbeth's scouts cannot count the army. The witches' impossible condition is about to be met by a soldier's trick.",
      setting: 'Near Birnam Wood',
      who: ['Malcolm', 'Macduff', 'Siward'],
      quote: 'Let every soldier hew him down a bough',
      themes: ['Appearance vs Reality', 'The Supernatural'],
      tension: 3,
      significance:
        'The prophecy was true in its words and false in its promise, which is equivocation made visible.',
    },
    {
      where: 'Act 5, Scene 5',
      title: 'Tomorrow',
      summary:
        'A cry of women is heard, and Seyton reports “The Queen, my lord, is dead”. Macbeth answers “She should have died hereafter” and reflects that life is a tale “Signifying nothing”. A messenger reports that the wood began to move, and Macbeth goes out to fight.',
      setting: 'The castle at Dunsinane',
      who: ['Macbeth', 'Seyton'],
      quote: "Life's but a walking shadow, a poor player",
      themes: ['Ambition', 'Guilt and Conscience'],
      tension: 4,
      significance:
        "Ambition's end point: the throne he killed for means nothing, and the news of his wife's death seems barely to reach him.",
    },
    {
      where: 'Act 5, Scene 8',
      title: 'Macduff and Macbeth',
      summary:
        "Macbeth refuses to “play the Roman fool” and kill himself. Facing Macduff, he learns Macduff was “from his mother's womb / Untimely ripped”, cut from his mother rather than born in the usual way. He fights on and is killed; Macduff brings his head to Malcolm, who is hailed king and will be “crowned at Scone”.",
      setting: 'The battlefield at Dunsinane',
      who: ['Macbeth', 'Macduff', 'Malcolm'],
      quote: 'this dead butcher and his fiend-like queen',
      themes: ['Kingship and Power', 'The Supernatural', 'Appearance vs Reality'],
      tension: 5,
      significance:
        'The last prophecy is fulfilled, the rightful heir is restored, and Malcolm reports that Lady Macbeth is thought to have died “by self and violent hands”.',
    },
  ],

  relationships: [
    {
      from: 'Macbeth',
      to: 'Lady Macbeth',
      kind: 'husband and wife',
      note: "His letter calls her “my dearest partner of greatness”, and in Act 1 she leads: she resolves on murder while he still wavers, and she plans it. After the coronation the balance tips; he keeps Banquo's murder from her with “Be innocent of the knowledge, dearest chuck”, and by Act 5 they are apart, she sleepwalking, he greeting her death with “She should have died hereafter”.",
    },
    {
      from: 'Macbeth',
      to: 'Banquo',
      kind: 'fellow generals, then murderer and victim',
      note: "They hear the prophecies together and respond differently: Banquo warns that “The instruments of darkness tell us truths” to betray us. He suspects Macbeth “played'st most foully”, Macbeth fears him and has him killed, and he returns as the ghost at the banquet.",
    },
    {
      from: 'Duncan',
      to: 'Macbeth',
      kind: 'king and subject, kinsman and guest',
      note: 'Before Macbeth has even appeared, Duncan praises him as “O valiant cousin, worthy gentleman” and rewards him with Cawdor. Macbeth kills him under his own roof, breaking the bonds of kinship, loyalty and hospitality at once.',
    },
    {
      from: 'The Witches',
      to: 'Macbeth',
      kind: 'prophets and the man who acts on them',
      note: 'They never tell him to kill; they tell him what he will be. Their later apparitions give him false confidence. Whether they plant his ambition or only name one already there is the question the play leaves open.',
    },
    {
      from: 'The Witches',
      to: 'Banquo',
      kind: 'prophets and a sceptic',
      note: 'They tell him “Thou shalt get kings, though thou be none”. He asks “What, can the devil speak true?”, and though he later dreams of them and remembers the promise that he will be the “root and father / Of many kings”, he does not act on it, which makes him a foil to Macbeth.',
    },
    {
      from: 'Macduff',
      to: 'Macbeth',
      kind: 'enemies',
      note: "Macduff finds Duncan's body, will not attend the coronation, and later “denies his person / At our great bidding”. Macbeth has his family murdered; Macduff kills him and brings his head to Malcolm.",
    },
    {
      from: 'Duncan',
      to: 'Malcolm',
      kind: 'father and son; king and heir',
      note: "Duncan names Malcolm “The Prince of Cumberland”, the step Macbeth must “o'erleap”. Malcolm flees after the murder and is suspected of it, but returns with an English army and is hailed king.",
    },
    {
      from: 'Malcolm',
      to: 'Macduff',
      kind: 'prince and loyal thane',
      note: 'In England Malcolm tests Macduff by pretending to be worse than Macbeth, then trusts him. Where Duncan could not read faces, his son checks before he trusts, and the two lead the army that ends the tyranny.',
    },
    {
      from: 'Banquo',
      to: 'Fleance',
      kind: 'father and son',
      note: "Banquo's last words send Fleance running, and his escape keeps alive the line of kings shown to Macbeth in Act 4, which is what Macbeth most wanted to destroy.",
    },
    {
      from: 'Lady Macbeth',
      to: 'Duncan',
      kind: 'hostess and royal guest',
      note: "She welcomes him with perfect courtesy and plans his death, yet cannot kill him herself: “Had he not resembled / My father as he slept, I had done 't.” The line is the first sign of the feeling she prayed to lose.",
    },
    {
      from: 'Macduff',
      to: 'Lady Macduff',
      kind: 'husband and wife',
      note: "She calls his flight to England madness and says “He wants the natural touch”, since even the poor wren defends her young. His grief when he hears of her murder is arguably the play's fullest picture of a man feeling as a man.",
    },
    {
      from: 'Ross',
      to: 'Macduff',
      kind: 'kinsmen',
      note: "Macduff calls him cousin (“No, cousin, I'll to Fife”). Ross carries news through the play, and in England it is he who must tell Macduff “Your castle is surprised”, turning Macduff's cause from Scotland's into his own.",
    },
    {
      from: 'Macbeth',
      to: 'The Murderers',
      kind: 'king and hired killers',
      note: 'Macbeth persuades two men to kill Banquo and Fleance and sends a third to join them. Hiring others to kill marks how far he has moved from the soldier who fought his own battles in Act 1.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'mental_health',
    'supernatural',
    'mythological_religious',
  ],

  sources: [
    {
      label:
        'Folger Shakespeare Library, Macbeth online text: the source for every quotation, speaker and scene number (each scene quoted here read individually)',
      url: 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/1/1/',
    },
    {
      label:
        'Folger Shakespeare, Macbeth, edited by Barbara A. Mowat and Paul Werstine, plain-text download: the whole play, used for an independent recheck of every quotation, speaker and scene',
      url: 'https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/macbeth_TXT_FolgerShakespeare.txt',
    },
    {
      label: 'Folger, Act 1, Scene 5 (the raven soliloquy, verbatim)',
      url: 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/1/5/',
    },
    {
      label: 'Folger, Act 2, Scene 1 (the dagger soliloquy, verbatim)',
      url: 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/2/1/',
    },
    {
      label: 'Folger, Act 5, Scene 1 (the sleepwalking passage, verbatim)',
      url: 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/5/1/',
    },
    {
      label: 'Folger, Act 5, Scene 8 (stage directions, final scene)',
      url: 'https://www.folger.edu/explore/shakespeares-works/macbeth/read/5/8/',
    },
    {
      label:
        'MIT Shakespeare (Moby text): second check of wording (reads "you murdering ministers", "one halfworld" and "whereabout")',
      url: 'https://shakespeare.mit.edu/macbeth/full.html',
    },
    {
      label:
        'Project Gutenberg eBook #1533, Macbeth: third check of wording and speakers (reads "your murd\'ring ministers" where Folger and MIT read "you")',
      url: 'https://www.gutenberg.org/cache/epub/1533/pg1533.txt',
    },
    {
      label:
        'Wikipedia, Macbeth: First Folio of 1623 as the only source text; Middleton and the Hecate passages',
      url: 'https://en.wikipedia.org/wiki/Macbeth',
    },
    {
      label: 'Wikipedia, Henry Garnet: trial on 28 March 1606, defence of equivocation',
      url: 'https://en.wikipedia.org/wiki/Henry_Garnet',
    },
    { label: 'Online Etymology Dictionary, weird', url: 'https://www.etymonline.com/word/weird' },
    { label: 'Online Etymology Dictionary, thane', url: 'https://www.etymonline.com/word/thane' },
    {
      label: 'Online Etymology Dictionary, harbinger',
      url: 'https://www.etymonline.com/word/harbinger',
    },
    {
      label: 'Online Etymology Dictionary, incarnadine (verb derived from Macbeth 2.2)',
      url: 'https://www.etymonline.com/word/incarnadine',
    },
    {
      label: 'Online Etymology Dictionary, trammel',
      url: 'https://www.etymonline.com/word/trammel',
    },
    {
      label: 'Online Etymology Dictionary, benison',
      url: 'https://www.etymonline.com/word/benison',
    },
    { label: 'Online Etymology Dictionary, sere', url: 'https://www.etymonline.com/word/sere' },
    {
      label: 'Wiktionary, dudgeon (hilt of a dagger)',
      url: 'https://en.wiktionary.org/wiki/dudgeon',
    },
    {
      label: 'Wiktionary, gout (a drop, especially of blood)',
      url: 'https://en.wiktionary.org/wiki/gout',
    },
    { label: 'Wiktionary, surcease', url: 'https://en.wiktionary.org/wiki/surcease' },
    { label: 'Wiktionary, seel (falconry)', url: 'https://en.wiktionary.org/wiki/seel' },
    { label: 'Wiktionary, fell (adjective)', url: 'https://en.wiktionary.org/wiki/fell' },
    { label: 'Wiktionary, pall (verb)', url: 'https://en.wiktionary.org/wiki/pall' },
    { label: 'Wiktionary, loon', url: 'https://en.wiktionary.org/wiki/loon' },
    { label: 'Wiktionary, hurlyburly', url: 'https://en.wiktionary.org/wiki/hurlyburly' },
    { label: 'Wiktionary, equivocate', url: 'https://en.wiktionary.org/wiki/equivocate' },
    {
      label: 'Wiktionary, chuck (term of endearment)',
      url: 'https://en.wiktionary.org/wiki/chuck',
    },
    { label: 'Wiktionary, physic', url: 'https://en.wiktionary.org/wiki/physic' },
    { label: 'Wiktionary, compunctious', url: 'https://en.wiktionary.org/wiki/compunctious' },
    { label: 'Wiktionary, gall', url: 'https://en.wiktionary.org/wiki/gall' },
    { label: 'Wiktionary, dun', url: 'https://en.wiktionary.org/wiki/dun' },
    { label: 'Wiktionary, knell', url: 'https://en.wiktionary.org/wiki/knell' },
    { label: 'Wiktionary, regicide', url: 'https://en.wiktionary.org/wiki/regicide' },
    {
      label: 'Wikipedia, Bellona (goddess), including "Bellona\'s bridegroom"',
      url: 'https://en.wikipedia.org/wiki/Bellona_(goddess)',
    },
    { label: 'Wikipedia, Hecate', url: 'https://en.wikipedia.org/wiki/Hecate' },
    { label: 'Wikipedia, Blank verse', url: 'https://en.wikipedia.org/wiki/Blank_verse' },
    {
      label: "Wikipedia, Trochee (with the witches' chant as example)",
      url: 'https://en.wikipedia.org/wiki/Trochee',
    },
    { label: 'Wikipedia, Soliloquy', url: 'https://en.wikipedia.org/wiki/Soliloquy' },
    { label: 'Wikipedia, Aside', url: 'https://en.wikipedia.org/wiki/Aside' },
    { label: 'Wikipedia, Dramatic irony', url: 'https://en.wikipedia.org/wiki/Dramatic_irony' },
  ],
}
