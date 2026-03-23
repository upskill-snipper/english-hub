import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Macbeth Study Guide - AQA English Literature GCSE",
  description:
    "Complete Macbeth revision guide for AQA GCSE English Literature. Act-by-act plot summary, character analysis, themes, 20+ key quotations with analysis, Jacobean context, and essay planning.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const actSummaries = [
  {
    act: "Act 1",
    title: "Prophecy and Temptation",
    scenes: [
      {
        scene: "1.1",
        summary:
          "Three Witches meet on a heath amid thunder and lightning. They plan to meet Macbeth after the battle. Their chant 'Fair is foul, and foul is fair' establishes the play's moral confusion.",
      },
      {
        scene: "1.2",
        summary:
          "A wounded Captain reports to King Duncan that Macbeth and Banquo have won a great victory. Macbeth killed the rebel Macdonwald and defeated the Norwegian army. Duncan orders the execution of the traitorous Thane of Cawdor and gives his title to Macbeth.",
      },
      {
        scene: "1.3",
        summary:
          "The Witches meet Macbeth and Banquo on the heath. They prophesy that Macbeth will be Thane of Cawdor and 'King hereafter,' and that Banquo's descendants will be kings. Ross arrives to confirm Macbeth has been named Thane of Cawdor. Macbeth begins to consider murder.",
      },
      {
        scene: "1.4",
        summary:
          "Duncan thanks Macbeth and Banquo. He names his son Malcolm as heir to the throne (Prince of Cumberland). Macbeth sees this as an obstacle: 'Stars, hide your fires; / Let not light see my black and deep desires.'",
      },
      {
        scene: "1.5",
        summary:
          "Lady Macbeth reads Macbeth's letter about the prophecy. She fears he is 'too full o' th' milk of human kindness' and calls on dark spirits to 'unsex' her. When Macbeth arrives, she begins planning Duncan's murder.",
      },
      {
        scene: "1.6-1.7",
        summary:
          "Duncan arrives at Macbeth's castle. Macbeth wavers, listing reasons not to kill Duncan. Lady Macbeth questions his manhood and persuades him with her plan to frame Duncan's guards. Macbeth agrees: 'I am settled.'",
      },
    ],
  },
  {
    act: "Act 2",
    title: "The Murder of Duncan",
    scenes: [
      {
        scene: "2.1",
        summary:
          "Banquo feels uneasy. Macbeth sees a hallucination of a 'dagger of the mind' leading him towards Duncan's chamber. The dagger becomes covered in blood. A bell rings - the signal from Lady Macbeth.",
      },
      {
        scene: "2.2",
        summary:
          "Macbeth murders Duncan offstage and returns in shock, carrying the bloody daggers. He is tormented by a voice crying 'Macbeth does murder sleep.' Lady Macbeth takes charge, returning the daggers and smearing the guards with blood.",
      },
      {
        scene: "2.3",
        summary:
          "The Porter provides comic relief before Macduff discovers Duncan's body. Macbeth kills the guards, claiming outrage. Malcolm and Donalbain flee to England and Ireland, which makes them suspects.",
      },
      {
        scene: "2.4",
        summary:
          "Unnatural events are reported: an owl killed a falcon, Duncan's horses ate each other. Macbeth has been named king. Macduff notably refuses to attend the coronation at Scone.",
      },
    ],
  },
  {
    act: "Act 3",
    title: "Tyranny and Paranoia",
    scenes: [
      {
        scene: "3.1",
        summary:
          "Macbeth fears Banquo's 'royalty of nature' and the prophecy that Banquo's sons will be kings. He hires two murderers to kill Banquo and his son Fleance. Macbeth has moved from reluctant killer to active plotter.",
      },
      {
        scene: "3.2",
        summary:
          "Both Macbeth and Lady Macbeth are unhappy. Macbeth speaks of 'scorpions in his mind' but keeps the plan to kill Banquo secret from Lady Macbeth. Their relationship is deteriorating.",
      },
      {
        scene: "3.3",
        summary:
          "The murderers kill Banquo but Fleance escapes, meaning the prophecy about Banquo's descendants can still come true. Macbeth will never feel secure.",
      },
      {
        scene: "3.4",
        summary:
          "At the banquet, Macbeth sees Banquo's ghost sitting in his chair. He is terrified and speaks wildly. Lady Macbeth tries to control the situation but the lords leave. Macbeth decides to visit the Witches again.",
      },
      {
        scene: "3.5-3.6",
        summary:
          "Hecate (queen of witches) is angry the Witches acted without her. Lennox and a lord discuss suspicions about Macbeth. Macduff has gone to England to join Malcolm.",
      },
    ],
  },
  {
    act: "Act 4",
    title: "Apparitions and Atrocity",
    scenes: [
      {
        scene: "4.1",
        summary:
          "The Witches show Macbeth three apparitions: an armed head warns 'beware Macduff'; a bloody child says 'none of woman born shall harm Macbeth'; a crowned child with a tree says Macbeth is safe until Birnam Wood moves to Dunsinane. Macbeth feels invincible but orders the murder of Macduff's family.",
      },
      {
        scene: "4.2",
        summary:
          "Lady Macduff and her son are murdered on Macbeth's orders. This is Macbeth's most evil act - killing an innocent woman and child. It marks his complete moral descent.",
      },
      {
        scene: "4.3",
        summary:
          "In England, Malcolm tests Macduff's loyalty by pretending to be unfit to rule. When Macduff despairs for Scotland, Malcolm reveals the truth and they plan to invade. Ross arrives with news of Macduff's family. Macduff's grief ('He has no children') fuels his determination for revenge.",
      },
    ],
  },
  {
    act: "Act 5",
    title: "Downfall and Justice",
    scenes: [
      {
        scene: "5.1",
        summary:
          "Lady Macbeth sleepwalks, obsessively washing imaginary blood from her hands: 'Out, damned spot!' She relives the murders in fragments. The Doctor says she needs a priest, not a physician. Her guilt has destroyed her mind.",
      },
      {
        scene: "5.2-5.4",
        summary:
          "Scottish lords join Malcolm's English army. Malcolm orders soldiers to cut branches from Birnam Wood and carry them as camouflage. The prophecy begins to come true.",
      },
      {
        scene: "5.5",
        summary:
          "Macbeth learns Lady Macbeth is dead (possibly suicide). He delivers the 'Tomorrow and tomorrow and tomorrow' soliloquy, reflecting that life is meaningless: 'a tale told by an idiot, full of sound and fury, signifying nothing.' A messenger reports that Birnam Wood appears to be moving.",
      },
      {
        scene: "5.6-5.8",
        summary:
          "Macbeth fights on despite knowing the prophecies are coming true. Young Siward is killed. Macduff reveals he was 'from his mother's womb untimely ripped' (born by Caesarean section). Macbeth realises the Witches deceived him but fights to the death. Macduff kills Macbeth and Malcolm is crowned king, restoring order.",
      },
    ],
  },
];

