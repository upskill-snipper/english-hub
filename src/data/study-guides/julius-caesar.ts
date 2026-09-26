import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Julius Caesar, William Shakespeare (1599). A SUPPLEMENT: the existing page at
 * /revision/texts/julius-caesar keeps its overview, context, themes, characters
 * and key quotations, and this file adds what it lacked - passages for close
 * reading, language analysis, structure and form, vocabulary, exam practice and
 * a model answer - plus the timeline and character map the visuals draw.
 *
 * HOW IT WAS CHECKED. The whole play was read in the byte copy of Project
 * Gutenberg #1522 held at src/data/full-texts/julius-caesar.ts, and every
 * quotation here, on the scene cards, in the extracts and inside the prose, was
 * copied from it and its speaker and scene confirmed by reading the scene, not by
 * searching for the phrase. The three extract passages were cut from the edition
 * by script rather than typed.
 *
 * ONE TRAP FOR THE NEXT EDITOR. The held edition stores each line break as a
 * literal backslash-n inside a string, and the test normalises that raw source,
 * so the "n" fuses with the next word. A quotation that runs across a line of
 * the edition therefore fails the test even when it is word-perfect. Verse
 * quotations here are split at their line breaks with " / ", which is the
 * convention anyway; prose quotations (Brutus in the Forum) are kept inside one
 * line of the edition, or quoted as two separate phrases.
 *
 * WHAT IT DOES NOT CLAIM. Why Portia's death is reported twice in Act 4 Scene 3
 * could not be sourced, so the guide describes the repetition and offers
 * readings of it, and no textual theory. Sources disagree on whether Shakespeare
 * coined the Latin "Et tu, Brute?", so the guide says only what they agree on:
 * no ancient historian records those words.
 *
 * SECOND PASS (25 September 2026). Every quotation was re-located by script to
 * its speaker and scene and checked character for character against the
 * edition, and the history was re-read in Plutarch and Suetonius themselves.
 * Four things were wrong and are fixed: the exam tip said Plutarch has Caesar
 * say nothing, when Plutarch has him cry out to Casca and reports no words to
 * Brutus; the prose-and-verse section said the citizens speak prose, when in
 * the Forum they speak verse; the scene card dropped the edition's dash from
 * "Et tu, Brute?" and its "Then fall, Caesar!"; and the acknowledgement said
 * "first performed in 1599", which is stronger than the evidence, a single
 * playgoer's record of September 1599.
 *
 * THIRD PASS (26 September 2026), an adversarial re-check: all 213 quoted
 * spans re-located by an independent script to speaker and scene, and the
 * three extracts confirmed as unbroken runs of the edition. No quotation was
 * wrong. What was wrong was the prose around them: "Caesar speaks in only three
 * scenes" (the Ghost speaks in Act 4 Scene 3); "Brutus has the soliloquies"
 * (Cassius and Antony have them too, as this guide itself says); a soothsayer
 * who "calls out twice from the crowd" (the second time he is brought before
 * Caesar); "every decision" in the orchard ruining the conspiracy (only sparing
 * Antony does); "honourable" said to follow a fact every time (its first use
 * follows none, and Caesar's tears are a claim, not a fact); and augurers who
 * "report" a line their servant speaks.
 */
export const guide: StudyGuide = {
  slug: 'julius-caesar',
  title: 'Julius Caesar',
  author: 'William Shakespeare',
  form: 'play',
  scope:
    "The whole play, as AQA sets it for GCSE English Literature: five acts, eighteen scenes in this guide's edition. The exam prints one extract and asks about it and then about the play as a whole. Line numbers differ between editions, so every passage here is located by act and scene and by its opening and closing words.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      "Written by 1599, when a Swiss visitor recorded seeing a play about Julius Caesar at a Bankside theatre on 21 September, and first printed in the First Folio of 1623; out of copyright. Quotations follow the modern-spelling Project Gutenberg edition (eBook #1522), which spells Caesar's wife Calphurnia; many school editions, and this guide's own prose, spell her Calpurnia.",
  },

  native: {
    overview: '/revision/texts/julius-caesar',
    context: '/revision/texts/julius-caesar',
    themes: '/revision/texts/julius-caesar',
    characters: '/revision/texts/julius-caesar',
    keyQuotes: '/revision/texts/julius-caesar',
  },

  extracts: [
    {
      title: "Brutus's orchard soliloquy",
      where: 'Act 2, Scene 1',
      pointer:
        'Near the start of the scene, just after Brutus sends Lucius to light a taper in his study: from “It must be by his death” to “And kill him in the shell.”',
      text: 'It must be by his death: and for my part, / I know no personal cause to spurn at him, / But for the general. He would be crown’d: / How that might change his nature, there’s the question. / It is the bright day that brings forth the adder, / And that craves wary walking. Crown him?—that; / And then, I grant, we put a sting in him, / That at his will he may do danger with. / Th’ abuse of greatness is, when it disjoins / Remorse from power; and, to speak truth of Caesar, / I have not known when his affections sway’d / More than his reason. But ’tis a common proof, / That lowliness is young ambition’s ladder, / Whereto the climber-upward turns his face; / But when he once attains the upmost round, / He then unto the ladder turns his back, / Looks in the clouds, scorning the base degrees / By which he did ascend. So Caesar may; / Then lest he may, prevent. And since the quarrel / Will bear no colour for the thing he is, / Fashion it thus: that what he is, augmented, / Would run to these and these extremities: / And therefore think him as a serpent’s egg / Which hatch’d, would, as his kind grow mischievous; / And kill him in the shell.',
      annotations: [
        {
          phrase: 'It must be by his death',
          note: 'The soliloquy opens with its verdict and only then looks for reasons. One reading is that Brutus has decided before he has argued, so what follows is self-persuasion; the more generous reading is that he is testing a conclusion he dreads.',
        },
        {
          phrase: 'I know no personal cause to spurn at him',
          note: 'An honest and damning admission: he has no private grievance, only “the general”, the public good. The audience has to decide whether killing a friend for a principle is nobler than killing an enemy for a grudge, or colder.',
        },
        {
          phrase: 'How that might change his nature',
          note: 'The whole case rests on “might”. Brutus is not answering what Caesar has done but what a crown could make him, and the modal verb exposes how thin the evidence is.',
        },
        {
          phrase: 'It is the bright day that brings forth the adder',
          note: 'The first of the serpent images that frame the speech. Like a snake coaxed out by sunshine, power would draw out the danger in Caesar; the proverb-like line makes a guess sound like common sense.',
        },
        {
          phrase: 'I have not known when his affections sway’d / More than his reason',
          note: 'Brutus concedes that Caesar has never let passion overrule judgement. The evidence points the other way, so he turns from Caesar the man to “a common proof”, a general rule about all ambitious men.',
        },
        {
          phrase: 'That lowliness is young ambition’s ladder',
          note: 'An extended metaphor: humility is a ladder the climber scorns once he reaches the top. It is ironic in hindsight, because in Act 3 Scene 2 the crowd tries to put Brutus himself on that ladder, and one citizen cries “Let him be Caesar.”',
        },
        {
          phrase: 'So Caesar may; / Then lest he may, prevent.',
          note: 'The repeated “may” compresses the argument into a pre-emptive strike: kill him in case. The clipped rhythm after a long sentence sounds decisive, which hides how speculative the reasoning is.',
        },
        {
          phrase: 'Fashion it thus',
          note: 'Brutus admits the argument must be shaped, because “the quarrel / Will bear no colour for the thing he is”: Caesar as he is gives no excuse. He speaks like a craftsman working on a case rather than a judge weighing one.',
        },
        {
          phrase: 'think him as a serpent’s egg',
          note: 'The imperative “think” is addressed to himself: he chooses to see Caesar this way. Killing him “in the shell” makes murder sound like prevention, and the image of an unhatched danger lets Brutus avoid picturing the living man.',
        },
      ],
      question:
        "Starting with this extract, explore how Shakespeare presents Brutus's decision to kill Caesar. Write about: how Shakespeare presents Brutus's thinking in this extract; how Shakespeare presents Brutus's reasons, and what comes of them, in the play as a whole.",
    },
    {
      title: 'Calpurnia begs Caesar to stay at home',
      where: 'Act 2, Scene 2',
      pointer:
        "From Calpurnia's entrance, “What mean you, Caesar? Think you to walk forth?”, to Caesar's “Will come when it will come.”, just before the servant returns from the augurers.",
      text: 'CALPHURNIA / What mean you, Caesar? Think you to walk forth? / You shall not stir out of your house today. / CAESAR / Caesar shall forth. The things that threaten’d me / Ne’er look’d but on my back; when they shall see / The face of Caesar, they are vanished. / CALPHURNIA / Caesar, I never stood on ceremonies, / Yet now they fright me. There is one within, / Besides the things that we have heard and seen, / Recounts most horrid sights seen by the watch. / A lioness hath whelped in the streets, / And graves have yawn’d, and yielded up their dead; / Fierce fiery warriors fight upon the clouds / In ranks and squadrons and right form of war, / Which drizzled blood upon the Capitol; / The noise of battle hurtled in the air, / Horses did neigh, and dying men did groan, / And ghosts did shriek and squeal about the streets. / O Caesar, these things are beyond all use, / And I do fear them! / CAESAR / What can be avoided / Whose end is purpos’d by the mighty gods? / Yet Caesar shall go forth; for these predictions / Are to the world in general as to Caesar. / CALPHURNIA / When beggars die, there are no comets seen; / The heavens themselves blaze forth the death of princes. / CAESAR / Cowards die many times before their deaths; / The valiant never taste of death but once. / Of all the wonders that I yet have heard, / It seems to me most strange that men should fear, / Seeing that death, a necessary end, / Will come when it will come.',
      annotations: [
        {
          phrase: 'You shall not stir out of your house today.',
          note: 'In private Calpurnia gives orders, and her “shall” is as firm as any in the play. The scene shows a household where the most powerful man in Rome can be commanded, for a moment, by his wife.',
        },
        {
          phrase: 'Caesar shall forth.',
          note: 'Caesar answers her “shall” with his own, and speaks of himself in the third person. The husband replies as a public monument, which is the gap between private man and public name that the whole scene explores.',
        },
        {
          phrase: 'Ne’er look’d but on my back',
          note: 'Caesar boasts that threats only ever come at him from behind and vanish when they see his face. It is bitter dramatic irony: in Act 5 Scene 1 Antony recalls that Casca, “like a cur, behind / Struck Caesar on the neck.”',
        },
        {
          phrase: 'Caesar, I never stood on ceremonies',
          note: 'She has never believed in omens before, so her fear carries weight. The play keeps showing sceptics turned believers: Cassius says Caesar has grown superstitious, and at Philippi Cassius himself begins to credit signs.',
        },
        {
          phrase: 'Fierce fiery warriors fight upon the clouds',
          note: 'The harsh alliteration of the repeated f sound makes the vision loud and violent. Armies fighting in the sky are a picture of civil war, which is exactly what the murder will bring down on Rome by Act 5.',
        },
        {
          phrase: 'Which drizzled blood upon the Capitol',
          note: 'Blood falling on the Capitol, where the Senate sits, foreshadows the murder there. Later in this scene Caesar reports that she dreamt his statue ran with blood, and the play keeps returning to that image.',
        },
        {
          phrase: 'What can be avoided / Whose end is purpos’d by the mighty gods?',
          note: 'A fatalist argument used as courage: if the gods have decided, fear is pointless. Yet he adds at once that the omens apply to the whole world as much as to him, which sounds more like denial than faith.',
        },
        {
          phrase: 'When beggars die, there are no comets seen',
          note: 'Calpurnia argues from hierarchy: the heavens announce only the deaths of princes, so these signs must be about Caesar. It is a flattering argument meant to frighten him, and it fails where Decius, minutes later, succeeds with flattery meant to reassure him.',
        },
        {
          phrase: 'Cowards die many times before their deaths',
          note: 'A balanced antithesis with the ring of a proverb, setting cowards against the valiant. It is the heroic Caesar speaking, and his own sentence works against him, because he is walking towards his death while calling fear foolish.',
        },
      ],
      question:
        'Starting with this extract, explore how Shakespeare presents Caesar as both powerful and vulnerable. Write about: how Shakespeare presents Caesar in this extract; how Shakespeare presents Caesar in the play as a whole.',
    },
    {
      title: "The opening of Antony's funeral speech",
      where: 'Act 3, Scene 2',
      pointer:
        "After Brutus has spoken and left the Forum: from Antony's “Friends, Romans, countrymen, lend me your ears;” to “And I must pause till it come back to me.”",
      text: 'Friends, Romans, countrymen, lend me your ears; / I come to bury Caesar, not to praise him. / The evil that men do lives after them, / The good is oft interred with their bones; / So let it be with Caesar. The noble Brutus / Hath told you Caesar was ambitious. / If it were so, it was a grievous fault, / And grievously hath Caesar answer’d it. / Here, under leave of Brutus and the rest, / For Brutus is an honourable man, / So are they all, all honourable men, / Come I to speak in Caesar’s funeral. / He was my friend, faithful and just to me; / But Brutus says he was ambitious, / And Brutus is an honourable man. / He hath brought many captives home to Rome, / Whose ransoms did the general coffers fill: / Did this in Caesar seem ambitious? / When that the poor have cried, Caesar hath wept; / Ambition should be made of sterner stuff: / Yet Brutus says he was ambitious; / And Brutus is an honourable man. / You all did see that on the Lupercal / I thrice presented him a kingly crown, / Which he did thrice refuse. Was this ambition? / Yet Brutus says he was ambitious; / And sure he is an honourable man. / I speak not to disprove what Brutus spoke, / But here I am to speak what I do know. / You all did love him once, not without cause; / What cause withholds you then to mourn for him? / O judgement, thou art fled to brutish beasts, / And men have lost their reason. Bear with me. / My heart is in the coffin there with Caesar, / And I must pause till it come back to me.',
      annotations: [
        {
          phrase: 'Friends, Romans, countrymen, lend me your ears',
          note: "A tricolon that rearranges Brutus's opening, “Romans, countrymen, and lovers”: Antony puts “Friends” first, the personal before the civic. The request to “lend me your ears” is modest: it asks only for a hearing.",
        },
        {
          phrase: 'I come to bury Caesar, not to praise him.',
          note: 'Antony promises not to praise Caesar and then does nothing else. Saying you will not do something while doing it lets him praise the dead man without seeming to break the terms Brutus set.',
        },
        {
          phrase: 'The evil that men do lives after them',
          note: 'A general truth that sounds fair-minded, even sad. It also plants the idea of evil that outlives its doers, and by the end of the speech the crowd applies it to the conspirators rather than to Caesar.',
        },
        {
          phrase: 'For Brutus is an honourable man',
          note: 'The first of ten times Antony uses “honourable” in this scene. Here it sounds like courtesy; placed again and again after evidence against Brutus, it drains of meaning until a citizen throws it back: “Honourable men!”',
        },
        {
          phrase: 'Whose ransoms did the general coffers fill',
          note: 'Antony answers the charge of ambition with evidence: the money Caesar won went into the public treasury. It is one of the few moments that argue from fact rather than feeling, and it prepares the crowd to hear the will.',
        },
        {
          phrase: 'When that the poor have cried, Caesar hath wept',
          note: 'Addressed to a crowd of ordinary citizens, this presents Caesar as the friend of the poor. It is an appeal to feeling with no evidence behind it, set right beside the evidence of the ransoms so that the two seem equally solid.',
        },
        {
          phrase: 'Which he did thrice refuse. Was this ambition?',
          note: "A rhetorical question that lets the crowd reach the answer themselves. Compare Casca's account of the same refusal in Act 1 Scene 2, where he thought Caesar “would fain have had” the crown: Antony tells only the part that helps him.",
        },
        {
          phrase: 'O judgement, thou art fled to brutish beasts',
          note: 'An apostrophe to judgement that accuses the crowd of losing their reason while he works on their feelings. The adjective “brutish” can be heard as a pun on Brutus, an insult hidden inside a lament.',
        },
        {
          phrase: 'My heart is in the coffin there with Caesar',
          note: 'Grief turned into stagecraft. The pause hands the crowd a silence to fill, and they fill it with his conclusions: one citizen decides that Caesar “has had great wrong”, another that “There’s not a nobler man in Rome than Antony.”',
        },
      ],
      question:
        "Starting with this extract, explore how Shakespeare presents Antony as a persuasive speaker. Write about: how Shakespeare presents Antony's speech in this extract; how Shakespeare presents Antony in the play as a whole.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Repetition that turns into irony',
      example:
        "Antony's “Brutus is an honourable man” and its variations, Act 3 Scene 2: “honourable” comes ten times in his speeches to the crowd.",
      effect:
        "After its first, courteous use, the phrase keeps returning straight after something that undercuts Brutus's charge (the ransoms, Caesar's tears for the poor, the refused crown), so the word “honourable” is gradually emptied until it means its opposite. Antony never calls Brutus a liar; the audience on stage draws the conclusion, and one citizen shouts it: “They were traitors. Honourable men!” The technique lets Antony keep his promise not to blame the conspirators while destroying them.",
    },
    {
      technique: 'Antithesis and balanced prose',
      example:
        'Brutus in the Forum, Act 3 Scene 2: he rose against Caesar “Not that I loved Caesar less,” but because he loved Rome more; and “but, as he was ambitious, I slew him”.',
      effect:
        'Brutus sets clause against clause, a virtue against a response, until the killing sounds like the result of a calculation. The symmetry is persuasive for a few minutes, but it is abstract, and the crowd shows it has missed his point when one citizen cries “Let him be Caesar.” The balance that sounds so reasonable to Brutus leaves the people nothing to feel.',
    },
    {
      technique: 'Illeism (a speaker referring to himself in the third person)',
      example:
        'Caesar: “Caesar shall forth” (Act 2 Scene 2); “always I am Caesar” (Act 1 Scene 2); “Danger knows full well / That Caesar is more dangerous than he” (Act 2 Scene 2).',
      effect:
        'Caesar talks about “Caesar” as though the name were a monument he stands beside. Shakespeare sets that grand public self against a frail body: in the same breath as “always I am Caesar” he asks Antony to stand on his right side, “for this ear is deaf”. The gap between the name and the man is the gap the conspirators exploit, and after his death the name outlives the man.',
    },
    {
      technique: 'Animal imagery',
      example:
        'Cassius: “he would not be a wolf, / But that he sees the Romans are but sheep” (Act 1 Scene 3). Brutus: “Let’s carve him as a dish fit for the gods, / Not hew him as a carcass fit for hounds” (Act 2 Scene 1). Antony: “Here wast thou bay’d, brave hart” (Act 3 Scene 1).',
      effect:
        'Each speaker uses animals to decide who is predator and who is prey. Cassius makes Caesar a wolf and the Romans sheep, so rebellion becomes self-respect. Brutus wants a clean sacrifice, not butchery. Antony turns the same killing into a hunt, with Caesar as a noble deer and the conspirators as hunters, and by Act 5 Scene 1 he is calling them apes and hounds: “You show’d your teeth like apes, and fawn’d like hounds”.',
    },
    {
      technique: 'Blood imagery and a dream that comes true',
      example:
        "Calpurnia's dream, reported by Caesar, of his statue that “Did run pure blood” (Act 2 Scene 2); Brutus's “let us bathe our hands in Caesar’s blood” (Act 3 Scene 1); Antony's picture of Pompey's statue, “Which all the while ran blood” (Act 3 Scene 2).",
      effect:
        "Decius reads the dream as a promise that Rome will draw “Reviving blood” from Caesar. The play makes the dream literal and horrible: the conspirators do bathe their hands in his blood, meaning it as a sacred rite, and Antony then shows the crowd the blood as evidence of murder. The same image is claimed by each side, which is the play's method in miniature.",
    },
    {
      technique: 'Apophasis (saying you will not say something, while saying it)',
      example:
        'Antony: “I come to bury Caesar, not to praise him”; of the will, “Which, pardon me, I do not mean to read”; and “I am no orator, as Brutus is” (Act 3 Scene 2).',
      effect:
        'Every refusal makes the crowd want more. Holding back the will turns it into something they demand, so when he reads it they believe it was their idea. Claiming to be no orator in one of the most skilful speeches in the play disarms suspicion: a man who says he cannot persuade is harder to resist.',
    },
    {
      technique: 'Personified wounds',
      example:
        'Antony over the body: wounds “like dumb mouths do ope their ruby lips” (Act 3 Scene 1); in the Forum, he wishes he could “put a tongue / In every wound of Caesar” (Act 3 Scene 2).',
      effect:
        "Antony presents himself as nothing more than the voice of the dead man's body. If the wounds are mouths, his speech is their testimony rather than his argument. It is a way of disguising rhetoric as evidence, and it is why he stops talking and shows the body.",
    },
    {
      technique: 'Pathetic fallacy and contested portents',
      example:
        'Casca in the storm: “Either there is a civil strife in heaven,” and he has never before gone “through a tempest dropping fire” (Act 1 Scene 3).',
      effect:
        'The storm mirrors the political violence to come, but Shakespeare shows each character reading it differently. Casca sees a warning from the gods; Cassius sees a picture of Caesar, “Most like this dreadful night”; Cicero observes that “men may construe things after their fashion”. The weather is a sign, and the scene is about who gets to say what it means.',
    },
    {
      technique: 'Puns and wordplay',
      example:
        'Cassius: “Now is it Rome indeed, and room enough” (Act 1 Scene 2). Antony: “O world, thou wast the forest to this hart; / And this indeed, O world, the heart of thee” (Act 3 Scene 1). The cobbler is “a mender of bad soles” (Act 1 Scene 1).',
      effect:
        "The wordplay does different work in different mouths. Cassius's Rome and room turns a city of free men into an empty space with room for one. Antony's hart and heart makes Caesar both the hunted deer and the centre of the world. The cobbler's soles and souls lets a working man run rings round the tribunes, a first sign that the crowd is harder to control than its rulers think.",
    },
    {
      technique: 'Rhetorical questions',
      example:
        'Brutus: “Who is here so base, that would be a bondman?” (Act 3 Scene 2). Antony: “Did this in Caesar seem ambitious?” (Act 3 Scene 2).',
      effect:
        "Brutus's questions leave no room to answer, since anyone who objects names himself base, and the citizens duly reply “None, Brutus, none.” Antony's questions invite the crowd to answer for themselves. One kind closes thinking down; the other steers it, and Shakespeare lets us watch which is more dangerous.",
    },
    {
      technique: 'Dramatic irony',
      example:
        'Caesar calls himself “constant as the northern star” moments before he is stabbed (Act 3 Scene 1); Brutus, dying, says “I found no man but he was true to me” (Act 5 Scene 5).',
      effect:
        "The audience knows what the speaker does not, or will not, see. Caesar's boast of being unmovable comes as the conspirators kneel around him to strike. Brutus's dying pride in his friends' loyalty is sincere, yet it comes from the man who was not true to Caesar, which is exactly the kind of doubleness the play asks us to hold.",
    },
  ],

  structureForm: [
    {
      heading: 'A tragedy that kills its title character halfway through',
      body: "Caesar speaks as a living man in only three scenes (Act 1 Scene 2, Act 2 Scene 2, Act 3 Scene 1) and is dead before the middle of the play; after that he speaks only as the ghost in Act 4 Scene 3. The second half belongs to his name and his ghost. That shape proves Brutus wrong. In the orchard he wishes the conspirators could kill Caesar's spirit without spilling blood: “We all stand up against the spirit of Caesar, / And in the spirit of men there is no blood.” They kill the body, and the spirit is what survives: at Philippi Brutus admits “Thy spirit walks abroad”. The structure itself argues that you cannot kill an idea with a dagger.",
    },
    {
      heading: 'Whose tragedy? Brutus as tragic hero',
      body: 'The title names Caesar, but Brutus has the orchard soliloquy in which he debates with himself, the private scenes with Portia and Lucius, the inner conflict (“poor Brutus, with himself at war”) and the final tribute. His flaw is bound up with his virtue: he trusts that others are as principled as he is, so he spares Antony, lets him speak, and speaks first and leaves. The most convincing reading makes Brutus the tragic hero, a good man whose goodness is politically disastrous. The alternative is worth making: the play could be the tragedy of Rome itself, a republic that destroys what it tries to save, since the last word goes not to Brutus but to Octavius.',
    },
    {
      heading: 'Rise, turning point and fall',
      body: 'Acts 1 and 2 build the conspiracy through night scenes, a storm and secret meetings. Act 3 is the turning point: the murder, then the Forum, where the crowd turns in the space of one speech. Acts 4 and 5 are the falling action, and the settings tell the story: the play moves from the streets and Senate of Rome to a room where names are marked for death, a tent near Sardis and a battlefield at Philippi. The conspirators set out to save Rome; by Act 4 none of them is in it.',
    },
    {
      heading: 'Prose and verse',
      body: "Most of the play is blank verse, but Shakespeare uses prose with purpose: for the cobbler's jokes in Act 1 Scene 1, for Casca's sour report of the crown in Act 1 Scene 2, and for most of Act 3 Scene 3, where the citizens question Cinna the poet and turn on him. (In the Forum the citizens mostly speak verse, so do not claim that the crowd always speaks prose.) The sharpest contrast is in Act 3 Scene 2. Brutus, usually a speaker of verse, addresses the crowd in prose; Antony, who calls himself “a plain blunt man”, answers in verse. One reading is that Brutus's prose is plain reason offered to the people. A stronger one notices how patterned it is, clause balanced against clause: it is not plain but cool, and Antony's verse, full of pauses and appeals, is the warmer and more dangerous music.",
    },
    {
      heading: 'The Forum: who speaks last',
      body: 'The order of the two speeches is the plot. Cassius warns Brutus not to let Antony speak; Brutus decides he will go into the pulpit first, and then asks the crowd to stay for Antony, “not a man depart, / Save I alone, till Antony have spoke.” By leaving, he gives Antony the last word and an audience with no one to answer him. Shakespeare shows the mistake being made in Act 3 Scene 1, so the audience watches the Forum scene knowing what Brutus does not.',
    },
    {
      heading: 'Omens that come true, and omens that are read',
      body: "The play is structured by warnings that land. The Soothsayer's “Beware the Ides of March” returns on the day itself: “The Ides of March are come.” / “Ay, Caesar; but not gone.” That exchange is not Shakespeare's invention: Plutarch's life of Caesar tells it almost exactly, with the seer answering that the day has come but has not gone. Calpurnia's dream of the bleeding statue comes true in the conspirators' bloody hands. The ghost promises “thou shalt see me at Philippi”, and at Philippi Cassius sees “ravens, crows, and kites” where eagles had followed his army. Yet every omen is also argued over, so the structure leaves the question open: the warnings come true, but each disaster follows a human choice.",
    },
    {
      heading: 'Compressed time',
      body: "Caesar was killed in 44 BC, and the two battles of Philippi were fought on 3 and 23 October 42 BC. Shakespeare turns the two and a half years between them into Acts 4 and 5 and fights both battles in a single day: after Cassius's death Brutus says “’Tis three o’clock; and Romans, yet ere night / We shall try fortune in a second fight.” Act 3 is compressed the same way. The murder, both funeral speeches, the reading of the will and the news that “Octavius is already come to Rome” all fall on one day. The compression makes the collapse feel like one continuous consequence of the murder, rather than the slow politics it was.",
    },
    {
      heading: 'Echoes and mirrors at the end',
      body: "The deaths of Act 5 replay the murder. Cassius dies on “this good sword, / That ran through Caesar’s bowels”, saying “Caesar, thou art reveng’d”. Titinius dies with Cassius's sword. Brutus runs on his own sword while Strato holds it, addressing Caesar as he dies: “Caesar, now be still”. The repetition of Caesar's name at each death makes the ending read as the murder undone, one conspirator at a time.",
    },
    {
      heading: 'Soliloquy, aside and the audience as insider',
      body: "Shakespeare lets the audience know more than the characters. Cassius's soliloquy at the end of Act 1 Scene 2 (“Well, Brutus, thou art noble; yet I see”) shows him planning to work on Brutus. Brutus's aside as Caesar calls them all friends (“That every like is not the same, O Caesar”) shows his grief. Above all, Antony's soliloquy over the body in Act 3 Scene 1 reveals his intention to raise civil war before he says a word in the Forum, so every protest there, such as “I come not, friends, to steal away your hearts”, reaches the audience as irony.",
    },
    {
      heading: "Portia's death, told twice",
      body: "In Act 4 Scene 3 Brutus tells Cassius that Portia is dead. Minutes later Messala brings the news, and Brutus answers as though hearing it for the first time: “Why, farewell, Portia. We must die, Messala.” Why the text repeats the news is a puzzle this guide cannot settle. On stage, the second telling shows Brutus performing composure for his officers, and they praise it: “Even so great men great losses should endure.” Cassius's reply is the more human response: “But yet my nature could not bear it so.” Either way, the scene shows the cost of a man who has made his private grief a public example.",
    },
    {
      heading: 'Rhyming couplets that close a scene',
      body: "Shakespeare often ends a scene with a rhyming couplet, which gives a sense of a door shutting. Cassius closes Act 1 Scene 2 with a threat: “And after this, let Caesar seat him sure, / For we will shake him, or worse days endure.” The play ends with Octavius's couplet, “So call the field to rest, and let’s away, / To part the glories of this happy day.” After so many deaths, “happy day” is chilling, and giving the last lines to the young Octavius rather than to any defender of the republic says something about who has won.",
    },
  ],

  vocabulary: [
    {
      term: 'Ides',
      definition:
        'In the Roman calendar, the Ides fell on the 15th of March, May, July and October. Caesar was killed on the Ides of March, 44 BC. The ancient historian Suetonius names the seer who warned him as Spurinna; Shakespeare leaves his Soothsayer unnamed.',
    },
    {
      term: 'Lupercal (the feast of Lupercal)',
      definition:
        'A Roman festival held on 15 February. Runners carried strips of hide, and a barren woman struck by them was believed to become able to bear children, which is why Caesar asks Antony to touch Calpurnia in the race. At the Lupercal of 44 BC Antony offered Caesar a crown, which Caesar refused.',
    },
    {
      term: 'Soothsayer',
      definition:
        "Someone who claims to foretell the future. The play's Soothsayer warns Caesar twice in Act 1 Scene 2 and again, briefly, on the day itself in Act 3 Scene 1.",
    },
    {
      term: 'Augurers',
      definition:
        "Roman priests who read the will of the gods from signs, especially the behaviour of birds. In Act 2 Scene 2 Caesar's augurers examine a sacrificed animal, and his servant brings back their finding: “They could not find a heart within the beast.”",
    },
    {
      term: 'Portent, prodigy',
      definition:
        "An unnatural event taken as a warning of disaster. Casca calls the night's wonders “portentous things” and “these prodigies”; Cassius argues that they are warnings about Caesar.",
    },
    {
      term: 'Tribune',
      definition:
        "An official elected to protect the common people of Rome. Flavius and Marullus, the tribunes of Act 1 Scene 1, are later “put to silence” for pulling decorations off Caesar's statues.",
    },
    {
      term: 'Plebeians',
      definition:
        'The common people of Rome. The edition used here heads their lines Citizens; they are the audience that Brutus and Antony compete for in the Forum.',
    },
    {
      term: 'Bondman',
      definition:
        'A slave, or a servant bound to a master. Brutus uses the word to make objection impossible: “Who is here so base, that would be a bondman?”',
    },
    {
      term: 'Enfranchisement',
      definition:
        "Being set free, or given back a citizen's rights. Cassius kneels to beg it for the banished Publius Cimber, and after the murder urges some of the conspirators to the public pulpits to cry “Liberty, freedom, and enfranchisement”.",
    },
    {
      term: 'Colossus',
      definition:
        "A giant statue. The Colossus of Rhodes, a bronze statue of the sun god Helios and one of the Seven Wonders of the ancient world, was imagined in medieval legend standing astride a harbour, and that is the picture behind Cassius's Caesar who “doth bestride the narrow world / Like a Colossus”.",
    },
    {
      term: 'Falling-sickness',
      definition:
        "An old name for epilepsy. When Casca reports that Caesar collapsed, Brutus says “he hath the falling-sickness”, and Cassius turns it into a political joke: it is he, Brutus and Casca who have it, because they are falling under Caesar's power.",
    },
    {
      term: 'Constancy',
      definition:
        'Firmness of mind and purpose. Caesar claims to be “constant as the northern star”; Portia gives herself a wound as “strong proof of my constancy”; Brutus steadies a panicking Cassius with “be constant”. Each claims the same virtue for a different end.',
    },
    {
      term: 'Epicurus',
      definition:
        'A Greek philosopher whose followers taught that the gods do not interfere in human lives, so omens mean nothing. At Philippi Cassius admits “I held Epicurus strong” but now partly believes the signs.',
    },
    {
      term: 'Havoc',
      definition:
        "To cry havoc was to give an army the order to plunder. When Antony imagines Caesar's spirit crying havoc, he means a war with no restraint at all.",
    },
    {
      term: 'Ate',
      definition:
        "The Greek personification of delusion, recklessness and ruin. Antony pictures Caesar's spirit “With Ate by his side come hot from Hell”, so revenge arrives with madness as its companion.",
    },
    {
      term: 'Oration',
      definition:
        "A formal public speech. Before the funeral Antony tells Octavius's servant that he will test the people “In my oration”, which suggests the speech was planned as an experiment, not poured out in grief.",
    },
    {
      term: 'Mantle',
      definition:
        "A cloak. In the Forum Antony holds up Caesar's mantle, remembers that he first wore it “That day he overcame the Nervii”, and points to the holes the daggers made.",
    },
    {
      term: 'Nervii',
      definition:
        "One of the most powerful tribes of the Belgae in northern Gaul, defeated by Caesar in 57 BC at the battle of the Sabis. Antony links the cloak to a famous victory so that its tears become wounds to Rome's glory.",
    },
    {
      term: "Proscription, prick'd",
      definition:
        "A proscription is an official list of people condemned to death. In Act 4 Scene 1 the new rulers mark names on such a list, “their names are prick’d”, and later Messala reports that a hundred senators have been put to death by it (Brutus's letters say seventy), Cicero among them.",
    },
    {
      term: 'Triumvirate',
      definition:
        'Rule by three men. The word is not in the play, but it names the partnership of Antony, Octavius and Lepidus in Acts 4 and 5, which historians call the Second Triumvirate; Antony describes “The three-fold world divided”.',
    },
    {
      term: 'Tarquin',
      definition:
        'A king of Rome whom, Brutus says, his ancestors drove out of the city: “My ancestors did from the streets of Rome / The Tarquin drive, when he was call’d a king.” Cassius plays on the same family memory in Act 1 Scene 2 with “There was a Brutus once”.',
    },
    {
      term: 'Hinds',
      definition:
        'Female deer. Cassius claims Caesar “were no lion, were not Romans hinds”: a tyrant exists only because his people are timid.',
    },
    {
      term: 'Soliloquy',
      definition:
        "A speech made alone on stage, letting the audience hear a character's thoughts: Brutus in the orchard (Act 2 Scene 1), Antony over Caesar's body (Act 3 Scene 1).",
    },
    {
      term: 'Aside',
      definition:
        "A line the audience hears but other characters on stage do not, such as Brutus's grieving aside when Caesar says they will go together “like friends” (Act 2 Scene 2).",
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "Read Act 1 Scene 2 from Cassius's “Why, man, he doth bestride the narrow world” to “As easily as a king!”. At this point in the play Cassius is trying to persuade Brutus that Caesar has grown too powerful. Starting with this extract, explore how Shakespeare presents Cassius as a manipulator. Write about: how Shakespeare presents Cassius in this extract; how Shakespeare presents Cassius in the play as a whole.",
        skill: 'Extract analysis and whole-play argument: a character and his methods',
        guidance: [
          'Open with a view, not a summary: Cassius is a brilliant persuader whose methods are manipulative, but whose motives the play complicates, since he loves Brutus and believes in the republic.',
          "Analyse the Colossus image: Caesar made monstrous and his rivals “petty men” who “peep about / To find ourselves dishonourable graves”. Say how the hyperbole works on Brutus's pride.",
          "Look at the game with names, “Write them together, yours is as fair a name”, and the appeal to ancestry, “There was a Brutus once”. Cassius flatters Brutus by making him Caesar's equal and his ancestor's heir.",
          'Move to the whole play: his soliloquy at the end of this scene (“For who so firm that cannot be seduc’d?”) and the letters in several handwritings; how he reads the storm in Act 1 Scene 3 as a picture of Caesar.',
          'Show how the manipulator is himself overruled: Brutus rejects his advice on Antony, on the funeral and on Philippi. Use the quarrel in Act 4 Scene 3, where he offers Brutus his dagger and his breast, to show the feeling beneath the strategy.',
          "End with a judgement: is Cassius the play's villain, or the clearest-sighted politician in it? His death, misreading the battlefield, is a final irony for a man who saw through everyone else.",
        ],
      },
      {
        question:
          "Read Act 4 Scene 3 from “That you have wrong’d me doth appear in this:” to “He’ll think your mother chides, and leave you so.” At this point in the play Brutus and Cassius are quarrelling in Brutus's tent. Starting with this extract, explore how Shakespeare presents the relationship between Brutus and Cassius. Write about: how Shakespeare presents their relationship in this extract; how Shakespeare presents their relationship in the play as a whole.",
        skill: 'Extract analysis and whole-play argument: a relationship',
        guidance: [
          "State your argument: the quarrel exposes the difference between Brutus's principles and Cassius's practicality, and also the love that holds them together.",
          "Analyse Brutus's accusations, the “itching palm” and his reminder “Remember March, the Ides of March remember”: he uses the murder as a moral standard that the conspirators must now live up to.",
          "Analyse Cassius's turn from anger to grief: “There is my dagger, / And here my naked breast”. His offer to be killed like Caesar shows how far their relationship is still defined by the murder.",
          "Track the reconciliation: “Give me your hand.” / “And my heart too.” Then show how the revelation of Portia's death, which comes soon after the extract ends, reframes Brutus's harshness: “O Cassius, I am sick of many griefs.”",
          "Move to the whole play: Cassius working on Brutus in Act 1 Scene 2; Brutus overruling him in Act 2 Scene 1 and Act 3 Scene 1; the decision to march to Philippi later in this scene; their farewell in Act 5 Scene 1 and Brutus's tribute, “The last of all the Romans”.",
          'Conclude on what the relationship shows: in this play, friendship cannot survive politics, and politics cannot do without friendship.',
        ],
      },
      {
        question:
          "Read Act 3 Scene 2 from Brutus's “Be patient till the last.” to the Third Citizen's “Let him be Caesar.” At this point in the play Brutus is explaining to the people why Caesar was killed. Starting with this extract, explore how Shakespeare presents the power of public speech. Write about: how Shakespeare presents Brutus's speech in this extract; how Shakespeare presents persuasion and its effects in the play as a whole.",
        skill: 'Extract analysis and whole-play argument: an idea',
        guidance: [
          'Begin with a thesis: the play shows public speech as the real power in Rome, and shows that the most honest speaker is not the most effective one.',
          "Analyse Brutus's appeal to his own character (“Believe me for mine honour”), his balanced prose and his rhetorical questions (“Who is here so base, that would be a bondman?”). Say why this works on the crowd for a time.",
          "Use the crowd's responses as evidence. They shout “Live, Brutus! live, live!” and want to “Give him a statue with his ancestors”; then “Let him be Caesar” shows they have cheered the speaker without understanding the cause. Brutus killed a man to stop Rome having a Caesar, and the crowd offers to make him one, which is the danger he has not seen.",
          "Compare Antony's speech that follows, his verse, his repetition of “honourable”, the cloak and the will. Explain why feeling and spectacle defeat Brutus's abstract argument.",
          'Follow persuasion across the play: Marullus shaming the crowd in Act 1 Scene 1, Cassius persuading Brutus, Decius flattering Caesar to the Capitol, and the mob that turns on Cinna the poet in Act 3 Scene 3, where words have become violence.',
          'Conclude by judging what Shakespeare suggests about a republic that depends on the opinion of a crowd that can be turned in a single scene.',
        ],
      },
      {
        question:
          'Read Act 5 Scene 5 from “Farewell to you; and you; and you, Volumnius.” to the end of the play. At this point in the play Brutus has been defeated at Philippi. Starting with this extract, explore how Shakespeare presents Brutus as a tragic hero. Write about: how Shakespeare presents Brutus in this extract; how Shakespeare presents Brutus in the play as a whole.',
        skill: 'Extract analysis and whole-play argument: tragedy',
        guidance: [
          'Define your terms briefly: a tragic hero is a person of standing whose downfall comes from a flaw or error bound up with their virtues. Then argue whether Brutus fits.',
          "Analyse Brutus's farewell, “I found no man but he was true to me”, as both moving and ironic, and his last words, “Caesar, now be still: / I kill’d not thee with half so good a will.” What do they suggest about his guilt?",
          'Analyse the verdicts of others: Strato says “Brutus only overcame himself”; Antony calls him “the noblest Roman of them all”; Octavius orders that he be buried “Most like a soldier”. Ask why his enemies speak for him at the end.',
          'Move to the whole play: the soliloquy in Act 2 Scene 1, the decisions to spare Antony and let him speak, the Forum, the quarrel and the ghost that calls itself “Thy evil spirit, Brutus.”',
          "Weigh the alternative: that his idealism made him a tool of Cassius and a danger to Rome, so that the tragedy is Rome's rather than his.",
          'End with a clear judgement and the reason for it.',
        ],
      },
    ],
    tips: [
      "Say who is speaking, to whom and where. A speech to a crowd in the Forum works differently from a soliloquy in an orchard, and the gap between the public voice and the private one is this play's main subject.",
      'Go past Act 3. Many answers stop at the funeral. The proscription list, the quarrel, the ghost and the deaths at Philippi are where Shakespeare shows what the killing achieved, and they give you the whole-play range the question asks for.',
      "Handle “Et tu, Brute?” with care. No ancient historian records those words. Plutarch has Caesar cry out to Casca, but gives him no words for Brutus: some writers, he says, reported that when Caesar saw Brutus's dagger he pulled his toga over his head. Suetonius says he gave only a groan, though some claimed he spoke to Brutus in Greek. Nor are they his last words in the play, which are “Then fall, Caesar!” Write about what the line does on stage, not about history.",
      "Treat omens as questions, not proof. Almost every sign is read two ways, Calpurnia's dream by Calpurnia and by Decius, the storm by Casca and by Cassius. Cicero's line, “men may construe things after their fashion”, is a useful key.",
      'Do not call the crowd simply stupid. Show how Shakespeare makes them reason from the evidence each speaker selects, the refused crown and the will, and what that says about a republic that runs on public opinion.',
      'Judge Brutus rather than describing him. The strongest answers weigh his principle against his misjudgements and arrive at a view, then consider the other side.',
      'Use form when it matters. Say when a speech is in prose or verse, when a scene ends on a rhyming couplet, and when the audience knows more than a character.',
      "Learn short quotations exactly, and check them against your own edition: punctuation and spelling differ. This guide's edition prints Antony's “Cry havoc” with no quotation marks or exclamation mark, where other printings add both.",
      'Use context to sharpen a point, not as a separate paragraph. If you mention that Shakespeare compressed his source, say what the change achieves on stage.',
    ],
  },

  modelAnswer: {
    question:
      "Starting with the extract from Act 3 Scene 2 (Antony's “Friends, Romans, countrymen, lend me your ears;” to “And I must pause till it come back to me.”), explore how Shakespeare presents Antony as a persuasive speaker. Write about: how Shakespeare presents Antony's speech in this extract; how Shakespeare presents Antony in the play as a whole.",
    paragraph:
      "Shakespeare presents Antony as a speaker whose power lies in appearing to have none. He opens by promising “I come to bury Caesar, not to praise him”, yet the speech that follows does little but praise, so a disclaimer becomes a disguise. His central weapon is the refrain “Brutus is an honourable man”. Whenever it follows a piece of evidence, such as the ransoms that “did the general coffers fill” or the crown Caesar “did thrice refuse”, the word “honourable” is placed beside a fact that contradicts Brutus's charge, until praise curdles into accusation without Antony ever making one. Even his grief is stagecraft: “My heart is in the coffin there with Caesar” hands the crowd a silence to fill, and a citizen duly concludes that Caesar “has had great wrong”. What makes this unsettling rather than simply admirable is what Shakespeare shows next. In Act 4 Scene 1 the man who moved Rome with Caesar's will sends Lepidus to fetch it so that the new rulers can decide “How to cut off some charge in legacies”. The generosity that won the Forum was, it seems, a tool, and Shakespeare invites us to admire Antony's skill while fearing what such skill can do in a republic.",
    commentary: [
      'It opens with an argument that answers the question (power that appears to be powerlessness), not with a summary of the scene.',
      'Quotations are short and embedded in the sentence, and the analysis narrows to a single word, “honourable”, showing how its meaning changes through the context Antony builds around it.',
      'It analyses method as well as meaning: the pause is treated as stagecraft, and its effect is proved by what a citizen says, not assumed.',
      'The move to the whole play is precise and unexpected. Act 4 Scene 1 changes how we read the extract, which is what whole-play knowledge is for.',
      'It ends with a judgement that holds two responses together, admiration and fear, which is the kind of evaluation that lifts a competent answer.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, Scene 1',
      title: 'The tribunes scold the crowd',
      summary:
        "On a holiday the tribunes Flavius and Marullus find working men out celebrating Caesar's triumph. Marullus reminds them that they once cheered Pompey, over whose blood Caesar now triumphs, and the tribunes go to strip the decorations from Caesar's statues.",
      setting: 'A street in Rome, on a holiday',
      who: ['Flavius', 'Marullus', 'The citizens'],
      quote: 'You blocks, you stones, you worse than senseless things!',
      themes: ['Republic versus tyranny', 'Rhetoric and persuasion', 'Power and ambition'],
      tension: 2,
      significance:
        'The first scene shows a crowd whose loyalty can be switched, the weakness Brutus and Antony will both play on.',
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Beware the Ides of March',
      summary:
        'Caesar arrives in procession for the feast of Lupercal and asks Antony, who is to run in the race, to touch Calpurnia so that she may be cured of barrenness. A soothsayer calls from the crowd, warning him to beware the Ides of March; brought before Caesar, he repeats the warning to his face, and Caesar dismisses him.',
      setting: 'A public place in Rome, during the feast of Lupercal',
      who: [
        'Julius Caesar',
        'The Soothsayer',
        'Mark Antony',
        'Calpurnia',
        'Marcus Brutus',
        'Cassius',
        'Casca',
      ],
      quote: 'He is a dreamer; let us leave him. Pass.',
      themes: ['Fate versus free will', 'Power and ambition'],
      tension: 2,
      significance:
        "The warning sets a clock running, and Caesar's dismissal of it is the first sign of the confidence that kills him.",
    },
    {
      where: 'Act 1, Scene 2',
      title: 'Cassius works on Brutus',
      summary:
        "Alone with Brutus, Cassius flatters him and mocks Caesar's weakness: he once saved Caesar from drowning in the Tiber and heard him cry for drink in a fever. Offstage shouts make Brutus fear the people are choosing Caesar as king, and Casca reports that Caesar refused a crown three times and collapsed. Alone, Cassius plans to throw letters in several handwritings through Brutus's window.",
      setting: 'The same public place, while the games go on offstage',
      who: ['Cassius', 'Marcus Brutus', 'Casca', 'Julius Caesar'],
      quote: 'For who so firm that cannot be seduc’d?',
      themes: ['Rhetoric and persuasion', 'Honour', 'Power and ambition'],
      tension: 3,
      significance:
        "The conspiracy begins as a seduction: Cassius needs Brutus's good name, and knows exactly how to win it.",
    },
    {
      where: 'Act 1, Scene 3',
      title: 'A night of storms and portents',
      summary:
        "In a violent storm Casca tells Cicero of the wonders he has seen: a slave's hand burning without harm, a lion near the Capitol, men in fire walking the streets. Cassius, who has walked the streets baring his chest to the lightning, reads the storm as a picture of Caesar, recruits Casca to the conspiracy and sends Cinna to plant papers where Brutus will find them.",
      setting: 'A Roman street at night, in thunder and lightning',
      who: ['Casca', 'Cassius'],
      quote: 'Either there is a civil strife in heaven',
      themes: ['Fate versus free will', 'Republic versus tyranny'],
      tension: 3,
      significance:
        'The heavens seem to warn of disaster, and the scene shows each man reading the signs to suit his purpose.',
    },
    {
      where: 'Act 2, Scene 1',
      title: 'Brutus decides in the orchard',
      summary:
        'Unable to sleep, Brutus reasons that Caesar must die for what a crown might make him, and reads a planted letter urging him to “Speak, strike, redress!”. The conspirators arrive; Brutus refuses an oath, rejects Cicero and overrules Cassius, who wants Antony killed too. Then Portia kneels and asks to share his secret, showing a wound she gave herself to prove her strength.',
      setting: "Brutus's orchard, in the hours before dawn",
      who: ['Marcus Brutus', 'Lucius', 'Cassius', 'Casca', 'Decius', 'Portia'],
      quote: 'Let us be sacrificers, but not butchers, Caius.',
      themes: ['Honour', 'Public versus private duty', 'Power and ambition'],
      tension: 3,
      significance:
        'Brutus overrules Cassius on every point (no oath, no Cicero, Antony spared), and the last of those decisions is the one that ruins the conspiracy.',
    },
    {
      where: 'Act 2, Scene 2',
      title: "Calpurnia's dream and Decius's flattery",
      summary:
        "After a night of storms Calpurnia begs Caesar to stay at home, and the augurers find no heart in their sacrifice. Caesar agrees to stay for her sake, until Decius reinterprets her dream of his statue spouting blood as a sign of Rome's revival, says the Senate means to crown him, and warns that people will say he is afraid. Caesar goes.",
      setting: "A room in Caesar's house, on the morning of the Ides",
      who: ['Julius Caesar', 'Calpurnia', 'Decius', 'Marcus Brutus', 'Mark Antony'],
      quote: 'Your wisdom is consum’d in confidence.',
      themes: ['Fate versus free will', 'Public versus private duty', 'Rhetoric and persuasion'],
      tension: 4,
      significance: 'Flattery wins where love fails: Caesar would rather die than be seen to fear.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'The assassination',
      summary:
        "On the Ides Caesar brushes aside Artemidorus's written warning, refuses to recall the banished Publius Cimber and compares himself to the northern star. Casca strikes first; in this edition's stage direction Brutus strikes last. The conspirators bathe their hands in Caesar's blood and cry liberty and freedom.",
      setting: 'Before the Capitol, where the Senate is sitting',
      who: ['Julius Caesar', 'Casca', 'Marcus Brutus', 'Cassius', 'Decius', 'The Soothsayer'],
      quote: 'Et tu, Brute?—Then fall, Caesar!',
      themes: ['Power and ambition', 'Republic versus tyranny', 'Honour'],
      tension: 5,
      significance:
        'The title character dies before the middle of the play; everything after it asks what the killing has achieved.',
    },
    {
      where: 'Act 3, Scene 1',
      title: 'Antony alone with the body',
      summary:
        "Antony shakes each conspirator's bloody hand and asks to speak at the funeral. Brutus agrees over Cassius's objection, on condition that Antony does not blame them. Left alone with the body, Antony asks its pardon for his gentleness with the killers and prophesies civil war across Italy.",
      setting: 'The Capitol, after the murder',
      who: ['Mark Antony', 'Marcus Brutus', 'Cassius'],
      quote: 'Cry havoc and let slip the dogs of war',
      themes: ['Rhetoric and persuasion', 'Honour', 'Power and ambition'],
      tension: 4,
      significance:
        "The soliloquy lets the audience into Antony's plan, so his speech in the Forum reaches us as a performance.",
    },
    {
      where: 'Act 3, Scene 2',
      title: 'Two speeches in the Forum',
      summary:
        "Brutus tells the citizens in prose that he killed Caesar for Rome's freedom, and they cheer; one cries that Brutus should be Caesar. Brutus leaves Antony to speak alone. In verse, Antony repeats that Brutus is honourable, reminds them Caesar refused the crown, shows them the stabbed cloak and the body, and reads the will. The crowd runs riot.",
      setting: 'The Forum in Rome',
      who: ['Marcus Brutus', 'Mark Antony', 'The citizens'],
      quote: 'Mischief, thou art afoot, / Take thou what course thou wilt!',
      themes: ['Rhetoric and persuasion', 'Honour', 'Republic versus tyranny'],
      tension: 5,
      significance:
        "The turning point: one speech undoes the conspiracy, and the crowd, not the Senate, decides Rome's future.",
    },
    {
      where: 'Act 3, Scene 3',
      title: 'Cinna the poet',
      summary:
        "Cinna the poet, who has dreamt of feasting with Caesar, is stopped and questioned by citizens. When he gives his name they take him for Cinna the conspirator; his protest that he is a poet makes no difference, and the scene ends with cries to tear him apart and burn the conspirators' houses.",
      setting: 'A street in Rome',
      who: ['Cinna the poet', 'The citizens'],
      quote: 'I am Cinna the poet, I am Cinna the poet.',
      themes: ['Rhetoric and persuasion', 'Republic versus tyranny'],
      tension: 4,
      significance:
        "The cost of Antony's speech falls on an innocent man, hunted down for nothing but his name.",
    },
    {
      where: 'Act 4, Scene 1',
      title: 'The proscription list',
      summary:
        "Antony, Octavius and Lepidus agree a list of enemies to be killed, trading the lives of their own relatives, and send Lepidus to fetch Caesar's will so that they can cut its legacies. Once Lepidus has gone, Antony dismisses him as a beast of burden, then turns to the war against Brutus and Cassius.",
      setting: "A room in Antony's house",
      who: ['Mark Antony', 'Octavius', 'Lepidus'],
      quote: 'These many then shall die; their names are prick’d.',
      themes: ['Power and ambition', 'Republic versus tyranny'],
      tension: 3,
      significance: "Caesar's avengers are as ruthless as any tyrant the conspirators feared.",
    },
    {
      where: 'Act 4, Scene 3',
      title: 'Quarrel, grief and a ghost',
      summary:
        "In Brutus's tent near Sardis, Brutus accuses Cassius of selling offices for gold and of refusing him money for his legions; Cassius offers his dagger and his breast, and they make peace. Brutus reveals that Portia has killed herself, overrules Cassius on marching to Philippi, and that night sees Caesar's ghost, which promises to meet him there.",
      setting: "Brutus's tent, in the camp near Sardis, at night",
      who: ['Marcus Brutus', 'Cassius', 'Lucius', 'The Ghost of Caesar'],
      quote: 'Thy evil spirit, Brutus.',
      themes: ['Honour', 'Public versus private duty', 'Fate versus free will'],
      tension: 4,
      significance:
        'The conspiracy turns on itself, and Caesar returns as the spirit Brutus had hoped to kill without killing the man.',
    },
    {
      where: 'Act 5, Scene 1',
      title: 'Words before blows at Philippi',
      summary:
        'On the plains of Philippi the four generals trade insults before the battle. Cassius tells Messala that it is his birthday and that he now partly believes in omens, since ravens and kites have replaced the eagles that followed the army. Brutus and Cassius say a formal farewell in case they do not meet again.',
      setting: 'The plains of Philippi',
      who: ['Marcus Brutus', 'Cassius', 'Mark Antony', 'Octavius'],
      quote: 'For ever, and for ever, farewell, Cassius.',
      themes: ['Rhetoric and persuasion', 'Fate versus free will', 'Honour'],
      tension: 3,
      significance:
        'A quiet, formal parting before the catastrophe, and a sceptic beginning to believe in fate.',
    },
    {
      where: 'Act 5, Scene 3',
      title: "Cassius's mistake",
      summary:
        "Brutus has attacked too early and Cassius's men are surrounded. Pindarus, watching from a hill, wrongly reports that Titinius has been captured, and Cassius has Pindarus kill him with the sword that killed Caesar. Titinius returns with a victory wreath, finds him dead and kills himself. Brutus sees Caesar's spirit at work.",
      setting: 'A hill on the battlefield at Philippi',
      who: ['Cassius', 'Pindarus', 'Titinius', 'Marcus Brutus'],
      quote: 'O Julius Caesar, thou art mighty yet!',
      themes: ['Fate versus free will', 'Honour'],
      tension: 5,
      significance:
        "A man who saw through everyone dies of a misreading, and Caesar's power is shown to outlive him.",
    },
    {
      where: 'Act 5, Scene 5',
      title: 'The noblest Roman',
      summary:
        'After the second battle Brutus asks three friends in turn to help him die, and they refuse. Strato holds his sword and Brutus runs on it. Antony calls him the only conspirator who acted for the common good, and Octavius orders that he be buried with honour.',
      setting: 'Another part of the battlefield, by a rock',
      who: ['Marcus Brutus', 'Strato', 'Mark Antony', 'Octavius'],
      quote: 'Caesar, now be still: / I kill’d not thee with half so good a will.',
      themes: ['Honour', 'Public versus private duty', 'Republic versus tyranny'],
      tension: 4,
      significance:
        "The republic's cause dies with Brutus, and his enemies are left to decide how he will be remembered.",
    },
  ],

  relationships: [
    {
      from: 'Marcus Brutus',
      to: 'Cassius',
      kind: 'fellow conspirators, called brothers',
      note: "Lucius announces “your brother Cassius”, and historically Cassius was married to Brutus's half-sister. Cassius recruits Brutus with flattery and forged letters, then defers to him and is overruled on almost every practical question. They quarrel in Act 4 Scene 3, part formally at Philippi, and Brutus mourns him as “The last of all the Romans”.",
    },
    {
      from: 'Marcus Brutus',
      to: 'Julius Caesar',
      kind: 'friend and assassin',
      note: "Brutus insists “yet I love him well” and kills him for Rome. Caesar's shock at seeing him among the killers is the emotional centre of the murder, and the ghost that visits Brutus calls itself “Thy evil spirit, Brutus.” He dies speaking to Caesar.",
    },
    {
      from: 'Cassius',
      to: 'Julius Caesar',
      kind: 'rivals',
      note: 'Cassius resents that a man he saved from the Tiber is “now become a god”; Caesar distrusts his “lean and hungry look”. Cassius dies on the sword that killed Caesar, telling him he is revenged.',
    },
    {
      from: 'Mark Antony',
      to: 'Julius Caesar',
      kind: 'loyal follower and avenger',
      note: 'Antony offers Caesar the crown at the Lupercal and later mourns him as “the ruins of the noblest man / That ever lived in the tide of times”. His loyalty becomes the engine of the civil war.',
    },
    {
      from: 'Mark Antony',
      to: 'Marcus Brutus',
      kind: 'enemies',
      note: "Brutus spares Antony and gives him leave to speak, and Antony uses that leave to destroy him. Yet it is Antony who speaks the tribute over Brutus's body, the one conspirator he believes acted from principle rather than envy.",
    },
    {
      from: 'Marcus Brutus',
      to: 'Portia',
      kind: 'husband and wife',
      note: 'Portia demands to be treated as a partner, not kept out of his secrets, and Brutus prays “Render me worthy of this noble wife!”. By Act 2 Scene 4 she seems to know the plan and struggles to keep it. Her death is reported in Act 4 Scene 3.',
    },
    {
      from: 'Julius Caesar',
      to: 'Calpurnia',
      kind: 'husband and wife',
      note: 'In public at the Lupercal Caesar draws attention to her childlessness; in private she can nearly command him, and he agrees to stay at home “for thy humour”. Decius shames him into going, and he turns on her fears: “How foolish do your fears seem now, Calphurnia!”',
    },
    {
      from: 'Decius',
      to: 'Julius Caesar',
      kind: 'flatterer and target',
      note: "Decius boasts to the conspirators “I can o’ersway him” with flattery, and does, by reinterpreting Calpurnia's dream and hinting that Caesar will be thought afraid.",
    },
    {
      from: 'Mark Antony',
      to: 'The citizens',
      kind: 'orator and crowd',
      note: 'Antony finds them cheering Brutus and leaves them rioting. He treats them as an instrument, testing “how the people take” the murder, and afterwards plans to cut the legacies he read out to them.',
    },
    {
      from: 'Mark Antony',
      to: 'Octavius',
      kind: 'uneasy allies',
      note: "They share power after the murder, but at Philippi Octavius refuses Antony's order with “I do not cross you; but I will do so.” The young man is already asserting himself, and it is he who speaks the play's last lines.",
    },
    {
      from: 'Mark Antony',
      to: 'Lepidus',
      kind: 'partners in power',
      note: "Lepidus agrees to his own brother's death on the proscription list; the moment he leaves, Antony calls him “a slight unmeritable man”, fit only to carry loads like an ass.",
    },
    {
      from: 'Marcus Brutus',
      to: 'Lucius',
      kind: 'master and servant',
      note: "Brutus's gentleness with the sleepy boy, in the orchard and again in the tent (“Gentle knave, good night”), shows the private tenderness of a man whose public acts are violent.",
    },
  ],

  compareWith: [
    {
      title: 'Macbeth',
      href: '/revision/texts/macbeth',
      reason:
        'Another AQA Shakespeare play about killing a ruler, with omens, a troubled conscience and a ghost, but a killer who acts for himself rather than, as Brutus claims to, for his country.',
    },
    {
      title: 'Animal Farm',
      href: '/revision/texts/animal-farm',
      reason:
        'A revolt against a ruler that ends in a new ruling group, and a close study of how speech is used to steer a crowd, set beside the Forum scene.',
    },
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'Golding also shows how quickly a group turns to violence once order breaks down, a useful comparison with the mob of Act 3.',
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'mental_health',
    'crime_injustice',
    'supernatural',
    'mythological_religious',
    'political_ideology',
  ],

  sources: [
    {
      label:
        'Project Gutenberg eBook #1522, Julius Caesar: the held edition (src/data/full-texts/julius-caesar.ts). Every quotation, speaker and scene checked against it by reading the play',
      url: 'https://www.gutenberg.org/ebooks/1522',
    },
    {
      label:
        'Project Gutenberg #1522 plain text: the Dramatis Personae (Flavius and Marullus as tribunes, The Ghost of Caesar), which the held file omits',
      url: 'https://www.gutenberg.org/cache/epub/1522/pg1522.txt',
    },
    {
      label:
        'Folger Shakespeare Library, Julius Caesar: 1599; possibly the first of his plays at the Globe; first printed in the 1623 First Folio',
      url: 'https://www.folger.edu/explore/shakespeares-works/julius-caesar/',
    },
    {
      label:
        "Wikipedia, Julius Caesar (play): North's 1579 translation of Plutarch as the main source; Thomas Platter at a Bankside theatre, 21 September 1599; First Folio 1623",
      url: 'https://en.wikipedia.org/wiki/Julius_Caesar_(play)',
    },
    {
      label:
        'AQA GCSE English Literature 8702, specification at a glance: Paper 1 Section A, one question on the play, an extract and then the play as a whole',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/specification-at-a-glance',
    },
    {
      label:
        'AQA 8702 subject content (v1.3), as read off AQA and recorded in src/lib/board/prescribed-texts.ts: Julius Caesar and Macbeth among the six Shakespeare plays; Animal Farm and Lord of the Flies among the modern texts',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content',
    },
    {
      label:
        "Plutarch, Life of Caesar, chapters 63 and 66 (Loeb translation, LacusCurtius): the seer's reply that the Ides are come but not gone; the heartless sacrifice; Caesar cries out to Casca in Latin; some writers say that on seeing Brutus's dagger he covered his head",
      url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Caesar*.html',
    },
    {
      label:
        'Suetonius, Life of Julius Caesar, sections 81-82 (Loeb translation, LacusCurtius): the seer Spurinna; Caesar uttered only a groan, though some wrote that he spoke to Brutus in Greek',
      url: 'https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Julius*.html',
    },
    {
      label:
        'Wikipedia, Et tu, Brute?: summarises Plutarch and Suetonius as above; the Latin phrase is in print by 1595, in The True Tragedie of Richard Duke of Yorke, the earliest printed version of Henry VI Part 3',
      url: 'https://en.wikipedia.org/wiki/Et_tu,_Brute%3F',
    },
    {
      label:
        "Folger Shakespeare Library text of Act 3 Scene 1, which prints Cry 'Havoc!' with quotation marks and an exclamation mark, unlike the held edition",
      url: 'https://www.folger.edu/explore/shakespeares-works/julius-caesar/read/3/1/',
    },
    {
      label:
        "The Phrase Finder, Et tu, Brute: no evidence Caesar said it; Plutarch reports no words. It calls the phrase Shakespeare's invention, which Wikipedia disputes, so the guide makes no claim about who coined it",
      url: 'https://www.phrases.org.uk/meanings/et-tu-brute.html',
    },
    {
      label:
        "Wikipedia, Julius Caesar (play): the murder, funeral, oration, will and Octavius's arrival fall on one day in the play, and the two battles of Philippi are combined although twenty days apart",
      url: 'https://en.wikipedia.org/wiki/Julius_Caesar_(play)',
    },
    {
      label:
        'Wikipedia, Battle of Philippi: two battles, 3 and 23 October 42 BC; assassination 44 BC',
      url: 'https://en.wikipedia.org/wiki/Battle_of_Philippi',
    },
    {
      label:
        'Wikipedia, Ides of March: the 15th of March, May, July and October; Suetonius names the seer Spurinna',
      url: 'https://en.wikipedia.org/wiki/Ides_of_March',
    },
    {
      label:
        'Wikipedia, Lupercalia: 15 February; the runners and the belief about barren women (from Plutarch); Antony offered Caesar a crown in 44 BC',
      url: 'https://en.wikipedia.org/wiki/Lupercalia',
    },
    {
      label: "Wikipedia, Gaius Cassius Longinus: married to Junia Tertia, Brutus's half-sister",
      url: 'https://en.wikipedia.org/wiki/Gaius_Cassius_Longinus',
    },
    {
      label: 'Wikipedia, Epicureanism: the gods do not interfere in human lives',
      url: 'https://en.wikipedia.org/wiki/Epicureanism',
    },
    {
      label: "Wikipedia, Atë: the name glossed as 'Delusion, Recklessness, Folly, Ruin'",
      url: 'https://en.wikipedia.org/wiki/At%C3%AB',
    },
    {
      label:
        'Wikipedia, Colossus of Rhodes: bronze statue of Helios; the harbour-straddling image is medieval legend',
      url: 'https://en.wikipedia.org/wiki/Colossus_of_Rhodes',
    },
    {
      label: 'Wikipedia, Nervii: Belgic tribe defeated by Caesar at the Sabis, 57 BC',
      url: 'https://en.wikipedia.org/wiki/Nervii',
    },
    {
      label:
        'Wikipedia, Augur: Roman priest interpreting the will of the gods, especially from birds',
      url: 'https://en.wikipedia.org/wiki/Augur',
    },
    {
      label: 'Wiktionary, cry havoc (the order to plunder) and falling sickness (epilepsy)',
      url: 'https://en.wiktionary.org/wiki/cry_havoc',
    },
  ],
}
