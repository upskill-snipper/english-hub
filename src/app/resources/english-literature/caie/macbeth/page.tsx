"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: "Fair is foul, and foul is fair",
    speaker: "The Witches",
    act: "Act 1, Scene 1",
    analysis:
      "Establishes the central theme of moral inversion. The chiasmus signals that appearances are deceptive and the natural order will be disrupted throughout the play.",
  },
  {
    quote: "Stars, hide your fires; / Let not light see my black and deep desires",
    speaker: "Macbeth",
    act: "Act 1, Scene 4",
    analysis:
      "Macbeth already harbours ambition before Lady Macbeth's influence. The imperative verb 'hide' and imagery of darkness versus light foreshadow his descent into evil.",
  },
  {
    quote: "Look like th'innocent flower, / But be the serpent under't",
    speaker: "Lady Macbeth",
    act: "Act 1, Scene 5",
    analysis:
      "Biblical allusion to the serpent in Eden. Lady Macbeth counsels deception, reinforcing the 'fair is foul' motif and showing her as the driving force behind the murder plot.",
  },
  {
    quote:
      "Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty",
    speaker: "Lady Macbeth",
    act: "Act 1, Scene 5",
    analysis:
      "Lady Macbeth rejects femininity, associating it with compassion. The violent imperative 'unsex me' and the invocation of spirits challenge Jacobean gender roles and link ambition to the supernatural.",
  },
  {
    quote: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition",
    speaker: "Macbeth",
    act: "Act 1, Scene 7",
    analysis:
      "The horse-riding metaphor reveals Macbeth recognises he has no legitimate reason to kill Duncan. 'Vaulting ambition' personifies his desire as reckless and uncontrollable, foreshadowing his overreach and fall.",
  },
  {
    quote:
      "Is this a dagger which I see before me, / The handle toward my hand?",
    speaker: "Macbeth",
    act: "Act 2, Scene 1",
    analysis:
      "The hallucinated dagger represents Macbeth's psychological torment. The rhetorical question shows his wavering resolve, while the dagger pointing toward Duncan's chamber suggests fate or temptation guiding him.",
  },
  {
    quote:
      "Will all great Neptune's ocean wash this blood / Clean from my hand?",
    speaker: "Macbeth",
    act: "Act 2, Scene 2",
    analysis:
      "Hyperbolic imagery conveys the permanence of guilt. The classical allusion to Neptune elevates the crime to a cosmic scale, foreshadowing the blood motif that recurs throughout.",
  },
  {
    quote: "A little water clears us of this deed",
    speaker: "Lady Macbeth",
    act: "Act 2, Scene 2",
    analysis:
      "Contrasts sharply with Macbeth's guilt. Her dismissive tone and the understatement 'a little water' reveal her pragmatism here, which makes her later breakdown (Act 5) even more dramatically powerful.",
  },
  {
    quote: "O, full of scorpions is my mind, dear wife!",
    speaker: "Macbeth",
    act: "Act 3, Scene 2",
    analysis:
      "The metaphor of scorpions conveys paranoia and mental anguish. The intimate address 'dear wife' is poignant as it is one of the last moments of closeness between them before their relationship deteriorates.",
  },
  {
    quote: "Blood will have blood",
    speaker: "Macbeth",
    act: "Act 3, Scene 4",
    analysis:
      "Proverbial language acknowledges that violence begets violence. Macbeth recognises the cycle of retribution but is unable to stop. The monosyllabic repetition creates a heavy, fatalistic rhythm.",
  },
  {
    quote:
      "Double, double toil and trouble; / Fire burn, and cauldron bubble",
    speaker: "The Witches",
    act: "Act 4, Scene 1",
    analysis:
      "Trochaic tetrameter breaks from the iambic pentameter of the rest of the play, marking the witches as unnatural. The incantatory rhythm and alliteration create a ritualistic, menacing atmosphere.",
  },
  {
    quote: "None of woman born / Shall harm Macbeth",
    speaker: "Second Apparition",
    act: "Act 4, Scene 1",
    analysis:
      "An equivocation: Macduff was 'from his mother's womb / Untimely ripp'd' (caesarean). Shakespeare shows how the witches' prophecies are technically true but deliberately misleading, punishing Macbeth's overconfidence.",
  },
  {
    quote: "He has no children. All my pretty ones? / Did you say all?",
    speaker: "Macduff",
    act: "Act 4, Scene 3",
    analysis:
      "Macduff's grief is raw and human, offering a moral counterpoint to Macbeth. The repeated 'all' and the anguished questions humanise the political conflict and highlight the human cost of tyranny.",
  },
  {
    quote: "I must also feel it as a man",
    speaker: "Macduff",
    act: "Act 4, Scene 3",
    analysis:
      "Macduff redefines masculinity in opposition to Lady Macbeth's earlier equation of manhood with violence. To 'feel it as a man' means to grieve openly, suggesting emotional depth is true strength. This challenges the toxic masculinity that drives Macbeth's crimes.",
  },
  {
    quote: "Out, damned spot! Out, I say!",
    speaker: "Lady Macbeth",
    act: "Act 5, Scene 1",
    analysis:
      "The imagined bloodstain echoes 'a little water clears us of this deed' and reveals her psychological collapse. The imperative 'Out!' is impotent; she cannot command away guilt as she once commanded Macbeth.",
  },
  {
    quote:
      "All the perfumes of Arabia will not sweeten this little hand",
    speaker: "Lady Macbeth",
    act: "Act 5, Scene 1",
    analysis:
      "Parallels Macbeth's 'Neptune's ocean' speech. The sensory shift from sight (blood) to smell deepens the guilt motif. 'Little hand' is a rare moment of vulnerability from a character defined by her strength.",
  },
  {
    quote:
      "I have lived long enough. My way of life / Is fall'n into the sere, the yellow leaf",
    speaker: "Macbeth",
    act: "Act 5, Scene 3",
    analysis:
      "Autumnal imagery conveys decay and disillusionment. Macbeth recognises that he has sacrificed everything (honour, friendship, love) for a crown that brings no fulfilment. The tone is weary rather than defiant.",
  },
  {
    quote:
      "She should have died hereafter; / There would have been a time for such a word",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "Macbeth's muted response to Lady Macbeth's death reveals emotional numbness. 'Hereafter' is ambiguous: it could mean 'later' or 'in the afterlife', reflecting his fractured relationship with time and meaning.",
  },
  {
    quote:
      "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "One of Shakespeare's most famous soliloquies. The triple repetition and sibilance create a weary, plodding rhythm. Life is reduced to meaningless repetition; nihilism replaces the ambition that once drove him.",
  },
  {
    quote:
      "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "The metatheatrical metaphor compares life to a bad actor. 'Struts and frets' conveys pointless agitation. This existential despair is Macbeth's final philosophical position: a complete inversion of his earlier ambition.",
  },
  {
    quote:
      "It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "The culmination of the 'Tomorrow' soliloquy. The juxtaposition of 'sound and fury' with 'nothing' encapsulates Macbeth's nihilism. For a character who murdered a king, the conclusion that life is meaningless is devastating.",
  },
  {
    quote: "Turn, hell-hound, turn!",
    speaker: "Macduff",
    act: "Act 5, Scene 8",
    analysis:
      "Macduff's epithet reduces Macbeth to a demonic animal. The monosyllabic imperative is forceful and direct, contrasting with Macbeth's elaborate language. Justice is simple; tyranny is complex.",
  },
  {
    quote: "This dead butcher and his fiend-like queen",
    speaker: "Malcolm",
    act: "Act 5, Scene 9",
    analysis:
      "Malcolm's reductive summary strips Macbeth and Lady Macbeth of their complexity. The audience knows they are more than 'butcher' and 'fiend'; this gap between political label and human reality is dramatically powerful.",
  },
];