const characters = [
  {
    name: "Macbeth",
    role: "Protagonist / Tragic Hero",
    description:
      "A brave and respected Scottish general whose ambition, fuelled by the Witches' prophecy and Lady Macbeth's manipulation, leads him to murder King Duncan and seize the throne. His reign becomes increasingly tyrannical as guilt and paranoia consume him. Shakespeare presents him as a tragic hero - a man with noble qualities destroyed by a fatal flaw (hamartia).",
    keyPoints: [
      "Begins as a loyal warrior ('brave Macbeth') and ends as a tyrannical 'butcher'",
      "His soliloquies reveal inner conflict - he knows murder is wrong but cannot resist",
      "After Duncan's murder, each subsequent killing becomes easier, showing moral deterioration",
      "His relationship with Lady Macbeth reverses: she starts dominant, he ends isolated",
      "His 'Tomorrow' soliloquy shows existential despair - life has become meaningless",
    ],
    keyQuotes: [
      "'Stars, hide your fires; / Let not light see my black and deep desires'",
      "'I dare do all that may become a man; / Who dares do more is none'",
      "'Will all great Neptune's ocean wash this blood / Clean from my hand?'",
      "'I am in blood / Stepp'd in so far that... returning were as tedious as go o'er'",
      "'Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage'",
    ],
  },
  {
    name: "Lady Macbeth",
    role: "Macbeth's Wife / Catalyst",
    description:
      "Lady Macbeth is one of Shakespeare's most powerful female characters. She drives the plot by persuading Macbeth to murder Duncan, questioning his manhood and showing ruthless determination. However, her apparent strength conceals deep vulnerability. She is ultimately destroyed by the guilt she initially seemed immune to.",
    keyPoints: [
      "Calls on spirits to 'unsex' her - rejects femininity to gain power in a patriarchal world",
      "Manipulates Macbeth by attacking his masculinity: 'When you durst do it, then you were a man'",
      "Takes practical charge after the murder (returns daggers, smears guards)",
      "Disappears from the action in Acts 3-4 as Macbeth acts alone",
      "The sleepwalking scene (5.1) reveals her guilt has manifested as madness",
      "Her death (likely suicide) shows the human cost of their ambition",
    ],
    keyQuotes: [
      "'Come, you spirits / That tend on mortal thoughts, unsex me here'",
      "'Look like th' innocent flower, / But be the serpent under 't'",
      "'A little water clears us of this deed'",
      "'Out, damned spot! Out, I say!'",
      "'All the perfumes of Arabia will not sweeten this little hand'",
    ],
  },
  {
    name: "Banquo",
    role: "Macbeth's Foil",
    description:
      "Banquo serves as a moral contrast to Macbeth. He hears the same prophecy but resists the temptation to act on it. While Macbeth succumbs to ambition, Banquo remains loyal and honourable. His ghost haunts Macbeth, symbolising guilt and the impossibility of escaping consequences.",
    keyPoints: [
      "Also receives a prophecy but does not act on it - shows the choice Macbeth had",
      "Suspects Macbeth but does not act against him, raising questions about his passivity",
      "His ghost at the banquet is visible only to Macbeth - guilt made manifest",
      "Shakespeare flatters King James I, who claimed descent from Banquo",
      "Represents the path of honour that Macbeth rejected",
    ],
    keyQuotes: [
      "'Thou hast it now: King, Cawdor, Glamis, all... and I fear / Thou played'st most foully for 't'",
      "'In the great hand of God I stand'",
    ],
  },
  {
    name: "Macduff",
    role: "The Avenger / Champion of Scotland",
    description:
      "Macduff is the first to suspect Macbeth and ultimately the one who kills him. His genuine grief at the murder of his family contrasts with Macbeth's hollow emotional responses. He represents loyalty, patriotism, and justified revenge.",
    keyPoints: [
      "Refuses to attend Macbeth's coronation - first sign of opposition",
      "Discovers Duncan's murder and reacts with genuine horror",
      "Leaves his family to seek help in England - this decision costs them their lives",
      "His grief ('He has no children') is raw and human, contrasting with Macbeth's cold plotting",
      "'Not of woman born' - born by Caesarean section, fulfilling the prophecy",
    ],
    keyQuotes: [
      "'O horror, horror, horror!'",
      "'He has no children. All my pretty ones?'",
      "'I was from my mother's womb / Untimely ripp'd'",
    ],
  },
  {
    name: "The Witches (Weird Sisters)",
    role: "Supernatural Catalysts",
    description:
      "The three Witches are agents of chaos who speak in riddles and prophecies. They do not directly cause Macbeth's actions but ignite his existing ambition. Shakespeare leaves deliberately ambiguous whether they are supernatural beings or psychological projections.",
    keyPoints: [
      "'Fair is foul, and foul is fair' - they invert moral order from the opening",
      "Their prophecies are technically true but deliberately misleading (equivocation)",
      "They tap into Macbeth's pre-existing ambition - they do not create it",
      "A Jacobean audience would have believed in witchcraft (James I wrote 'Daemonologie')",
      "Their ambiguity raises the question: is Macbeth responsible, or is he a victim of fate?",
    ],
    keyQuotes: [
      "'Fair is foul, and foul is fair'",
      "'All hail, Macbeth, that shalt be king hereafter!'",
      "'Double, double toil and trouble; / Fire burn and cauldron bubble'",
    ],
  },
  {
    name: "King Duncan",
    role: "The Ideal King",
    description:
      "Duncan represents the ideal of divinely appointed kingship. He is generous, trusting, and gracious - everything Macbeth is not as king. His murder is not just a political act but a sin against God and the natural order.",
    keyPoints: [
      "Described in heavenly language: his virtues 'will plead like angels'",
      "His trust is both a virtue and a weakness - he trusted the previous Thane of Cawdor too",
      "His murder causes cosmic disruption: unnatural darkness, animals behaving strangely",
      "Represents divine right of kings - a key belief in Jacobean England",
    ],
    keyQuotes: [
      "'This castle hath a pleasant seat'",
      "'He was a gentleman on whom I built / An absolute trust'",
    ],
  },
  {
    name: "Malcolm",
    role: "The Rightful Heir",
    description:
      "Duncan's eldest son and rightful heir to the throne. He flees after Duncan's murder but matures into a wise and cautious leader. His testing of Macduff in Act 4 shows political intelligence. He represents the restoration of legitimate rule.",
    keyPoints: [
      "His flight to England makes him look guilty but ultimately saves his life",
      "Tests Macduff by pretending to have vices - shows he has learned not to trust easily",
      "Orders soldiers to carry Birnam Wood branches - shows military intelligence",
      "His final speech promises to restore order and reward loyalty",
    ],
    keyQuotes: [
      "'This murderous shaft that's shot / Hath not yet lighted'",
      "'We shall... reckon with your several loves / And make us even with you'",
    ],
  },
];

