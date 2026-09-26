import type { Annotation, CharacterInfo, ThemeInfo } from '@/components/study/InteractiveTextViewer'

/**
 * The authored layer of the Macbeth reader: a title for each scene, the notes
 * on its key lines, and the character, theme and context panels. The play
 * itself is not here. It is src/data/full-texts/macbeth.ts, which page.tsx
 * merges these onto by scene id.
 *
 * WHAT BROKE, AND WHY THIS FILE EXISTS (26 September 2026). The reader used to
 * carry the play typed into page.tsx: twelve of the twenty-eight scenes, in
 * eleven sections, some cut down, in the wording of the Folger Shakespeare
 * Library's edition ("So withered", "How far is 't called", "Untimely
 * ripped"). Folger licenses its
 * digital texts under CC BY-NC 3.0, which rules out commercial use, and this
 * site sells subscriptions. Shakespeare's words are free; Folger's edited text
 * is not. The play is now Project Gutenberg #1533, copied by
 * scripts/fetch-public-domain-play.mjs and never retyped, and it is the whole
 * play.
 *
 * AND A SECOND, SILENT FAILURE, found while moving the notes. The viewer finds a
 * note's `text` in the scene with a regular expression over the scene's own
 * characters, line breaks included. The old notes were typed with a space where
 * the verse breaks ("This supernatural soliciting Cannot be ill"), so they
 * matched nothing: of 88 notes, 32 were ever found in the text and 31 were
 * shown. The other 57 were written, shipped and invisible.
 *
 * SO EVERY `text` BELOW IS CUT FROM THE HELD EDITION, character for character,
 * with "\n" where the edition breaks the line and its curly apostrophes, and
 * src/__tests__/macbeth-reader-notes-land.test.ts fails if one stops being
 * found in its scene. All 88 notes were kept: each was re-anchored to the
 * Gutenberg words for the same line, and the notes written for Act 1, Scene 2
 * moved to that scene now that it is no longer printed inside Scene 1. The
 * note on Banquo's ghost is anchored to the stage direction this edition
 * prints ("The Ghost of Banquo rises, and sits in Macbeth’s place").
 *
 * WHERE TWO NOTES ANNOTATE NESTED WORDS, THEY SHARE ONE SPAN. The viewer cannot
 * draw a highlight inside another, and silently drops the inner one, so a
 * theme note on "Vaulting ambition" inside the key quotation that contains it
 * would never be seen. Eight notes therefore carry the text of the note whose
 * line contains theirs, and the viewer shows both in one tooltip. The test
 * checks that no note in a scene crosses another.
 *
 * The quotations inside notes and panels follow the same edition. Scene titles
 * are translated in ./translations.ts, so a title changed here needs its
 * Arabic key changed there.
 */

export interface SceneNotes {
  /** The scene's title in the contents, which ./translations.ts translates. */
  title: string
  annotations?: Annotation[]
}