const characters = [
  {
    name: "Macbeth",
    role: "Protagonist / Tragic Hero",
    description:
      "A brave Scottish general whose ambition is ignited by the witches' prophecy and his wife's persuasion. He murders King Duncan and becomes a tyrannical ruler, increasingly isolated and paranoid.",
    arc: "Macbeth's trajectory is the central arc of the play. He moves from 'brave Macbeth' (a heroic soldier praised by the Captain) to a nihilistic tyrant who sees life as 'signifying nothing'. His psychological deterioration is charted through his soliloquies: the dagger hallucination (Act 2), the scorpions of the mind (Act 3), and the 'Tomorrow' speech (Act 5).",
    keyQuotes: [
      "'Stars, hide your fires' — early ambition, guilt already present",
      "'Full of scorpions is my mind' — paranoia after Banquo's murder",
      "'Tomorrow, and tomorrow, and tomorrow' — nihilistic despair",
    ],
    examTip:
      "Shakespeare presents Macbeth as both villain and tragic hero. For AO4 (personal response), consider whether the audience feels pity or horror — or both — at different points. His 'vaulting ambition' is his hamartia (tragic flaw), fitting the classical tragic pattern.",
  },
  {
    name: "Lady Macbeth",
    role: "Catalyst / Macbeth's Wife",
    description:
      "The catalyst for Duncan's murder who challenges Jacobean gender norms by being more ruthless than her husband in the early acts. Her 'unsex me' soliloquy invokes dark forces to strip her of feminine compassion.",
    arc: "Lady Macbeth's arc is an inversion of Macbeth's. She begins as the dominant partner, manipulating Macbeth through attacks on his masculinity ('When you durst do it, then you were a man'). By Act 3, she is increasingly sidelined as Macbeth acts alone. In Act 5, her sleepwalking scene reveals total psychological collapse — the woman who said 'a little water clears us of this deed' now cannot remove an imaginary bloodstain.",
    keyQuotes: [
      "'Unsex me here' — rejects femininity, invokes the supernatural",
      "'Look like th'innocent flower, / But be the serpent under't' — counsels deception",
      "'Out, damned spot!' — guilt destroys her",
    ],
    examTip:
      "For AO3, analyse how Shakespeare uses prose in her sleepwalking scene (5.1) to show her mental disintegration — she has lost the control that verse represents. Her offstage death denies the audience closure, which is itself dramatically significant.",
  },
  {
    name: "Banquo",
    role: "Macbeth's Foil",
    description:
      "Macbeth's fellow general who also hears the witches' prophecies but chooses not to act on them. He serves as Macbeth's moral foil: both men are tempted, but Banquo resists.",
    arc: "Banquo's role is to demonstrate that the witches' prophecies do not compel action — there is always a choice. His soliloquy in Act 3, Scene 1 ('Thou hast it now') shows he suspects Macbeth of foul play but does not act. His murder demonstrates Macbeth's descent from killing a king to killing his closest friend. As a ghost, Banquo is more powerful than he was alive, becoming the physical manifestation of Macbeth's guilt.",
    keyQuotes: [
      "'Thou hast it now: King, Cawdor, Glamis, all' — suspicion of Macbeth",
      "His ghost's silent presence at the banquet — guilt made visible",
    ],
    examTip:
      "Historically, Banquo was the ancestor of King James I, so Shakespeare presents him favourably. This is important context (AO2) — Shakespeare was writing for a patron who claimed descent from Banquo.",
  },
  {
    name: "Macduff",
    role: "Nemesis / Instrument of Justice",
    description:
      "The Thane of Fife and the instrument of Macbeth's downfall. His grief at the murder of his family is one of the most emotionally powerful moments in the play.",
    arc: "Macduff represents loyalty to Scotland over personal ambition. His decision to flee to England (leaving his family unprotected) creates a moral complexity — Malcolm questions his motives in Act 4, Scene 3. His caesarean birth fulfils the witches' equivocation that 'none of woman born' can harm Macbeth. In killing Macbeth, he restores the natural order.",
    keyQuotes: [
      "'All my pretty ones? Did you say all?' — raw grief",
      "'I must also feel it as a man' — redefines masculinity",
      "'Turn, hell-hound, turn!' — agent of retribution",
    ],
    examTip:
      "For AO4, Macduff's line 'I must also feel it as a man' is crucial for the theme of masculinity. It directly challenges Lady Macbeth's earlier equation of manhood with violence and suggests that emotional honesty is true strength.",
  },
  {
    name: "Duncan",
    role: "The Good King",
    description:
      "The King of Scotland, presented as generous, trusting, and gracious. His murder is the original sin of the play and disrupts the natural order.",
    arc: "Duncan exists largely as a symbol of good kingship. His language is warm and generous ('This castle hath a pleasant seat'), which creates dramatic irony given the murder planned within its walls. He is trusting to the point of naivety — he admits 'There's no art to find the mind's construction in the face' about the original Thane of Cawdor, then immediately trusts the new one (Macbeth). His goodness makes the regicide all the more heinous.",
    keyQuotes: [
      "'This castle hath a pleasant seat' — dramatic irony",
      "'There's no art to find the mind's construction in the face' — trusting nature",
    ],
    examTip:
      "For AO2 (context), Duncan embodies the Divine Right of Kings. His murder is not just a political crime but a sin against God, which is why nature itself responds with storms and darkness.",
  },
  {
    name: "The Witches (Weird Sisters)",
    role: "Agents of Chaos / Supernatural Catalysts",
    description:
      "Three supernatural figures who prophesy Macbeth's rise to power. Their role is deliberately ambiguous: do they cause events or merely predict them?",
    arc: "The Witches frame the play, appearing in Act 1 and Act 4. They speak in trochaic tetrameter and riddling equivocations, marking them as outside the natural order. Their prophecies are technically true but designed to mislead ('none of woman born'). The central question is whether they control Macbeth or simply reveal desires already within him — this is the core of the fate versus free will debate.",
    keyQuotes: [
      "'Fair is foul, and foul is fair' — moral inversion",
      "'Double, double toil and trouble' — ritualistic incantation",
      "'None of woman born / Shall harm Macbeth' — equivocation",
    ],
    examTip:
      "For AO2, James I published Daemonologie (1597) and would have seen the witches as genuinely dangerous. For AO3, note their trochaic tetrameter (stressed-unstressed) versus the rest of the play's iambic pentameter (unstressed-stressed) — the rhythm itself marks them as unnatural.",
  },
];