const themes = [
  {
    title: "Ambition",
    colour: "bg-red-50 border-red-200",
    analysis:
      "Ambition is the driving force of the play. Shakespeare presents it as a powerful and destructive force. Macbeth's ambition exists before the Witches' prophecy ('My thought, whose murder yet is but fantastical') - they merely ignite it. Lady Macbeth's ambition is initially stronger than Macbeth's, but the play shows how unchecked ambition destroys both of them. The key message is not that ambition itself is evil, but that ambition without moral restraint leads to destruction.",
    keyPoints: [
      "Macbeth's 'vaulting ambition' is his tragic flaw (hamartia)",
      "Lady Macbeth's ambition is channelled through her husband because women had no political power",
      "The play distinguishes between healthy ambition (Malcolm's desire to serve Scotland) and destructive ambition (Macbeth's desire for personal power)",
      "Each act of violence feeds further ambition and paranoia - the cycle cannot be stopped",
    ],
    keyQuotes: [
      "'I have no spur / To prick the sides of my intent, but only / Vaulting ambition'",
      "'Art thou afeard / To be the same in thine own act and valour / As thou art in desire?'",
    ],
  },
  {
    title: "Guilt and Conscience",
    colour: "bg-purple-50 border-purple-200",
    analysis:
      "Guilt is presented as an inescapable psychological force. From the moment Macbeth kills Duncan, guilt haunts him through hallucinations (the dagger, Banquo's ghost) and sleeplessness. Lady Macbeth initially appears immune to guilt ('A little water clears us of this deed') but it eventually manifests as madness in her sleepwalking scene. Shakespeare suggests that guilt is the natural human response to moral transgression - it cannot be suppressed, only delayed.",
    keyPoints: [
      "Blood symbolism tracks guilt throughout: it cannot be washed away",
      "Macbeth's hallucinations (dagger, ghost) are physical manifestations of guilt",
      "Lady Macbeth's sleepwalking inverts her earlier confidence about water clearing the deed",
      "Sleep is destroyed by guilt - 'Macbeth does murder sleep'",
      "Even Macbeth's final nihilism ('Tomorrow and tomorrow') can be read as guilt turned to despair",
    ],
    keyQuotes: [
      "'Will all great Neptune's ocean wash this blood / Clean from my hand?'",
      "'Out, damned spot! Out, I say!'",
      "'Macbeth does murder sleep'",
      "'O, full of scorpions is my mind'",
    ],
  },
  {
    title: "The Supernatural",
    colour: "bg-indigo-50 border-indigo-200",
    analysis:
      "The supernatural permeates the play through the Witches, ghosts, hallucinations, and prophecies. Shakespeare uses it to create atmosphere and explore the boundary between fate and free will. The Witches' prophecies raise a central question: do they cause Macbeth's actions, or simply predict what he would have done anyway? For a Jacobean audience, the supernatural was real and terrifying - James I himself wrote about witchcraft.",
    keyPoints: [
      "The Witches blur the line between fate and choice - are they causing events or predicting them?",
      "Equivocation: their prophecies are technically true but deliberately misleading",
      "Banquo's ghost may be supernatural or a hallucination - Shakespeare leaves it ambiguous",
      "The dagger hallucination: 'Is this a dagger which I see before me?' - Macbeth questions his own sanity",
      "Pathetic fallacy: storms, darkness, and unnatural events mirror the moral chaos",
      "James I wrote 'Daemonologie' (1597) and believed in witchcraft - Shakespeare was flattering his patron",
    ],
    keyQuotes: [
      "'Is this a dagger which I see before me, / The handle toward my hand?'",
      "'By the pricking of my thumbs, / Something wicked this way comes'",
      "'Fair is foul, and foul is fair'",
    ],
  },
  {
    title: "Masculinity and Gender",
    colour: "bg-orange-50 border-orange-200",
    analysis:
      "Shakespeare interrogates what it means to be a 'man' throughout the play. Lady Macbeth equates masculinity with violence and ambition, shaming Macbeth into murder by questioning his manhood. Macbeth internalises this toxic definition, seeing compassion as weakness. However, the play ultimately rejects this view - Macduff's tears for his family ('I must also feel it as a man') present a healthier, more complete masculinity.",
    keyPoints: [
      "Lady Macbeth's 'unsex me here' speech rejects femininity to access masculine power",
      "She weaponises masculinity against Macbeth: 'When you durst do it, then you were a man'",
      "Macbeth tries to prove masculinity through violence, which destroys him",
      "Macduff's grief redefines manhood: feeling emotion IS manly",
      "Lady Macbeth cannot sustain her rejection of femininity - guilt breaks through",
    ],
    keyQuotes: [
      "'Come, you spirits / That tend on mortal thoughts, unsex me here'",
      "'When you durst do it, then you were a man'",
      "'I dare do all that may become a man; / Who dares do more is none'",
      "'Dispute it like a man' / 'I shall do so; / But I must also feel it as a man'",
    ],
  },
  {
    title: "Kingship and Tyranny",
    colour: "bg-green-50 border-green-200",
    analysis:
      "The play contrasts good kingship (Duncan, Edward, Malcolm) with tyranny (Macbeth). Duncan is generous, trusting, and divinely appointed. Macbeth rules through fear and violence. The play upholds the Jacobean belief in the divine right of kings: when the rightful king is murdered, the natural world is thrown into chaos. Order is only restored when Malcolm, the legitimate heir, takes the throne.",
    keyPoints: [
      "Duncan embodies the ideal king: gracious, generous, and divinely appointed",
      "Macbeth's kingship is illegitimate and maintained through fear and murder",
      "The divine right of kings: deposing a king is a sin against God",
      "Edward the Confessor (King of England) is presented as a healing, saintly king - contrasting with Macbeth",
      "Malcolm's restoration speech promises legitimate, divinely sanctioned rule",
      "The play was likely performed for James I - a clear endorsement of legitimate succession",
    ],
    keyQuotes: [
      "'His virtues / Will plead like angels, trumpet-tongued'",
      "'Not in the legions / Of horrid hell can come a devil more damn'd / In evils to top Macbeth'",
    ],
  },
  {
    title: "Appearance vs Reality",
    colour: "bg-teal-50 border-teal-200",
    analysis:
      "From the Witches' opening 'Fair is foul, and foul is fair,' the play constantly questions what is real and what is illusion. Characters deceive others (Lady Macbeth's hospitality, Macbeth's loyalty), and deceive themselves (Macbeth's belief in his invincibility). The audience is also challenged: is the dagger real? Is the ghost? Shakespeare suggests that in a world of moral corruption, truth itself becomes unstable.",
    keyPoints: [
      "The Witches' equivocation: their prophecies appear to promise safety but actually ensure destruction",
      "Lady Macbeth tells Macbeth to 'look like th' innocent flower, / But be the serpent under 't'",
      "Duncan's trust is misplaced - he notes 'There's no art / To find the mind's construction in the face'",
      "Macbeth plays the grieving subject while being the murderer",
      "The hallucinations blur the line between reality and imagination",
      "Malcolm's testing of Macduff: appearances must be questioned in a corrupt world",
    ],
    keyQuotes: [
      "'Fair is foul, and foul is fair'",
      "'Look like th' innocent flower, / But be the serpent under 't'",
      "'There's no art / To find the mind's construction in the face'",
      "'False face must hide what the false heart doth know'",
    ],
  },
];