/** Keyed by the held edition's section id, e.g. "acti-sceneiii" for Act 1, Scene 3. */
export const SCENES: Record<string, SceneNotes> = {
  'acti-scenei': {
    title: 'Act 1, Scene 1 - The Witches',
    annotations: [
      {
        type: 'language',
        text: 'Fair is foul, and foul is fair',
        note: 'Chiasmus (reversed grammatical structure) and paradox. This establishes the play\'s central motif of moral inversion -- nothing is what it seems. The antithesis of "fair" and "foul" creates an unsettling world where moral boundaries are collapsed.',
      },
      {
        type: 'theme',
        text: 'Fair is foul, and foul is fair',
        note: 'Theme: Appearance vs Reality. The witches\' motto announces that the entire play will deal with deception, equivocation, and the gap between seeming and being. This line is echoed by Macbeth\'s first words: "So foul and fair a day I have not seen."',
      },
      {
        type: 'context',
        text: 'When the hurlyburly’s done',
        note: 'The witches speak in trochaic tetrameter (stressed-unstressed rhythm), which contrasts with the iambic pentameter used by the court characters. This rhythmic difference marks them as supernatural beings outside the natural order. Shakespeare used this distinction to unsettle the audience.',
      },
      {
        type: 'character',
        text: 'There to meet with Macbeth',
        note: "The witches already know Macbeth by name before meeting him, implying they have been watching and waiting. This raises the key question of the play: do the witches cause Macbeth's downfall, or do they merely predict what he would have done anyway? The ambiguity is deliberate.",
      },
      {
        type: 'quote',
        text: 'Fair is foul, and foul is fair',
        note: "KEY ESSAY QUOTE -- Use for: appearance vs reality, the supernatural, moral disorder. This chiasmus is the play's thematic thesis statement and can open or anchor almost any essay about Macbeth.",
      },
      {
        type: 'context',
        text: 'Hover through the fog and filthy air',
        note: 'The pathetic fallacy of thunder, lightning, fog, and "filthy air" creates an atmosphere of moral corruption. For Jacobean audiences, storms were believed to be caused by witchcraft. King James I described witches raising storms in his treatise Daemonologie (1597).',
      },
    ],
  },
  'acti-sceneii': {
    title: 'Act 1, Scene 2 - A Bloody Battle',
    annotations: [
      {
        type: 'language',
        text: 'brave Macbeth (well he deserves that name)',
        note: 'The Sergeant\'s report introduces Macbeth as a noble hero before we ever meet him. The epithet "brave Macbeth" creates dramatic irony -- this valiant warrior will soon become a treacherous murderer. Shakespeare builds him up so the fall is greater.',
      },
      {
        type: 'language',
        text: 'unseam’d him from the nave to the chops',
        note: 'Visceral, violent imagery -- Macbeth literally split Macdonwald open from navel to jaw. The verb "unseam’d" treats the body like fabric being torn apart. This establishes Macbeth\'s capacity for extreme violence, foreshadowing the murders to come.',
      },
    ],
  },
  'acti-sceneiii': {
    title: 'Act 1, Scene 3 - The Prophecies',
    annotations: [
      {
        type: 'language',
        text: 'So foul and fair a day I have not seen',
        note: 'Macbeth\'s very first line echoes the witches\' "Fair is foul, and foul is fair" from Scene 1. This verbal link connects Macbeth to the supernatural world before he even meets the witches, suggesting a pre-existing affinity with moral disorder.',
      },
      {
        type: 'quote',
        text: 'All hail, Macbeth! that shalt be king hereafter!',
        note: 'KEY ESSAY QUOTE -- The triple greeting (Glamis, Cawdor, King) creates a rising sequence of power. The prophecy acts as the inciting incident of the tragedy. Use for essays on ambition, the supernatural, or fate vs free will.',
      },
      {
        type: 'character',
        text: 'The instruments of darkness tell us truths;\nWin us with honest trifles, to betray’s\nIn deepest consequence',
        note: "Banquo acts as Macbeth's moral foil. He hears the same prophecy but responds with caution and moral clarity, recognising the witches' strategy of using small truths to deliver larger deceptions. Macbeth ignores this wise warning.",
      },
      {
        type: 'quote',
        text: 'The instruments of darkness tell us truths;\nWin us with honest trifles, to betray’s\nIn deepest consequence',
        note: "KEY ESSAY QUOTE -- Banquo's warning articulates how evil operates through deception. Use for: the supernatural, Banquo as foil, appearance vs reality, equivocation.",
      },
      {
        type: 'theme',
        text: 'This supernatural soliciting\nCannot be ill; cannot be good',
        note: "Theme: The Supernatural / Fate vs Free Will. Macbeth's soliloquy reveals his internal conflict. The prophecy has not commanded him to murder -- he draws that conclusion himself. This supports the reading that the witches exploit existing desires rather than creating new ones.",
      },
      {
        type: 'language',
        text: 'Whose horrid image doth unfix my hair,\nAnd make my seated heart knock at my ribs',
        note: 'Physical manifestations of psychological horror -- hair standing on end, heart pounding. Shakespeare dramatises the internal conflict through the body itself. The word "unfix" suggests Macbeth\'s sense of self is already being destabilised by the thought of murder.',
      },
      {
        type: 'character',
        text: 'If chance will have me king, why, chance may crown me\nWithout my stir',
        note: 'Macbeth momentarily considers letting fate take its course without action. This brief moral hesitation makes his eventual choice to murder Duncan all the more tragic -- he knows the right path but chooses the wrong one.',
      },
      {
        type: 'context',
        text: 'Lesser than Macbeth, and greater',
        note: "The witches' paradoxical prophecies about Banquo use equivocation -- deliberately ambiguous language. This had topical resonance after the Gunpowder Plot (1605), when the Jesuit Henry Garnet defended the doctrine of equivocation at his trial. Shakespeare's audience would have recognised this as devilish deception.",
      },
    ],
  },
  'acti-sceneiv': {
    title: 'Act 1, Scene 4 - Duncan Names Malcolm Heir',
  },
  'acti-scenev': {
    title: 'Act 1, Scene 5 - Lady Macbeth',
    annotations: [
      {
        type: 'quote',
        text: 'Yet do I fear thy nature;\nIt is too full o’ th’ milk of human kindness',
        note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s assessment reveals Macbeth still has a moral conscience she must overcome. The metaphor of "milk" associates kindness with femininity and nurturing. She sees his humanity as a weakness to be purged.',
      },
      {
        type: 'language',
        text: 'unsex me here,\nAnd fill me, from the crown to the toe, top-full\nOf direst cruelty!',
        note: 'The verb "unsex" is a violent demand to strip away femininity. "From the crown to the toe" suggests total bodily transformation. The invocation parallels a demonic possession -- she is calling on dark spirits to inhabit her entirely. The language of "filling" implies she needs to replace her natural self with something unnatural.',
      },
      {
        type: 'theme',
        text: 'unsex me here,\nAnd fill me, from the crown to the toe, top-full\nOf direst cruelty!',
        note: 'Theme: Gender and Masculinity. Lady Macbeth explicitly rejects her femininity to participate in murder. She equates womanliness with compassion and weakness, and masculinity with ruthless violence. This gendered language runs throughout the play.',
      },
      {
        type: 'quote',
        text: 'look like the innocent flower,\nBut be the serpent under’t',
        note: "KEY ESSAY QUOTE -- Biblical allusion to the serpent in Eden. Lady Macbeth instructs Macbeth in the art of deception. Use for: appearance vs reality, Lady Macbeth's manipulation, the corruption of innocence.",
      },
      {
        type: 'character',
        text: 'Come to my woman’s breasts,\nAnd take my milk for gall',
        note: 'Lady Macbeth asks spirits to replace her breast milk (symbol of maternal nurturing) with "gall" (bitterness/poison). This is a deliberate rejection of motherhood and femininity. The imagery is shocking and transgressive, marking her as deeply unnatural in Jacobean terms.',
      },
      {
        type: 'context',
        text: 'Come, you spirits\nThat tend on mortal thoughts',
        note: "Lady Macbeth's invocation of evil spirits would have been deeply disturbing to a Jacobean audience who believed in demonic possession. She is essentially inviting the devil in. This aligns her with the witches and the supernatural evil they represent. King James I would have seen this as evidence of witchcraft.",
      },
      {
        type: 'language',
        text: 'Come, thick night,\nAnd pall thee in the dunnest smoke of hell',
        note: 'The imperative verbs ("come," "pall") show Lady Macbeth commanding darkness itself. "Dunnest" means darkest -- she wants the blackest possible concealment. "Pall" means both to cover (like a funeral cloth) and to become insipid, foreshadowing her later disillusionment.',
      },
      {
        type: 'theme',
        text: 'Your face, my thane, is as a book where men\nMay read strange matters',
        note: "Theme: Appearance vs Reality. Lady Macbeth recognises that Macbeth's face betrays his thoughts -- he cannot yet deceive. She must teach him to separate his appearance from his reality, a skill that will consume them both.",
      },
    ],
  },
  'acti-scenevi': {
    title: 'Act 1, Scene 6 - Duncan Arrives',
  },
  'acti-scenevii': {
    title: 'Act 1, Scene 7 - Macbeth Hesitates',
    annotations: [
      {
        type: 'language',
        text: 'If it were done when ’tis done, then ’twere well\nIt were done quickly',
        note: 'The tortured syntax mirrors Macbeth\'s tortured thinking. The repetition of "done" three times in the first line shows his mind circling around the act, trying to reduce murder to a simple task. The conditional "if" reveals he knows it will NOT be "done" -- consequences will follow.',
      },
      {
        type: 'quote',
        text: 'I have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o’erleaps itself\nAnd falls on th’ other',
        note: 'KEY ESSAY QUOTE -- Macbeth admits his ONLY motive is ambition. The horse-riding metaphor of "vaulting ambition" that "o\'erleaps itself" perfectly predicts his trajectory: he will overreach and fall. This is the tragic flaw identified by the hero himself.',
      },
      {
        type: 'theme',
        text: 'I have no spur\nTo prick the sides of my intent, but only\nVaulting ambition, which o’erleaps itself\nAnd falls on th’ other',
        note: 'Theme: Ambition. Macbeth identifies ambition as a force that destroys itself through excess. The image of a rider vaulting too high and falling off the other side of the horse captures the entire arc of the play in a single metaphor.',
      },
      {
        type: 'character',
        text: 'When you durst do it, then you were a man;\nAnd, to be more than what you were, you would\nBe so much more the man',
        note: "Lady Macbeth's most devastating manipulation: she redefines masculinity as the willingness to murder. She attacks Macbeth's identity, his sense of self as a man, knowing this is more powerful than any logical argument. She weaponises gender expectations.",
      },
      {
        type: 'quote',
        text: 'I dare do all that may become a man;\nWho dares do more is none',
        note: "KEY ESSAY QUOTE -- Macbeth's response offers a more nuanced definition of manhood: true manliness has moral limits. To exceed those limits is to become less than human. Tragically, he will immediately abandon this principled position. Use for: gender/masculinity theme.",
      },
      {
        type: 'language',
        text: 'I have given suck, and know\nHow tender ’tis to love the babe that milks me:\nI would, while it was smiling in my face,\nHave pluck’d my nipple from his boneless gums\nAnd dash’d the brains out',
        note: 'The most shocking image in the play. Lady Macbeth uses the ultimate act of maternal destruction -- killing her own nursing baby -- as a measure of her commitment. The contrast between tenderness ("smiling in my face") and violence ("dash’d the brains out") is deliberately horrifying. It proves she will stop at nothing.',
      },
      {
        type: 'theme',
        text: 'When you durst do it, then you were a man;\nAnd, to be more than what you were, you would\nBe so much more the man',
        note: 'Theme: Gender and Masculinity. Lady Macbeth equates manhood with the capacity for violence and murder. This toxic definition of masculinity drives the tragedy -- Macbeth kills partly to prove he is a "man." Compare with Macduff\'s later redefinition: "I must also feel it as a man".',
      },
      {
        type: 'language',
        text: 'False face must hide what the false heart doth know',
        note: 'The rhyming couplet that closes the scene signals Macbeth\'s decision is made. The repetition of "false" emphasises the total corruption -- both his face (appearance) and heart (reality) are now "false." The couplet form gives it the quality of a dark proverb.',
      },
    ],
  },
  'actii-scenei': {
    title: 'Act 2, Scene 1 - The Dagger',
    annotations: [
      {
        type: 'quote',
        text: 'Is this a dagger which I see before me,\nThe handle toward my hand?',
        note: "KEY ESSAY QUOTE -- The most famous soliloquy opening in the play. The dagger hallucination dramatises Macbeth's psychological conflict. Is it supernatural temptation or a projection of his guilty mind? The fact the handle points towards him suggests temptation offering itself willingly.",
      },
      {
        type: 'language',
        text: 'A dagger of the mind, a false creation,\nProceeding from the heat-oppressed brain?',
        note: 'Macbeth himself questions whether the dagger is real or imaginary -- "a false creation" from a feverish mind. This ambiguity is central to the play\'s treatment of the supernatural: Shakespeare never confirms whether the vision is genuine or psychological.',
      },
      {
        type: 'theme',
        text: 'Is this a dagger which I see before me,\nThe handle toward my hand?',
        note: "Theme: The Supernatural. The dagger vision exists in the liminal space between reality and hallucination. It embodies the play's refusal to clearly separate natural from supernatural, real from imagined. This ambiguity makes the supernatural elements more unsettling.",
      },
      {
        type: 'character',
        text: 'So I lose none\nIn seeking to augment it, but still keep\nMy bosom franchis’d, and allegiance clear',
        note: "Banquo's conditional response reveals his moral integrity: he will seek honour only if it does not compromise his conscience or loyalty. This directly contrasts with Macbeth, who is about to sacrifice both conscience and loyalty for the crown.",
      },
      {
        type: 'language',
        text: 'With Tarquin’s ravishing strides, towards his design\nMoves like a ghost',
        note: 'The classical allusion to Tarquin (the Roman king who committed a famous rape) associates Macbeth\'s crime with sexual violence and tyranny. "Moves like a ghost" foreshadows Macbeth\'s spiritual death -- he is already becoming a hollow figure.',
      },
      {
        type: 'context',
        text: 'Witchcraft celebrates\nPale Hecate’s off’rings',
        note: 'Hecate was the Greek goddess of witchcraft, crossroads, and the underworld. Macbeth imagines the entire supernatural world activated and celebrating as he moves towards murder. For Jacobean audiences, this would confirm that regicide aligns with demonic forces.',
      },
      {
        type: 'quote',
        text: 'Hear it not, Duncan, for it is a knell\nThat summons thee to heaven or to hell',
        note: 'KEY ESSAY QUOTE -- The rhyming couplet seals Duncan\'s fate. A "knell" is a funeral bell, transforming Lady Macbeth\'s signal into a death toll. The final words "heaven or to hell" remind us of the spiritual stakes of what Macbeth is about to do.',
      },
      {
        type: 'language',
        text: 'on thy blade and dudgeon, gouts of blood,\nWhich was not so before',
        note: 'The dagger transforms before Macbeth\'s eyes, becoming bloodied. "Gouts" means large drops. The hallucination intensifies, moving from vision to prophecy -- it shows the aftermath of a deed not yet committed. The escalation mirrors Macbeth\'s own resolve hardening.',
      },
    ],
  },
  'actii-sceneii': {
    title: 'Act 2, Scene 2 - The Murder',
    annotations: [
      {
        type: 'quote',
        text: 'Will all great Neptune’s ocean wash this blood\nClean from my hand?',
        note: 'KEY ESSAY QUOTE -- The hyperbole of an entire ocean being insufficient to cleanse his hands conveys the permanence of guilt. This directly contrasts with Lady Macbeth\'s dismissive "A little water clears us of this deed" -- a confidence devastatingly reversed in her sleepwalking scene.',
      },
      {
        type: 'language',
        text: 'The multitudinous seas incarnadine,\nMaking the green one red',
        note: 'Shakespeare follows the Latinate "multitudinous seas incarnadine" with the simple monosyllabic "Making the green one red" -- translating his own poetry into blunt, visceral English. The contrast between ornate and plain language mirrors Macbeth\'s mind oscillating between denial and horrified clarity.',
      },
      {
        type: 'theme',
        text: 'Macbeth does murder sleep',
        note: 'Theme: Guilt and Conscience. Sleep symbolises innocence, peace of mind, and the natural order. By murdering the sleeping Duncan, Macbeth has destroyed his own capacity for rest. The voice that cries this verdict is his own conscience, already passing judgement.',
      },
      {
        type: 'character',
        text: 'Had he not resembled\nMy father as he slept, I had done’t',
        note: 'This crucial aside reveals Lady Macbeth\'s humanity beneath her iron resolve. Despite calling on spirits to "unsex" her, she cannot commit the murder herself because Duncan reminds her of her father. Her femininity and compassion have not been fully suppressed -- they will resurface devastatingly in Act 5.',
      },
      {
        type: 'language',
        text: 'I could not say “Amen,”\nWhen they did say, “God bless us.”',
        note: 'Macbeth\'s inability to say "Amen" dramatises his spiritual separation from God. The act of regicide has cut him off from divine grace. This would have been profoundly disturbing to a Jacobean audience who believed in the sacred bond between God and king.',
      },
      {
        type: 'quote',
        text: 'A little water clears us of this deed',
        note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s dismissal of guilt as easily washed away creates devastating dramatic irony. In Act 5, she will compulsively wash her hands, unable to remove imaginary blood: "All the perfumes of Arabia will not sweeten this little hand." Use for: guilt, Lady Macbeth\'s arc, dramatic irony.',
      },
      {
        type: 'context',
        text: 'I’ll gild the faces of the grooms withal,\nFor it must seem their guilt',
        note: 'The pun on "gild" (to cover in gold) and "guilt" reveals Lady Macbeth\'s dark wit under pressure. She is practical and composed where Macbeth is paralysed. The framing of the grooms reflects the play\'s theme of appearance vs reality -- she manufactures false evidence.',
      },
      {
        type: 'theme',
        text: 'Sleep that knits up the ravell’d sleave of care,\nThe death of each day’s life, sore labour’s bath',
        note: "Theme: Natural Order. Macbeth's beautiful description of sleep as healing and restorative emphasises what he has destroyed. Sleep represents the natural order -- by murdering the sleeping king, he has violated nature itself and condemned himself to perpetual wakefulness and guilt.",
      },
    ],
  },
  'actii-sceneiii': {
    title: 'Act 2, Scene 3 - The Discovery',
  },
  'actii-sceneiv': {
    title: 'Act 2, Scene 4 - Nature in Disorder',
  },
  'actiii-scenei': {
    title: 'Act 3, Scene 1 - Banquo Suspects',
  },
  'actiii-sceneii': {
    title: 'Act 3, Scene 2 - Scorpions in the Mind',
  },
  'actiii-sceneiii': {
    title: 'Act 3, Scene 3 - The Ambush',
  },
  'actiii-sceneiv': {
    title: 'Act 3, Scene 4 - The Banquet',
    annotations: [
      {
        type: 'quote',
        text: 'I am in blood\nStepp’d in so far that, should I wade no more,\nReturning were as tedious as go o’er',
        note: 'KEY ESSAY QUOTE -- Extended metaphor of guilt as a river of blood. The word "tedious" is chillingly understated -- returning to virtue has become merely inconvenient. Once a threshold of evil is crossed, the moral cost of repentance feels equal to continuing. This traps Macbeth in a cycle of violence.',
      },
      {
        type: 'theme',
        text: 'blood will have blood',
        note: 'Theme: Guilt and Conscience. This proverbial statement acknowledges that violence breeds more violence. Macbeth recognises the cycle he is trapped in but sees no escape. The repetition of "blood" hammers home the idea that murder can never be contained.',
      },
      {
        type: 'character',
        text: 'Thou canst not say I did it. Never shake\nThy gory locks at me',
        note: 'Macbeth\'s terrified outburst to the ghost reveals his guilt publicly. The denial "I did it" is an inadvertent confession. The Ghost of Banquo represents the physical manifestation of Macbeth\'s guilt -- or is it genuinely supernatural? Shakespeare maintains the ambiguity.',
      },
      {
        type: 'language',
        text: 'Are you a man?',
        note: 'Lady Macbeth again weaponises gender to control Macbeth, echoing her Act 1 manipulation. But here her power is waning -- she can no longer control his psychological disintegration. The question becomes increasingly desperate as the scene progresses.',
      },
      {
        type: 'theme',
        text: 'cabin’d, cribb’d, confin’d, bound in\nTo saucy doubts and fears',
        note: 'Theme: Kingship and Power. The alliteration of "cabin’d, cribb’d, confin’d" creates a sense of claustrophobic imprisonment. Despite being king, Macbeth feels trapped. Power has not brought freedom but paranoid confinement -- the opposite of what he expected.',
      },
      {
        type: 'context',
        text: 'The Ghost of Banquo rises, and sits in Macbeth’s place',
        note: "The ghost sitting in Macbeth's chair symbolically suggests that Banquo's line (leading to James I) is the rightful occupant of the throne. For Shakespeare's audience, this would have reinforced the Stuart claim to the crown. The ghost displaces the usurper.",
      },
      {
        type: 'language',
        text: 'This is the very painting of your fear',
        note: 'Lady Macbeth dismisses the ghost as a hallucination ("painting of your fear"), linking it to the earlier dagger vision. The word "painting" continues the play\'s theme of false appearances. Crucially, she cannot see the ghost -- is it real or imagined?',
      },
      {
        type: 'quote',
        text: 'We are yet but young in deed',
        note: 'KEY ESSAY QUOTE -- Macbeth\'s chilling final line suggests more murders will follow. "Young in deed" implies they are only beginners in evil, with worse to come. This marks the point where Macbeth transitions from reluctant murderer to active tyrant.',
      },
    ],
  },
  'actiii-scenev': {
    title: 'Act 3, Scene 5 - Hecate',
  },
  'actiii-scenevi': {
    title: 'Act 3, Scene 6 - Lennox and a Lord',
  },
  'activ-scenei': {
    title: 'Act 4, Scene 1 - The Cauldron',
    annotations: [
      {
        type: 'quote',
        text: 'Double, double, toil and trouble;\nFire, burn; and cauldron, bubble',
        note: 'KEY ESSAY QUOTE -- The witches\' famous incantation uses trochaic tetrameter, contrasting with the play\'s standard iambic pentameter. "Double" reinforces the motif of duplicity and equivocation. The grotesque cauldron ingredients symbolise moral corruption. Use for: the supernatural, atmosphere, equivocation.',
      },
      {
        type: 'language',
        text: 'By the pricking of my thumbs,\nSomething wicked this way comes',
        note: 'The witch senses Macbeth through a physical sensation, showing supernatural attunement to evil. Crucially, she calls him "something wicked" rather than someone -- stripping him of humanity. Even the witches, agents of evil themselves, now recognise Macbeth as wicked.',
      },
      {
        type: 'theme',
        text: 'none of woman born\nShall harm Macbeth',
        note: 'Theme: Appearance vs Reality / Equivocation. The prophecy appears to guarantee Macbeth\'s invincibility but is deliberately misleading. Macduff was born by caesarean section -- "Untimely ripp’d" from his mother\'s womb -- and therefore not technically "born" of woman. The witches use literal truth to deceive.',
      },
      {
        type: 'character',
        text: 'The very firstlings of my heart shall be\nThe firstlings of my hand',
        note: "Macbeth resolves to act on impulse without reflection -- the opposite of his agonised deliberation before Duncan's murder. He has evolved from a man paralysed by conscience to one who murders spontaneously. The slaughter of Macduff's family follows immediately.",
      },
      {
        type: 'context',
        text: 'twofold balls and treble sceptres',
        note: 'The "show of eight kings" represents the Stuart dynasty descending from Banquo. The "twofold balls" refer to the double coronation orb used when James VI of Scotland became James I of England. The "glass" (mirror) held by the eighth king would have symbolically reflected James I in the audience -- a direct royal compliment.',
      },
      {
        type: 'language',
        text: 'Eye of newt, and toe of frog,\nWool of bat, and tongue of dog',
        note: 'The catalogue of grotesque ingredients creates a darkly comic litany. Many of these were folk names for herbs (e.g., "eye of newt" = mustard seed), but Shakespeare presents them literally for maximum horror. The rhythmic listing mimics a genuine spell, creating an incantatory atmosphere.',
      },
      {
        type: 'theme',
        text: 'Macbeth shall never vanquish’d be, until\nGreat Birnam wood to high Dunsinane hill\nShall come against him',
        note: 'Theme: The Supernatural / Fate. Like the "none of woman born" prophecy, this seems impossible but will be fulfilled literally. Malcolm\'s soldiers carry branches from Birnam Wood as camouflage. The witches exploit equivocation -- technically true but designed to create false confidence.',
      },
      {
        type: 'quote',
        text: 'By the pricking of my thumbs,\nSomething wicked this way comes',
        note: 'KEY ESSAY QUOTE -- Use for: Macbeth\'s moral deterioration, the supernatural, character transformation. The fact that the witches themselves call Macbeth "wicked" shows how far he has fallen from the "brave Macbeth" of Act 1.',
      },
    ],
  },
  'activ-sceneii': {
    title: 'Act 4, Scene 2 - Lady Macduff',
  },
  'activ-sceneiii': {
    title: 'Act 4, Scene 3 - Malcolm and Macduff',
  },
  'actv-scenei': {
    title: 'Act 5, Scene 1 - The Sleepwalking Scene',
    annotations: [
      {
        type: 'quote',
        text: 'Out, damned spot! out, I say!',
        note: 'KEY ESSAY QUOTE -- Lady Macbeth\'s most famous line. She compulsively washes imaginary blood from her hands, reversing her earlier "A little water clears us of this deed". The word "damned" carries religious weight -- she recognises her soul is condemned. Use for: guilt, Lady Macbeth\'s arc, dramatic irony.',
      },
      {
        type: 'language',
        text: 'Here’s the smell of the blood still: all the perfumes of Arabia will\nnot sweeten this little hand',
        note: 'The sensory shift from sight (spot) to smell shows guilt becoming more pervasive and inescapable. This directly inverts Macbeth\'s "Neptune\'s ocean" image -- she has arrived at the same recognition of permanent guilt. "Little" is poignant: she is suddenly diminished, no longer the towering figure of Act 1.',
      },
      {
        type: 'theme',
        text: 'Out, damned spot! out, I say!',
        note: "Theme: Guilt and Conscience. Lady Macbeth's sleepwalking proves that guilt cannot be suppressed indefinitely. Her unconscious mind forces her to relive the crimes she helped orchestrate. The blood she once dismissed as trivial has become a permanent psychological stain.",
      },
      {
        type: 'character',
        text: 'Yet who\nwould have thought the old man to have had so much blood in him?',
        note: "Lady Macbeth's fragmented prose contrasts with her earlier commanding verse. The shift from verse to prose signals her mental disintegration. She relives multiple murders simultaneously -- Duncan, Lady Macduff, Banquo -- all merging into a single nightmare of guilt.",
      },
      {
        type: 'context',
        text: 'More needs she the divine than the physician',
        note: 'The Doctor recognises that Lady Macbeth\'s illness is spiritual, not physical. In Jacobean terms, she needs a priest, not a doctor. The line suggests that her guilt is a form of divine punishment that no earthly remedy can address. "Remove from her the means of all annoyance" implies he fears she will harm herself.',
      },
      {
        type: 'language',
        text: 'What’s done cannot be undone',
        note: 'This echoes and inverts Macbeth\'s "If it were done when ’tis done". Where Macbeth tried to imagine murder as finite and contained, Lady Macbeth now recognises its irreversibility. The simple, child-like diction ("done... undone") reflects her mental regression.',
      },
      {
        type: 'theme',
        text: 'Unnatural deeds\nDo breed unnatural troubles',
        note: 'Theme: Natural Order. The Doctor\'s verdict connects Lady Macbeth\'s madness to the wider pattern of nature disrupted by crime. Her "unnatural" rejection of femininity ("unsex me here") has bred "unnatural" psychological consequences. The play insists that violating nature has inescapable costs.',
      },
      {
        type: 'quote',
        text: 'Here’s the smell of the blood still: all the perfumes of Arabia will\nnot sweeten this little hand',
        note: 'KEY ESSAY QUOTE -- A devastating inversion of Macbeth\'s "Neptune\'s ocean" line. Where his image was cosmic and hyperbolic, hers is sensory and intimate. The "little hand" makes her vulnerability heartbreaking. Use for: guilt, gender, Lady Macbeth\'s transformation, imagery.',
      },
    ],
  },
  'actv-sceneii': {
    title: 'Act 5, Scene 2 - The Scottish Lords March',
  },
  'actv-sceneiii': {
    title: 'Act 5, Scene 3 - Macbeth at Bay',
  },
  'actv-sceneiv': {
    title: 'Act 5, Scene 4 - Birnam Wood',
  },
  'actv-scenev': {
    title: 'Act 5, Scene 5 - Tomorrow, and Tomorrow',
    annotations: [
      {
        type: 'quote',
        text: 'Tomorrow, and tomorrow, and tomorrow,\nCreeps in this petty pace from day to day,\nTo the last syllable of recorded time',
        note: 'KEY ESSAY QUOTE -- Shakespeare\'s most famous soliloquy. The triple repetition and monosyllabic diction create unbearable monotony and weariness. "Creeps" and "petty pace" diminish time itself. Having murdered his way to the throne, Macbeth finds the future holds nothing worth living for. This is ambition\'s ultimate consequence.',
      },
      {
        type: 'language',
        text: 'Life’s but a walking shadow; a poor player,\nThat struts and frets his hour upon the stage,\nAnd then is heard no more',
        note: 'The theatrical metaphor is deeply self-aware -- Macbeth IS a character on a stage. "Walking shadow" suggests something without substance. "Struts and frets" reduces all human action to pointless performance. "His hour" emphasises life\'s brevity. The metaphor layers: life is a shadow of a bad actor in a meaningless play.',
      },
      {
        type: 'quote',
        text: 'it is a tale\nTold by an idiot, full of sound and fury,\nSignifying nothing',
        note: 'KEY ESSAY QUOTE -- The conclusion dismisses life as a meaningless story. "Sound and fury" suggests all of Macbeth\'s violence and ambition amount to nothing. "Signifying nothing" is devastating in its finality. Use for: consequences of ambition, Macbeth\'s character arc, nihilism as tragic endpoint.',
      },
      {
        type: 'theme',
        text: 'Tomorrow, and tomorrow, and tomorrow,\nCreeps in this petty pace from day to day,\nTo the last syllable of recorded time',
        note: 'Theme: Ambition. This soliloquy is the tragic endpoint of ambition. Macbeth has achieved everything he desired (the crown) but finds it meaningless. His nihilistic despair represents the ultimate consequence of pursuing power at the cost of conscience, love, and human connection.',
      },
      {
        type: 'character',
        text: 'She should have died hereafter.\nThere would have been a time for such a word',
        note: 'Macbeth\'s response to his wife\'s death is chillingly muted -- not grief but weary resignation. "She should have died hereafter" can mean either "she would have died eventually anyway" or "there should have been a better time for this." Either reading reveals a man drained of the capacity to feel.',
      },
      {
        type: 'language',
        text: 'I have supp’d full with horrors;\nDireness, familiar to my slaughterous thoughts,\nCannot once start me',
        note: 'The metaphor of having "supp’d full with horrors" suggests Macbeth has consumed so much evil that he can take no more -- he is satiated with horror. The word "familiar" is devastating: atrocity has become routine. He has been numbed by his own violence.',
      },
      {
        type: 'theme',
        text: 'To doubt th’ equivocation of the fiend,\nThat lies like truth',
        note: 'Theme: Appearance vs Reality. Macbeth finally recognises the witches\' strategy -- equivocation, the use of literally true statements to deceive. "Lies like truth" perfectly describes their prophecies. This moment of clarity comes too late to save him.',
      },
      {
        type: 'context',
        text: 'Out, out, brief candle!',
        note: "The candle metaphor connects to the play's sustained light/darkness imagery. Candles and torches have appeared throughout as fragile sources of light in an overwhelming darkness. Now Macbeth extinguishes even this hope, accepting total darkness. The exclamation mimics someone literally snuffing a candle.",
      },
    ],
  },
  'actv-scenevi': {
    title: 'Act 5, Scene 6 - The Boughs Thrown Down',
  },
  'actv-scenevii': {
    title: 'Act 5, Scene 7 - Young Siward',
  },
  'actv-sceneviii': {
    title: 'Act 5, Scene 8 - The Final Battle',
    annotations: [
      {
        type: 'language',
        text: 'That palter with us in a double sense;\nThat keep the word of promise to our ear,\nAnd break it to our hope!',
        note: 'Macbeth\'s final recognition of the witches\' equivocation. "Palter" means to deal deceptively. They kept the literal "word of promise" while violating its spirit. This articulates the play\'s central insight about equivocation: truth itself can be used as a weapon of deception.',
      },
      {
        type: 'quote',
        text: 'lay on, Macduff;\nAnd damn’d be him that first cries, “Hold, enough!”',
        note: "KEY ESSAY QUOTE -- Macbeth's final words restore a measure of the warrior's courage he displayed in Act 1. Despite knowing the prophecies guarantee his defeat, he chooses to fight rather than surrender. This defiant last stand gives him a shred of tragic dignity.",
      },
      {
        type: 'character',
        text: 'Macduff was from his mother’s womb\nUntimely ripp’d',
        note: "Macduff's caesarean birth fulfils the witches' prophecy -- he was not \"born\" of woman in the conventional sense. His role as the agent of justice connects to the play's theme of rightful order: it takes someone outside the normal order of nature to defeat one who has violated it.",
      },
      {
        type: 'theme',
        text: 'this dead butcher, and his fiend-like queen',
        note: "Theme: Kingship and Power. Malcolm's reductive summary reduces Macbeth and Lady Macbeth to villain archetypes. But the audience has seen their full psychological complexity -- this gap between Malcolm's simple verdict and the play's rich characterisation is itself significant. History simplifies; drama humanises.",
      },
      {
        type: 'context',
        text: 'Henceforth be earls, the first that ever Scotland\nIn such an honour nam’d',
        note: 'Malcolm\'s modernisation of Scottish titles to English-style "earls" reflects the historical union of Scotland and England under James I. This would have pleased the king, suggesting that the restoration of order includes the Anglicisation of Scottish nobility.',
      },
      {
        type: 'language',
        text: 'Turn, hell-hound, turn!',
        note: 'Macduff\'s address reduces Macbeth to a demonic animal -- "hell-hound." The imperative "turn" demands Macbeth face his nemesis. The compound word "hell-hound" combines the supernatural (hell) with the bestial (hound), suggesting Macbeth has become both inhuman and damned.',
      },
      {
        type: 'theme',
        text: 'by the grace of Grace,\nWe will perform in measure, time, and place',
        note: 'Theme: Natural Order restored. Malcolm\'s final speech uses the language of harmony and proportion ("measure, time, and place"). The capitalised "Grace" refers to divine favour. The legitimate king restores the order that Macbeth shattered, completing the play\'s circular structure.',
      },
      {
        type: 'quote',
        text: 'the time is free',
        note: 'KEY ESSAY QUOTE -- Macduff\'s declaration that "the time is free" signals the end of tyranny and the restoration of natural order. Use for: kingship and power, the play\'s resolution, the defeat of unchecked ambition.',
      },
    ],
  },
}