const themes = [
  {
    name: "Ambition",
    detail:
      "The play explores ambition as a destructive force. Macbeth's 'vaulting ambition' overrides his moral judgement, leading to regicide, tyranny, and self-destruction. Shakespeare suggests that unchecked ambition corrupts absolutely; it isolates Macbeth from his wife, his peers, and ultimately from his own humanity.",
    keyMoments: [
      "Macbeth's aside after the first prophecy comes true reveals ambition already present before Lady Macbeth's influence (Act 1, Scene 3)",
      "Lady Macbeth's manipulation in Act 1, Scene 7 uses his ambition against him",
      "The 'Tomorrow' soliloquy (Act 5, Scene 5) shows ambition's final result: nihilism and emptiness",
    ],
    relatedQuotes: [
      "'I have no spur to prick the sides of my intent, but only / Vaulting ambition'",
      "'Stars, hide your fires; let not light see my black and deep desires'",
    ],
  },
  {
    name: "Guilt and Conscience",
    detail:
      "Guilt manifests physically and psychologically: Macbeth hallucinates a dagger and Banquo's ghost; Lady Macbeth sleepwalks and obsessively washes her hands. Blood becomes the central symbol of guilt. Shakespeare demonstrates that while murder can be committed quickly, its psychological consequences are permanent.",
    keyMoments: [
      "The dagger hallucination before Duncan's murder (Act 2, Scene 1)",
      "Macbeth's inability to say 'Amen' after the murder (Act 2, Scene 2)",
      "Banquo's ghost at the banquet (Act 3, Scene 4)",
      "Lady Macbeth's sleepwalking scene (Act 5, Scene 1)",
    ],
    relatedQuotes: [
      "'Will all great Neptune's ocean wash this blood clean from my hand?'",
      "'Out, damned spot! Out, I say!'",
    ],
  },
  {
    name: "Fate versus Free Will",
    detail:
      "The witches' prophecies raise the central philosophical question: is Macbeth fated to murder Duncan, or does he choose to? The prophecies could be read as simply predicting what Macbeth would do anyway — his ambitious nature is established before the witches appear. Shakespeare leaves this deliberately ambiguous, allowing audiences to debate whether Macbeth is a victim of supernatural manipulation or the architect of his own destruction.",
    keyMoments: [
      "The witches predict but do not explicitly instruct Macbeth to kill Duncan",
      "Banquo hears the same prophecies but chooses not to act — proving choice exists",
      "The equivocal second set of prophecies (Act 4) give Macbeth false confidence",
    ],
    relatedQuotes: [
      "'If chance will have me king, why, chance may crown me / Without my stir'",
      "'None of woman born / Shall harm Macbeth' — technically true but misleading",
    ],
  },
  {
    name: "Appearance versus Reality",
    detail:
      "The motif of deception runs throughout the play. The witches equivocate, Lady Macbeth tells Macbeth to 'look like th'innocent flower', Macbeth plays the grieving host after Duncan's murder. The opening paradox 'fair is foul, and foul is fair' establishes that nothing in the play is as it seems. Even the prophecies that appear reassuring ('none of woman born') conceal deadly truths.",
    keyMoments: [
      "Duncan's misjudgement of the original Thane of Cawdor, then immediately trusting the new one (Act 1, Scene 4)",
      "Lady Macbeth fainting (real or feigned?) when Duncan's body is discovered (Act 2, Scene 3)",
      "Birnam Wood 'moving' — camouflage fulfils the prophecy literally (Act 5)",
    ],
    relatedQuotes: [
      "'Fair is foul, and foul is fair'",
      "'Look like th'innocent flower, / But be the serpent under't'",
      "'There's no art to find the mind's construction in the face'",
    ],
  },
  {
    name: "Masculinity and Gender",
    detail:
      "Lady Macbeth equates masculinity with violence and ambition, manipulating Macbeth by questioning his manhood. She herself asks to be 'unsexed', rejecting femininity as weakness. The play interrogates Jacobean gender norms, ultimately suggesting that violence is not true strength. Macduff's open grief ('I must also feel it as a man') redefines masculinity as emotional honesty, directly challenging Lady Macbeth's toxic definition.",
    keyMoments: [
      "Lady Macbeth's 'unsex me here' invocation (Act 1, Scene 5)",
      "'When you durst do it, then you were a man' — manipulation through gender shaming (Act 1, Scene 7)",
      "Macduff's grief: 'I must also feel it as a man' — the counter-definition (Act 4, Scene 3)",
    ],
    relatedQuotes: [
      "'Unsex me here, / And fill me from the crown to the toe top-full of direst cruelty'",
      "'I dare do all that may become a man; / Who dares do more is none'",
    ],
  },
  {
    name: "The Supernatural",
    detail:
      "Witchcraft, prophecy, hallucinations, and ghostly apparitions pervade the play. The supernatural creates atmosphere, drives the plot, and raises questions about fate versus free will. Written for James I (who published Daemonologie), the play reflects contemporary anxieties about demonic influence. The supernatural elements also blur the line between external evil and internal psychological states.",
    keyMoments: [
      "The witches' opening scene establishes an atmosphere of evil",
      "Macbeth's dagger hallucination — supernatural or psychological? (Act 2, Scene 1)",
      "Banquo's ghost — visible to Macbeth but not to other characters (Act 3, Scene 4)",
      "The apparitions and cauldron scene (Act 4, Scene 1)",
    ],
    relatedQuotes: [
      "'Double, double toil and trouble'",
      "'Is this a dagger which I see before me?'",
    ],
  },
  {
    name: "Kingship and Natural Order",
    detail:
      "Shakespeare contrasts Duncan's benevolent rule with Macbeth's tyranny to explore what makes a good king. The Divine Right of Kings meant regicide was a sin against God, explaining the cosmic disturbances following Duncan's death. The Great Chain of Being (God, king, nobles, commoners) is shattered by regicide. Malcolm's restoration represents the return of natural order.",
    keyMoments: [
      "Duncan's gracious language as a generous king (Act 1)",
      "The Old Man's description of unnatural events after Duncan's death (Act 2, Scene 4)",
      "Malcolm's self-test with Macduff, listing kingly virtues (Act 4, Scene 3)",
      "Malcolm's crowning speech restoring order (Act 5, Scene 9)",
    ],
    relatedQuotes: [
      "'This castle hath a pleasant seat' — Duncan's trust and goodness",
      "'This dead butcher and his fiend-like queen' — Malcolm's reductive verdict",
    ],
  },
];