const keyQuotations = [
  {
    quote: "Fair is foul, and foul is fair",
    speaker: "The Witches (1.1)",
    analysis:
      "The play's thematic motto. Establishes moral inversion - good and evil, truth and lies are indistinguishable. The chiasmus (ABBA structure) mirrors the confusion. This paradox runs through every aspect of the play.",
  },
  {
    quote: "Stars, hide your fires; / Let not light see my black and deep desires",
    speaker: "Macbeth (1.4)",
    analysis:
      "Macbeth's first aside reveals murderous thoughts he already harbours. The imperative 'hide' shows he wants to conceal his ambition even from heaven. Light/dark imagery connects to the theme of appearance vs reality. 'Black and deep' suggests his desires are hellish.",
  },
  {
    quote: "Come, you spirits / That tend on mortal thoughts, unsex me here",
    speaker: "Lady Macbeth (1.5)",
    analysis:
      "Lady Macbeth invokes dark spirits to remove her femininity so she can be ruthless enough to drive the murder. 'Unsex me' reveals that cruelty is coded as masculine in this world. The imperative verbs ('Come,' 'Fill,' 'Stop') show her forceful determination. A Jacobean audience would see this as deeply transgressive and unnatural.",
  },
  {
    quote: "Look like th' innocent flower, / But be the serpent under 't",
    speaker: "Lady Macbeth (1.5)",
    analysis:
      "Lady Macbeth advises Macbeth to hide his murderous intent behind a pleasant exterior. The biblical imagery (serpent = Satan in the Garden of Eden) casts their plan as a fundamental act of evil. The juxtaposition of 'flower' and 'serpent' captures the play's theme of appearance vs reality.",
  },
  {
    quote: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o'erleaps itself",
    speaker: "Macbeth (1.7)",
    analysis:
      "In his soliloquy, Macbeth admits he has no good reason to kill Duncan other than ambition. The horse-riding metaphor ('spur,' 'vaulting') suggests ambition is reckless and uncontrolled - it 'o'erleaps itself' and falls on the other side. This is Macbeth's hamartia (fatal flaw).",
  },
  {
    quote: "When you durst do it, then you were a man",
    speaker: "Lady Macbeth (1.7)",
    analysis:
      "Lady Macbeth manipulates Macbeth by questioning his masculinity. She equates manhood with the willingness to commit violence. This toxic definition of masculinity drives Macbeth to murder. The play later challenges this through Macduff's grief.",
  },
  {
    quote: "Is this a dagger which I see before me, / The handle toward my hand?",
    speaker: "Macbeth (2.1)",
    analysis:
      "The hallucinated dagger symbolises Macbeth's tortured conscience and the pull of temptation. 'The handle toward my hand' suggests fate is guiding him or, alternatively, that he is projecting his own desires. The ambiguity (real or hallucination?) mirrors the play's supernatural uncertainty.",
  },
  {
    quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
    speaker: "Macbeth (2.2)",
    analysis:
      "Immediately after murdering Duncan, Macbeth realises his guilt is permanent. The hyperbole (all the ocean cannot wash him clean) shows guilt is overwhelming and inescapable. This contrasts with Lady Macbeth's dismissive 'A little water clears us of this deed' - an irony that reverses in Act 5.",
  },
  {
    quote: "A little water clears us of this deed",
    speaker: "Lady Macbeth (2.2)",
    analysis:
      "Lady Macbeth is practical and dismissive of guilt. The simplicity of 'a little water' contrasts with Macbeth's 'great Neptune's ocean,' showing their different responses to guilt. This line becomes deeply ironic in Act 5 when Lady Macbeth obsessively washes her hands in her sleep.",
  },
  {
    quote: "Macbeth does murder sleep",
    speaker: "Macbeth (2.2)",
    analysis:
      "Macbeth hears a voice after the murder. Sleep symbolises innocence, peace, and natural order - all of which Macbeth has destroyed. Personifying sleep as a murder victim emphasises the totality of what Macbeth has done. He will never sleep peacefully again.",
  },
  {
    quote: "O, full of scorpions is my mind, dear wife!",
    speaker: "Macbeth (3.2)",
    analysis:
      "The scorpion metaphor conveys Macbeth's torment - his thoughts are poisonous, stinging, and inescapable. 'Dear wife' is poignant: he still seeks comfort from Lady Macbeth but can no longer share his plans. The intimacy is fading. The image is visceral and physical, making the psychological horror tangible.",
  },
  {
    quote: "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er",
    speaker: "Macbeth (3.4)",
    analysis:
      "Macbeth uses a blood-wading metaphor to describe his moral descent. He has gone so far into evil that going back seems as difficult as continuing. 'Tedious' is chillingly casual - murder has become mundane. This marks the point of no return in his moral deterioration.",
  },
  {
    quote: "Double, double toil and trouble; / Fire burn and cauldron bubble",
    speaker: "The Witches (4.1)",
    analysis:
      "The Witches' incantation creates an atmosphere of chaos and evil. The trochaic tetrameter (stressed-unstressed rhythm) contrasts with the play's usual iambic pentameter, marking the supernatural as fundamentally different. The repeated 'double' suggests multiplication of evil.",
  },
  {
    quote: "By the pricking of my thumbs, / Something wicked this way comes",
    speaker: "Second Witch (4.1)",
    analysis:
      "Even the Witches now call Macbeth 'wicked.' He has surpassed them in evil. This is a significant turning point - the forces of darkness recognise him as one of their own. The rhyming couplet and childlike rhythm make the evil feel nursery-rhyme simple and inevitable.",
  },
  {
    quote: "He has no children. All my pretty ones? / Did you say all?",
    speaker: "Macduff (4.3)",
    analysis:
      "Macduff's raw grief at learning his family has been murdered. 'All my pretty ones' is tender and heartbreaking. His anguish contrasts with Macbeth's cold, political violence. 'He has no children' may refer to Macbeth (who has no children to lose) or Malcolm (who cannot understand a father's grief).",
  },
  {
    quote: "I shall do so; / But I must also feel it as a man",
    speaker: "Macduff (4.3)",
    analysis:
      "When told to 'Dispute it like a man,' Macduff redefines masculinity. He will fight, but he also needs to grieve. This directly challenges Lady Macbeth's equation of manhood with ruthlessness. Shakespeare presents emotional honesty as true strength.",
  },
  {
    quote: "Out, damned spot! Out, I say!",
    speaker: "Lady Macbeth (5.1)",
    analysis:
      "In her sleepwalking scene, Lady Macbeth is haunted by imaginary blood on her hands. The guilt she once dismissed ('A little water') now consumes her. The imperative 'Out!' shows desperation. 'Damned' carries its full religious weight - she recognises her soul is condemned. The prose (not verse) suggests her mind has fractured.",
  },
  {
    quote: "All the perfumes of Arabia will not sweeten this little hand",
    speaker: "Lady Macbeth (5.1)",
    analysis:
      "This echoes and reverses Macbeth's 'Neptune's ocean' speech. Now it is Lady Macbeth who understands that guilt cannot be washed away. 'Little hand' is poignant - she seems diminished, vulnerable, even childlike. The contrast with her earlier power is devastating.",
  },
  {
    quote: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day",
    speaker: "Macbeth (5.5)",
    analysis:
      "Macbeth's nihilistic soliloquy upon hearing of Lady Macbeth's death. The repetition of 'tomorrow' and the slow, monosyllabic pace create a sense of weary emptiness. Life has lost all meaning. This is the endpoint of ambition without conscience: not triumph, but hollow despair.",
  },
  {
    quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more",
    speaker: "Macbeth (5.5)",
    analysis:
      "The theatre metaphor is deeply self-aware - Shakespeare has an actor playing Macbeth describe life as an actor's performance. 'Walking shadow' suggests life is insubstantial, a copy of something real. 'Struts and frets' implies that human effort is both pompous and anxious, and ultimately pointless.",
  },
  {
    quote: "A tale / Told by an idiot, full of sound and fury, / Signifying nothing",
    speaker: "Macbeth (5.5)",
    analysis:
      "The climax of Macbeth's despair. Life is reduced to a meaningless story. 'Sound and fury' captures the violence and noise of Macbeth's reign, while 'signifying nothing' reveals its emptiness. This is Shakespeare's most powerful statement of nihilism, yet the play itself contradicts it - Macbeth's story does signify something: a warning about unchecked ambition.",
  },
];