export const CHARACTERS: CharacterInfo[] = [
  {
    name: 'Macbeth',
    description:
      "The play's tragic hero. A brave Scottish general whose ambition, ignited by the witches' prophecy and his wife's goading, leads him to murder King Duncan and seize the throne. He descends from honoured warrior to paranoid tyrant, ultimately destroyed by the very forces he sought to control. His soliloquies reveal a man acutely aware of his own moral corruption yet unable to stop himself.",
    keyQuotes: [
      '"I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself / And falls on th’ other"',
      '"Is this a dagger which I see before me, / The handle toward my hand?"',
      '"I am in blood / Stepp’d in so far that, should I wade no more, / Returning were as tedious as go o’er"',
      '"Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day"',
    ],
  },
  {
    name: 'Lady Macbeth',
    description:
      "Macbeth's wife and co-conspirator. She is the driving force behind Duncan's murder, manipulating her husband by questioning his manhood. She calls on dark spirits to \"unsex\" her and fill her with cruelty. However, her iron resolve crumbles as guilt takes hold, leading to sleepwalking, madness, and implied suicide. Her arc from fierce ambition to psychological destruction is one of Shakespeare's greatest character studies.",
    keyQuotes: [
      '"Yet do I fear thy nature; / It is too full o’ th’ milk of human kindness"',
      '"unsex me here, / And fill me, from the crown to the toe, top-full / Of direst cruelty!"',
      '"look like the innocent flower, / But be the serpent under’t"',
      '"Out, damned spot! out, I say!"',
      '"all the perfumes of Arabia will not sweeten this little hand"',
    ],
  },
  {
    name: 'Banquo',
    description:
      "Macbeth's fellow general and moral foil. He hears the same prophecy but responds with caution rather than ambition. He warns that \"The instruments of darkness tell us truths\" in order \"to betray’s / In deepest consequence\". After Duncan's murder, he suspects Macbeth but does not act. His murder by Macbeth's hired assassins and his ghost's appearance at the banquet serve as physical manifestations of Macbeth's guilt.",
    keyQuotes: [
      '"The instruments of darkness tell us truths; / Win us with honest trifles, to betray’s / In deepest consequence"',
      '"Thou hast it now, King, Cawdor, Glamis, all, / As the Weird Women promis’d; and, I fear, / Thou play’dst most foully for’t"',
    ],
  },
  {
    name: 'Macduff',
    description:
      "The Thane of Fife and the play's agent of justice. He is the first to discover Duncan's body and refuses to attend Macbeth's coronation. After his family is slaughtered on Macbeth's orders, he joins Malcolm in England and leads the army that defeats Macbeth. His caesarean birth fulfils the witches' prophecy, and his grief for his family offers an alternative model of masculinity.",
    keyQuotes: [
      '"O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"',
      '"I shall do so; / But I must also feel it as a man"',
      '"Turn, hell-hound, turn!"',
      '"Macduff was from his mother’s womb / Untimely ripp’d"',
    ],
  },
  {
    name: 'King Duncan',
    description:
      'The gracious and trusting King of Scotland whose murder sets the tragedy in motion. He represents the divinely ordained order and is presented as generous and virtuous. His fatal flaw is excessive trust -- he cannot read treachery in faces. His murder disrupts nature itself, with storms, earthquakes, and unnatural darkness following his death.',
    keyQuotes: [
      '"There’s no art / To find the mind’s construction in the face"',
      '"O worthiest cousin!"',
    ],
  },
  {
    name: 'The Witches (Weird Sisters)',
    description:
      'Three supernatural beings who prophesy Macbeth\'s rise and fall. They open the play with "Fair is foul, and foul is fair," establishing the theme of moral inversion. They speak in trochaic tetrameter, marking them as outside the natural order. Their prophecies are technically true but deliberately misleading, using equivocation to give Macbeth false confidence. Shakespeare never resolves whether they cause Macbeth\'s downfall or merely predict it.',
    keyQuotes: [
      '"Fair is foul, and foul is fair"',
      '"All hail, Macbeth! that shalt be king hereafter!"',
      '"Double, double, toil and trouble; / Fire, burn; and cauldron, bubble"',
      '"By the pricking of my thumbs, / Something wicked this way comes"',
    ],
  },
  {
    name: 'Malcolm',
    description:
      "Duncan's eldest son and rightful heir to the Scottish throne. He initially flees after his father's murder but matures into a shrewd and cautious leader. He tests Macduff's loyalty by pretending to be riddled with vices, demonstrating political wisdom his father lacked. His restoration as king at the play's end represents the triumph of legitimate order over tyranny.",
    keyQuotes: [
      '"this dead butcher, and his fiend-like queen"',
      '"What’s more to do, / Which would be planted newly with the time"',
    ],
  },
  {
    name: 'Lady Macduff',
    description:
      "Macduff's wife, who appears briefly before being murdered with her children on Macbeth's orders. Her scene with her son provides the play's most emotionally devastating moment and illustrates the innocent victims of Macbeth's tyranny. Her murder marks Macbeth's complete moral degeneration -- he has moved from killing a king to slaughtering women and children.",
    keyQuotes: [
      '"Whither should I fly? / I have done no harm"',
      '"He loves us not: / He wants the natural touch"',
    ],
  },
]