const plotSummary = [
  {
    act: "Act 1",
    title: "Prophecy and Temptation",
    scenes: [
      {
        scene: "Scene 1",
        summary:
          "The three Witches meet on a heath amid thunder and lightning, establishing the atmosphere of evil with 'Fair is foul, and foul is fair'.",
      },
      {
        scene: "Scene 2",
        summary:
          "A wounded Captain reports Macbeth's bravery in battle against the rebel Macdonwald and the Norwegian army. Duncan awards the title Thane of Cawdor to Macbeth.",
      },
      {
        scene: "Scene 3",
        summary:
          "The Witches prophesy that Macbeth will become Thane of Cawdor and King, and that Banquo's descendants will be kings. Ross arrives to confirm Macbeth is now Thane of Cawdor. Macbeth's aside reveals his first thoughts of murder.",
      },
      {
        scene: "Scene 4",
        summary:
          "Duncan names Malcolm as his heir. Macbeth recognises this as an obstacle and asks the stars to 'hide your fires' — his ambition is growing.",
      },
      {
        scene: "Scene 5",
        summary:
          "Lady Macbeth reads Macbeth's letter and fears he is 'too full o'th'milk of human kindness'. She delivers the 'unsex me' soliloquy, invoking dark spirits. She tells Macbeth to 'look like th'innocent flower, but be the serpent under't'.",
      },
      {
        scene: "Scene 6",
        summary:
          "Duncan arrives at Macbeth's castle and praises its 'pleasant seat' — dramatic irony, as his murder is being planned within.",
      },
      {
        scene: "Scene 7",
        summary:
          "Macbeth's soliloquy ('If it were done when 'tis done') weighs the arguments against murder. He decides to proceed no further. Lady Macbeth attacks his manhood and outlines the plan to frame the guards. Macbeth agrees: 'I am settled'.",
      },
    ],
    keyQuotations: [
      { quote: "Fair is foul, and foul is fair", context: "Witches — establishes moral inversion" },
      { quote: "Stars, hide your fires; / Let not light see my black and deep desires", context: "Macbeth — ambition emerges" },
      { quote: "Unsex me here", context: "Lady Macbeth — invokes supernatural aid" },
      { quote: "Look like th'innocent flower, / But be the serpent under't", context: "Lady Macbeth — appearance vs reality" },
    ],
  },
  {
    act: "Act 2",
    title: "The Murder of Duncan",
    scenes: [
      {
        scene: "Scene 1",
        summary:
          "Macbeth sees a hallucinated dagger leading him to Duncan's chamber. The soliloquy 'Is this a dagger which I see before me?' reveals his psychological torment.",
      },
      {
        scene: "Scene 2",
        summary:
          "Macbeth murders Duncan but is so disturbed he brings the daggers away with him and cannot return. Lady Macbeth returns them and smears the sleeping guards with blood. Macbeth believes he heard a voice cry 'Sleep no more! Macbeth does murder sleep.'",
      },
      {
        scene: "Scene 3",
        summary:
          "The Porter provides comic relief with his 'hell gate' speech. Macduff discovers Duncan's body. Macbeth kills the guards, claiming rage. Lady Macbeth faints (perhaps strategically). Malcolm and Donalbain flee.",
      },
      {
        scene: "Scene 4",
        summary:
          "The Old Man describes unnatural events: darkness at noon, an owl killing a falcon, Duncan's horses eating each other. These pathetic fallacy details show nature recoiling from the disruption of the Great Chain of Being. Macbeth is named King.",
      },
    ],
    keyQuotations: [
      { quote: "Is this a dagger which I see before me, / The handle toward my hand?", context: "Macbeth — hallucination, guilt" },
      { quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?", context: "Macbeth — permanence of guilt" },
      { quote: "A little water clears us of this deed", context: "Lady Macbeth — pragmatic dismissal (ironic in hindsight)" },
    ],
  },
  {
    act: "Act 3",
    title: "Paranoia and Banquo's Ghost",
    scenes: [
      {
        scene: "Scene 1",
        summary:
          "Banquo suspects Macbeth ('Thou hast it now'). Macbeth, fearing the prophecy about Banquo's descendants, hires murderers — notably without telling Lady Macbeth, marking the beginning of their separation.",
      },
      {
        scene: "Scene 2",
        summary:
          "Lady Macbeth urges Macbeth to be cheerful at the banquet. Macbeth reveals 'O, full of scorpions is my mind' but keeps his plans from her — their partnership is fracturing.",
      },
      {
        scene: "Scene 3",
        summary: "The murderers kill Banquo but Fleance escapes, preserving the witches' prophecy about Banquo's line.",
      },
      {
        scene: "Scene 4",
        summary:
          "At the banquet, Macbeth sees Banquo's ghost and reacts wildly, nearly revealing his guilt. Lady Macbeth dismisses the guests. Macbeth resolves to visit the Witches again. He declares 'Blood will have blood.'",
      },
    ],
    keyQuotations: [
      { quote: "O, full of scorpions is my mind, dear wife!", context: "Macbeth — paranoia, deteriorating relationship" },
      { quote: "Blood will have blood", context: "Macbeth — cycle of violence" },
    ],
  },
  {
    act: "Act 4",
    title: "False Security and Macduff's Grief",
    scenes: [
      {
        scene: "Scene 1",
        summary:
          "The Witches show Macbeth three apparitions: (1) beware Macduff, (2) none of woman born shall harm Macbeth, (3) he is safe until Birnam Wood comes to Dunsinane. Emboldened, Macbeth orders the murder of Macduff's family.",
      },
      {
        scene: "Scene 2",
        summary:
          "Lady Macduff and her children are murdered. This is Macbeth's most morally inexcusable act — killing innocents with no political justification.",
      },
      {
        scene: "Scene 3",
        summary:
          "In England, Malcolm tests Macduff's loyalty by pretending to be unfit to rule. Macduff passes the test. He then learns of his family's murder: 'All my pretty ones? Did you say all?' He vows revenge, and Malcolm's army prepares to march on Scotland.",
      },
    ],
    keyQuotations: [
      { quote: "Double, double toil and trouble", context: "Witches — ritualistic atmosphere" },
      { quote: "None of woman born / Shall harm Macbeth", context: "Apparition — equivocation" },
      { quote: "He has no children. All my pretty ones?", context: "Macduff — raw grief, human cost of tyranny" },
    ],
  },
  {
    act: "Act 5",
    title: "Collapse, Retribution, and Restoration",
    scenes: [
      {
        scene: "Scene 1",
        summary:
          "Lady Macbeth sleepwalks, obsessively trying to wash imaginary blood from her hands. She speaks in prose (not verse), reflecting her mental disintegration. The Doctor and Gentlewoman watch in horror. 'Out, damned spot!' echoes and inverts her earlier dismissal of guilt.",
      },
      {
        scene: "Scene 2",
        summary: "Scottish lords join Malcolm's forces, describing Macbeth's rule as a disease afflicting Scotland.",
      },
      {
        scene: "Scene 3",
        summary:
          "Macbeth clings to the witches' prophecies but delivers the weary 'I have lived long enough' speech, recognising he has lost everything meaningful.",
      },
      {
        scene: "Scene 4",
        summary: "Malcolm orders soldiers to cut branches from Birnam Wood for camouflage, fulfilling the prophecy literally.",
      },
      {
        scene: "Scene 5",
        summary:
          "Macbeth learns of Lady Macbeth's death and responds with the 'Tomorrow, and tomorrow, and tomorrow' soliloquy — a nihilistic meditation on the meaninglessness of life. He then learns Birnam Wood is 'moving'.",
      },
      {
        scene: "Scenes 6-9",
        summary:
          "The battle begins. Macbeth fights on despite knowing the prophecies are failing. Macduff reveals he was born by caesarean section. Macbeth refuses to surrender and is killed. Malcolm is crowned King of Scotland, restoring the natural order.",
      },
    ],
    keyQuotations: [
      { quote: "Out, damned spot! Out, I say!", context: "Lady Macbeth — guilt, psychological collapse" },
      { quote: "Tomorrow, and tomorrow, and tomorrow", context: "Macbeth — nihilism, life is meaningless" },
      { quote: "Turn, hell-hound, turn!", context: "Macduff — retribution" },
      { quote: "This dead butcher and his fiend-like queen", context: "Malcolm — reductive political label" },
    ],
  },
];

const languageAnalysis = [
  {
    title: "Blood Imagery",
    detail:
      "Blood is the play's most pervasive symbol, representing guilt, violence, and the irreversibility of Macbeth's crimes. It develops from literal blood (Duncan's murder) to psychological blood (hallucinations, Lady Macbeth's 'spot'). Macbeth's hands are stained with blood he believes 'all great Neptune's ocean' cannot wash clean; Lady Macbeth initially dismisses the blood ('a little water') but is eventually destroyed by it ('Out, damned spot!'). This parallel and inversion tracks both characters' relationship with guilt.",
    examples: [
      "'Will all great Neptune's ocean wash this blood clean from my hand?' (2.2)",
      "'A little water clears us of this deed' (2.2) — ironic contrast",
      "'Out, damned spot!' (5.1) — Lady Macbeth's reversal",
      "'Blood will have blood' (3.4) — proverbial, fatalistic",
      "'It will have blood, they say: blood will have blood' (3.4)",
    ],
  },
  {
    title: "Darkness and Light Imagery",
    detail:
      "Darkness is associated with evil, concealment, and the supernatural. Macbeth asks the stars to 'hide your fires'; Lady Macbeth invokes 'thick night' and 'the dunnest smoke of hell'. Light represents goodness and truth. The play's action takes place largely at night or in darkness, reinforcing the moral atmosphere. After Duncan's murder, literal darkness falls at noon (pathetic fallacy), reflecting the moral darkness that has descended on Scotland.",
    examples: [
      "'Stars, hide your fires; / Let not light see my black and deep desires' (1.4)",
      "'Come, thick night, / And pall thee in the dunnest smoke of hell' (1.5)",
      "'Light thickens, and the crow makes wing to th'rooky wood' (3.2)",
      "Lady Macbeth's candle in the sleepwalking scene — she who invoked darkness now fears it",
    ],
  },
  {
    title: "Sleep Imagery",
    detail:
      "Sleep represents innocence, natural order, and peace of mind. Macbeth murders Duncan in his sleep — attacking the most vulnerable, innocent state. After the murder, Macbeth hears 'Sleep no more! Macbeth does murder sleep.' He has destroyed his own capacity for rest and peace. Lady Macbeth's sleepwalking in Act 5 is the ultimate irony: her sleep, which should bring rest, instead forces her to relive her crimes.",
    examples: [
      "'Macbeth does murder sleep — the innocent sleep' (2.2)",
      "'Sleep that knits up the ravell'd sleave of care' (2.2) — beautiful description of what Macbeth has lost",
      "Lady Macbeth's sleepwalking (5.1) — sleep brings no peace, only guilt",
    ],
  },
  {
    title: "Soliloquies and Dramatic Form",
    detail:
      "Shakespeare uses soliloquies to reveal characters' inner thoughts, creating dramatic irony (the audience knows more than other characters). Macbeth's major soliloquies track his psychological arc: from moral deliberation ('If it were done when 'tis done', 1.7), through hallucination ('Is this a dagger', 2.1), to nihilism ('Tomorrow, and tomorrow', 5.5). Lady Macbeth's key soliloquy ('Unsex me here', 1.5) reveals her willingness to abandon her humanity. The shift from verse to prose in her sleepwalking scene (5.1) is structurally significant — she has lost the control and rationality that verse represents.",
    examples: [
      "'If it were done when 'tis done, then 'twere well it were done quickly' (1.7) — deliberation",
      "'Is this a dagger which I see before me?' (2.1) — hallucination and guilt",
      "'To be thus is nothing, but to be safely thus' (3.1) — insecurity despite power",
      "'Tomorrow, and tomorrow, and tomorrow' (5.5) — nihilism",
    ],
  },
  {
    title: "Equivocation and Paradox",
    detail:
      "Equivocation (saying something that is technically true but deliberately misleading) is central to the play. The witches equivocate with their prophecies: 'none of woman born' appears reassuring but conceals the Macduff loophole. The Porter's speech references the trial of the Jesuit Henry Garnet (1606), who advocated equivocation under oath. The play's opening paradox ('fair is foul') sets the tone: language itself cannot be trusted.",
    examples: [
      "'Fair is foul, and foul is fair' (1.1) — the foundational paradox",
      "'None of woman born / Shall harm Macbeth' (4.1) — technically true but misleading",
      "The Porter: 'Here's an equivocator' (2.3) — topical reference to the Gunpowder Plot trials",
      "'So foul and fair a day I have not seen' (1.3) — Macbeth unknowingly echoes the witches",
    ],
  },
  {
    title: "Metre: Iambic Pentameter and Trochaic Tetrameter",
    detail:
      "Most of the play is written in iambic pentameter (five pairs of unstressed-stressed syllables per line), the standard metre for Shakespearean drama. The Witches, however, speak in trochaic tetrameter (four pairs of stressed-unstressed syllables), which sounds incantatory and rhythmically 'wrong'. This metrical disruption marks them as unnatural and outside the normal order. When characters share lines of verse (split lines), it indicates urgency or connection — Macbeth and Lady Macbeth share lines in the early acts but not later, reflecting their separation.",
    examples: [
      "Iambic pentameter: 'To-MOR-row AND to-MOR-row AND to-MOR-row' (5.5)",
      "Trochaic tetrameter: 'DOU-ble DOU-ble TOIL and TROU-ble' (4.1)",
      "Shared lines between Macbeth and Lady Macbeth in Act 2, Scene 2 show their partnership; by Act 5, they do not share scenes",
    ],
  },
];

const assessmentObjectives = [
  {
    ao: "AO1",
    title: "Knowledge and Understanding",
    description: "Show detailed knowledge of the text and its content.",
    howToMeet:
      "Use specific, accurate quotations (not vague paraphrases). Refer to precise moments in the play by act and scene. Demonstrate understanding of the plot, characters, and their motivations. Embed short quotations fluently within your sentences rather than bolting them on.",
    example:
      "Shakespeare presents Macbeth's guilt immediately after Duncan's murder through the image of 'Neptune's ocean' (2.2), suggesting the blood — and therefore the crime — can never be washed away.",
  },
  {
    ao: "AO2",
    title: "Meanings and Contexts",
    description:
      "Show understanding of how meanings are shaped by contexts (historical, social, cultural).",
    howToMeet:
      "Reference Jacobean beliefs: the Divine Right of Kings, the Great Chain of Being, attitudes to witchcraft (James I's Daemonologie), gender roles. Connect context to meaning — do not simply list historical facts. Explain how context shapes the audience's response.",
    example:
      "A Jacobean audience would have found the regicide particularly horrifying because of the Divine Right of Kings — Duncan's murder is not merely political but an act of cosmic transgression, which Shakespeare signals through the unnatural darkness and storms that follow.",
  },
  {
    ao: "AO3",
    title: "Language, Structure, and Form",
    description:
      "Analyse the writer's methods: language techniques, structural choices, and dramatic form.",
    howToMeet:
      "Identify and analyse specific techniques: metaphor, simile, personification, alliteration, sibilance, caesura, enjambment. Discuss structural choices: soliloquy, dramatic irony, juxtaposition of scenes, the five-act structure, foreshadowing. Consider form: why this is a play (not a poem or novel), how staging affects meaning, the role of the audience.",
    example:
      "Shakespeare's use of trochaic tetrameter for the Witches ('Double, double toil and trouble') disrupts the play's dominant iambic pentameter, rhythmically marking them as outside the natural order. The stressed-unstressed pattern (the reverse of normal verse) creates an incantatory, unsettling effect.",
  },
  {
    ao: "AO4",
    title: "Personal Response",
    description:
      "Develop a personal and informed response to the text.",
    howToMeet:
      "Offer your own interpretation, supported by evidence. Consider alternative readings ('Some critics argue...', 'An alternative interpretation is...'). Use evaluative language ('compellingly', 'Shakespeare powerfully suggests', 'arguably'). Engage with ambiguity — the best responses acknowledge that texts can mean more than one thing.",
    example:
      "It could be argued that Lady Macbeth's fainting in Act 2, Scene 3 is a calculated performance to divert attention from Macbeth's rash killing of the guards. However, given her increasingly fragile psychological state, it is equally possible that the faint is genuine — the first crack in her armour that foreshadows her complete breakdown in Act 5.",
  },
];

/* ─── Collapsible Section Component ──────────────────────────── */

function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-border bg-card shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-foreground transition hover:bg-muted/40"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span
          className={`ml-2 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          &#9660;
        </span>
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
    </div>
  );
}

/* ─── Page Component ─────────────────────────────────────────── */

export default function MacbethStudyGuide() {
  const [activeTab, setActiveTab] = useState<string>("plot");

  const tabs = [
    { id: "plot", label: "Plot Summary" },
    { id: "characters", label: "Characters" },
    { id: "themes", label: "Themes" },
    { id: "quotes", label: "Key Quotes" },
    { id: "language", label: "Language & Structure" },
    { id: "context", label: "Context" },
    { id: "exam", label: "Exam Guidance" },
    { id: "aos", label: "Assessment Objectives" },
  ];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature (0475 / 0992)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Macbeth &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Comprehensive CAIE-specific revision: act-by-act analysis, character studies,
            thematic exploration, 23 key quotations with analysis, language and
            structural techniques, and full exam guidance covering passage-based and
            essay questions with all four Assessment Objectives.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Tab Navigation ────────────────────────────────────── */}
        <nav
          className="mb-10 flex flex-wrap gap-2 text-sm"
          aria-label="Page sections"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`rounded-full border px-3 py-1.5 font-medium transition ${
                activeTab === t.id
                  ? "border-[#2E86C1] bg-[#2E86C1]/10 text-foreground"
                  : "border-border text-muted-foreground hover:border-[#2E86C1]/30 hover:bg-primary/5 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── PLOT SUMMARY TAB ─────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "plot" && (
          <section aria-labelledby="plot-heading">
            <h2
              id="plot-heading"
              className="text-2xl font-bold text-foreground"
            >
              Act-by-Act Summary
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Each act includes a scene-by-scene breakdown and key quotations
              for revision.
            </p>
            <div className="mt-6 space-y-5">
              {plotSummary.map((act) => (
                <CollapsibleSection
                  key={act.act}
                  title={`${act.act}: ${act.title}`}
                  defaultOpen={act.act === "Act 1"}
                >
                  <div className="space-y-3">
                    {act.scenes.map((s) => (
                      <div key={s.scene}>
                        <h4 className="text-sm font-semibold text-foreground">
                          {s.scene}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {s.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                  {act.keyQuotations.length > 0 && (
                    <div className="mt-5 rounded-lg bg-muted/30 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Quotations
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {act.keyQuotations.map((q, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground"
                          >
                            <span className="font-medium italic text-foreground">
                              &ldquo;{q.quote}&rdquo;
                            </span>{" "}
                            &mdash; {q.context}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CollapsibleSection>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── CHARACTERS TAB ───────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "characters" && (
          <section aria-labelledby="characters-heading">
            <h2
              id="characters-heading"
              className="text-2xl font-bold text-foreground"
            >
              Character Analysis
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              In-depth analysis of each major character with key quotations,
              character arcs, and exam tips.
            </p>
            <div className="mt-6 space-y-6">
              {characters.map((c) => (
                <Card key={c.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{c.name}</CardTitle>
                    <CardDescription className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                      {c.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Overview
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Character Arc
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.arc}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Key Quotations
                      </h4>
                      <ul className="mt-1 space-y-1">
                        {c.keyQuotes.map((q, i) => (
                          <li
                            key={i}
                            className="text-sm italic text-muted-foreground"
                          >
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-[#2E86C1]/5 p-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                        Exam Tip
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.examTip}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── THEMES TAB ───────────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "themes" && (
          <section aria-labelledby="themes-heading">
            <h2
              id="themes-heading"
              className="text-2xl font-bold text-foreground"
            >
              Key Themes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Each theme includes detailed analysis, key moments, and related
              quotations you can use in exam responses.
            </p>
            <div className="mt-6 space-y-5">
              {themes.map((t) => (
                <Card key={t.name}>
                  <CardHeader>
                    <CardTitle>{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t.detail}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Key Moments
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {t.keyMoments.map((m, i) => (
                          <li
                            key={i}
                            className="flex text-sm text-muted-foreground"
                          >
                            <span className="mr-2 text-[#2E86C1]">
                              &bull;
                            </span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-muted/30 p-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Related Quotations
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {t.relatedQuotes.map((q, i) => (
                          <li
                            key={i}
                            className="text-sm italic text-muted-foreground"
                          >
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── KEY QUOTES TAB ───────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "quotes" && (
          <section aria-labelledby="quotes-heading">
            <h2
              id="quotes-heading"
              className="text-2xl font-bold text-foreground"
            >
              Key Quotes ({keyQuotes.length})
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Each quote includes the speaker, location, and detailed analysis
              suitable for Cambridge IGCSE responses. These quotations cover
              every act and all major themes.
            </p>
            <div className="mt-6 space-y-5">
              {keyQuotes.map((q, i) => (
                <div
                  key={i}
                  className="rounded-lg border-l-4 border-[#2E86C1] bg-card p-5 shadow-md"
                >
                  <blockquote className="text-base font-medium italic text-foreground">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <p className="mt-1 text-xs font-semibold text-[#2E86C1]">
                    {q.speaker} &mdash; {q.act}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {q.analysis}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── LANGUAGE & STRUCTURE TAB ─────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "language" && (
          <section aria-labelledby="language-heading">
            <h2
              id="language-heading"
              className="text-2xl font-bold text-foreground"
            >
              Language and Structural Analysis
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Detailed analysis of Shakespeare&rsquo;s key techniques in
              Macbeth. This section directly supports AO3 (language, structure,
              and form).
            </p>
            <div className="mt-6 space-y-5">
              {languageAnalysis.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                    <div className="rounded-lg bg-muted/30 p-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Examples
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {item.examples.map((ex, i) => (
                          <li
                            key={i}
                            className="flex text-sm text-muted-foreground"
                          >
                            <span className="mr-2 text-[#2E86C1]">
                              &bull;
                            </span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── CONTEXT TAB ──────────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "context" && (
          <section aria-labelledby="context-heading">
            <h2
              id="context-heading"
              className="text-2xl font-bold text-foreground"
            >
              Historical &amp; Literary Context
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Context supports AO2. Always connect context to meaning — do not
              simply list facts. Explain how context shapes the audience&rsquo;s
              response to the play.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "The Gunpowder Plot (1605)",
                  content:
                    "Macbeth was written in approximately 1606, shortly after the Gunpowder Plot, in which Catholic conspirators attempted to assassinate King James I by blowing up Parliament. The play's exploration of regicide and treason would have resonated powerfully with contemporary audiences who had just witnessed a real attempt to murder their king. The Porter's references to equivocation (2.3) allude to the trial of Jesuit Henry Garnet, who defended lying under oath.",
                },
                {
                  title: "King James I and Witchcraft",
                  content:
                    "James I was fascinated by witchcraft and published Daemonologie (1597), a treatise arguing for the reality of witches. By including the Weird Sisters, Shakespeare appealed directly to the king's interests. The portrayal of witches as malevolent and deceptive aligned with James's own beliefs. James also claimed descent from Banquo, which explains why Shakespeare presents Banquo so favourably (in Holinshed's Chronicles, Banquo was a co-conspirator).",
                },
                {
                  title: "The Divine Right of Kings",
                  content:
                    "The Jacobean belief that monarchs were appointed by God meant that killing a king was not merely murder but a sin against the divine order. This explains the unnatural disturbances (darkness at noon, horses eating each other) that follow Duncan's death — nature itself recoils from the crime. Duncan is presented as an almost saintly figure to heighten the horror of regicide.",
                },
                {
                  title: "The Great Chain of Being",
                  content:
                    "Elizabethan and Jacobean society believed in a strict divinely ordained hierarchy: God, angels, king, nobles, commoners, animals, plants. When Macbeth disrupts this chain by murdering Duncan, chaos ensues at every level — political, natural, and supernatural. The play's resolution (Malcolm restored to the throne) reaffirms the importance of maintaining this order.",
                },
                {
                  title: "Holinshed's Chronicles",
                  content:
                    "Shakespeare's main source was Raphael Holinshed's Chronicles of England, Scotland, and Ireland (1577). He significantly altered the historical record: the real Macbeth ruled for 17 years and was considered a competent king. Shakespeare compressed the timeline and darkened Macbeth's character for dramatic effect, while whitewashing Banquo because he was an ancestor of James I. Understanding these deliberate changes reveals Shakespeare's craft and his political motivations.",
                },
                {
                  title: "Jacobean Gender Roles",
                  content:
                    "In Jacobean England, women were expected to be obedient, gentle, and subordinate to men. Lady Macbeth's dominance over her husband, her invocation to be 'unsexed', and her ruthless pragmatism would have been deeply shocking to a contemporary audience. Her eventual madness and death could be read as a moral warning about the consequences of transgressing gender boundaries — or, alternatively, as Shakespeare's critique of a society that defines femininity so narrowly.",
                },
                {
                  title: "Tragedy as a Genre",
                  content:
                    "Macbeth follows the pattern of classical tragedy established by Aristotle: a high-status protagonist (Macbeth is a Thane, then King) is brought down by a tragic flaw (hamartia) — in this case, 'vaulting ambition'. The audience experiences catharsis (emotional release) through pity and fear. However, Shakespeare complicates the model: Macbeth is also a villain who murders innocents, making it harder to feel straightforward sympathy.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── EXAM GUIDANCE TAB ────────────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "exam" && (
          <section aria-labelledby="exam-heading">
            <h2
              id="exam-heading"
              className="text-2xl font-bold text-foreground"
            >
              CAIE Exam Guidance
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cambridge IGCSE English Literature assesses Macbeth in{" "}
              <strong>Paper 2 (Drama)</strong>. You choose between a
              passage-based question <strong>(a)</strong> and an essay question{" "}
              <strong>(b)</strong>. Both are worth <strong>25 marks</strong>.
              Below is detailed guidance on approaching each type, followed by a
              sample question with a model paragraph.
            </p>

            <div className="mt-8 space-y-6">
              {/* Passage-based guidance */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Passage-Based Questions (a)
                  </CardTitle>
                  <CardDescription>
                    You are given a printed extract and asked how Shakespeare
                    creates a particular effect in that passage.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      How to Approach
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          1.
                        </span>
                        <span>
                          <strong>Read the passage carefully twice.</strong>{" "}
                          Underline key words, images, and shifts in tone.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          2.
                        </span>
                        <span>
                          <strong>Work through the passage sequentially</strong>{" "}
                          — examiners want to see you engaging with the whole
                          extract, not just cherry-picking one quotation.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          3.
                        </span>
                        <span>
                          <strong>Analyse language closely (AO3).</strong>{" "}
                          Identify specific techniques: metaphor, simile,
                          personification, imperative verbs, rhetorical
                          questions, alliteration, sibilance, caesura,
                          enjambment. Name the technique and explain its effect.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          4.
                        </span>
                        <span>
                          <strong>Consider form and structure.</strong> Is it a
                          soliloquy (revealing private thoughts)? Is it verse or
                          prose (and what does that tell us)? Are lines shared
                          between characters? Is there a shift in tone or
                          register?
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          5.
                        </span>
                        <span>
                          <strong>
                            Connect outward from the passage (briefly).
                          </strong>{" "}
                          Link to the rest of the play: how does this passage
                          relate to themes, character arcs, or later events?
                          This shows AO1 (knowledge) but keep it concise —
                          the passage is the focus.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          6.
                        </span>
                        <span>
                          <strong>Include brief context (AO2)</strong> where
                          relevant — but only if it illuminates the passage.
                          Do not write a history essay.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-[#2E86C1]/5 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                      Common Mistakes to Avoid
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        &bull; Narrating what happens instead of analysing how
                        Shakespeare creates effects
                      </li>
                      <li>
                        &bull; Ignoring large sections of the extract
                      </li>
                      <li>
                        &bull; Identifying techniques without explaining their
                        effect (&ldquo;Shakespeare uses a metaphor&rdquo; is not
                        analysis)
                      </li>
                      <li>
                        &bull; Writing about context at length without
                        connecting it to the passage
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Essay question guidance */}
              <Card>
                <CardHeader>
                  <CardTitle>Essay Questions (b)</CardTitle>
                  <CardDescription>
                    You write about the whole play in response to a question
                    about a character, theme, or relationship.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      How to Approach
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          1.
                        </span>
                        <span>
                          <strong>Plan before you write.</strong> Spend 5
                          minutes identifying 3&ndash;4 key points with
                          supporting quotations. Think about how your argument
                          will develop.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          2.
                        </span>
                        <span>
                          <strong>
                            Structure your essay around the question.
                          </strong>{" "}
                          Every paragraph should directly address the question.
                          Avoid a &ldquo;everything I know about Macbeth&rdquo;
                          approach.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          3.
                        </span>
                        <span>
                          <strong>
                            Use the PEA/PEAL structure for each paragraph:
                          </strong>{" "}
                          Point, Evidence (quotation), Analysis, Link (back to
                          the question or to the next point).
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          4.
                        </span>
                        <span>
                          <strong>
                            Embed quotations (AO1) and analyse them closely
                            (AO3).
                          </strong>{" "}
                          Short, embedded quotations are more effective than long
                          block quotes. Always explain why the quotation is
                          significant — what does the language reveal?
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          5.
                        </span>
                        <span>
                          <strong>
                            Track development across the play.
                          </strong>{" "}
                          Show how characters, themes, or relationships change
                          from beginning to end. Examiners reward answers that
                          demonstrate awareness of the whole text.
                        </span>
                      </li>
                      <li className="flex">
                        <span className="mr-2 font-bold text-[#2E86C1]">
                          6.
                        </span>
                        <span>
                          <strong>Offer personal response (AO4).</strong> Use
                          phrases like &ldquo;arguably&rdquo;, &ldquo;it could
                          be interpreted that&rdquo;, &ldquo;Shakespeare
                          powerfully suggests&rdquo;. Consider alternative
                          readings.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-[#2E86C1]/5 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                      Top-Band Essay Checklist
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        &bull; Every paragraph directly addresses the question
                      </li>
                      <li>
                        &bull; At least 4&ndash;5 embedded quotations, each
                        analysed for language effect
                      </li>
                      <li>
                        &bull; Awareness of the whole play (beginning, middle,
                        and end)
                      </li>
                      <li>
                        &bull; Context integrated naturally (not bolted on)
                      </li>
                      <li>
                        &bull; Personal response with evaluative language
                      </li>
                      <li>
                        &bull; A conclusion that offers a developed judgement,
                        not just a summary
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Sample questions */}
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Sample Exam Questions
                </h3>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      type: "Passage-Based (a)",
                      question:
                        "Re-read Act 1, Scene 7, from 'If it were done when \u2019tis done' to 'We will proceed no further in this business.' How does Shakespeare present Macbeth's inner conflict in this passage?",
                      guidance: [
                        "Work through the passage line by line, identifying key language choices",
                        "Analyse the conditional 'If' — shows Macbeth is not yet committed",
                        "Discuss the soliloquy form: private speech reveals genuine thoughts the audience alone can hear",
                        "Examine the extended metaphor of the 'vaulting ambition' horse-rider — overreach and fall",
                        "Connect outward: link to his later reversal when Lady Macbeth persuades him",
                        "Use terminology: metaphor, listing, monosyllabic language, caesura, conditional mood",
                      ],
                    },
                    {
                      type: "Essay (b)",
                      question:
                        "How does Shakespeare present the theme of guilt in Macbeth?",
                      guidance: [
                        "Plan 3–4 key points with supporting quotations",
                        "Track guilt chronologically: Macbeth's dagger, 'Neptune's ocean', Banquo's ghost, Lady Macbeth's sleepwalking",
                        "Compare how Macbeth and Lady Macbeth experience guilt differently — and how their positions reverse",
                        "Discuss Shakespeare's methods: imagery (blood, darkness), dramatic irony, soliloquy",
                        "Reference context: Jacobean beliefs about divine punishment for sin",
                      ],
                    },
                    {
                      type: "Essay (b)",
                      question:
                        "Explore how Shakespeare presents the relationship between Macbeth and Lady Macbeth. How does it change during the course of the play?",
                      guidance: [
                        "Structure chronologically to show the arc of their relationship",
                        "Act 1: Lady Macbeth dominant, Macbeth deferential ('my dearest partner of greatness')",
                        "Act 3: roles begin to reverse; Macbeth acts alone ('Be innocent of the knowledge, dearest chuck')",
                        "Act 5: completely separated; Macbeth's muted response to her death ('She should have died hereafter')",
                        "Analyse form: shared lines of verse early on, separate scenes later — their linguistic unity fractures",
                      ],
                    },
                    {
                      type: "Passage-Based (a)",
                      question:
                        "Re-read Act 5, Scene 1 (Lady Macbeth's sleepwalking scene). How does Shakespeare make this such a dramatic and significant moment in the play?",
                      guidance: [
                        "Note the shift to prose: Lady Macbeth no longer speaks in verse, reflecting mental disintegration",
                        "Analyse the Doctor and Gentlewoman as onstage audience — their horror mirrors the audience's",
                        "Link back to earlier moments: 'a little water' is now ironic; the 'spot' cannot be removed",
                        "Discuss dramatic irony: the audience understands her references; the Doctor does not",
                        "Consider the significance of this being the last time we see Lady Macbeth alive",
                      ],
                    },
                    {
                      type: "Essay (b)",
                      question:
                        "How far do you think Shakespeare presents the Witches as responsible for Macbeth's downfall?",
                      guidance: [
                        "Consider arguments for: they plant the idea, their equivocations manipulate him, the supernatural atmosphere suggests external evil",
                        "Consider arguments against: Macbeth has ambition before meeting them, Banquo resists the same prophecies, Macbeth makes conscious choices",
                        "Evaluate: the question says 'how far' — you need a balanced, nuanced answer with a clear personal judgement",
                        "Context: James I believed in real witchcraft; a modern audience may see the Witches as psychological projections",
                      ],
                    },
                  ].map((q, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-card p-5 shadow-md"
                    >
                      <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                        {q.type}
                      </span>
                      <p className="mt-3 text-sm font-medium text-foreground">
                        {q.question}
                      </p>
                      <div className="mt-3 rounded bg-primary/5 p-3">
                        <p className="text-xs font-semibold text-foreground">
                          How to approach:
                        </p>
                        <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                          {q.guidance.map((g, j) => (
                            <li key={j}>&bull; {g}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model paragraph */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Sample Question with Model Paragraph
                  </CardTitle>
                  <CardDescription>
                    Demonstrating how to write a top-band paragraph that
                    addresses all four Assessment Objectives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border-l-4 border-[#2E86C1] bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Question: How does Shakespeare present the theme of guilt
                      in Macbeth?
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                      Model Paragraph
                    </h4>
                    <div className="mt-2 rounded-lg border border-border bg-muted/20 p-4 text-sm leading-relaxed text-muted-foreground">
                      <p>
                        Shakespeare presents guilt as an inescapable and
                        consuming force through the recurring motif of blood.
                        Immediately after Duncan&rsquo;s murder, Macbeth asks,
                        &ldquo;Will all great Neptune&rsquo;s ocean wash this
                        blood / Clean from my hand?&rdquo; (2.2). The hyperbolic
                        reference to &ldquo;Neptune&rsquo;s ocean&rdquo;
                        suggests that Macbeth already recognises the permanence
                        of his crime; the classical allusion elevates his guilt
                        from a personal emotion to a cosmic transgression,
                        reflecting the Jacobean belief that regicide violated the
                        Divine Right of Kings and therefore offended God Himself{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO2 — context]
                        </span>
                        . The rhetorical question form{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO3 — form]
                        </span>{" "}
                        reveals that this is not a genuine inquiry but a
                        despairing acknowledgement that no amount of cleansing
                        can undo murder. This is powerfully contrasted with Lady
                        Macbeth&rsquo;s dismissive response, &ldquo;A little
                        water clears us of this deed&rdquo; (2.2), where the
                        understatement &ldquo;a little water&rdquo;{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO3 — language]
                        </span>{" "}
                        reveals her pragmatic refusal to engage with guilt.
                        However, Shakespeare arguably uses this contrast to
                        foreshadow Lady Macbeth&rsquo;s later collapse{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO4 — personal response]
                        </span>
                        : by Act 5, she is obsessively washing her hands and
                        crying &ldquo;Out, damned spot!&rdquo; (5.1), the very
                        blood she once dismissed now consuming her. The dramatic
                        irony is devastating{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO3 — structure]
                        </span>
                        : the audience remembers her earlier confidence, making
                        her disintegration all the more powerful. Shakespeare
                        thus suggests that guilt, once incurred through acts of
                        profound moral transgression, cannot be suppressed
                        indefinitely — it will surface, whether as hallucination,
                        madness, or despair{" "}
                        <span className="font-semibold text-[#2E86C1]">
                          [AO1 — knowledge and understanding]
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-[#2E86C1]/5 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                      Why This Works
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>
                        <strong>AO1:</strong> Accurate quotations from multiple
                        points in the play, embedded fluently within sentences
                      </li>
                      <li>
                        <strong>AO2:</strong> Context (Divine Right of Kings)
                        integrated naturally and connected to meaning, not
                        bolted on
                      </li>
                      <li>
                        <strong>AO3:</strong> Multiple techniques identified
                        (hyperbole, classical allusion, rhetorical question,
                        understatement, dramatic irony) with effects explained
                      </li>
                      <li>
                        <strong>AO4:</strong> Personal response through
                        evaluative language (&ldquo;arguably&rdquo;,
                        &ldquo;powerfully&rdquo;, &ldquo;devastating&rdquo;) and
                        interpretive engagement (&ldquo;Shakespeare thus
                        suggests&rdquo;)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* ─────────────────────────────────────────────────────── */}
        {/* ── ASSESSMENT OBJECTIVES TAB ────────────────────────── */}
        {/* ─────────────────────────────────────────────────────── */}
        {activeTab === "aos" && (
          <section aria-labelledby="aos-heading">
            <h2
              id="aos-heading"
              className="text-2xl font-bold text-foreground"
            >
              Assessment Objectives (AOs)
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cambridge IGCSE English Literature assesses four AOs. Understanding
              what each one requires — and how to demonstrate it — is essential
              for top-band responses.
            </p>
            <div className="mt-6 space-y-5">
              {assessmentObjectives.map((ao) => (
                <Card key={ao.ao}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-12 items-center justify-center rounded-md bg-[#2E86C1]/10 text-sm font-bold text-[#2E86C1]">
                        {ao.ao}
                      </span>
                      <span>{ao.title}</span>
                    </CardTitle>
                    <CardDescription>{ao.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        How to Demonstrate This
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {ao.howToMeet}
                      </p>
                    </div>
                    <div className="rounded-lg border-l-4 border-[#2E86C1] bg-muted/20 p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2E86C1]">
                        Example in Practice
                      </h4>
                      <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
                        {ao.example}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* ── Back link & disclaimer ──────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>
    </>
  );
}