const contextPoints = [
  {
    title: "The Jacobean Era and King James I",
    detail:
      "Macbeth was written around 1606, shortly after James I (James VI of Scotland) became King of England. Shakespeare wrote it partly to flatter James: the play is set in Scotland, features Banquo (James's supposed ancestor), and validates the divine right of kings. James I was fascinated by witchcraft and wrote 'Daemonologie' (1597), which Shakespeare references through the Witches.",
  },
  {
    title: "The Divine Right of Kings",
    detail:
      "Jacobeans believed monarchs were appointed by God. Killing a king was not just treason but a sin against divine order. When Macbeth murders Duncan, the natural world reflects this cosmic disruption: darkness covers the land, horses eat each other, and an owl kills a falcon. The restoration of Malcolm at the end signals that God's order has been restored.",
  },
  {
    title: "The Gunpowder Plot (1605)",
    detail:
      "Just a year before Macbeth was written, Guy Fawkes and Catholic conspirators attempted to blow up Parliament and kill James I. The play's exploration of regicide, treason, and equivocation (a Jesuit technique for lying under oath) directly resonates with this recent event. The Porter's references to equivocators may allude to the trial of Father Garnet, a Gunpowder Plot conspirator.",
  },
  {
    title: "The Great Chain of Being",
    detail:
      "Elizabethans and Jacobeans believed in a divinely ordained hierarchy: God > Angels > Monarch > Nobles > Common People > Animals. Macbeth's murder of Duncan disrupts this chain, causing chaos in nature. The play reinforces this worldview: order is only restored when the rightful king (Malcolm) takes the throne.",
  },
  {
    title: "Witchcraft and Superstition",
    detail:
      "Belief in witchcraft was widespread. James I personally oversaw witch trials. The Witchcraft Act of 1604 made practising witchcraft punishable by death. Shakespeare's audience would have viewed the Witches as genuinely dangerous supernatural beings, not as metaphors. This makes their scenes far more frightening than a modern audience might appreciate.",
  },
  {
    title: "Gender Roles in Jacobean England",
    detail:
      "Women were expected to be obedient, domestic, and subordinate to men. Lady Macbeth's ambition and her attempt to reject femininity ('unsex me here') would have been deeply shocking. Her eventual madness and death could be read as punishment for transgressing gender norms, or as Shakespeare's sympathetic portrayal of a woman trapped by patriarchy.",
  },
];