export const THEMES: ThemeInfo[] = [
  {
    name: 'Ambition',
    description:
      'Ambition is the engine of the entire tragedy. Macbeth identifies it as his only motive: "Vaulting ambition, which o’erleaps itself / And falls on th’ other". Shakespeare does not present ambition as inherently evil -- Macbeth\'s military ambition is praised. It is unchecked, morally unmoored ambition that proves destructive. Each murder becomes easier, suggesting ambition, once it overrides conscience, becomes self-perpetuating. Lady Macbeth\'s ambition is channelled through her husband, making her manipulation more calculated and psychologically costly.',
    evidence: [
      '"I have no spur / To prick the sides of my intent, but only / Vaulting ambition" -- Macbeth identifies ambition as his sole, insufficient motive',
      '"Yet do I fear thy nature; / It is too full o’ th’ milk of human kindness / To catch the nearest way" -- Lady Macbeth sees Macbeth\'s conscience as an obstacle',
      '"Stars, hide your fires! / Let not light see my black and deep desires" -- Macbeth\'s first conscious embrace of dark ambition',
      'Banquo hears the same prophecy but does not act, proving ambition requires a willing agent',
      '"Tomorrow, and tomorrow, and tomorrow" -- the nihilistic endpoint of ambition that has consumed all meaning',
    ],
  },
  {
    name: 'Guilt and Conscience',
    description:
      'Guilt pervades the play from the moment Macbeth kills Duncan. His hallucination of a floating dagger, his inability to say "Amen," and the voice crying "Sleep no more!" reveal a conscience that resists what ambition demands. Lady Macbeth appears invulnerable at first, dismissing guilt with "A little water clears us of this deed," but her sleepwalking scene reveals guilt erupting from the unconscious. Shakespeare uses guilt as evidence of a moral order that exists regardless of whether characters acknowledge it.',
    evidence: [
      '"Will all great Neptune’s ocean wash this blood / Clean from my hand?" -- Macbeth recognises guilt\'s permanence immediately',
      '"A little water clears us of this deed" -- Lady Macbeth\'s false confidence, devastatingly reversed later',
      '"Out, damned spot!" -- unconscious guilt forces Lady Macbeth to relive the murders',
      '"Macbeth does murder sleep" -- by killing sleeping Duncan, Macbeth destroys his own capacity for rest',
      '"all the perfumes of Arabia will not sweeten this little hand" -- guilt has become inescapable',
    ],
  },
  {
    name: 'The Supernatural',
    description:
      "The supernatural suffuses every level of the play. Shakespeare uses it to create atmosphere, drive the plot, and raise questions about fate and free will. The witches' prophecies, the floating dagger, Banquo's ghost, and Lady Macbeth's invocation of spirits all blur the boundary between natural and supernatural. Crucially, Shakespeare refuses to resolve the ambiguity: do the witches cause events or merely predict them? This deliberate uncertainty is central to the play's power.",
    evidence: [
      '"Fair is foul, and foul is fair" -- the witches establish a world of moral inversion',
      '"Is this a dagger which I see before me" -- hallucination or supernatural vision?',
      "Banquo's ghost at the banquet -- real or psychological projection?",
      '"By the pricking of my thumbs, / Something wicked this way comes" -- the witches sense Macbeth\'s evil supernaturally',
      '"none of woman born / Shall harm Macbeth" -- equivocal prophecy that deceives through literal truth',
    ],
  },
  {
    name: 'Kingship and Power',
    description:
      'The play contrasts three models of kingship. Duncan embodies the gracious, divinely appointed monarch but is fatally trusting. Macbeth rules through fear and violence, with no legitimate claim. Malcolm represents a synthesis: virtue combined with political shrewdness. The play endorses the doctrine of the Divine Right of Kings -- nature itself rebels when the legitimate king is murdered, and order is only restored when the rightful heir takes the throne.',
    evidence: [
      'Duncan is praised as a generous king but admits "There’s no art / To find the mind’s construction in the face"',
      'Macbeth\'s Scotland is a land of "sighs, and groans, and shrieks" -- tyranny destroys the nation',
      '"honour, love, obedience, troops of friends, / I must not look to have" -- Macbeth acknowledges the emptiness of illegitimate power',
      'Malcolm tests Macduff by pretending to have vices, showing political wisdom Duncan lacked',
      "Natural disturbances follow Duncan's murder -- the cosmos rebels against regicide",
    ],
  },
  {
    name: 'Appearance vs Reality',
    description:
      'The gap between appearance and reality is the play\'s foundational theme. "Fair is foul, and foul is fair." Nothing is what it seems: the witches\' prophecies appear promising but deliver destruction; Macbeth appears loyal while plotting regicide; Lady Macbeth instructs deception ("look like the innocent flower, but be the serpent under\'t"). The motif of equivocation had particular resonance after the Gunpowder Plot, when the doctrine of equivocation was exposed at trial.',
    evidence: [
      '"Fair is foul, and foul is fair" -- the witches\' motto announces universal deception',
      '"look like the innocent flower, / But be the serpent under’t" -- Lady Macbeth teaches deception',
      '"There’s no art / To find the mind’s construction in the face" -- Duncan\'s tragic inability to see through appearances',
      "The witches' prophecies are literally true but deliberately misleading (equivocation)",
      '"False face must hide what the false heart doth know" -- Macbeth accepts total duplicity',
    ],
  },
  {
    name: 'Gender and Masculinity',
    description:
      'Shakespeare interrogates ideas of masculinity throughout the play. Lady Macbeth equates manhood with violence, taunting: "When you durst do it, then you were a man." She cries "unsex me here", rejecting femininity. However, Macduff offers an alternative model: "I must also feel it as a man," insisting that genuine masculinity includes emotional depth. Macbeth himself is trapped by toxic masculinity, murdering partly to prove his manhood. Lady Macbeth\'s eventual breakdown suggests that rejecting feminine qualities comes at devastating psychological cost.',
    evidence: [
      '"unsex me here" -- Lady Macbeth rejects femininity to participate in violence',
      '"When you durst do it, then you were a man" -- masculinity weaponised to drive murder',
      '"I dare do all that may become a man; / Who dares do more is none" -- Macbeth\'s nuanced but abandoned view',
      '"I must also feel it as a man" -- Macduff\'s alternative definition of true manhood',
      "Lady Macbeth's mental collapse shows the cost of suppressing feminine compassion",
    ],
  },
]