const essayQuestions = [
  {
    question:
      "Starting with this extract, how does Shakespeare present ambition in Macbeth?",
    plan: [
      "Extract analysis: identify how the specific extract presents ambition (e.g., Macbeth's 'vaulting ambition' soliloquy - language of excess, horse metaphor, admission of no moral justification)",
      "Wider play - Lady Macbeth's ambition: 'unsex me here' - ambition requires rejection of femininity; she channels ambition through Macbeth because women cannot hold political power",
      "Wider play - Ambition corrupts: Macbeth moves from reluctant murderer to ordering the deaths of women and children. 'I am in blood stepp'd in so far' - ambition becomes a trap",
      "Wider play - Consequences: 'Tomorrow and tomorrow' - ambition leads not to fulfilment but to existential emptiness. Shakespeare warns that ambition without morality destroys the self",
      "Context: divine right of kings, Great Chain of Being - ambition that disrupts God's order will be punished. Contrast with Malcolm's legitimate claim.",
    ],
  },
  {
    question:
      "How does Shakespeare present the relationship between Macbeth and Lady Macbeth?",
    plan: [
      "Extract analysis: examine the dynamic shown (e.g., Act 1 Scene 7 - Lady Macbeth dominates, questions his masculinity, takes charge of planning)",
      "Wider play - Initial partnership: she knows his weaknesses ('too full o' th' milk of human kindness'), they share secrets, she is the driving force",
      "Wider play - Growing distance: After the murder, Macbeth keeps secrets from her ('Be innocent of the knowledge, dearest chuck'). He arranges Banquo's murder alone. The endearment 'dearest chuck' is patronising - he has taken control",
      "Wider play - Role reversal: She begins strong and decisive ('A little water clears us'); he ends decisive but empty. She ends broken ('Out, damned spot'); he barely reacts to her death ('She should have died hereafter')",
      "Context: Jacobean marriage was patriarchal. Lady Macbeth's dominance in Act 1 is transgressive. The play could be read as restoring 'proper' gender hierarchy, or as showing how patriarchy damages both partners.",
    ],
  },
  {
    question:
      "How does Shakespeare present guilt in Macbeth?",
    plan: [
      "Extract analysis: e.g., the sleepwalking scene - Lady Macbeth's guilt manifests physically; prose not verse suggests loss of reason; 'Out, damned spot' echoes earlier dismissal of guilt",
      "Wider play - Macbeth's immediate guilt: 'Will all great Neptune's ocean' - hyperbole shows guilt is overwhelming from the start; 'Macbeth does murder sleep' - innocence is destroyed permanently",
      "Wider play - Hallucinations as guilt: the dagger (anticipatory guilt), Banquo's ghost (guilt made visible). Only Macbeth sees the ghost - it is internal, not external",
      "Wider play - Blood imagery tracks guilt: 'blood will have blood'; Lady Macbeth's 'little hand' that perfumes of Arabia cannot sweeten - guilt intensifies over time",
      "Context: Christian worldview - guilt is God's punishment for sin. A Jacobean audience would see guilt as evidence of divine justice. The contrast between Macbeth's guilt and his continued killing shows moral deterioration.",
    ],
  },
  {
    question:
      "How does Shakespeare present the supernatural in Macbeth?",
    plan: [
      "Extract analysis: e.g., the Witches' prophecy (1.3) - trochaic tetrameter disrupts the play's rhythm; riddles and paradox; they ignite pre-existing ambition",
      "Wider play - The dagger: 'Is this a dagger which I see before me?' - Shakespeare leaves ambiguous whether it is supernatural or psychological. The question form shows Macbeth questioning reality",
      "Wider play - Banquo's ghost: visible to Macbeth only - guilt or genuine haunting? Lady Macbeth's reaction ('Are you a man?') grounds the supernatural in gender politics",
      "Wider play - Equivocation: the apparitions' prophecies are technically true but deliberately misleading - 'none of woman born' and 'Birnam Wood.' The supernatural deceives through half-truths",
      "Context: James I's 'Daemonologie,' the Witchcraft Act 1604, the Gunpowder Plot and equivocation. Shakespeare's audience believed in real witchcraft and demonic power.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function MacbethPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-200">
            AQA English Literature &middot; Paper 1
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Macbeth &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            William Shakespeare &middot; Written c. 1606 &middot; Tragedy
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
              className="rounded-full border border-gray-300 px-3 py-1 text-muted-foreground transition hover:bg-primary hover:text-white hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Plot Summary ─────────────────────────────────────────── */}
      <section id="plot" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Plot Summary: Act by Act
        </h2>
        <p className="mt-2 text-muted-foreground">
          Macbeth is Shakespeare&apos;s shortest tragedy, but its pace is relentless.
          The action moves rapidly from prophecy to murder to tyranny to downfall.
        </p>

        <div className="mt-8 space-y-10">
          {actSummaries.map((act) => (
            <div key={act.act}>
              <h3 className="text-lg font-bold text-primary">
                {act.act}: {act.title}
              </h3>
              <div className="mt-4 space-y-3">
                {act.scenes.map((scene) => (
                  <div
                    key={scene.scene}
                    className="rounded-lg border border-border p-4"
                  >
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Scene {scene.scene}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {scene.summary}
                    </p>
                  </div>
                ))}
              </div>
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
            Understanding characters as constructs - Shakespeare made deliberate choices
            about how to present each character to convey meaning.
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
                        className="text-sm italic text-primary-700 bg-primary-50 rounded px-3 py-1.5"
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
        <p className="mt-2 text-muted-foreground">
          Themes are the big ideas Shakespeare explores through the plot, characters,
          and language of the play.
        </p>

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
      <section id="quotations" className="bg-primary-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations and their analysis. In the exam, embed short
            phrases rather than copying entire quotes.
          </p>

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
        <p className="mt-2 text-muted-foreground">
          Context (AO3) is worth 6 marks per question. Integrate it into your
          analysis rather than writing separate &quot;context paragraphs.&quot;
        </p>

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
          <p className="mt-2 text-muted-foreground">
            Practise planning essays in 5 minutes. These are the most commonly
            examined topics.
          </p>

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
          className="text-sm font-medium text-accent hover:text-accent-600 transition"
        >
          &larr; Back to AQA English Literature
        </Link>
      </section>

    </>
  );
}