export const CONTEXT_NOTES = `JACOBEAN ENGLAND AND THE WORLD OF MACBETH

King James I and the Scottish Connection
Macbeth was written around 1606, shortly after James VI of Scotland became James I of England in 1603, uniting the two crowns. Shakespeare crafted the play as a deliberate compliment to his new royal patron. James traced his ancestry to the historical Banquo, which explains why Shakespeare transformed Banquo from a co-conspirator in the source material (Holinshed's Chronicles) into a noble, innocent victim. The "show of eight kings" in Act 4 represents the Stuart dynasty, with the eighth king's mirror symbolically reflecting James himself.

The Gunpowder Plot (1605)
The play was written in the immediate aftermath of the Gunpowder Plot, when Catholic conspirators attempted to blow up Parliament and assassinate James I. The themes of treason, regicide, equivocation, and the violation of the sacred bond between subject and sovereign carried intense topical resonance. The Porter's reference to "an equivocator" directly alludes to the trial of the Jesuit Henry Garnet, who defended the doctrine of equivocation during his prosecution. The play's condemnation of regicide served as both political commentary and reassurance to a king who had narrowly escaped assassination.

Witchcraft and Demonology
James I had a well-documented fascination with witchcraft. In 1597 he published Daemonologie, a treatise arguing for the reality of witchcraft. He had personally interrogated accused witches during the North Berwick witch trials in 1590, where suspects confessed to raising storms to sink his ship. Shakespeare's portrayal of the witches as genuinely malevolent supernatural beings reflected and validated the king's beliefs, making the play both topical entertainment and royal flattery.

The Divine Right of Kings
Jacobean audiences widely believed that monarchs were God's appointed representatives on earth. Murdering a king was not merely a political crime but a sin against the divine order. This explains the cosmic disturbances following Duncan's murder: darkness covers the land, horses eat each other, and an owl kills a falcon. Nature rebels against the violation of God's order. The play affirms that legitimate succession and divinely sanctioned kingship will always triumph over usurped power.

The Great Chain of Being
Elizabethan and Jacobean society believed in a divinely ordered hierarchy extending from God through kings, nobles, and commoners down to animals and plants. Macbeth's regicide disrupts this entire chain, causing disorder at every level of existence. The play's resolution, with Malcolm's coronation, restores this cosmic order.

Shakespeare's Sources
Shakespeare drew primarily from Raphael Holinshed's Chronicles of England, Scotland, and Ireland (1587). He compressed events spanning decades into a tightly structured drama, changed historical details to suit his dramatic and political purposes, and invented major elements including the sleepwalking scene, the banquet ghost, and the character of Lady Macbeth as we know her.`
