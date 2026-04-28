// @ts-nocheck
export interface WorksheetSection {
  title: string
  instructions: string
  questions: {
    question: string
    lines: number
    marks?: number
    modelAnswer: string
  }[]
}

export interface RevisionWorksheet {
  id: string
  title: string
  subject: string
  board: string
  difficulty: 'Foundation' | 'Core' | 'Higher'
  duration: string
  sections: WorksheetSection[]
  totalMarks: number
}

// ============================================================
// LITERATURE WORKSHEETS
// ============================================================

// ---------- MACBETH ----------

const macbethFoundation: RevisionWorksheet = {
  id: 'macbeth-foundation',
  title: 'Macbeth - Foundation Revision Worksheet',
  subject: 'Macbeth',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Key Characters',
      instructions:
        'Answer the following questions about the characters in Macbeth. Use the sentence starters provided to help you structure your answers.',
      questions: [
        {
          question:
            'Who are the three witches and what role do they play in the story? Start your answer with: "The three witches are important because..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            "The three witches are important because they plant the idea of kingship in Macbeth's mind. They prophesy that he will become Thane of Cawdor and then King. Their supernatural influence drives the plot forward, as Macbeth becomes obsessed with fulfilling their predictions. Shakespeare uses them to explore themes of fate, free will, and the dangers of ambition.",
        },
        {
          question:
            'Describe Lady Macbeth\'s character at the start of the play. Begin with: "At the beginning of the play, Lady Macbeth is presented as..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'At the beginning of the play, Lady Macbeth is presented as a powerful, ambitious, and manipulative character. She calls on dark spirits to "unsex" her, showing she wants to remove her femininity to become ruthless. She manipulates Macbeth by questioning his manhood, pushing him to murder Duncan. Shakespeare presents her as the driving force behind the regicide.',
        },
        {
          question:
            'How does Macbeth change from the beginning to the end of the play? Start with: "At the start, Macbeth is... but by the end he becomes..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'At the start, Macbeth is a brave and loyal soldier described as "valiant" and "worthy." He is respected by the King and his peers. But by the end he becomes a tyrannical ruler consumed by paranoia and guilt. He orders the murders of Banquo and Macduff\'s family without hesitation. Shakespeare shows how unchecked ambition can corrupt even a noble person, reflecting Jacobean anxieties about regicide and moral decay.',
        },
        {
          question:
            'What is the role of Banquo in the play? Begin with: "Banquo is important because he acts as a..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            "Banquo is important because he acts as a foil to Macbeth. He also hears the witches' prophecies but chooses not to act on them, showing moral strength. His ghost haunts Macbeth, symbolising guilt and the consequences of murder. Shakespeare uses Banquo to show the path Macbeth could have taken if he had resisted temptation.",
        },
        {
          question:
            'Why does Macbeth see a dagger before he murders Duncan? Start with: "The dagger scene shows that Macbeth is..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The dagger scene shows that Macbeth is deeply conflicted about killing Duncan. The hallucination of "a dagger of the mind" represents his guilt and inner turmoil. It could also suggest the supernatural is guiding him towards evil. Shakespeare uses this soliloquy to build tension and show the audience that Macbeth has not yet fully committed to the murder, making him a more complex and tragic character.',
        },
      ],
    },
    {
      title: 'Section B: Key Themes',
      instructions:
        'Answer the following questions about themes in Macbeth. Try to include quotations where you can. Use the scaffolding to help you.',
      questions: [
        {
          question:
            'How does Shakespeare present the theme of ambition? Use the structure: Point - Evidence - Explain. Start with: "Shakespeare presents ambition as..."',
          lines: 6,
          marks: 6,
          modelAnswer:
            'Shakespeare presents ambition as a destructive force that corrupts those who pursue power at any cost. Macbeth\'s "vaulting ambition" drives him to murder Duncan, and Lady Macbeth\'s desire for power leads her to manipulate her husband. The metaphor of "vaulting ambition, which o\'erleaps itself" suggests ambition that goes too far leads to downfall. Shakespeare warns his audience that ambition without moral restraint leads to destruction, reflecting the Jacobean belief in the Great Chain of Being.',
        },
        {
          question:
            'How is the theme of guilt presented in the play? Begin with: "Shakespeare shows guilt through..."',
          lines: 6,
          marks: 5,
          modelAnswer:
            "Shakespeare shows guilt through both Macbeth and Lady Macbeth's psychological deterioration. Lady Macbeth's sleepwalking scene where she tries to wash imaginary blood from her hands - \"Out, damned spot!\" - shows guilt has driven her to madness. Macbeth sees Banquo's ghost at the banquet, unable to escape his crimes. Shakespeare uses these supernatural manifestations of guilt to show that sin cannot be hidden and will eventually consume the sinner.",
        },
        {
          question:
            'What does Shakespeare suggest about the supernatural? Start with: "The supernatural in Macbeth is used to..."',
          lines: 5,
          marks: 4,
          modelAnswer:
            "The supernatural in Macbeth is used to create an atmosphere of evil and to explore whether humans control their own fate. The witches' prophecies, Banquo's ghost, and Lady Macbeth's invocation of \"spirits\" all blur the line between the natural and unnatural. A Jacobean audience would have genuinely feared witchcraft (James I wrote a book on it), so Shakespeare taps into real social anxieties. The supernatural serves as both a dramatic device and a moral warning.",
        },
        {
          question:
            'How does Shakespeare explore the theme of kingship? Begin with: "Shakespeare contrasts good and bad kingship by..."',
          lines: 5,
          marks: 4,
          modelAnswer:
            'Shakespeare contrasts good and bad kingship by presenting Duncan as a gracious, generous king ("this Duncan hath borne his faculties so meek") and Macbeth as a tyrant. Duncan rewards loyalty and is mourned after death, while Macbeth rules through fear and is called a "dead butcher." This reflects the Jacobean belief in the Divine Right of Kings - disrupting the rightful monarch disrupts the natural order, shown by the unnatural events (storms, horses eating each other) after Duncan\'s murder.',
        },
      ],
    },
    {
      title: 'Section C: Key Quotations',
      instructions:
        'For each quotation, explain what it means and why it is important. Use the format: "This quotation suggests... Shakespeare uses this to..."',
      questions: [
        {
          question:
            '"Fair is foul, and foul is fair" - What does this suggest about the world of the play?',
          lines: 3,
          marks: 2,
          modelAnswer:
            "This quotation suggests that nothing in the play is as it seems - appearances are deceptive. The witches establish a world where good and evil are blurred. Shakespeare uses this to foreshadow the moral confusion that will follow, as Macbeth's apparently noble actions mask murderous intent.",
        },
        {
          question:
            '"Look like the innocent flower, but be the serpent under\'t" - What does this reveal about Lady Macbeth?',
          lines: 3,
          marks: 2,
          modelAnswer:
            "This reveals Lady Macbeth's skill at deception and her willingness to hide evil behind a pleasant exterior. The biblical imagery of the serpent connects her to Satan and the Fall of Man. Shakespeare shows her as the architect of Duncan's murder, using her intelligence for evil purposes.",
        },
      ],
    },
  ],
}

const macbethCore: RevisionWorksheet = {
  id: 'macbeth-core',
  title: 'Macbeth - Core Revision Worksheet',
  subject: 'Macbeth',
  board: 'AQA',
  difficulty: 'Core',
  duration: '50 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Character Analysis',
      instructions:
        "Analyse the following characters in detail. Support your points with quotations and consider Shakespeare's methods and intentions.",
      questions: [
        {
          question:
            'How does Shakespeare present Macbeth as a tragic hero? Consider his hamartia, peripeteia, and anagnorisis.',
          lines: 8,
          marks: 8,
          modelAnswer:
            "Shakespeare presents Macbeth as a tragic hero through the classical structure of tragedy. His hamartia (fatal flaw) is his \"vaulting ambition\" which, combined with the witches' prophecies and Lady Macbeth's manipulation, leads him to regicide. His peripeteia (reversal of fortune) occurs after Duncan's murder when he spirals from respected thane to paranoid tyrant, ordering the murders of Banquo and Macduff's family. His anagnorisis comes in Act 5 when he realises the witches have deceived him - \"life's but a walking shadow... signifying nothing\" - showing his final recognition that his actions were meaningless. Shakespeare crafts Macbeth to elicit both horror and pity, as the audience watches a man of potential destroyed by his own choices.",
        },
        {
          question:
            "Explore how Lady Macbeth's character arc reflects the consequences of disrupting the natural order.",
          lines: 8,
          marks: 8,
          modelAnswer:
            'Lady Macbeth\'s character arc moves from power to powerlessness, reflecting the consequences of disrupting the natural order. Initially, she invokes dark spirits to "unsex" her and "fill me from the crown to the toe top-full of direst cruelty," actively rejecting her feminine nature. She is the dominant partner, orchestrating Duncan\'s murder while Macbeth hesitates. However, as the play progresses, she becomes marginalised - Macbeth no longer consults her about his plans. Her sleepwalking scene in Act 5 reveals guilt has fractured her mind: "Out, damned spot! Out, I say!" The doctor observes she needs "the divine" not "the physician," suggesting her sickness is spiritual. Her offstage death and Macbeth\'s muted response ("She should have died hereafter") show the complete collapse of their relationship. Shakespeare demonstrates that defying the natural order - both the political order (regicide) and gender roles - leads to destruction.',
        },
        {
          question:
            'How does Shakespeare use Macduff to represent justice and righteous vengeance?',
          lines: 6,
          marks: 6,
          modelAnswer:
            'Shakespeare uses Macduff as the moral counterweight to Macbeth and the instrument of divine justice. Macduff\'s suspicion of Macbeth from the outset ("O horror, horror, horror! Tongue nor heart cannot conceive nor name thee!") positions him as perceptive and honest. His decision to flee to England shows political courage, though it costs him his family. The scene where he learns of their murder - "All my pretty ones? Did you say all?" - is one of Shakespeare\'s most emotionally powerful moments, with Malcolm\'s advice to "dispute it like a man" met with "I shall do so; but I must also feel it as a man." This balances masculine action with emotional depth. As the man "not of woman born," Macduff fulfils the witches\' prophecy and restores the natural order by killing Macbeth, representing the triumph of legitimate justice over tyranny.',
        },
        {
          question:
            'Analyse how Shakespeare presents the relationship between Macbeth and Banquo as a study in moral choices.',
          lines: 6,
          marks: 6,
          modelAnswer:
            'Shakespeare presents Macbeth and Banquo as foils who respond differently to the same temptation. Both hear the witches\' prophecies, but while Macbeth immediately considers murder ("whose horrid image doth unfix my hair"), Banquo is cautious: "oftentimes, to win us to our harm, the instruments of darkness tell us truths." This shows Banquo\'s wisdom and moral grounding. Banquo admits to "cursed thoughts" in sleep, proving he is tempted but chooses virtue. Macbeth\'s decision to murder Banquo stems from fear of Banquo\'s "royalty of nature" and the prophecy that Banquo\'s descendants will be kings. The ghost at the banquet represents Macbeth\'s guilt and the impossibility of escaping moral consequences. Shakespeare uses their divergent paths to argue that evil is a choice, not a destiny.',
        },
      ],
    },
    {
      title: 'Section B: Thematic Analysis',
      instructions:
        "Write detailed analytical paragraphs on the following themes. Include relevant context and consider Shakespeare's purpose.",
      questions: [
        {
          question:
            'How does Shakespeare use imagery of blood and darkness throughout Macbeth to develop key themes?',
          lines: 8,
          marks: 7,
          modelAnswer:
            'Shakespeare weaves imagery of blood and darkness throughout Macbeth to chart the protagonists\' moral decline. Blood begins as a symbol of honour - Macbeth\'s "bloody" sword in battle represents valour. After Duncan\'s murder, blood becomes guilt: Macbeth fears "this my hand will rather the multitudinous seas incarnadine, making the green one red," a hyperbole suggesting his guilt is infinite and indelible. Lady Macbeth\'s "Out, damned spot!" in Act 5 shows the same blood imagery has consumed her subconscious. Darkness imagery reinforces this moral corruption: Lady Macbeth calls on "thick night" to hide the murder, Macbeth speaks of "stars, hide your fires," and the play is dominated by night scenes. Shakespeare creates a world where evil operates in shadow, connecting to the Jacobean association between darkness and the demonic. The interplay of blood and darkness creates an oppressive atmosphere that mirrors the characters\' psychological states.',
        },
        {
          question:
            'Explore how Shakespeare presents the theme of masculinity and its relationship to violence.',
          lines: 7,
          marks: 6,
          modelAnswer:
            'Shakespeare presents masculinity as a concept weaponised to drive violence. Lady Macbeth questions Macbeth\'s manhood to manipulate him: "When you durst do it, then you were a man." She equates masculinity with the willingness to commit murder, rejecting her own femininity to pursue power. Macbeth internalises this toxic definition, later telling the murderers "Are you so gospelled / To pray for this good man?" - using the same tactic on them. However, Shakespeare offers an alternative through Macduff, who declares "I must also feel it as a man" when grieving, suggesting true masculinity includes emotional depth. Young Siward\'s honourable death in battle presents yet another model of masculine courage. Shakespeare interrogates the idea that violence proves manhood, showing through Macbeth\'s downfall that this belief leads only to destruction.',
        },
        {
          question:
            'How does Shakespeare use the motif of sleep to explore guilt and the consequences of sin?',
          lines: 6,
          marks: 5,
          modelAnswer:
            'Shakespeare uses sleep as a barometer of moral health throughout Macbeth. After murdering Duncan, Macbeth hears a voice cry "Sleep no more! Macbeth does murder sleep" - equating the murder of the sleeping king with the destruction of Macbeth\'s own peace. Sleep represents innocence and the natural order; its disruption mirrors the political chaos caused by regicide. Lady Macbeth\'s sleepwalking in Act 5 is deeply ironic: she who planned the murder while Duncan slept is now trapped in a nightmarish half-sleep, reliving her crimes. The doctor\'s observation that "unnatural deeds do breed unnatural troubles" connects her insomnia to the disruption of the Great Chain of Being. Shakespeare suggests that guilty conscience makes true rest impossible - a powerful moral warning to his audience.',
        },
      ],
    },
    {
      title: 'Section C: Context and Craft',
      instructions:
        "Answer the following questions about Shakespeare's methods and the play's context.",
      questions: [
        {
          question:
            'Why would the theme of regicide have been particularly significant to a Jacobean audience?',
          lines: 4,
          marks: 4,
          modelAnswer:
            "Regicide was an intensely relevant theme for a Jacobean audience because James I had survived the Gunpowder Plot of 1605, just a year before Macbeth was likely first performed. The play dramatises the consequences of killing a king, reinforcing the Divine Right of Kings - the belief that monarchs were appointed by God. By showing Macbeth's descent into tyranny and eventual death, Shakespeare affirms that regicide disrupts the natural order and will be punished. The play can be read as a compliment to James I, who was also descended from the historical Banquo, and whose interest in witchcraft (he authored Daemonologie) is reflected in the supernatural elements.",
        },
      ],
    },
  ],
}

const macbethHigher: RevisionWorksheet = {
  id: 'macbeth-higher',
  title: 'Macbeth - Higher Revision Worksheet',
  subject: 'Macbeth',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '60 minutes',
  totalMarks: 60,
  sections: [
    {
      title: 'Section A: Critical Analysis',
      instructions:
        'Write sustained analytical responses demonstrating perceptive understanding. Integrate context fluidly and consider alternative interpretations. Your responses should demonstrate conceptualised analysis.',
      questions: [
        {
          question:
            '"Macbeth is less a villain than a victim of supernatural and psychological forces beyond his control." To what extent do you agree with this statement?',
          lines: 12,
          marks: 10,
          modelAnswer:
            'This statement invites debate about agency and determinism in the play. On one hand, the witches\' prophecies and Lady Macbeth\'s manipulation could position Macbeth as a victim. The witches target him when he is psychologically vulnerable after battle, and their equivocal language ("All hail, Macbeth, that shalt be king hereafter!") plants ambition without explicit instruction. Lady Macbeth\'s sustained assault on his masculinity - "Was the hope drunk wherein you dressed yourself?" - applies intense psychological pressure. A psychoanalytic reading might see Macbeth as driven by unconscious desires activated by external catalysts. However, Shakespeare is careful to show Macbeth exercising choice: his aside "If chance will have me king, why, chance may crown me without my stir" shows he initially considers passivity, and his soliloquy "If it were done when \'tis done" demonstrates full moral awareness. Crucially, Banquo hears the same prophecies but resists temptation, proving choice exists. Shakespeare structures Macbeth\'s moral decline as a series of escalating decisions - from reluctant regicide to ordering the murder of Macduff\'s innocent family without hesitation. The play ultimately argues for a complex interplay: external forces create the conditions for evil, but the individual must choose to act. This reflects the theological tension in Jacobean England between predestination (Calvinist doctrine) and free will (which James I himself debated).',
        },
        {
          question:
            "Analyse how Shakespeare uses the structure of the play to chart Macbeth's psychological disintegration. Consider soliloquies, dramatic irony, and the compression of time.",
          lines: 10,
          marks: 10,
          modelAnswer:
            'Shakespeare\'s structural choices mirror Macbeth\'s psychological collapse. The early acts give Macbeth expansive soliloquies - "Is this a dagger which I see before me" and "If it were done when \'tis done" - allowing the audience intimate access to his moral deliberation. These soliloquies are rich in conditional language, metaphor, and philosophical reflection, suggesting a mind still capable of ethical reasoning. As the play progresses, Macbeth\'s language becomes more impulsive and less reflective: "From this moment the very firstlings of my heart shall be the firstlings of my hand." The shift from contemplation to action-without-thought signals his moral deterioration. Dramatic irony intensifies: in Act 3, the audience knows of Banquo\'s murder before the banquet scene, creating tension as Macbeth\'s public facade crumbles. The play\'s temporal compression is significant - events accelerate, scenes shorten, and by Act 5, Macbeth ricochets between fatalism ("Tomorrow, and tomorrow, and tomorrow") and desperate aggression. The famous "tomorrow" soliloquy, with its nihilistic reduction of life to "a tale told by an idiot," represents the endpoint of a mind that has destroyed its own capacity for meaning. Shakespeare uses structural deterioration to embody psychological deterioration, making form and content inseparable.',
        },
        {
          question:
            'Explore how Shakespeare interrogates the relationship between appearance and reality throughout Macbeth. How does this connect to broader Jacobean anxieties?',
          lines: 10,
          marks: 10,
          modelAnswer:
            "The disjunction between appearance and reality is established from the opening line - \"Fair is foul, and foul is fair\" - creating an epistemological crisis that pervades the entire play. Duncan's observation that \"There's no art to find the mind's construction in the face\" is deeply ironic given his imminent murder by a trusted thane, and it articulates a fundamental anxiety about the unreliability of surfaces. Lady Macbeth's instruction to \"look like the innocent flower, but be the serpent under't\" draws on Edenic imagery, positioning deception as humanity's original sin. The witches' equivocations - \"none of woman born\" concealing Macduff's caesarean birth - demonstrate language itself as a tool of deception. Shakespeare connects this to Jacobean anxieties on multiple levels: the Gunpowder Plot revealed that trusted Catholic nobles could harbour murderous intent; the doctrine of equivocation (which allowed Catholics to mislead Protestant interrogators without technically lying) was a major political controversy; and James I's own anxieties about identifying genuine threats were well documented. The Porter's speech about \"equivocators\" directly references the trial of the Jesuit Henry Garnet. Shakespeare suggests that in a world where language can deceive and appearances lie, moral certainty becomes almost impossible - yet the play's resolution, with Malcolm's restoration, affirms that truth ultimately prevails.",
        },
      ],
    },
    {
      title: 'Section B: Extract-Based Analysis',
      instructions:
        'Analyse the following extracts closely. Consider language, structure, form, and context. Explore multiple layers of meaning.',
      questions: [
        {
          question:
            'Analyse the significance of Macbeth\'s soliloquy "Tomorrow, and tomorrow, and tomorrow / Creeps in this petty pace from day to day / To the last syllable of recorded time." How does Shakespeare use language and form here to convey Macbeth\'s state of mind?',
          lines: 10,
          marks: 10,
          modelAnswer:
            'This soliloquy represents Macbeth\'s complete existential collapse. The triple repetition of "tomorrow" creates a monotonous, relentless rhythm that embodies the tedium Macbeth now perceives in existence. The verb "creeps" suggests time moves painfully slowly, a stark contrast to the frantic pace of his earlier murderous actions. The metaphor of life as extending "to the last syllable of recorded time" reduces human existence to mere language - words on a page that will eventually end. The extended metaphor of the "walking shadow" and "poor player that struts and frets his hour upon the stage" layers theatrical imagery: Macbeth sees life as performance without meaning, which is profoundly ironic given he is literally a character being performed on stage. Shakespeare creates a metatheatrical moment that destabilises the boundary between fiction and reality. The final image of life as "a tale told by an idiot, full of sound and fury, signifying nothing" is nihilistic in the extreme: the plosive sounds in "told," "tale," and "idiot" give the line a bitter, spitting quality. This soliloquy is triggered by Lady Macbeth\'s death, yet Macbeth cannot even grieve properly - "She should have died hereafter" - showing how completely he has been hollowed out. Shakespeare positions this moment as the ultimate consequence of Macbeth\'s choices: he has not just lost his kingdom, but his capacity to find meaning in existence itself.',
        },
        {
          question:
            'Analyse the dramatic significance of the banquet scene (Act 3, Scene 4). How does Shakespeare use this scene as a structural and thematic turning point?',
          lines: 10,
          marks: 10,
          modelAnswer:
            "The banquet scene operates as the play's structural fulcrum and the moment where Macbeth's public and private worlds catastrophically collide. On the surface, it is a display of royal hospitality - Macbeth playing the gracious king. The appearance of Banquo's ghost shatters this performance, literalising the theme of guilt as an inescapable, visible presence. Shakespeare's staging is deliberately ambiguous: whether the ghost is \"real\" (supernatural) or a hallucination (psychological) is left open, and this ambiguity is thematically productive - both readings reinforce the play's concern with the unreliability of perception. Lady Macbeth's desperate attempt to manage the situation - \"Are you a man?\" - echoes her earlier manipulation, but here it fails; she can no longer control Macbeth or the consequences of their actions. The scene marks a power shift: Lady Macbeth is marginalised from this point onward, and Macbeth becomes increasingly autonomous in his tyranny. Structurally, it is the last moment of the Macbeths as a functioning partnership. The collapse of the banquet - the meal abandoned, guests dismissed in disorder - symbolises the disintegration of social and political order under Macbeth's rule. Shakespeare uses the formal structure of a state banquet (with its rituals of seating and toasting) to heighten the chaos when those structures break down, mirroring the larger breakdown of the Great Chain of Being.",
        },
      ],
    },
    {
      title: 'Section C: Comparative and Evaluative',
      instructions:
        'Engage critically with the following questions. Demonstrate independent thinking and offer a personal critical perspective.',
      questions: [
        {
          question:
            "Some critics argue that Lady Macbeth is Shakespeare's most complex female character, while others see her as a misogynistic stereotype of feminine evil. Evaluate these positions with close reference to the text.",
          lines: 10,
          marks: 10,
          modelAnswer:
            'Both readings have textual support, and their tension is itself revealing. The "misogynistic stereotype" argument notes that Lady Macbeth fits the archetype of the dangerous woman who tempts man to sin (Eve, Jezebel, Delilah). Her invocation to be "unsexed" and her willingness to dash her baby\'s brains out align her with the "unnatural" woman trope. Her punishment - madness and suicide - follows the conventional trajectory of transgressive women in literature. A feminist reading might argue Shakespeare punishes her for stepping outside gender norms. However, the "complex character" argument is equally compelling. Lady Macbeth\'s "unsex me" speech can be read as a radical critique of the gender constraints that prevent women from accessing power directly - she must work through her husband because she has no political agency of her own. Her psychological depth - the gap between her performed ruthlessness and her genuine vulnerability (she cannot kill Duncan herself because he "resembled my father as he slept") - resists reductive categorisation. Her sleepwalking scene is arguably the most psychologically nuanced portrayal of trauma in all of Shakespeare. The most sophisticated reading holds both positions simultaneously: Shakespeare both deploys and interrogates gendered archetypes, creating a character who is constrained by the misogynistic structures of her world (and arguably of her author\'s world) while also transcending them through her complexity. The character\'s enduring capacity to generate debate is itself evidence of her richness.',
        },
      ],
    },
  ],
}

// ---------- AN INSPECTOR CALLS ----------

const inspectorFoundation: RevisionWorksheet = {
  id: 'inspector-calls-foundation',
  title: 'An Inspector Calls - Foundation Revision Worksheet',
  subject: 'An Inspector Calls',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Key Characters',
      instructions:
        'Answer the following questions about the characters. Use the sentence starters to help you write full answers.',
      questions: [
        {
          question:
            'What is Mr Birling like at the start of the play? Begin with: "Mr Birling is presented as a..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Mr Birling is presented as a wealthy, arrogant businessman who cares more about profit than people. He makes confident predictions about the Titanic being "unsinkable" and says there won\'t be a war, which the audience knows are wrong. Priestley uses dramatic irony to undermine Birling and make his capitalist views seem foolish. He represents the selfish upper class who exploit workers.',
        },
        {
          question:
            'How does Sheila change during the play? Start with: "At the beginning Sheila is... but by the end she..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'At the beginning Sheila is a naive, spoilt young woman who is excited about her engagement. She used her privilege to get Eva Smith sacked from Milwards out of jealousy. But by the end she has changed completely - she accepts responsibility for her actions and says "I\'ll never, never do it again." She becomes the voice of the younger generation who can learn and change. Priestley uses Sheila to show his audience that accepting social responsibility is the first step towards a fairer society.',
        },
        {
          question:
            'What role does the Inspector play? Begin with: "The Inspector is important because he..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The Inspector is important because he acts as Priestley\'s mouthpiece, delivering the moral message of the play. He forces each family member to confess their involvement in Eva Smith\'s death. His name "Goole" sounds like "ghoul" (a ghost), suggesting he may be supernatural. His final speech - "We are members of one body" - directly states Priestley\'s socialist message that we are all responsible for each other.',
        },
        {
          question:
            'How is Eric presented in the play? Start with: "Eric is shown as a young man who..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Eric is shown as a young man who has been damaged by his privileged upbringing. He drinks too much, forced himself on Eva Smith, and stole money from his father\'s business. However, like Sheila, he accepts responsibility: "the fact remains that I did what I did." He is frustrated by his parents\' refusal to change. Priestley uses Eric to show that even those who have done wrong can redeem themselves by accepting responsibility.',
        },
        {
          question: 'What does Mrs Birling represent? Begin with: "Mrs Birling represents..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Mrs Birling represents the cold, prejudiced upper class who refuse to accept responsibility. She turned Eva Smith away from a charity designed to help women in need, judging her for using the name "Birling." Even after learning the truth, she insists "I did nothing wrong." She blames the father of Eva\'s child, not realising it is her own son Eric. Priestley uses dramatic irony here to expose her hypocrisy and lack of compassion.',
        },
      ],
    },
    {
      title: 'Section B: Key Themes',
      instructions:
        'Answer the following questions about the themes of the play. Remember to include quotations and explain why Priestley included these ideas.',
      questions: [
        {
          question:
            'How does Priestley present the theme of social responsibility? Start with: "Priestley shows that we all have a responsibility to..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Priestley shows that we all have a responsibility to care for others in society. The Inspector\'s final speech warns that if people don\'t learn "that we are members of one body," they will be taught in "fire and blood and anguish" - a reference to the two World Wars. Each Birling family member contributed to Eva Smith\'s death through selfishness. The play was written in 1945 but set in 1912 to show the audience what happens when society ignores social responsibility. Priestley wanted the post-war audience to build a more equal society through the welfare state.',
        },
        {
          question:
            'How does Priestley explore the divide between the older and younger generations? Begin with: "Priestley uses the generational divide to show..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Priestley uses the generational divide to show that change is possible through the young. Sheila and Eric both accept responsibility and show genuine remorse, while Mr and Mrs Birling refuse to change. Mr Birling tries to use his social status to avoid consequences, while Sheila says she "will never, never do it again." By making the young characters sympathetic and the older ones stubborn, Priestley suggests that building a better society depends on the younger generation rejecting their parents\' selfish values.',
        },
        {
          question:
            'How is the theme of class presented? Start with: "Priestley criticises the class system by..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Priestley criticises the class system by showing how the Birlings abuse their power over Eva Smith, a working-class woman. Mr Birling sacks her for asking for fair wages, Sheila gets her fired out of jealousy, and Mrs Birling denies her charity help. The Birlings see Eva as disposable because she is lower class. Priestley uses Eva as a symbol of all exploited workers, and her death as the ultimate consequence of class inequality. Writing after WWII, Priestley wanted to promote socialist ideas and the newly created welfare state.',
        },
      ],
    },
    {
      title: 'Section C: Key Quotations',
      instructions:
        'Explain what each quotation means and why it is important. Start each answer with "This quotation shows..."',
      questions: [
        {
          question:
            '"We are members of one body. We are responsible for each other." - What is the Inspector saying here?',
          lines: 3,
          marks: 2,
          modelAnswer:
            'This quotation shows the Inspector delivering Priestley\'s core socialist message: that people are not isolated individuals but are connected. The word "body" creates a metaphor of society as a living organism where everyone is linked. If one part suffers, all suffer. Priestley uses the Inspector as his mouthpiece to challenge the capitalist individualism represented by Mr Birling.',
        },
        {
          question:
            '"If we were all responsible for everything that happened to everybody... it would be very awkward." - What does this reveal about Mr Birling?',
          lines: 3,
          marks: 2,
          modelAnswer:
            'This quotation shows that Mr Birling sees social responsibility as an inconvenience rather than a moral duty. The word "awkward" trivialises the suffering of others, revealing his selfishness. Priestley uses this to represent the capitalist attitude that profit matters more than people. The audience, knowing what happened in the two World Wars, can see how dangerous this attitude is.',
        },
      ],
    },
  ],
}

const inspectorCore: RevisionWorksheet = {
  id: 'inspector-calls-core',
  title: 'An Inspector Calls - Core Revision Worksheet',
  subject: 'An Inspector Calls',
  board: 'AQA',
  difficulty: 'Core',
  duration: '50 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Character Analysis',
      instructions:
        'Write analytical paragraphs about the characters. Use P-E-E-L structure (Point, Evidence, Explain, Link to context).',
      questions: [
        {
          question:
            "How does Priestley use the Inspector as a dramatic device to expose the Birlings' hypocrisy?",
          lines: 8,
          marks: 8,
          modelAnswer:
            'Priestley uses the Inspector as an omniscient moral authority who systematically dismantles the Birlings\' respectable facade. His interrogation technique - dealing with "one person and one line of inquiry at a time" - creates a structured, methodical exposure that builds dramatic tension. Unlike a real police inspector, Goole already seems to know the answers, suggesting a supernatural or allegorical function. He controls the pace and flow of information, preventing the family from collaborating on a cover story. His language shifts between compassion for Eva ("a pretty, lively sort of girl") and blunt moral judgement of the Birlings. The Inspector\'s name - a homophone of "ghoul" - combined with his mysterious appearance and disappearance, allows multiple interpretations: conscience, time traveller, divine agent. Priestley ensures the Inspector cannot be dismissed as merely human, making his message transcend the specific case. His final speech, with its prophetic warning of "fire and blood and anguish," references both World Wars and positions social responsibility as a matter of survival, not just morality.',
        },
        {
          question:
            "Analyse how Priestley presents Gerald Croft and his significance in the play's social commentary.",
          lines: 7,
          marks: 7,
          modelAnswer:
            'Gerald occupies a complex position as both insider and outsider to the Birling family. As the son of a rival businessman and Sheila\'s fiance, he represents the interconnection of the capitalist class through marriage and business. His affair with Eva/Daisy Renton initially appears more sympathetic than the other characters\' actions - he "rescued" her from Alderman Meggarty and genuinely cared for her. However, Priestley complicates this: Gerald\'s "rescue" is also exploitation, as he installed Eva as his mistress in a power dynamic where she had no real agency. His claim that he "didn\'t feel about her as she felt about me" reveals casual emotional cruelty masked as honesty. Most significantly, Gerald leads the investigation that reveals the Inspector may be a fraud, and he is the first to suggest "Everything\'s all right now." Priestley uses Gerald to show that even seemingly decent members of the upper class will ultimately prioritise protecting the status quo over moral growth. His offer of the ring back to Sheila - attempting to restore the pre-Inspector order - is firmly rejected, showing the old ways cannot simply be resumed.',
        },
        {
          question:
            'How does Priestley use Eva Smith/Daisy Renton as a dramatic and political symbol?',
          lines: 7,
          marks: 7,
          modelAnswer:
            'Eva Smith never appears on stage, yet she is the play\'s most important character. Priestley constructs her as an everywoman figure - her name combines "Eve" (the first woman) and "Smith" (the most common English surname), suggesting she represents all exploited working-class people. The fact that she changes her name to "Daisy Renton" reflects her lack of fixed identity in a society that refuses to see her as an individual. Each Birling family member interacts with a different version of Eva, raising the question of whether she is even one person - the Inspector never conclusively proves this. This ambiguity is politically purposeful: Priestley suggests it doesn\'t matter whether it was one woman or many, because the point is that the privileged class routinely destroys working-class lives. Eva\'s absence from the stage means she cannot speak for herself, mirroring how the working class are silenced by those in power. Her death by swallowing disinfectant is graphically violent - Priestley refuses to let the audience look away from the real consequences of inequality.',
        },
      ],
    },
    {
      title: 'Section B: Themes and Context',
      instructions:
        'Write analytical responses on the following themes. Integrate contextual knowledge throughout your answer, not as a separate bolt-on.',
      questions: [
        {
          question:
            "How does Priestley use the play's dual time setting (written 1945, set 1912) to enhance his political message?",
          lines: 7,
          marks: 7,
          modelAnswer:
            "The dual time setting is one of Priestley's most effective dramatic strategies. By setting the play in 1912 - before WWI, the Titanic disaster, and the General Strike - Priestley allows Mr Birling to make confidently wrong predictions that the audience immediately recognises as absurd. His claim that the Titanic is \"unsinkable\" and that there won't be a war creates dramatic irony that demolishes his credibility before the Inspector arrives. This retrospective framing means the 1945 audience has lived through the consequences of the pre-war capitalist attitudes the Birlings represent. The Inspector's warning of \"fire and blood and anguish\" references both World Wars - events the audience has experienced firsthand. Priestley's timing was deliberate: writing as WWII ended and the 1945 Labour government was introducing the welfare state, he wanted to ensure society didn't revert to pre-war inequality. The play argues that the Birlings' world caused the wars, and that the audience has a choice: learn the lesson or repeat the cycle. The final phone call - announcing a real inspector is on his way - suggests that without change, history will indeed repeat.",
        },
        {
          question:
            'Analyse how Priestley presents capitalism versus socialism through the characters of Mr Birling and the Inspector.',
          lines: 7,
          marks: 7,
          modelAnswer:
            'Priestley structures the play as a debate between capitalist individualism (Birling) and socialist collectivism (the Inspector). Mr Birling\'s speech dismissing community as "nonsense" and declaring that "a man has to mind his own business and look after himself and his own" articulates pure laissez-faire capitalism. His language is possessive and self-centred - "my" and "I" dominate. The Inspector\'s contrasting message - "We are members of one body" - uses inclusive "we" pronouns and organic imagery that positions society as interconnected. Priestley weights the debate heavily in the Inspector\'s favour through dramatic irony: Birling\'s confident predictions are immediately undermined, while the Inspector\'s warnings prove prophetically accurate. Birling\'s capitalism is also shown as hypocritical - he preaches self-reliance but seeks a knighthood (state recognition) and depends on his social connections. Priestley, a committed socialist who made influential Postscripts broadcasts during WWII, uses the play to argue that capitalism creates a society where the powerful exploit the vulnerable with impunity, and that only collective responsibility can prevent social catastrophe.',
        },
      ],
    },
    {
      title: 'Section C: Dramatic Techniques',
      instructions: "Analyse Priestley's dramatic methods and their effects.",
      questions: [
        {
          question:
            'How does Priestley use stage directions and the setting of the Birling dining room to reinforce his themes?',
          lines: 6,
          marks: 7,
          modelAnswer:
            "Priestley's stage directions are meticulously crafted to support his themes. The opening directions describe the lighting as \"pink and intimate\" before the Inspector arrives, then \"brighter and harder\" when he does - symbolising the move from comfortable illusion to harsh truth. The single room setting creates a pressure-cooker atmosphere: the characters cannot escape each other or the Inspector's questions, mirroring how society cannot escape the consequences of its actions. The \"heavily comfortable\" furnishings represent bourgeois complacency, and the dining table - set for celebration - becomes the site of the family's moral exposure. The unities of time, place, and action (the play occurs in real time in one location) give it an intensity that prevents the audience from looking away, just as the Inspector prevents the Birlings from avoiding responsibility. In Stephen Daldry's influential 1992 production, the house physically crumbles during the Inspector's investigation, making the destruction of the Birlings' world literally visible - a staging choice that realises the metaphor embedded in Priestley's text.",
        },
      ],
    },
  ],
}

const inspectorHigher: RevisionWorksheet = {
  id: 'inspector-calls-higher',
  title: 'An Inspector Calls - Higher Revision Worksheet',
  subject: 'An Inspector Calls',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '60 minutes',
  totalMarks: 60,
  sections: [
    {
      title: 'Section A: Critical and Evaluative Analysis',
      instructions:
        'Write sustained, conceptualised responses. Explore alternative interpretations and demonstrate perceptive personal engagement with the text.',
      questions: [
        {
          question:
            '"An Inspector Calls is not a play about one dead girl but about the death of an entire social system." Critically evaluate this statement.',
          lines: 12,
          marks: 12,
          modelAnswer:
            "This statement illuminates the play's ambition beyond individual morality to systemic critique. Eva Smith functions not as a realistic individual but as a political symbol - her everywoman name (Eve + Smith), the ambiguity about whether she is one person or several, and her absence from the stage all resist individualisation. Priestley constructs her as a structural victim: each encounter with a Birling represents a different mechanism of class oppression (labour exploitation, consumer power, sexual predation, institutional gatekeeping). Read this way, her death indicts not specific bad actors but the capitalist system that inevitably produces such victims. The \"death of an entire social system\" reading is supported by the play's time structure: the 1945 audience knows that the world of 1912 - with its confident imperialism, rigid class hierarchy, and unchecked capitalism - was indeed destroyed by two World Wars. Mr Birling's predictions serve as an obituary for his worldview. However, the statement risks undervaluing the play's emotional power. Priestley ensures the audience feels Eva's suffering - the graphic description of her death, the Inspector's humanising descriptions, Sheila's visceral guilt. If Eva were merely an abstraction, the play would lose its affective force. The genius of Priestley's dramaturgy is that Eva works simultaneously as a realistic figure demanding empathy and a political symbol demanding systemic change. The final phone call suggests the \"social system\" is not yet dead - it persists whenever the Birlings of the world refuse to change, and must be confronted again and again.",
        },
        {
          question:
            "Analyse how Priestley manipulates dramatic form to control the audience's moral and political response. Consider the well-made play structure, the detective genre, and Brechtian elements.",
          lines: 10,
          marks: 10,
          modelAnswer:
            'Priestley deploys and subverts multiple dramatic forms to guide audience response. The play initially resembles a well-made drawing-room drama - the comfortable setting, the engagement celebration, the naturalistic dialogue. This familiar form lulls the audience into the Birlings\' world before the Inspector disrupts it. The detective genre structure (crime, investigation, revelation) creates narrative momentum and exploits the audience\'s desire for resolution. However, Priestley subverts the genre: the "crime" is social rather than legal, the "detective" may be supernatural, and the resolution is deliberately withheld - the final phone call reopens the case rather than closing it. This resistance to closure is politically purposeful: Priestley denies the audience the comfort of resolution because social injustice is ongoing. The play also contains Brechtian Verfremdungseffekt (alienation effect) elements: the time-slip structure, the Inspector\'s non-naturalistic omniscience, and the metatheatrical quality of Eva\'s story (a narrative constructed from competing accounts) all prevent the audience from passively consuming the drama. They must actively judge the characters and, by extension, their own society. Priestley thus uses form instrumentally - the well-made play draws the audience in, the detective structure maintains engagement, and the Brechtian disruptions force critical reflection. The result is a play that is simultaneously entertaining and politically mobilising.',
        },
        {
          question:
            'To what extent is An Inspector Calls a product of its time, and to what extent does it remain relevant to contemporary Britain?',
          lines: 10,
          marks: 10,
          modelAnswer:
            "The play is deeply embedded in its 1945 context: Priestley's socialism, shaped by his WWI experiences and WWII broadcasts, the optimism of the Labour landslide, and the creation of the welfare state all inform its political vision. The specific targets - Edwardian capitalism, paternalistic charity, class snobbery - are historically situated. The binary moral structure (young = good, old = bad; socialism = right, capitalism = wrong) reflects the clarity of post-war political conviction. In this sense, the play is a period piece. Yet its theatrical afterlife suggests enduring relevance. Stephen Daldry's 1992 revival became the longest-running production in West End history, succeeding precisely because Thatcher-era Britain had recreated many of the inequalities Priestley attacked. The play's themes - the responsibility of the wealthy toward the poor, the exploitation of workers, institutional failures to protect the vulnerable - resonate with contemporary debates about austerity, food banks, zero-hours contracts, and the treatment of benefits claimants. The Birlings' refusal to accept responsibility mirrors contemporary political rhetoric about \"personal responsibility\" used to deflect systemic critique. However, the play's solutions are less clearly applicable: Priestley's faith in state socialism has been complicated by the mixed record of post-war nationalisation and the welfare state. What endures is the play's dramatic power to make audiences examine their own complicity in social structures that harm others. Its ultimate relevance lies not in its specific politics but in its insistence that indifference to suffering is a moral choice with consequences.",
        },
      ],
    },
    {
      title: 'Section B: Close Language Analysis',
      instructions:
        'Analyse the following quotations with forensic precision. Consider word-level choices, syntax, dramatic context, and multiple interpretations.',
      questions: [
        {
          question:
            'Analyse the Inspector\'s final speech: "We don\'t live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish." How does Priestley craft this to maximise its political impact?',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Priestley crafts this speech with rhetorical precision designed to move from intimacy to apocalyptic warning. The opening - "We don\'t live alone" - uses monosyllabic simplicity and the inclusive "we" to establish a universal truth. The sentence structure progresses from short declaratives ("We are members of one body") to longer, more complex syntax, building oratorical momentum. The organic metaphor "one body" echoes St Paul\'s First Epistle to the Corinthians ("Now ye are the body of Christ, and members in particular"), giving the Inspector\'s socialism a quasi-religious authority that would resonate with a 1945 audience still largely familiar with Christian discourse. The shift to "And I tell you" adopts prophetic register - the Inspector speaks not as a policeman but as a preacher or prophet, anticipating consequences with certainty. The conditional structure "if men will not learn... then they will be taught" presents the audience with a binary choice: voluntary moral growth or forced suffering. The final triad "fire and blood and anguish" is polysyndetic (the repeated "and" gives each noun equal weight) and references both World Wars (fire-bombing, trench warfare, civilian suffering) with biblical apocalypse. For the 1945 audience, these are not hypothetical - they have lived through the "lesson." The speech thus functions as both warning and retrospective diagnosis: this is what happens when society follows Birling\'s philosophy. Priestley times the speech to coincide with the audience\'s maximum emotional engagement, ensuring the political message lands with full dramatic force.',
        },
        {
          question:
            'Analyse the dramatic significance of the play\'s final stage direction: "the telephone rings sharply." Consider how this single moment crystallises the play\'s major themes.',
          lines: 8,
          marks: 8,
          modelAnswer:
            'This single stage direction is arguably the most important moment in the play, and its brilliance lies in its multivalent significance. On a narrative level, the announcement that "a girl has just died" and "a police inspector is on his way" collapses the distinction between real and fake that the Birlings have spent the final act constructing. Their relief is destroyed; the cycle begins again. Structurally, the telephone creates a circular form - the play ends where it began, with an inspector coming to the Birling house - suggesting that without genuine moral change, history repeats. The "sharp" ring punctures the complacent silence that has settled over the family, dramatising Priestley\'s core argument: you cannot ignore social responsibility forever; it will intrude. The telephone is also a symbol of modernity and connection - ironic for a family that refuses to accept their connection to others. For Mr and Mrs Birling, the call represents their worst fear: public exposure. For Sheila and Eric, who have already accepted responsibility, it is vindication. The division in the family\'s response to this final moment crystallises the generational and political divide that structures the play. For the audience, the open ending refuses closure: they leave the theatre in a state of moral uncertainty, forced to ask themselves which Birling they would be. Priestley transforms a simple stage direction into a political provocation.',
        },
      ],
    },
  ],
}

// ---------- A CHRISTMAS CAROL ----------

const carolFoundation: RevisionWorksheet = {
  id: 'christmas-carol-foundation',
  title: 'A Christmas Carol - Foundation Revision Worksheet',
  subject: 'A Christmas Carol',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Key Characters',
      instructions:
        'Answer each question using the sentence starters provided. Try to include at least one quotation in each answer.',
      questions: [
        {
          question:
            'How is Scrooge presented at the beginning of the novella? Begin with: "At the start of the story, Dickens presents Scrooge as..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'At the start of the story, Dickens presents Scrooge as a cold, miserly, and isolated man. He is described as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner" - the list of adjectives emphasises just how unpleasant he is. He refuses to donate to charity, saying the poor should go to "prisons" and "workhouses." Dickens uses Scrooge to represent the selfish attitudes of the Victorian upper classes who ignored the suffering of the poor.',
        },
        {
          question:
            'How has Scrooge changed by the end? Start with: "By the end of the novella, Scrooge has changed because..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'By the end of the novella, Scrooge has changed because the three ghosts have shown him the error of his ways. He becomes "as good a friend, as good a master, and as good a man, as the good old city knew." He raises Bob Cratchit\'s salary, sends a turkey to the Cratchits, and donates generously to charity. The repetition of "good" shows his complete transformation. Dickens uses Scrooge\'s redemption to show his readers that anyone can change and that generosity brings happiness.',
        },
        {
          question:
            'What is Bob Cratchit\'s role in the story? Begin with: "Bob Cratchit is important because he represents..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Bob Cratchit is important because he represents the honest, hardworking poor who are exploited by wealthy employers. Despite being paid very little and working in a freezing office, he remains cheerful and loving towards his family. He toasts Scrooge at Christmas dinner even though Scrooge treats him badly. Dickens uses Cratchit to make readers sympathise with the poor and see that they deserve better treatment.',
        },
        {
          question: 'What does Tiny Tim symbolise? Start with: "Tiny Tim is used by Dickens to..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Tiny Tim is used by Dickens to represent the vulnerable poor, especially children, who suffer because of society\'s neglect. His illness could be cured if his family had more money, showing that poverty literally kills. The Ghost of Christmas Present warns that Tiny Tim will die unless things change, putting direct moral pressure on Scrooge (and the reader). His famous line "God bless us, every one!" shows his generous spirit despite his suffering, making Scrooge\'s greed seem even more shameful.',
        },
        {
          question:
            'Who is Jacob Marley and why does he appear? Begin with: "Jacob Marley is Scrooge\'s dead business partner who..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Jacob Marley is Scrooge\'s dead business partner who appears as a ghost to warn Scrooge to change his ways. He is wrapped in heavy chains made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses" which symbolise how his greed in life now imprisons him in death. Marley tells Scrooge that "mankind was my business" but he ignored this duty. Dickens uses Marley as a frightening example of what awaits Scrooge if he doesn\'t change.',
        },
      ],
    },
    {
      title: 'Section B: Themes',
      instructions:
        'Answer the following questions about themes. Use the scaffolding to help structure your answers.',
      questions: [
        {
          question:
            'How does Dickens present the theme of poverty? Start with: "Dickens shows the reality of poverty by..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Dickens shows the reality of poverty by contrasting the lives of rich and poor characters. The Cratchit family are poor but loving - they make the most of their small Christmas meal. Meanwhile, Scrooge has wealth but is miserable and alone. The Ghost of Christmas Present reveals two children, "Ignorance" and "Want," hiding under his robes - they represent the real effects of poverty on society. Dickens wrote A Christmas Carol partly to raise awareness about the conditions of the poor, influenced by his visit to a ragged school and his own childhood poverty.',
        },
        {
          question:
            'How does Dickens present the theme of redemption? Begin with: "Dickens uses Scrooge\'s journey to show that..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Dickens uses Scrooge\'s journey to show that redemption is possible for anyone who is willing to change. Each ghost shows Scrooge a different aspect of his life - past, present, and future - forcing him to confront his mistakes. The Ghost of Christmas Yet to Come shows Scrooge his own lonely death, which terrifies him into changing. When Scrooge wakes on Christmas morning, he is filled with joy: "I am as light as a feather, I am as happy as an angel." The similes show his complete transformation. Dickens believed that showing compassion and generosity could change society.',
        },
        {
          question:
            'What does Dickens say about the importance of family and community? Start with: "Dickens shows that family and community are important by..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            "Dickens shows that family and community are important by contrasting Scrooge's isolation with the warmth of families celebrating Christmas. The Cratchits' humble meal is full of love and joy, while Scrooge eats alone in his dark rooms. Fred's Christmas party is lively and welcoming even though Scrooge refused his invitation. When Scrooge finally joins Fred's party and helps the Cratchits, he finds happiness. Dickens suggests that money without human connection is meaningless, and that true wealth comes from relationships.",
        },
      ],
    },
  ],
}

const carolCore: RevisionWorksheet = {
  id: 'christmas-carol-core',
  title: 'A Christmas Carol - Core Revision Worksheet',
  subject: 'A Christmas Carol',
  board: 'AQA',
  difficulty: 'Core',
  duration: '50 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Character Analysis',
      instructions:
        "Write detailed analytical paragraphs. Consider Dickens's methods (language, structure, form) and his social message.",
      questions: [
        {
          question:
            'Analyse how Dickens uses the character of Scrooge to critique Victorian attitudes toward the poor.',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Dickens uses Scrooge as a representative figure for the callous attitudes of Victorian England\'s wealthy classes. Scrooge\'s declaration that the poor should go to "prisons" and "workhouses" directly echoes the philosophy behind the 1834 Poor Law Amendment Act, which Dickens despised. The workhouse system was designed to make poverty so unpleasant that the poor would do anything to avoid it - a philosophy rooted in the Malthusian idea that helping the poor only encourages population growth. Scrooge\'s chilling statement "If they would rather die... they had better do it, and decrease the surplus population" directly paraphrases Malthus. Dickens uses the accumulated adjectives of the opening - "squeezing, wrenching, grasping, scraping, clutching, covetous" - to make Scrooge physically repulsive, embodying the ugliness of greed. The simile "hard and sharp as flint" suggests he is both dangerous and cold, while "solitary as an oyster" hints at the isolation that comes with selfishness (though oysters also contain pearls, foreshadowing his potential for transformation). Scrooge\'s redemption arc serves Dickens\'s argument that these attitudes can and must change - if even the most hardened miser can learn compassion, there is hope for society as a whole.',
        },
        {
          question:
            "How does Dickens present the Cratchit family, and what is their significance in the novella's social commentary?",
          lines: 7,
          marks: 7,
          modelAnswer:
            "Dickens presents the Cratchits as the idealised working-class family - poor in wealth but rich in love, loyalty, and generosity. Their Christmas dinner scene is detailed with sensory language: the goose is described with reverence despite being small, and the pudding causes Mrs Cratchit anxiety lest it not be enough. Dickens makes the reader feel both the warmth of their togetherness and the precariousness of their situation. Bob Cratchit's willingness to toast Scrooge despite his exploitation shows extraordinary generosity of spirit, shaming Scrooge (and the reader) by comparison. Tiny Tim serves as the emotional centre: his potential death is presented as a direct consequence of poverty, placing moral responsibility on those with the power to help. The Cratchits are somewhat sentimentalised - they never complain, they are uniformly good - which reflects Dickens's rhetorical strategy: by making the poor sympathetic and virtuous, he challenges the prevailing narrative that poverty was caused by moral failing. This was a radical counter-argument to Victorian social Darwinism and the punitive approach of the Poor Law.",
        },
        {
          question:
            "Analyse the role and significance of the three ghosts in Scrooge's transformation.",
          lines: 7,
          marks: 7,
          modelAnswer:
            'The three ghosts function as structural devices that organise Scrooge\'s journey from ignorance to enlightenment along a past-present-future trajectory. The Ghost of Christmas Past, with its flickering light symbolising memory and truth, forces Scrooge to reconnect with his emotional self - the lonely schoolboy, the joyful apprentice under Fezziwig, the loss of Belle. These memories establish that Scrooge was not always cold, making his redemption psychologically credible. The Ghost of Christmas Present, abundant and generous, exposes the reality of poverty that Scrooge\'s wealth insulates him from. The reveal of "Ignorance" and "Want" beneath the spirit\'s robes is a direct political message: these are society\'s children, and "most of all beware this boy" (Ignorance) warns that refusing to educate and help the poor will destroy civilisation. The Ghost of Christmas Yet to Come, silent and shrouded in black, operates through pure fear - showing Scrooge\'s unmourned death and stolen possessions. Its silence is more terrifying than words, forcing Scrooge to fill the void with his own moral reckoning. Dickens structures the three visits as an escalating argument: emotional appeal, social evidence, and existential threat, mirroring the techniques of effective persuasive writing.',
        },
      ],
    },
    {
      title: 'Section B: Themes and Context',
      instructions: 'Analyse the following themes with integrated contextual understanding.',
      questions: [
        {
          question:
            'How does Dickens use A Christmas Carol to argue for social reform? Consider the historical context of the 1840s.',
          lines: 7,
          marks: 7,
          modelAnswer:
            "Dickens wrote A Christmas Carol in 1843, a period of extreme social inequality in Victorian Britain. The \"Hungry Forties\" saw widespread poverty, child labour, and the harsh effects of the 1834 Poor Law, which forced the destitute into degrading workhouses. Dickens had visited a ragged school in Field Lane and was horrified by the conditions of poor children; he originally planned to write a political pamphlet but realised fiction would have greater impact. The novella's argument for social reform operates on multiple levels: emotionally, through characters like Tiny Tim who make poverty personal; intellectually, through the allegory of Ignorance and Want; and spiritually, through the framework of Christian charity that permeates the narrative. Scrooge's transformation from someone who suggests the poor should \"decrease the surplus population\" to a generous benefactor models the change Dickens wanted to see in his wealthy readers. The novella's Christmas setting is strategic: it invokes the Christian duty of charity and the spirit of goodwill, making Dickens's social message feel natural rather than preachy. The book was enormously successful and is credited with popularising many Christmas traditions, demonstrating fiction's power to change social attitudes.",
        },
        {
          question:
            'Explore how Dickens presents the theme of isolation versus community throughout the novella.',
          lines: 7,
          marks: 7,
          modelAnswer:
            "Dickens structures the entire novella around the opposition between isolation and community. Scrooge begins \"solitary as an oyster,\" physically and emotionally cut off from humanity. His chambers are dark and cold, his office barely heated, and he rejects every invitation to connect: his nephew's dinner, the charity collectors' appeal, even his clerk's right to Christmas Day. This isolation is presented as both the cause and effect of his miserliness - a self-reinforcing cycle. The three ghosts systematically show him communities he has excluded himself from: Fezziwig's joyful workplace, the Cratchits' loving home, Fred's warm party. Each scene emphasises togetherness, warmth, music, and shared food - the sensory opposite of Scrooge's cold, silent world. The Ghost of Christmas Yet to Come shows the ultimate consequence of isolation: an unmourned death where even his bedsheets are stolen. Dickens makes a structural argument: every stave shows community as the source of happiness and isolation as the source of misery. Scrooge's redemption is marked by his reintegration into community: he joins Fred's party, helps the Cratchits, and becomes \"as good a friend... as the good old city knew.\" Dickens suggests that individual wealth means nothing without social connection, arguing against the atomised individualism of laissez-faire economics.",
        },
      ],
    },
    {
      title: 'Section C: Language and Structure',
      instructions: 'Analyse specific quotations and structural choices.',
      questions: [
        {
          question:
            'Analyse the significance of the novella\'s opening: "Marley was dead: to begin with." How does Dickens use this structurally and thematically?',
          lines: 6,
          marks: 7,
          modelAnswer:
            'This opening line is deceptively simple but brilliantly crafted. The blunt statement "Marley was dead" immediately introduces death as a central concern and creates an atmosphere of finality. The conversational addition "to begin with" does several things: it establishes Dickens\'s characteristic narrative voice - informal, direct, engaging - drawing the reader into a storytelling relationship. Structurally, it sets up the entire plot: if Marley is dead "to begin with," he must return, and the story will concern the boundary between life and death. The narrator spends several paragraphs insisting on Marley\'s death, using the simile "dead as a door-nail" and debating whether a coffin-nail might be more apt. This comic digression serves a serious purpose: Dickens needs the reader to accept Marley\'s death absolutely so that his ghostly return will have maximum dramatic impact. The phrase "to begin with" also implies a narrative arc - this is the beginning, and something will change by the end. Dickens thus encodes the novella\'s redemption structure in its very first sentence, signalling that death and change are the story\'s twin subjects.',
        },
      ],
    },
  ],
}

const carolHigher: RevisionWorksheet = {
  id: 'christmas-carol-higher',
  title: 'A Christmas Carol - Higher Revision Worksheet',
  subject: 'A Christmas Carol',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '60 minutes',
  totalMarks: 60,
  sections: [
    {
      title: 'Section A: Critical Analysis',
      instructions:
        'Write perceptive, conceptualised responses. Explore layers of meaning, alternative interpretations, and the relationship between form and content.',
      questions: [
        {
          question:
            '"A Christmas Carol is propaganda disguised as entertainment." To what extent do you agree? Consider the relationship between Dickens\'s narrative methods and his political intentions.',
          lines: 12,
          marks: 12,
          modelAnswer:
            "The term \"propaganda\" implies manipulation, and Dickens certainly employs sophisticated rhetorical strategies to guide his reader's moral and political response. The novella's genre choices are calculated: the ghost story entertains while delivering moral instruction; the Christmas setting invokes cultural expectations of generosity; the fairy-tale redemption arc offers satisfying closure that embeds the political message in pleasure. Dickens's characterisation is deliberately polarised - Scrooge is cartoonishly miserly, Tiny Tim angelically good - reducing complex social issues to a simple moral binary. The narrative voice cajoles, jokes, and emotionally manipulates: the reader is positioned as an insider sharing the narrator's values, making it difficult to resist the intended response. In this sense, \"propaganda\" is accurate. However, the term underestimates the novella's sophistication. Dickens was responding to real social crises with genuine moral urgency - child labour, workhouse conditions, starvation wages - and his empathy for the poor is not manufactured but rooted in personal experience of poverty and the blacking factory. The novella acknowledges complexity in ways propaganda typically does not: Scrooge's backstory (neglected child, loss of love) provides psychological depth that complicates moral judgement, and the Ghost of Christmas Present's revelation of \"Ignorance\" and \"Want\" addresses systemic causes rather than individual villainy. Furthermore, the most effective propaganda is typically authoritarian - it demands compliance. Dickens's approach is persuasive rather than coercive: he changes hearts through emotional engagement, not through threat. A Christmas Carol is better described as a work of advocacy fiction - literature that uses narrative pleasure to advance a political argument - a tradition that includes Uncle Tom's Cabin, Oliver Twist, and contemporary climate fiction. Its enduring cultural power suggests it transcends mere propaganda to achieve something more lasting: a genuine shift in how readers feel about social inequality.",
        },
        {
          question:
            'Analyse how Dickens uses the novella form - its structure, length, and narrative compression - to maximise the impact of his social message.',
          lines: 10,
          marks: 10,
          modelAnswer:
            "Dickens's choice of the novella form was both commercially strategic and artistically purposeful. At a time when his novels were serialised over months, A Christmas Carol was published as a single, affordable volume designed to be read in one sitting - ensuring the emotional momentum of Scrooge's transformation is uninterrupted. The five-stave structure explicitly evokes a Christmas carol (a song), giving the narrative a musical quality of movement and resolution. Each stave has a distinct tonal register: Stave One is comic-gothic (Marley's ghost), Stave Two is nostalgic-melancholic (Christmas Past), Stave Three is warm but darkening (Christmas Present), Stave Four is bleak-terrifying (Christmas Yet to Come), and Stave Five is jubilant-redeemed. This emotional arc mirrors the structure of a sermon - diagnosis, evidence, warning, conversion - which is appropriate given Dickens's quasi-religious message about Christian charity. The novella's compression forces Dickens into symbolic rather than realistic storytelling: Scrooge's decades of miserliness are overturned in a single night, which is psychologically implausible but allegorically powerful. The supernatural framework licenses this compression, allowing Dickens to cover an entire life in a few scenes. The brevity also means every detail carries weight: Marley's chains, the extinguished candle, the bare name on Scrooge's tombstone are all densely symbolic because there is no space for redundancy. The novella form thus enables Dickens to create a concentrated moral argument that functions more like a parable than a novel, achieving through intensity what his longer works achieve through accumulation.",
        },
        {
          question:
            'Explore how Dickens constructs and deploys the figure of the unreformed Scrooge as a critique of specific Victorian economic and philosophical ideologies.',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Scrooge\'s character is a carefully assembled composite of Victorian ideological positions that Dickens found morally repugnant. His suggestion that the poor should "decrease the surplus population" directly references Thomas Malthus\'s Essay on the Principle of Population (1798), which argued that poverty was an inevitable result of population growth and that charity only worsened the problem. Scrooge\'s faith in "prisons" and "workhouses" reflects the utilitarian philosophy behind the 1834 Poor Law Amendment Act, championed by Edwin Chadwick, which treated poverty as a moral failing to be punished rather than a social problem to be solved. His obsession with profit and indifference to human suffering embodies the worst excesses of laissez-faire capitalism and the Manchester School of economics, which opposed government intervention in the market. Even Scrooge\'s preference for solitude reflects the atomised individualism of classical liberalism - the idea that society is merely a collection of self-interested individuals with no mutual obligations. Dickens constructs Scrooge as a walking ideology to ensure the reader understands that his cruelty is not merely personal but systemic - it is the logical endpoint of these philosophies when applied without compassion. The genius of the narrative is that Scrooge\'s ideology is returned to him as lived experience through the ghosts: the Ghost of Christmas Yet to Come shows him what a society without mutual care looks like when he is the one in need. The ideological critique thus becomes personal and emotional, making abstract economic philosophy viscerally real.',
        },
      ],
    },
    {
      title: 'Section B: Close Analysis',
      instructions:
        'Provide forensic analysis of the following passages. Consider word-level choices, syntax, rhythm, and multiple layers of meaning.',
      questions: [
        {
          question:
            'Analyse the passage describing Scrooge: "Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster." How does Dickens\'s prose style serve his characterisation?',
          lines: 10,
          marks: 10,
          modelAnswer:
            'This passage demonstrates Dickens\'s virtuosic manipulation of prose rhythm to embody character. The exclamatory opening "Oh!" and the direct address to the reader create an oral, performative quality - Dickens originally gave public readings, and the prose is designed for vocal delivery. The list of present participles - "squeezing, wrenching, grasping, scraping, clutching" - creates a relentless, accumulative rhythm where each word adds another layer of physical aggression. These are all actions of taking and holding; there is no giving or releasing in Scrooge\'s vocabulary. The final adjective "covetous" shifts from physical to moral register, naming the sin. The simile "hard and sharp as flint" operates on multiple levels: flint is cold, unyielding, and associated with the pre-industrial past, suggesting Scrooge belongs to an earlier, more primitive age. The extension - "from which no steel had ever struck out generous fire" - transforms the cliche by adding the image of failed ignition: Scrooge has the potential for warmth (flint can produce fire) but has never been activated. This subtly foreshadows his capacity for transformation. The tricolon "secret, and self-contained, and solitary" uses polysyndeton (the repeated "and") to slow the rhythm, creating a sense of enclosure and withdrawal. The simile "solitary as an oyster" is brilliantly chosen: oysters are hard-shelled, closed, and associated with both worthlessness (they were cheap food for the poor) and hidden value (pearls). Dickens encodes Scrooge\'s entire character arc - the hard exterior concealing the capacity for preciousness - in a single simile.',
        },
        {
          question:
            "Analyse the significance of the Ghost of Christmas Present revealing the children Ignorance and Want. How does this moment function within the novella's political argument?",
          lines: 8,
          marks: 8,
          modelAnswer:
            'This is the novella\'s most explicitly political moment, where Dickens drops the veil of entertainment to address the reader directly through allegory. The children are described as "wretched, abject, frightful, hideous, miserable" - an accumulation of adjectives that mirrors the opening description of Scrooge, drawing a parallel between the ugliness of poverty and the ugliness of the greed that causes it. They are found hiding beneath the Ghost\'s abundant robes, suggesting that festive generosity conceals the reality of deprivation - a critique of seasonal charity that does not address structural inequality. The Ghost\'s warning to "beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom" elevates the scene to prophecy. "Ignorance" is identified as the greater threat because an uneducated populace will eventually destroy the social order - a prescient argument for universal education. When Scrooge asks "Have they no refuge or resource?" the Ghost throws his own words back: "Are there no prisons? Are there no workhouses?" This structural echo is devastating: Scrooge\'s callous rhetoric is recontextualised as a sentence of death for children. Dickens forces Scrooge (and the reader) to confront the human consequences of their ideology, making the abstract personal. The scene anticipates Dickens\'s later, more sustained social critiques in Bleak House and Hard Times, but its concentrated power within the novella form makes it arguably his most effective political intervention.',
        },
      ],
    },
  ],
}

// ---------- POWER & CONFLICT POETRY ----------

const poetryFoundation: RevisionWorksheet = {
  id: 'power-conflict-poetry-foundation',
  title: 'Power & Conflict Poetry - Foundation Revision Worksheet',
  subject: 'Power & Conflict Poetry',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Understanding Key Poems',
      instructions:
        'Answer the following questions about specific poems. Use the sentence starters to help you.',
      questions: [
        {
          question:
            'What is "Ozymandias" by Percy Shelley about? Start with: "The poem is about..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The poem is about a ruined statue of an ancient king called Ozymandias (Ramesses II) found in the desert. The statue is broken and surrounded by empty sand, but the inscription boasts "Look on my Works, ye Mighty, and despair!" The irony is that nothing remains of his empire. Shelley uses the poem to show that political power is temporary and nature will always outlast human ambition. This was a challenge to the powerful rulers of his own time.',
        },
        {
          question:
            'What happens in "Remains" by Simon Armitage? Begin with: "The poem describes a soldier who..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The poem describes a soldier who shot a looter in a conflict zone and is now haunted by the memory. The speaker says "probably armed, possibly not" showing his uncertainty about whether the killing was justified. The dead man\'s image stays with him: "his bloody life in my bloody hands." Armitage uses the poem to explore PTSD and the psychological damage that war causes, even when soldiers return home physically unharmed.',
        },
        {
          question:
            'What is the message of "London" by William Blake? Start with: "Blake\'s message is that..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Blake\'s message is that London is a city of suffering caused by those in power. He describes "marks of weakness, marks of woe" on every face he sees. He criticises the Church ("every black\'ning Church appalls"), the monarchy ("the hapless Soldier\'s sigh runs in blood down Palace walls"), and the way society traps people in poverty. Blake, a Romantic poet writing during the Industrial Revolution, wanted to expose the hypocrisy of institutions that claimed to help people while actually causing their suffering.',
        },
        {
          question: 'What is "Exposure" by Wilfred Owen about? Begin with: "The poem describes..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The poem describes soldiers in the trenches during World War One suffering from extreme cold. Owen shows that the weather is as deadly as the enemy: "Our brains ache, in the merciless iced east winds that knive us." The soldiers are waiting but nothing happens - repeated in the refrain "But nothing happens" - showing the tedium and helplessness of trench warfare. Owen, who served and died in WWI, wanted to challenge the idea that war was glorious by showing its brutal reality.',
        },
        {
          question:
            'What is "The Charge of the Light Brigade" about? Start with: "The poem describes..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The poem describes a cavalry charge during the Battle of Balaclava in the Crimean War (1854) where 600 soldiers rode into a valley surrounded by enemy cannons. The charge was a mistake caused by a miscommunicated order, and many soldiers died. Tennyson celebrates the soldiers\' bravery and obedience - "Theirs not to reason why, theirs but to do and die" - but also shows the horror of the situation. He uses repetition and rhythm to create the feeling of the charge, honouring the soldiers\' courage.',
        },
      ],
    },
    {
      title: 'Section B: Comparing Poems',
      instructions:
        'Compare the following pairs of poems. Use the scaffolding: "Both poems explore... However, while [Poem A]... [Poem B]..."',
      questions: [
        {
          question:
            'Compare how power is presented in "Ozymandias" and "London." Start with: "Both poems explore the theme of power, but..."',
          lines: 6,
          marks: 6,
          modelAnswer:
            'Both poems explore the theme of power, but they present it differently. In "Ozymandias," Shelley shows that the power of a single ruler is temporary - the statue is destroyed and the empire gone, yet Ozymandias arrogantly claimed "Look on my Works, ye Mighty, and despair!" This shows power fading over time. In "London," Blake shows power being used to oppress people in the present - the "mind-forg\'d manacles" suggest people are mentally trapped by those in authority. While Shelley\'s message is that power eventually crumbles, Blake\'s message is that power actively causes suffering right now. Both poets criticise those in power, but Shelley is more hopeful (power fades) while Blake is angrier (power destroys).',
        },
        {
          question:
            'Compare how conflict affects individuals in "Remains" and "Exposure." Begin with: "Both poems show the impact of conflict on soldiers..."',
          lines: 6,
          marks: 5,
          modelAnswer:
            'Both poems show the impact of conflict on soldiers, but in different ways. In "Remains," the conflict is modern and the damage is psychological - the soldier is haunted by killing someone and cannot escape the memory: "his bloody life in my bloody hands." The colloquial language makes it feel real and personal. In "Exposure," the conflict is WWI and the suffering is physical - the soldiers endure freezing cold that "knive us" and slowly kills them. Owen uses half-rhyme and a slow rhythm to create a sense of hopelessness. While Armitage focuses on guilt and PTSD after the event, Owen shows suffering during the experience. Both poets challenge the idea that war is heroic by revealing its true human cost.',
        },
        {
          question:
            'Compare how nature is presented as a powerful force in "Ozymandias" and "Exposure." Start with: "Nature is shown as powerful in both poems..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Nature is shown as powerful in both poems, but in different ways. In "Ozymandias," nature has destroyed a once-great empire - the "lone and level sands stretch far away," burying Ozymandias\'s achievements. Nature is patient and inevitable, outlasting human power over centuries. In "Exposure," nature is an active, aggressive force attacking the soldiers: the winds "knive us" and the snow is described with menacing personification. While Shelley uses nature to comment on the passing of time, Owen uses nature as a weapon that is more deadly than the human enemy. Both poems show that nature is ultimately more powerful than humanity.',
        },
      ],
    },
  ],
}

const poetryCore: RevisionWorksheet = {
  id: 'power-conflict-poetry-core',
  title: 'Power & Conflict Poetry - Core Revision Worksheet',
  subject: 'Power & Conflict Poetry',
  board: 'AQA',
  difficulty: 'Core',
  duration: '50 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Poem Analysis',
      instructions:
        "Analyse the following poems in detail. Consider the poet's methods (language, structure, form) and how meaning is created.",
      questions: [
        {
          question:
            'Analyse how Shelley presents the theme of power in "Ozymandias." Consider the poem\'s form and structure as well as language.',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Shelley presents power as inherently transient through a layered narrative structure that itself enacts the erosion of authority. The poem is a sonnet - traditionally associated with love - which Shelley subverts to address political power, using the form ironically. The narrative is delivered through multiple voices: a traveller tells the speaker about a sculptor who depicted a king. This chain of transmission distances us from Ozymandias, structurally enacting his fading relevance. The sculptor\'s skill paradoxically outlasts the king\'s power: "the hand that mocked them, and the heart that fed" - the artist\'s mocking hand survives while the ruler\'s empire has vanished. The central irony of the inscription "Look on my Works, ye Mighty, and despair!" is devastating when juxtaposed with "Nothing beside remains." The caesura after "despair!" forces the reader to pause before confronting the emptiness. Shelley, a radical Romantic, uses the poem to challenge the legitimacy of tyranny: if all earthly power is destined to crumble, no ruler\'s authority is absolute. The "lone and level sands" stretching to infinity represent nature\'s indifference to human ambition, a characteristically Romantic elevation of the natural world over human constructs.',
        },
        {
          question:
            'Analyse how Owen presents the reality of war in "Exposure." Focus on his use of sensory language and structural devices.',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Owen constructs "Exposure" as an assault on the reader\'s senses that mirrors the soldiers\' experience. The opening - "Our brains ache, in the merciless iced east winds that knive us" - immediately establishes physical pain through the visceral verb "knive" (Owen\'s deliberate spelling). Sibilance throughout ("sudden successive flights of bullets streak the silence") recreates the sounds of the battlefield, while the personification of wind as a malevolent force ("mad gusts tugging on the wire") transforms nature into an active enemy. Owen\'s structural choices reinforce the poem\'s themes: the repeated refrain "But nothing happens" creates a frustrating, cyclical pattern that captures the tedium and futility of trench warfare. The pararhyme (half-rhyme) throughout - "knive us/nervous," "silent/salient" - creates an unsettling, unresolved sound that mirrors the soldiers\' psychological unease. The stanzas themselves are uniform, suggesting the relentless, unchanging nature of their suffering. Owen juxtaposes the frozen present with memories of warmth - "glimpsing the sunk fires, glozed with crusted dark-red jewels" - but these memories fade: "Slowly our ghosts drag home." The soldiers are presented as already dead, their humanity leached away by exposure. Owen\'s purpose is explicitly anti-war, countering the propaganda that young men like himself were subjected to.',
        },
        {
          question:
            'Analyse how Armitage presents the psychological effects of conflict in "Remains."',
          lines: 7,
          marks: 7,
          modelAnswer:
            'Armitage constructs "Remains" as a dramatic monologue that charts the speaker\'s psychological disintegration with devastating simplicity. The colloquial opening - "On another occasion, we got sent out" - establishes a casual, anecdotal tone that belies the horror to follow. This conversational register is maintained throughout ("legs it," "tosses his guts"), creating the impression of a soldier trying to tell his story in the only language available to him. The pivotal moment - "probably armed, possibly not" - is structurally central and morally devastating: the hedging adverbs reveal the uncertainty that will become the source of trauma. Armitage uses enjambment aggressively, lines spilling into each other as the memory becomes uncontrollable: "and I swear I see every round as it rips through his life." The present tense "I see" brings the past into the present, showing the memory is not contained by time. The poem\'s final stanza breaks from the pattern, becoming more fragmented: "his bloody life in my bloody hands" - where "bloody" functions simultaneously as swear word, literal description, and moral judgement. The closing image of trying to remove the memory "near to the knuckle" by getting "under the skin" uses idioms about proximity and depth, suggesting the trauma is both superficially present and deeply embedded. Armitage, who works with veterans through the charity "Cause," ensures the poem serves as testimony to the invisible wounds of modern warfare.',
        },
      ],
    },
    {
      title: 'Section B: Comparative Analysis',
      instructions:
        'Compare the following poem pairs. Structure your response around a shared theme, analysing similarities and differences in method and meaning.',
      questions: [
        {
          question:
            'Compare how the poets present the abuse of power in "London" (Blake) and "Checking Out Me History" (Agard).',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Both Blake and Agard present power as a force that controls minds, but their contexts and methods differ significantly. Blake\'s "mind-forg\'d manacles" is a powerful metaphor for psychological oppression - the repetition of "every" ("every cry of every Man, every Infant\'s cry of fear") creates a sense of universal, inescapable suffering. Blake presents London\'s institutions - Church, monarchy, marriage - as corrupt systems that chain people to misery. Agard similarly exposes institutional control through the British education system, which taught him "Dem tell me bout 1066 and all dat" while suppressing Caribbean history. His phonetic spelling and Creole dialect are themselves acts of resistance against the Standard English that the education system imposed. Structurally, Blake uses a regular ABAB rhyme scheme that mirrors the oppressive order he describes, while Agard alternates between two voices - the italicised Caribbean history and the standard text of imposed British history - making the contrast visual as well as linguistic. Blake\'s tone is angry but controlled; Agard\'s builds to a defiant declaration: "I carving out me identity." Both poets argue that true power lies in controlling knowledge and perception, but while Blake can only diagnose the problem, Agard enacts resistance by reclaiming his narrative.',
        },
        {
          question:
            'Compare how conflict is memorialised in "The Charge of the Light Brigade" (Tennyson) and "War Photographer" (Duffy).',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Tennyson and Duffy both address how society remembers conflict, but from radically different perspectives. Tennyson, writing as Poet Laureate shortly after the Battle of Balaclava, uses a thundering galloping rhythm - predominantly anapaestic dimeter (da-da-DUM da-da-DUM) with a dactylic refrain ("Rode the six hundred") - "Half a league, half a league, half a league onward" - to celebrate the soldiers\' courage and create a sense of unstoppable momentum. His imperative "Honour the charge they made!" demands public memorialisation, framing sacrifice as glorious. Duffy, writing a century later, presents a war photographer developing images in his darkroom as "a priest preparing to intone a Mass," investing his work with religious solemnity. However, his photographs will appear in a Sunday supplement "between the bath and pre-lunch beers" - domestic indifference trivialising suffering. While Tennyson\'s poem attempts to give meaning to death through collective memory, Duffy questions whether modern media creates genuine empathy or merely spectacle. Tennyson uses anaphora and repetition to build patriotic fervour; Duffy uses regular stanzas and controlled rhyme to create the photographer\'s methodical composure, which cracks only in "a half-formed ghost." Both poems ultimately ask: what do we owe to those who suffer in conflict? Tennyson answers with national honour; Duffy with moral discomfort at society\'s failure to care.',
        },
      ],
    },
    {
      title: 'Section C: Quick-Fire Quotation Analysis',
      instructions:
        'For each quotation, identify the poem, explain the technique, and analyse the effect.',
      questions: [
        {
          question:
            '"The hand that mocked them, and the heart that fed" - Analyse the ambiguity of "mocked."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'From "Ozymandias" by Shelley. "Mocked" has a double meaning: the sculptor "mocked" (imitated/copied) the king\'s expression, but also "mocked" (ridiculed) him by capturing his arrogance for posterity. The sculptor\'s art outlasts the king\'s power, suggesting that creative expression is more enduring than political authority. The juxtaposition of "hand" (sculptor) and "heart" (king) separates craft from emotion, implying art can capture truth independently of its subject\'s intentions.',
        },
        {
          question:
            '"Whose survey is not in the survey" - Analyse the effect of this line from "Tissue."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'From "Tissue" by Imtiaz Dharker. This line plays on the dual meaning of "survey" - an official measurement/map and the act of looking/overseeing. It suggests that the most important things in life cannot be captured by official records or systems of measurement. Dharker challenges the structures humans build (maps, borders, money) by suggesting they are as fragile as tissue paper and cannot contain the full complexity of human experience.',
        },
        {
          question:
            '"We are prepared: we build our houses squat" - Analyse the tone and meaning from "Storm on the Island."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'From "Storm on the Island" by Seamus Heaney. The opening declarative "We are prepared" establishes false confidence - the community believes they can withstand the storm, but the poem gradually reveals their vulnerability. "Squat" suggests buildings low to the ground, sturdy but also diminished. Heaney may be allegorically addressing the Troubles in Northern Ireland (the title contains "Stormont," the Northern Irish parliament), where communities prepared for political "storms" but found their preparations inadequate against the reality of conflict.',
        },
      ],
    },
  ],
}

const poetryHigher: RevisionWorksheet = {
  id: 'power-conflict-poetry-higher',
  title: 'Power & Conflict Poetry - Higher Revision Worksheet',
  subject: 'Power & Conflict Poetry',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '60 minutes',
  totalMarks: 60,
  sections: [
    {
      title: 'Section A: Conceptualised Analysis',
      instructions:
        'Write perceptive, conceptualised responses. Move beyond feature-spotting to explore how meaning is created through the interplay of form, language, and context.',
      questions: [
        {
          question:
            'Analyse how Heaney uses "Storm on the Island" to explore the relationship between human vulnerability and the forces that threaten communities. Consider how the poem might operate as an extended metaphor.',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Heaney constructs "Storm on the Island" as a poem that operates simultaneously on literal and allegorical levels, and this duality is its chief source of power. On the surface, the blank verse describes an island community preparing for and enduring a storm. The opening confidence - "We are prepared" - gradually erodes as the storm\'s reality overwhelms their preparations. The absence of natural shelter is significant: "there are no stacks or stooks" and "you might think that the sea is company" but it "spits like a tame cat turned savage." This transformation of the familiar into the threatening is the poem\'s central movement. The concluding line - "It is a huge nothing that we fear" - is philosophically rich: the storm is both physically real (destructive wind) and conceptually empty (fear itself). This paradox of substantial nothingness connects to the allegorical reading: the poem\'s title contains "Stormont" (the seat of Northern Irish government), and its exploration of a community under siege from forces that are both real and psychological resonates with the Troubles. The "huge nothing" could represent sectarian fear - real in its effects but based on inherited prejudice rather than rational threat. Heaney\'s use of blank verse (unrhymed iambic pentameter) creates a conversational authority that mirrors the community\'s collective voice ("we"), while the enjambment across lines enacts the relentless, boundary-crossing nature of the storm/threat. The poem\'s power lies in its refusal to resolve the metaphor: Heaney lets both readings coexist, creating a text that addresses universal human vulnerability through a specific political context.',
        },
        {
          question:
            'Analyse how Dharker uses "Tissue" to challenge human attempts to impose permanent structures on an impermanent world. Consider the poem\'s form as an embodiment of its argument.',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Dharker constructs "Tissue" as a meditation on the tension between human desire for permanence and the fundamental impermanence of existence, and the poem\'s form is inseparable from its argument. The poem comprises 10 quatrains followed by a final isolated single-line stanza ("turned into your skin.") that stands ALONE - this structural design is itself part of the meaning. The absence of rhyme and the fluid enjambment further embody the "tissue" quality the poem celebrates - the text itself is delicate, shifting, refusing fixed shape. The central conceit accumulates layers of meaning: tissue paper holds sacred text (the Koran with family names and histories), records commerce ("fine slips"), maps territory ("borderlines"), and records identity. Each example represents a human system of control - religion, money, geography, bureaucracy - and Dharker argues that all are as fragile as the material they are recorded on. The conditional "If buildings were paper" imagines an architecture of impermanence where structures could be transformed, made beautiful precisely because they are not permanent. This is a radical philosophical position: rather than lamenting impermanence (as Western tradition often does), Dharker presents it as liberating. The final isolated single-line stanza ("turned into your skin.") is structurally isolated - Dharker breaks the regularity of the quatrains to emphasise the volta from paper to flesh, enacting the vulnerability it describes. The human body is the ultimate "tissue" - thin, translucent, temporary. By ending with the body, Dharker collapses the distinction between the abstract (systems of power) and the physical (human mortality), arguing that accepting our fragility is the route to authentic existence. The poem challenges the reader to hold structures lightly, recognising that what we build will always be, and should be, temporary. (Rights: from The terrorist at my table, Bloodaxe Books 2006.)',
        },
        {
          question:
            'Analyse how Duffy uses "War Photographer" to interrogate the ethics of witnessing suffering and the relationship between art, truth, and empathy.',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Duffy constructs the poem around a series of tensions that remain deliberately unresolved, forcing the reader into the same ethical discomfort that defines the photographer\'s experience. The opening simile - "In his darkroom he is finally alone / with spools of suffering set out in ordered rows" - immediately establishes the paradox of aestheticising pain: the word "ordered" imposes artistic arrangement on chaotic violence. The religious analogy ("a priest preparing to intone a Mass") elevates the photographer\'s work to sacred duty, yet the reference to "Rural England" - safe, complacent - frames his solitude as cultural alienation. The developing photograph - "A stranger\'s features faintly start to twist before his eyes, a half-formed ghost" - uses the literal process of photographic development as a metaphor for the partial, incomplete nature of representation. The image is always "half-formed," never fully capturing the reality. Duffy\'s regular form (four six-line stanzas, approximate rhyme) creates a controlled surface that mirrors the photographer\'s professional composure, but the content strains against this control: "a hundred agonies in black-and-white" reduces suffering to consumable images. The final stanza implicates the reader/viewer: "from the aeroplane he stares impassively at where / he earns his living and they do not care." The ambiguity of "they" (editors? readers? the British public?) disperses responsibility. Duffy offers no resolution: the photographer is trapped between the necessity of bearing witness and the impossibility of making people care. The poem thus becomes its own ethical demonstration - it makes the reader care momentarily, knowing that this care will fade, enacting the very cycle it critiques.',
        },
      ],
    },
    {
      title: 'Section B: Comparative Critical Analysis',
      instructions:
        'Write sustained comparative analyses. Develop a conceptualised argument that moves fluidly between poems. Avoid mechanical alternation.',
      questions: [
        {
          question:
            'Compare how poets explore the relationship between memory and identity in "The Émigrée" (Rumens) and "Kamikaze" (Garland).',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Both Rumens and Garland explore how memory functions as a repository of identity that resists external pressure to conform, but they present radically different relationships between individual memory and collective expectation. In "The Émigrée," memory of a homeland is defiantly preserved against political reality: the speaker\'s city is "sunlight-clear" regardless of the "new government" that has presumably destroyed it. Memory becomes an act of political resistance - the city "takes me dancing through the city of walls" - where the past self, speaking "the words I use," maintains an identity that exile cannot erase. The poem\'s structure enacts this persistence: each stanza returns to the city despite acknowledging threats, creating a pattern of resistance and reassertion. In "Kamikaze," memory functions differently: the pilot\'s childhood memories of fishing with his father ("the loose silver of whitebait") are so vivid and life-affirming that they override the ideological conditioning that should have led to his death. Here, personal memory defeats national narrative - but at devastating cost. The pilot\'s family treat him "as though he no longer existed," making him a living ghost. While Rumens\'s speaker finds strength in memory, Garland\'s pilot finds survival but loses social existence. Both poems suggest that personal memory is more authentic than political narrative, but Garland complicates this by showing that defying collective memory (the honour code) has consequences. The formal choices reflect these positions: Rumens\'s three equal stanzas suggest stability and persistence; Garland\'s continuous, enjambed stanzas suggest a story that cannot be contained or controlled, spilling forward like the pilot\'s unstoppable memories.',
        },
        {
          question:
            'Compare how poets present the futility of conflict in "Exposure" (Owen) and "Bayonet Charge" (Hughes).',
          lines: 10,
          marks: 10,
          modelAnswer:
            'Owen and Hughes both deconstruct the mythology of heroic warfare, but their methods are temporally and stylistically distinct in ways that illuminate the evolution of war poetry. Owen writes from within WWI, and "Exposure" enacts futility through structural repetition: the refrain "But nothing happens" is a masterclass in anticlimactic deflation, each repetition draining expectation until the reader shares the soldiers\' numbness. Owen\'s pararhyme (knive us/nervous, wire/war) creates phonetic near-misses that sonically embody the poem\'s theme of unfulfilled expectation. The suffering is slow, cumulative, environmental - the soldiers die not in battle but in waiting, eroded by cold. Hughes, writing retrospectively about WWI but informed by his father\'s experiences and the broader tradition of war poetry, presents futility through a single moment of terrifying kinetic energy. Where Owen is static, Hughes is explosive: "Suddenly he awoke and was running - raw / In raw-seamed hot khaki." The physicality is overwhelming, the enjambment hurling the reader forward as the soldier is hurled forward. Yet this energy is purposeless - the soldier\'s "patriotic tear that had brimmed in his eye" becomes meaningless in the face of physical reality. Hughes uses a hare "rolled like a flame" as an image of innocent suffering that crystallises the absurdity of conflict. Both poets strip away ideology to reveal the body in extremis, but Owen\'s method is erosion (the slow deletion of humanity through exposure) while Hughes\'s is rupture (the sudden collision of ideology with physical reality). Together, they represent complementary critiques: war is futile both in its long attrition and in its moments of violent action.',
        },
      ],
    },
  ],
}

// ============================================================
// LANGUAGE WORKSHEETS
// ============================================================

// ---------- PAPER 1 Q2 LANGUAGE ANALYSIS ----------

const p1q2Foundation: RevisionWorksheet = {
  id: 'lang-p1-q2-foundation',
  title: 'Paper 1 Q2 Language Analysis - Foundation Worksheet',
  subject: 'Language Paper 1 Q2',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '40 minutes',
  totalMarks: 36,
  sections: [
    {
      title: 'Section A: Understanding Language Techniques',
      instructions:
        'For each technique, explain what it is and write a sentence using it. This will help you identify techniques in the exam.',
      questions: [
        {
          question:
            'What is a metaphor? Write an example and explain its effect. Start with: "A metaphor is when..."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'A metaphor is when a writer describes something as if it actually is something else, without using "like" or "as." For example: "The corridor was a tunnel of darkness." This creates the effect of making the corridor seem enclosed, suffocating, and frightening, as if it swallows the character. It helps the reader visualise the setting and feel the character\'s fear.',
        },
        {
          question:
            'What is personification? Give an example and explain its effect. Begin with: "Personification is when..."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'Personification is when a writer gives human qualities to something non-human, such as an object or the weather. For example: "The wind howled through the broken windows." This makes the wind seem alive and aggressive, creating a threatening atmosphere. It helps the reader feel that the environment itself is hostile and dangerous.',
        },
        {
          question:
            'What is a simile? Give an example and explain its effect. Start with: "A simile is..."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'A simile is a comparison using "like" or "as." For example: "Her eyes were like shards of ice." This compares the character\'s eyes to ice, suggesting they are cold, sharp, and piercing. The word "shards" adds danger, implying the character is threatening. Similes help readers create vivid mental images.',
        },
        {
          question:
            'What effect does a short sentence have? Give an example. Begin with: "Short sentences are used to..."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'Short sentences are used to create tension, shock, or emphasis. For example: "She stopped. The door was open." The short sentences slow the pace and force the reader to pause, building suspense. Each sentence delivers a separate piece of information, making the reader process the danger step by step.',
        },
        {
          question:
            'What is sibilance? Give an example and explain its effect. Start with: "Sibilance is the repetition of..."',
          lines: 3,
          marks: 3,
          modelAnswer:
            'Sibilance is the repetition of "s" sounds in nearby words. For example: "The snake slithered silently through the grass." The repeated "s" sounds mimic the hissing of a snake, making the reader almost hear the movement. Sibilance can create a sinister, unsettling atmosphere, or a sense of smooth, quiet movement.',
        },
      ],
    },
    {
      title: 'Section B: Analysing Language in Context',
      instructions:
        'Read the extract below and answer the questions. Use the structure: What technique? What quotation? What effect?\n\nExtract: "The house crouched at the end of the lane, its windows watching like hollow eyes. Rain hammered the roof. Inside, shadows crawled across the walls and the air tasted of dust and something older, something rotten. She took one step. Then another. The floorboards screamed beneath her feet."',
      questions: [
        {
          question:
            'Find an example of personification in the extract and analyse its effect. Use the sentence starter: "The writer uses personification when..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The writer uses personification when the house "crouched at the end of the lane." The verb "crouched" makes the house seem like a living creature that is hiding or preparing to attack, creating a threatening atmosphere. This suggests the house itself is dangerous and predatory. The reader feels uneasy because the setting seems alive and hostile, as if the house is lying in wait for the character.',
        },
        {
          question:
            'Analyse the effect of the simile "windows watching like hollow eyes." Begin with: "The simile compares..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The simile compares the windows to "hollow eyes," making the house seem like a skull or a dead face. The adjective "hollow" suggests emptiness and death, while "watching" implies the house is observing the character, creating a sense of being surveilled. This builds a gothic atmosphere and makes the reader feel that the character is being drawn into something dangerous. The house is presented as both dead and somehow alive, which is deeply unsettling.',
        },
        {
          question:
            'How do the short sentences "She took one step. Then another." create tension? Start with: "The writer uses short sentences to..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            "The writer uses short sentences to slow the pace and build suspense. By describing each step separately, the writer forces the reader to experience the character's fear in real time. The word \"Then\" creates a pause before the second action, suggesting hesitation and dread. The reader feels the character's reluctance and courage simultaneously. This technique makes the reader hold their breath, mirroring the character's anxiety.",
        },
        {
          question:
            'Analyse the verb choice in "the floorboards screamed beneath her feet." Begin with: "The verb \'screamed\' is effective because..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'The verb "screamed" is effective because it personifies the floorboards, making them sound as if they are in pain or warning the character of danger. "Screamed" is much more dramatic than "creaked" - it suggests violent, sudden noise that breaks the silence. This creates a jump-scare effect, shocking both the character and the reader. It also implies that the house is reacting to the character\'s presence, as if it doesn\'t want her there.',
        },
        {
          question:
            'How does the writer use the senses to create atmosphere in "the air tasted of dust and something older, something rotten"? Start with: "The writer appeals to the sense of taste to..."',
          lines: 4,
          marks: 5,
          modelAnswer:
            'The writer appeals to the sense of taste to make the setting feel physically unpleasant and claustrophobic. The reader can almost taste the staleness. The phrase "something older, something rotten" is deliberately vague - the repetition of "something" creates mystery and dread because the character (and reader) cannot identify what is causing the smell. The word "rotten" suggests decay and death, while "older" implies the house contains a long history of neglect or horror. The sensory language immerses the reader in the scene, making the threat feel tangible.',
        },
      ],
    },
  ],
}

const p1q2Higher: RevisionWorksheet = {
  id: 'lang-p1-q2-higher',
  title: 'Paper 1 Q2 Language Analysis - Higher Worksheet',
  subject: 'Language Paper 1 Q2',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '50 minutes',
  totalMarks: 48,
  sections: [
    {
      title: 'Section A: Advanced Language Analysis Skills',
      instructions:
        'For each extract, provide a sustained analysis of how the writer uses language to create meaning. Move beyond feature-spotting to explore how language choices create effects on the reader.',
      questions: [
        {
          question:
            'Analyse how language is used to create a sense of unease in the following extract:\n\n"The marketplace had emptied hours ago but its noise remained, trapped in the cobblestones. She walked through the residue of the day\'s commerce - cabbage leaves sweating in the gutters, the iron tang of a butcher\'s slab, and everywhere the persistent, accusatory buzz of flies. The stalls stood like skeletal remains, stripped of their colour and commerce, and the awnings flapped their loose jaws in the breeze."',
          lines: 10,
          marks: 10,
          modelAnswer:
            'The writer constructs unease through the personification of absence - the marketplace is defined not by what is present but by what has departed, creating a liminal space between activity and emptiness. The concept of noise "trapped in the cobblestones" suggests the stones have absorbed the day\'s energy, making the physical environment a repository of residual human activity that refuses to dissipate. The sensory catalogue that follows - visual ("cabbage leaves"), olfactory ("iron tang"), auditory ("buzz of flies") - creates an almost nauseating immersion in decay. The participle "sweating" personifies the vegetables, making them seem feverish and sick, while "iron tang" evokes blood through the butcher\'s association, introducing violence into a domestic scene. The flies are "accusatory" - a striking anthropomorphism that transforms an irritation into a moral judgement, as if the waste itself condemns human consumption. The extended metaphor of stalls as "skeletal remains" is masterfully developed: "stripped of their colour and commerce" echoes the stripping of flesh from bone, and "flapped their loose jaws" transforms awnings into talking skulls. The marketplace becomes a charnel house, suggesting that commerce is a kind of violence and that the cheerful daytime activity was always underpinned by something darker. The writer uses this post-human space to reveal truths that the busy marketplace concealed.',
        },
        {
          question:
            'Analyse how the writer uses language to convey the narrator\'s emotional state in the following:\n\n"I had rehearsed this moment for months - the words polished smooth as river stones, ready to be laid out in careful sequence. But standing here, with the actual weight of her attention on me, every prepared phrase dissolved. What came instead was raw, unfinished, full of the gaps I\'d spent so long trying to close. I spoke in fragments. I spoke in ruins."',
          lines: 10,
          marks: 10,
          modelAnswer:
            'The writer maps emotional vulnerability through an extended metaphor of language as physical material. The simile "polished smooth as river stones" presents prepared words as objects shaped by patient effort - the natural process of river erosion suggesting the narrator has been worn down by the labour of preparation. "Laid out in careful sequence" evokes both a logical argument and a ritual arrangement (stones laid in a path, or a mosaic), suggesting the narrator has attempted to impose order on chaotic emotion. The volta ("But") introduces the collapse: "the actual weight of her attention" is a powerful synaesthetic metaphor that transforms the intangible (being watched) into the physical (heaviness), suggesting the other person\'s presence is literally crushing. "Dissolved" continues the material metaphor - solid words becoming liquid, form losing structure. The replacement language is defined by absence: "raw" (unprocessed, painful), "unfinished" (incomplete), "gaps" (emptiness). The final two sentences - "I spoke in fragments. I spoke in ruins" - use parallel structure and anaphora to create a rhythm of loss. The escalation from "fragments" (broken but potentially reassemblable) to "ruins" (permanently destroyed, carrying historical weight) suggests this is not merely a failed speech but a collapse of identity. The architectural metaphor of "ruins" transforms the narrator into a destroyed building, implying they have been structurally compromised by this encounter.',
        },
        {
          question:
            'Analyse how language is used to present the natural world in the following:\n\n"Dawn arrived without announcement - no trumpets, no gold, just a slow leaching of darkness from the edges of things. The trees emerged first, their outlines hesitant, as if they weren\'t sure they wanted to be seen. Then the field, still holding its breath under a quilt of mist. A single crow drew a black line across the grey, and the world, reluctantly, agreed to begin."',
          lines: 10,
          marks: 10,
          modelAnswer:
            'The writer subverts the conventional literary dawn (golden, triumphant) to present nature as reluctant and uncertain, creating a mood of quiet melancholy. The opening negation - "no trumpets, no gold" - explicitly rejects poetic cliché, establishing an anti-romantic register. "Leaching" is a carefully chosen verb: it denotes the slow extraction of colour or substance, used in chemistry and ecology, suggesting dawn as a chemical process rather than a dramatic event. The darkness doesn\'t retreat; it is slowly extracted "from the edges of things," implying the world is defined by its margins rather than its centre. The trees\' emergence is remarkably tentative: their outlines are "hesitant," and the simile "as if they weren\'t sure they wanted to be seen" grants them emotional interiority - self-consciousness, reluctance, a desire for privacy. This is personification that goes beyond the decorative to suggest genuine kinship between human and non-human experience. The field "holding its breath" extends this animation of landscape, while the "quilt of mist" domesticates the wild through a comfort metaphor, making the field seem tucked in, asleep, vulnerable. The crow "drew a black line across the grey" reduces the bird to a mark on a canvas - the writer as artist, the landscape as work-in-progress. The final clause - "the world, reluctantly, agreed to begin" - is the passage\'s emotional climax: the parenthetical "reluctantly" (set off by commas for emphasis) attributes the writer\'s own mood to the entire world. The pathetic fallacy is self-aware, almost ironic, suggesting the writer knows they are projecting but does it anyway. This creates an intimate, confessional quality that transforms landscape description into emotional autobiography.',
        },
      ],
    },
    {
      title: 'Section B: Exam-Style Practice',
      instructions:
        'Write a full Q2 response (8 marks) for the following extract. Spend approximately 10 minutes. Focus on the effects of language on the reader.\n\nExtract: "The city at night was a different creature entirely. Neon signs bled their colours into wet pavements, and the reflections rippled underfoot like something alive and dreaming. Taxis carved through the traffic with surgical precision, their headlights dissecting the darkness into clean, bright sections. On every corner, music escaped from doorways - jazz, bass, voices layered like geological strata - and the air itself seemed to vibrate at a frequency just below hearing. He walked faster, pulled forward by something he couldn\'t name, through streets that narrowed and darkened until the buildings pressed close like conspirators sharing a secret."',
      questions: [
        {
          question:
            "How does the writer use language to present the city at night? You could include the writer's choice of words and phrases, language features and techniques, and sentence forms.",
          lines: 14,
          marks: 8,
          modelAnswer:
            'The writer presents the city as a living, seductive entity that both attracts and threatens. The opening metaphor - "a different creature entirely" - establishes the city-as-animal conceit that runs throughout: the city at night is fundamentally other, transformed from its daytime self into something organic and potentially predatory. The verb "bled" in "neon signs bled their colours" introduces violence into beauty - the colours are vivid but the process is wounding, suggesting the city\'s beauty has a cost. The reflections that are "alive and dreaming" extend the animation, creating a subterranean world beneath the pavement\'s surface that mirrors and distorts reality. The medical register of "surgical precision" and "dissecting the darkness" transforms taxis into instruments of clinical control, creating tension between the organic chaos of the city and humanity\'s attempt to impose order on it. The simile comparing layered music to "geological strata" is intellectually striking: it implies depth, history, and the slow accumulation of cultural layers, elevating urban nightlife to something ancient and monumental. The synaesthetic detail of air vibrating "at a frequency just below hearing" is particularly effective - it suggests the city operates on a level beyond conscious perception, implying subliminal influence. The character is "pulled forward by something he couldn\'t name," positioning him as passive, drawn by the city\'s gravitational pull rather than choosing his path. The final simile - buildings "pressed close like conspirators sharing a secret" - personalises the architecture as complicit in the city\'s seduction. The narrowing streets create a funnelling effect that mirrors the character\'s narrowing agency: the city is drawing him in, and the writing ensures the reader is drawn in too.',
        },
      ],
    },
    {
      title: 'Section C: Analytical Vocabulary',
      instructions:
        'For each analytical term, explain how it could be used effectively in a Q2 response.',
      questions: [
        {
          question:
            'Explain the difference between analysing "what" a word means and analysing "how" it creates an effect. Use the word "crawled" as your example.',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Saying what "crawled" means (basic): "The word crawled means moved slowly along the ground." This merely defines the word. Analysing how it creates an effect (analytical): "The verb \'crawled\' suggests something predatory and insidious - creatures that crawl (insects, snakes) are typically associated with discomfort or fear. The slowness implied by \'crawled\' builds tension, as the threat approaches gradually rather than suddenly, giving the reader time to anticipate danger. The low, ground-level movement also creates a sense of something hiding or stalking, adding to the menacing atmosphere." The key difference is that "what" describes meaning while "how" explores the reader\'s response and the associations the word triggers.',
        },
        {
          question:
            'Explain how to write about sentence structure without merely describing it. Contrast a weak and strong approach.',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Weak approach: "The writer uses a short sentence. This creates tension." This identifies a feature and makes a generic claim without analysis. Strong approach: "The abrupt curtailment of the sentence - \'He ran.\' - after the preceding long, flowing description of the landscape mirrors the sudden interruption of calm by danger. The two stressed monosyllables force the reader into the character\'s urgency, compressing the narrative pace from leisurely observation to immediate action. The full stop acts as a wall - there is no qualification, no context, no time to think - just as the character has no time to process what is happening." The difference: the strong approach analyses why this structural choice works here, connecting form to content and exploring the reader\'s experience.',
        },
        {
          question:
            'What does it mean to analyse "connotations"? Demonstrate with the word "fractured."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Analysing connotations means exploring the web of associations a word triggers beyond its literal definition. "Fractured" literally means "broken," but its connotations are specific: it comes from medical/geological discourse (fractured bones, fractured rock), carrying associations of violence, pain, and structural weakness. A fractured object was once whole - the word implies loss of integrity, unlike "shattered" (total destruction) or "cracked" (surface damage). "Fractured" also suggests the possibility of repair (a fractured bone can heal), which "destroyed" does not. In a literary context, "the fractured light" would suggest beauty compromised but not eliminated, damage that reveals new patterns, and an underlying violence in how the light has been broken.',
        },
      ],
    },
  ],
}

// ---------- PAPER 1 Q5 CREATIVE WRITING ----------

const p1q5Foundation: RevisionWorksheet = {
  id: 'lang-p1-q5-foundation',
  title: 'Paper 1 Q5 Creative Writing - Foundation Worksheet',
  subject: 'Paper 1 Q5 Creative Writing',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Building Your Toolkit',
      instructions:
        'For each technique, practise using it in a creative writing context. These exercises will help you build a toolkit of techniques you can use in the exam.',
      questions: [
        {
          question:
            'Write three different opening sentences for a story set in an abandoned building. Each one should use a different technique: (a) a short sentence, (b) a question, (c) a sensory detail.',
          lines: 5,
          marks: 4,
          modelAnswer:
            '(a) Short sentence: "The door was open." - This is simple but immediately creates intrigue and suspense. Why is it open? Who opened it? (b) Question: "Have you ever stood in a place so silent you could hear your own blood moving?" - This directly engages the reader and creates an eerie, personal tone. (c) Sensory detail: "The smell hit her first - damp plaster, rotting carpet, and something sweet and chemical that caught in her throat." - This uses smell (the most evocative sense) to immerse the reader immediately in the setting.',
        },
        {
          question:
            'Write a short paragraph (3-4 sentences) describing a storm using personification. Start with: "The storm..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'The storm threw itself against the windows like an angry stranger demanding entry. It screamed through gaps in the brickwork, its voice rising from a moan to a shriek. Rain punched the roof in relentless, rapid-fire bursts. The whole house shuddered, as if it too was afraid. - This paragraph personifies the storm as an aggressive intruder, using verbs like "threw," "screamed," and "punched" to make the weather feel violent and intentional.',
        },
        {
          question:
            'Write a description of a character using a list of three and a simile. Describe someone who looks unfriendly. Begin with: "He was the kind of man who..."',
          lines: 4,
          marks: 4,
          modelAnswer:
            'He was the kind of man who filled a doorway - broad, silent, and watchful. His face was creased like a map that had been folded too many times, each line recording a journey he would never talk about. - The list of three ("broad, silent, and watchful") efficiently establishes his physical and psychological presence. The simile comparing his face to a "map folded too many times" suggests age, experience, and a life of hardship.',
        },
        {
          question:
            'Write two sentences that show a character is nervous WITHOUT using the word "nervous." Use their actions and body language. Start your sentences with the character\'s name.',
          lines: 4,
          marks: 4,
          modelAnswer:
            'Maya pressed her thumbnail into her palm, leaving a white crescent mark that faded as quickly as her confidence. She counted the floor tiles again - seventeen to the door, seventeen to escape. - These sentences use physical action (pressing her nail into her palm) and obsessive behaviour (counting tiles) to show nervousness through "showing not telling." The reference to "escape" reveals her mental state without stating it directly.',
        },
        {
          question:
            'Write a final sentence for a story that ends on a cliffhanger. The story is about someone exploring a dark cave. Make it one or two short sentences.',
          lines: 3,
          marks: 3,
          modelAnswer:
            'She turned to leave. Behind her, in the darkness, something breathed. - The first short sentence suggests safety (turning to leave), and the second destroys that safety with a terrifying detail. The vagueness of "something" is more frightening than a specific creature because the reader\'s imagination fills in the worst possibility. The verb "breathed" is simple but deeply unsettling because it implies a living presence.',
        },
      ],
    },
    {
      title: 'Section B: Planning a Response',
      instructions:
        'Practise planning a creative writing response. Good planning means better writing. Use the scaffolding provided.',
      questions: [
        {
          question:
            'You are going to write a description of a busy market. Plan your response using the five senses. Write one detail for each sense.\n\nSight:\nSound:\nSmell:\nTouch:\nTaste:',
          lines: 6,
          marks: 5,
          modelAnswer:
            'Sight: Pyramids of oranges and lemons catching the sunlight, their skins so bright they seemed to glow. Sound: Voices layered over each other - a fishmonger calling prices, a child crying, the metallic crash of coins in a tin. Smell: Roasting coffee beans, sweet and bitter at the same time, cutting through the heavier smells of raw fish and diesel. Touch: The rough hessian of a sack brushing her arm as she squeezed between stalls. Taste: She bit into a sample of cheese - sharp, salty, crumbling on her tongue. - Planning by senses ensures varied, immersive description.',
        },
        {
          question:
            'Plan a 5-paragraph structure for a description of a place that changes from calm to dangerous. Fill in the focus for each paragraph:\n\nParagraph 1 (Opening):\nParagraph 2 (Build):\nParagraph 3 (Shift):\nParagraph 4 (Climax):\nParagraph 5 (End):',
          lines: 7,
          marks: 5,
          modelAnswer:
            'Paragraph 1 (Opening): Peaceful lakeside at dawn - soft light, still water, birdsong. Use long, flowing sentences and gentle imagery. Paragraph 2 (Build): Describe the surroundings in more detail - trees, reflections in the water. Introduce a slight sense of unease: clouds gathering, a bird going silent. Paragraph 3 (Shift): The weather changes suddenly. Wind picks up, water becomes rough. Sentences become shorter. Use pathetic fallacy. Paragraph 4 (Climax): The full storm hits. Violent imagery, personification, dramatic vocabulary. Short, punchy sentences for impact. Paragraph 5 (End): Aftermath. Eerie quiet. One small detail that shows the damage (a broken branch floating on the water). End with an image, not an explanation. - This structure creates a clear narrative arc even in descriptive writing.',
        },
        {
          question:
            'Write an opening paragraph (5-6 sentences) for a story titled "The Wait." Use at least two of the techniques you practised in Section A.',
          lines: 8,
          marks: 10,
          modelAnswer:
            'The waiting room smelled of disinfectant and dread. Twelve plastic chairs stood in a row, bolted to the floor as if they might try to escape - and who could blame them? A clock on the wall ticked with deliberate cruelty, each second stretching itself thin before releasing the next. She was the only one here. She sat with her hands folded in her lap, her back straight, her eyes fixed on the door that would eventually open. Somewhere behind it, her whole future was being decided by someone she had never met. - This uses: personification (chairs trying to escape, clock\'s deliberate cruelty), a list of three (hands folded, back straight, eyes fixed), a short dramatic sentence ("She was the only one here"), and sensory detail (smell of disinfectant). The paragraph establishes character, setting, and tension.',
        },
      ],
    },
  ],
}

const p1q5Higher: RevisionWorksheet = {
  id: 'lang-p1-q5-higher',
  title: 'Paper 1 Q5 Creative Writing - Higher Worksheet',
  subject: 'Paper 1 Q5 Creative Writing',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '55 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Crafting Sophisticated Writing',
      instructions:
        'These exercises focus on the craft of writing at the highest level. Focus on precision, originality, and the relationship between form and meaning.',
      questions: [
        {
          question:
            'Write three different versions of the same moment - a character opening a letter they have been dreading. Version 1: Focus on the external (what can be seen). Version 2: Focus on the internal (thoughts and feelings). Version 3: Focus on a single sensory detail.',
          lines: 10,
          marks: 8,
          modelAnswer:
            "Version 1 (External): Her fingers worked at the envelope's seal with the mechanical precision of someone defusing a bomb. The paper tore. A single sheet unfolded itself - or she unfolded it; later, she wouldn't be sure which. The words were small and black and final.\n\nVersion 2 (Internal): She knew what it would say. She had known for weeks, in the way you know something with your body before your mind catches up - the way your stomach drops before the phone finishes ringing. The envelope was just a formality. The truth had already arrived.\n\nVersion 3 (Sensory detail): The paper was cheap. She could feel the wood pulp in it, rough under her thumb like unfinished carpentry. It was the kind of paper used for things that didn't need to last - receipts, parking tickets, the letters that rearrange lives. It smelled of nothing. She read it twice.\n\n- Each version demonstrates a different narrative lens. The strongest creative writing often weaves all three approaches together within a single piece.",
        },
        {
          question:
            'Write a paragraph that uses extended metaphor to describe anxiety. The metaphor should be sustained for at least 4 sentences. Choose an original vehicle (not the cliched "storm" or "weight").',
          lines: 8,
          marks: 8,
          modelAnswer:
            'The anxiety was an uninvited guest who had moved in months ago and now occupied every room. It sat at the breakfast table before she woke, rearranging the cutlery into patterns of worst-case scenarios. It followed her to work, commentating on every email, every silence in a meeting, every pause before someone spoke. At night, it stretched out beside her in bed, wide awake when she needed to sleep, whispering a catalogue of everything she had said wrong that day, that week, that decade. She had stopped trying to evict it. You cannot throw out something that has learned where you keep the spare key.\n\n- The sustained personification of anxiety as a house-guest works because it captures the key qualities: it is unwanted but persistent, it invades private spaces, and it becomes familiar despite being hostile. The final sentence shifts to second person ("You cannot"), which broadens the personal into the universal.',
        },
        {
          question:
            'Write a passage of exactly 100 words that describes a moment of sudden silence after loud noise. Every word must earn its place.',
          lines: 8,
          marks: 8,
          modelAnswer:
            "Then it stopped. The engine, the alarms, the shouting - all of it, gone, as if someone had pressed a button marked 'enough.' What replaced it wasn't silence, exactly. It was the negative space where sound had been: a ringing, shimmering absence that pressed against the eardrums like deep water. A car door ticked as it cooled. Glass settled into its new arrangement on the tarmac, each piece finding its place with the patience of geology. Somewhere, a bird resumed its song, unaware that anything of consequence had happened. The world, indifferent and vast, carried on.\n\n- This demonstrates economy of language, varied sentence structure, original imagery (\"patience of geology\"), and a controlled tonal shift from specificity to universal perspective.",
        },
      ],
    },
    {
      title: 'Section B: Structure and Narrative Craft',
      instructions:
        'These exercises develop your ability to use structure as a deliberate tool for meaning-making.',
      questions: [
        {
          question:
            'Write two contrasting paragraphs about the same room: first, as experienced by someone who is happy; second, as experienced by someone who is grieving. Do not state the emotion directly. Let the description do the work.',
          lines: 10,
          marks: 8,
          modelAnswer:
            "Happy: The kitchen was full of morning. Sunlight found every surface and made it sing - the copper pans, the glass jar of marmalade, the small pool of water by the sink that caught the light and held it like a jewel. She filled the kettle without thinking, humming something she half-remembered from a dream. The radio murmured news she didn't need. The cat had arranged itself in a patch of warmth on the tiles, and for a moment everything was in exactly the right place.\n\nGrieving: The kitchen was full of his absence. His mug stood on the draining board where he'd left it three weeks ago, its tea-stain a brown ring she couldn't bring herself to wash away. The copper pans needed polishing; she hadn't cooked since. Light came through the window and fell on the floor without purpose, illuminating dust she used to care about. The cat wove between her ankles, waiting to be fed, and she stood there, kettle in hand, unable to remember what she'd come in here to do.\n\n- The same room, the same objects (pans, light, cat, kettle), but filtered through different emotional states. This demonstrates how descriptive writing is always subjective - the writer's real subject is the character's inner world.",
        },
        {
          question:
            'Write the opening of a story that begins at the end. The first paragraph reveals the outcome; the second paragraph jumps back to the beginning. Make the reader want to know how one led to the other.',
          lines: 10,
          marks: 8,
          modelAnswer:
            'Paragraph 1: Afterwards, they would find the boat three miles from shore, drifting in slow circles as if looking for something it had lost. The oars were still in their locks. A thermos of tea sat upright in the stern, still warm. Her coat was folded neatly on the bench seat, and on top of it, weighted down with a smooth grey pebble, was a single sheet of paper covered in handwriting so careful it looked like it had been copied from somewhere else.\n\nParagraph 2: It had started with the pebble. Or rather, it had started with the beach where she found it, on a Tuesday in October when the sky was the colour of old bruises and she had driven forty miles to stand at the edge of something. She picked it up without thinking - palm-sized, satisfyingly heavy, warm from a sun that had already given up for the day.\n\n- The in medias res opening creates immediate intrigue (where is she? what does the note say?), while the flashback to "a Tuesday in October" establishes a precise, literary voice. The pebble links both paragraphs, creating structural cohesion.',
        },
      ],
    },
    {
      title: 'Section C: Full Response Practice',
      instructions:
        'Write a complete response to the following task. Aim for 350-500 words. Focus on quality over quantity.',
      questions: [
        {
          question:
            'Describe a place where two different worlds meet - for example, where city meets countryside, where land meets sea, or where old meets new. Focus on the tension or harmony between the two worlds.',
          lines: 20,
          marks: 18,
          modelAnswer:
            "The sea wall was the border, and like all borders it was both a joining and a separation. On one side, the town: terraced houses climbing the hill in orderly rows, their windows reflecting the grey sky in duplicate. Satellite dishes and washing lines, a dog barking at a postman, the ordinary percussion of a Tuesday morning. On the other, nothing. Or rather, everything - the entire Atlantic, restless and self-important, throwing itself at the concrete as if it had a grievance to settle.\n\nShe sat on top of the wall with a leg on each side, belonging to neither. Below her left foot, the pavement was cracked where salt had worked its way into the concrete over decades, dissolving the town's edge molecule by molecule. The sea was patient. It had been here before the houses, before the wall, before the concept of ownership that the wall implied. It would be here after.\n\nA child's bicycle lay on its side in a front garden, one wheel still spinning slowly in the wind that came off the water. Everything on this side - the washing, the signs, the people - leaned slightly inland, shaped by a lifetime of resisting the pull of the sea. She had read somewhere that trees on coastal clifftops grew at angles, their branches streaming away from the wind like hair blown back from a face. The whole town was a tree like that, she thought. Rooted, but bent.\n\nThe tide was coming in. She could hear it reorganising the shingle below the wall, each wave a librarian reshelving stones into a new and temporary order. A fishing boat sat on the mud of the harbour, tilted and dignified, waiting for the water to remember it. Seagulls made their usual complaints. The chip shop on the corner was already open, and the smell of frying oil mixed with the brine in a combination that was either disgusting or the smell of home, depending on who you asked.\n\nShe lifted her right leg over the wall and dropped down onto the beach side. Pebbles shifted under her feet. The town was behind her now, its sounds muffled by the wall, and ahead there was only the water and the sky and the blurred line where they pretended to meet. She walked towards it, knowing she would never reach it. That was the thing about horizons. They were promises that kept moving.\n\n- This response demonstrates: sustained extended metaphor (border/boundary), original imagery, varied sentence structure, structural control (movement from town to sea), cyclical motifs, and a reflective ending that elevates description into meaning.",
        },
      ],
    },
  ],
}

// ---------- PAPER 2 Q4 COMPARISON ----------

const p2q4Foundation: RevisionWorksheet = {
  id: 'lang-p2-q4-foundation',
  title: 'Paper 2 Q4 Comparison - Foundation Worksheet',
  subject: 'Paper 2 Q4 Comparison',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '40 minutes',
  totalMarks: 38,
  sections: [
    {
      title: 'Section A: Understanding Comparison Skills',
      instructions:
        'These exercises will help you practise the skills you need for comparing two texts. Use the scaffolding to help structure your answers.',
      questions: [
        {
          question:
            'What are the key comparison words and phrases you should use in Q4? List at least six connectives for comparing and contrasting.',
          lines: 4,
          marks: 3,
          modelAnswer:
            'Comparing (similarities): Similarly, In the same way, Both writers, Likewise, Equally, This is also reflected in. Contrasting (differences): However, In contrast, On the other hand, Whereas, While, Conversely, Unlike Source A, Despite this. It is important to use a range of these to show the examiner you can identify both similarities and differences. The best responses weave these naturally into analysis rather than bolting them on.',
        },
        {
          question:
            'Read the two short extracts below and identify one similarity and one difference in how they present fear.\n\nSource A: "My heart hammered so loudly I was certain everyone in the room could hear it. I gripped the edge of the table, my knuckles white, and tried to remember how to breathe."\n\nSource B: "Fear, I discovered, is not dramatic. It is quiet. It sits in your stomach like a stone and waits. I smiled at the officer and answered his questions calmly while something inside me was screaming."',
          lines: 6,
          marks: 5,
          modelAnswer:
            'Similarity: Both writers present fear as a physical experience felt in the body. Source A describes the heart "hammering" and knuckles turning "white," while Source B describes fear sitting "in your stomach like a stone." Both suggest that fear manifests physically before it is consciously processed. Difference: However, while Source A presents fear as visible and dramatic - the character\'s physical reactions (gripping, hammering heart) could be seen by others - Source B presents fear as invisible and hidden. The narrator in Source B "smiled" and "answered calmly" while terrified internally. Source A shows fear that the body cannot conceal; Source B shows fear that the mind forces the body to hide.',
        },
        {
          question:
            'Practise writing a comparative analytical paragraph using the following structure:\n\nBoth writers present [theme]...\nIn Source A, the writer uses [technique] when they write "[quotation]." This suggests...\nSimilarly/However, in Source B, the writer uses [technique] when they write "[quotation]." This suggests...\nThe difference/similarity is significant because...\n\nUse Sources A and B from the previous question.',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Both writers present fear as an overwhelming physical experience, but they differ in how visible that fear is to others. In Source A, the writer uses hyperbole when the narrator\'s heart "hammered so loudly I was certain everyone in the room could hear it." The exaggeration suggests the narrator feels completely exposed - their fear is so intense it seems to broadcast itself. The physical detail of "knuckles white" reinforces the idea of a body betraying its owner\'s emotions. However, in Source B, the writer uses a contrasting image: fear "sits in your stomach like a stone and waits." The simile of a "stone" suggests something heavy, permanent, and hidden - unlike the loud, dramatic fear of Source A, this fear is silent and patient. Most strikingly, the narrator in Source B "smiled" while "something inside was screaming," showing a deliberate disconnect between exterior performance and interior reality. While Source A shows fear as uncontrollable, Source B presents it as something that can be masked but not eliminated.',
        },
      ],
    },
    {
      title: 'Section B: Practising with Longer Extracts',
      instructions:
        'Read the following two extracts about childhood experiences and answer the questions. Use comparison connectives throughout.\n\nSource A (modern memoir): "School was a battlefield and I was unarmed. Every corridor was a potential ambush. I learned to walk with my head down, my books clutched to my chest like a shield, mapping safe routes between classes the way a soldier maps territory. The library became my bunker - quiet, warm, full of worlds that weren\'t this one."\n\nSource B (Victorian autobiography): "The schoolroom was a place of order and improvement. We sat in rows, our backs straight as rulers, and recited our lessons with the precision of clockwork. To speak out of turn was unthinkable; to question a master, unforgivable. I learned more from silence than I ever learned from speech, and I carried that silence with me long after I left those halls."',
      questions: [
        {
          question:
            'Compare how the two writers use language to present their experiences of school. Begin with: "Both writers present school as a place that shaped them, but..."',
          lines: 8,
          marks: 8,
          modelAnswer:
            'Both writers present school as a place that shaped them, but in very different ways. Source A uses an extended military metaphor, describing school as a "battlefield" and the library as a "bunker." This suggests the narrator experienced school as a place of danger and conflict, where survival was the priority rather than learning. The metaphor of books as a "shield" shows that education was protective rather than enriching - a defence mechanism. In contrast, Source B uses imagery of precision and order: children sat "straight as rulers" and recited "with the precision of clockwork." The simile comparing children to rulers and clockwork dehumanises them, suggesting school suppressed individuality in favour of mechanical obedience. While Source A\'s narrator actively resists school by finding escape ("worlds that weren\'t this one"), Source B\'s narrator passively accepts its rules ("To speak out of turn was unthinkable"). However, both writers suggest their schools caused lasting psychological impact. Source A implies ongoing trauma through the military language, while Source B explicitly states "I carried that silence with me" - the school\'s suppression of voice became permanent. The difference in time period is significant: Source A\'s modern school is chaotic and dangerous, while Source B\'s Victorian school is rigid and controlled, but both fail to nurture the child within them.',
        },
        {
          question:
            'Compare how the two writers present the idea of safety and danger. Start with: "Both writers suggest that school contains both safe and dangerous spaces..."',
          lines: 7,
          marks: 7,
          modelAnswer:
            'Both writers suggest that school contains both safe and dangerous spaces, but they define safety differently. In Source A, danger is physical and social: "every corridor was a potential ambush," suggesting bullying or social threat. Safety is found in the library - described as a "bunker" that is "quiet, warm, full of worlds that weren\'t this one." The listing creates a sense of contrast with the hostile corridors, and "worlds that weren\'t this one" suggests escape from reality through books. In Source B, danger is institutional rather than social: the threat comes from the system itself, where questioning a teacher is "unforgivable" and silence is enforced. There is no physical violence described, but the danger is more subtle - the suppression of the child\'s voice and individuality. Interestingly, neither writer describes school as a place of learning or growth, which is its supposed purpose. Source A\'s narrator learns "to walk with my head down" (survival skills), while Source B\'s narrator learns "more from silence than from speech" (the lesson that their voice doesn\'t matter). Both writers ultimately suggest that school taught them the wrong things.',
        },
        {
          question:
            'Compare the tone and attitude of each writer. Begin with: "The writers\' attitudes toward their school experiences differ..."',
          lines: 6,
          marks: 7,
          modelAnswer:
            'The writers\' attitudes toward their school experiences differ significantly in how openly they express emotion. Source A\'s tone is angry and vivid - the military metaphor reveals ongoing resentment and pain. The language is intense ("battlefield," "ambush," "bunker") and suggests the writer has not made peace with their experience. The present tense feel of the description (though written in past tense) suggests the memories remain raw. In contrast, Source B\'s tone is restrained and reflective. Phrases like "a place of order and improvement" initially sound neutral, even positive, but the undercurrent is critical: describing children as "clockwork" reveals the writer sees the dehumanisation clearly. The measured, formal sentence structure mirrors the school\'s own formality, as if the writer is still performing the obedience they were taught. Source B\'s restraint is arguably more powerful than Source A\'s directness because it shows the school\'s silencing has continued into adulthood - the writer cannot fully express their criticism even now, demonstrating that the damage was lasting.',
        },
      ],
    },
  ],
}

const p2q4Higher: RevisionWorksheet = {
  id: 'lang-p2-q4-higher',
  title: 'Paper 2 Q4 Comparison - Higher Worksheet',
  subject: 'Paper 2 Q4 Comparison',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '50 minutes',
  totalMarks: 48,
  sections: [
    {
      title: 'Section A: Developing Comparative Analysis',
      instructions:
        'These exercises develop the ability to write fluid, conceptualised comparison. The best Q4 responses do not mechanically alternate between sources but develop a comparative argument that moves between texts to support an overarching point.',
      questions: [
        {
          question:
            'Read the two extracts below and write a full comparative analysis of how both writers present the experience of being an outsider.\n\nSource A (21st century travel writing): "In Tokyo, I became a ghost. Not invisible - far from it; my height and my hair colour announced me like a siren in every train carriage, every restaurant, every queue. But a ghost in the sense that I could not participate. I stood outside the glass of every conversation, every transaction, every shared joke, pressing my face against the window of a life I could observe but never enter. I learned to read a room the way a deaf person reads lips - by watching harder than anyone should have to."\n\nSource B (19th century memoir): "I was tolerated in the drawing rooms of the county, but never welcomed. There is a particular cruelty in the almost-invitation: the door held open just wide enough to see what lies beyond, but never wide enough to pass through. I attended their balls and their dinners. I wore the correct clothes and said the correct things. And still, beneath the pleasantries, I could feel the question they were too polite to ask: what gives you the right?"',
          lines: 14,
          marks: 16,
          modelAnswer:
            'Both writers construct the outsider experience through spatial metaphors of barriers and thresholds, yet their relationship to exclusion differs fundamentally in terms of agency and visibility. Source A\'s narrator is involuntarily conspicuous - "my height and my hair colour announced me like a siren" - using a simile that transforms the body into an alarm, suggesting the narrator\'s physical difference is both loud and unwanted. The ghost metaphor is carefully redefined: not invisible but unable to "participate," creating a paradox of hyper-visibility without agency. Source B\'s narrator, conversely, is conditionally visible - "tolerated" but "never welcomed" - existing in a social liminal space where inclusion is performed but never genuine. Both writers use the image of glass/doors as barriers. Source A\'s "pressing my face against the window" is viscerally physical - the glass is transparent but solid, allowing observation without participation. Source B\'s "door held open just wide enough to see what lies beyond, but never wide enough to pass through" is more architecturally precise, suggesting deliberate calibration of exclusion: the dominant group controls how much the outsider can see. This difference reveals distinct power dynamics: Source A\'s exclusion is cultural and linguistic (the narrator cannot speak Japanese), while Source B\'s is class-based and deliberate (the narrator is actively managed). Both writers develop compensatory skills: Source A learns to "read a room the way a deaf person reads lips," a simile that reframes exclusion as a form of disability requiring adaptation. Source B\'s narrator "wore the correct clothes and said the correct things," suggesting performance as survival strategy. However, Source A\'s adaptation is observational (learning to understand), while Source B\'s is mimetic (learning to imitate) - a distinction that reflects the difference between cultural difference and social aspiration. The writers\' tones also diverge: Source A maintains an analytical detachment, the ghost metaphor aestheticising the experience into something almost literary. Source B is more wounded - "there is a particular cruelty" uses direct emotional vocabulary, and the imagined question "what gives you the right?" reveals the internalisation of others\' judgement. Source A\'s outsider observes; Source B\'s outsider is observed, and the shift in gaze creates fundamentally different experiences of exclusion.',
        },
      ],
    },
    {
      title: 'Section B: Method-Level Comparison',
      instructions:
        'These exercises focus on comparing not just what writers say but how they say it - structure, tone, perspective, and rhetorical strategy.',
      questions: [
        {
          question:
            'Read the following extracts and compare how the writers use structural and rhetorical methods to persuade the reader of their viewpoint.\n\nSource A (modern opinion piece): "Here is what nobody tells you about poverty: it is boring. Not dramatic, not cinematic, not the stuff of inspirational speeches. It is the same meal seven days running. It is the mathematics of which bill to ignore this month. It is the four-hour bus journey because the direct route costs 40p more. Poverty is not a story. It is the absence of choices that make a story possible."\n\nSource B (Victorian social commentary): "Let the comfortable classes, from the security of their parlours, consider for one moment the condition of those who labour for their benefit. The seamstress who stitches their fine garments works by candlelight until her eyes fail. The child who sweeps their crossing stands barefoot in the frost. The washerwoman whose hands are raw and bleeding that their linens might be white. I ask the reader: can such suffering exist alongside such plenty and the nation call itself civilised?"',
          lines: 12,
          marks: 12,
          modelAnswer:
            'Both writers employ rhetorical strategies designed to dismantle their audience\'s complacency about poverty, but their methods reflect fundamentally different assumptions about the relationship between writer, reader, and subject. Source A uses an anaphoric structure - "It is... It is... It is..." - that mimics the monotonous repetition of poverty itself, making form embody content. The opening declaration "Here is what nobody tells you" positions the writer as an insider breaking a silence, claiming authority through lived experience. The redefinition strategy is crucial: by insisting poverty "is boring," the writer challenges the reader\'s preconceptions (shaped by media, charity campaigns, fiction) and replaces dramatic narrative with anti-climactic specificity. "40p more" is a devastatingly precise detail that makes poverty concrete rather than abstract. The final sentence - "Poverty is not a story. It is the absence of choices that make a story possible" - is philosophically sophisticated, arguing that poverty removes not just material comfort but narrative agency itself. Source B employs a classical rhetorical structure of imperative ("let... consider"), exemplification (three specific workers), and rhetorical question ("can such suffering exist...?"). The writer positions themselves as moral authority, addressing the "comfortable classes" from a stance of superior conscience. The three examples use parallel structure - each worker is defined by their labour and its physical cost - creating an accumulative emotional impact. The direct address ("their fine garments," "their crossing," "their linens") repeatedly connects the reader\'s comfort to the worker\'s suffering, making complicity inescapable. The rhetorical question at the end assumes its own answer, leaving the reader no ethical exit. The crucial methodological difference is in voice and distance. Source A speaks from within poverty ("nobody tells you" implies "I know because I\'ve lived it"), creating authenticity through proximity. Source B speaks about poverty from outside it, using the workers as evidence in an argument directed at the privileged. Source A\'s reader is implicated through their ignorance; Source B\'s reader is implicated through their consumption. Both strategies are effective, but Source A\'s refusal of sentimentality feels more modern and arguably more powerful, because it denies the reader the emotional satisfaction of pity while still demanding change.',
        },
      ],
    },
    {
      title: 'Section C: Timed Practice',
      instructions:
        'Write a full Q4 response in 20 minutes. Use the comparative analytical approach you have practised.',
      questions: [
        {
          question:
            'Compare how the writers of Source A and Source B present their ideas and perspectives on the natural world.\n\nSource A (modern nature writing): "We have forgotten how to be still. I stood in the oak wood for an hour, doing nothing, and it was the hardest thing I\'d done all week. My phone buzzed twice in my pocket - each time a small emergency of relevance, demanding I return to the world of opinion and response. I ignored it. Gradually, the wood accepted me. A wren landed three feet away. Fungus breathed its strange perfume from the leaf litter. I was, for twenty minutes, part of something older and less anxious than myself."\n\nSource B (Romantic-era nature writing): "I wandered forth at dawn into the magnificence of the hills, where every prospect delighted the eye and elevated the spirit. The mountains rose before me in awful grandeur, their summits crowned with the first gold of morning, and I felt in that moment the smallness of all human endeavour against the eternal majesty of Creation. Here was truth; here was beauty; here was God Himself, written in stone and sky and the ceaseless music of falling water."',
          lines: 14,
          marks: 16,
          modelAnswer:
            'Both writers present nature as a corrective to human preoccupation, but their conceptions of the human-nature relationship and their rhetorical strategies differ in ways that reveal their historical contexts. Source A frames nature as an antidote to digital modernity: "We have forgotten how to be still" is an opening diagnosis that positions contemporary life as a form of amnesia. The "oak wood" is modest, local, domestic - not sublime wilderness but ordinary English woodland. The writer\'s struggle to be present ("the hardest thing I\'d done all week") honestly acknowledges the difficulty of disconnecting, and the phone buzzing "twice" is a precisely observed intrusion that most modern readers will recognise. The personification of the wood "accepting" the narrator suggests nature has agency and must consent to human presence - a fundamentally ecological perspective that respects non-human autonomy. Source B, by contrast, presents nature as spectacle to be consumed by the human observer: "every prospect delighted the eye." The Romantic vocabulary - "awful grandeur," "eternal majesty" - elevates nature to the divine, and the tricolon "Here was truth; here was beauty; here was God Himself" explicitly theologises the landscape. This is the Sublime tradition: nature as evidence of divine creation, experienced through rapture. The tonal contrast is striking. Source A is self-deprecating and understated: "part of something older and less anxious than myself" is quietly humorous, deflating rather than inflating the experience. Source B is ecstatic and declarative, employing the high register of Romantic prose to match the landscape\'s grandeur. Source A\'s sentences are varied, conversational, built around specific details (the wren, the fungus); Source B\'s sentences are expansive, periodic, building toward rhetorical climaxes. Both writers present nature as more significant than human concerns, but Source A measures this against digital distraction ("opinion and response") while Source B measures it against "all human endeavour." The scale differs accordingly: Source A finds transcendence in a wren landing nearby; Source B requires mountains. This reflects a broader cultural shift: from Romantic awe at nature\'s grandeur to contemporary gratitude for nature\'s persistence. Source A\'s nature is threatened, fragile, requiring attention; Source B\'s nature is eternal, powerful, commanding worship. Both perspectives ultimately argue that the natural world offers something human civilisation cannot provide, but what it offers has changed: from spiritual revelation (Source B) to psychological survival (Source A).',
        },
      ],
    },
  ],
}

// ---------- PAPER 2 Q5 VIEWPOINT WRITING ----------

const p2q5Foundation: RevisionWorksheet = {
  id: 'lang-p2-q5-foundation',
  title: 'Paper 2 Q5 Viewpoint Writing - Foundation Worksheet',
  subject: 'Paper 2 Q5 Viewpoint Writing',
  board: 'AQA',
  difficulty: 'Foundation',
  duration: '45 minutes',
  totalMarks: 40,
  sections: [
    {
      title: 'Section A: Persuasive Techniques',
      instructions:
        'Learn and practise the key techniques for writing to argue and persuade. Use the acronym AFOREST to help you remember: Alliteration, Facts, Opinions, Rhetorical questions, Emotive language, Statistics, Tricolon (rule of three).',
      questions: [
        {
          question:
            'Write an example of each AFOREST technique on the topic "Schools should start later in the morning." Label each one.',
          lines: 8,
          marks: 7,
          modelAnswer:
            'Alliteration: "Sleepy students struggle to succeed" - the repeated "s" sounds make the phrase memorable and emphasise the problem. Fact: "Research from the University of Oxford shows that teenage brains do not fully wake up until 10am" - this gives the argument credibility. Opinion (presented as fact): "It is simply unacceptable that we force children to learn when their bodies are telling them to sleep." Rhetorical question: "Why do we insist on an education system designed around adult convenience rather than children\'s needs?" - this challenges the reader to justify the current system. Emotive language: "Every morning, exhausted children drag themselves to school, robbed of the rest their growing bodies desperately need" - words like "exhausted," "drag," and "robbed" create sympathy. Statistic: "Studies show that students who start school after 9:30am achieve grades that are, on average, 10% higher." Tricolon: "Later starts mean better health, better learning, and better results" - the pattern of three is satisfying and memorable.',
        },
        {
          question:
            'What is the difference between writing to argue and writing to persuade? Explain in your own words. Begin with: "Arguing means... Persuading means..."',
          lines: 4,
          marks: 3,
          modelAnswer:
            'Arguing means presenting a logical case with evidence and reasoning. It acknowledges the other side ("Some people say... however...") and systematically dismantles counter-arguments. It aims to convince through logic. Persuading means using emotional and rhetorical techniques to influence how the reader feels. It uses emotive language, direct address, and vivid imagery to create a strong emotional response. The best Q5 responses combine both: they argue with logic AND persuade with emotion.',
        },
        {
          question:
            'Practise writing a counter-argument and rebuttal. Topic: "Social media should be banned for under-16s." Write the counter-argument and then knock it down. Start with: "Some might argue that... However..."',
          lines: 5,
          marks: 5,
          modelAnswer:
            'Some might argue that banning social media for under-16s would isolate young people from their friends and prevent them from developing digital skills they need for the modern world. However, this argument confuses connection with addiction. Before social media, young people still had friends, still socialised, and still developed communication skills - arguably better ones, because they involved actual face-to-face interaction. As for digital skills, learning to scroll through TikTok is not the same as learning to code. We can teach children to use technology responsibly without exposing them to the anxiety, cyberbullying, and body image issues that social media platforms are specifically designed to exploit.',
        },
        {
          question:
            'Write a powerful opening paragraph for a speech arguing that "Young people today are not given enough credit." Use at least three AFOREST techniques. Begin with a direct address to your audience.',
          lines: 6,
          marks: 7,
          modelAnswer:
            "Ladies and gentlemen, let me ask you something. When was the last time you read a positive headline about young people? [Rhetorical question] I'll save you the trouble - it was probably never. According to a recent survey, 78% of news stories about young people focus on crime, laziness, or screen addiction. [Statistic] And yet, this is the same generation that organised global climate strikes, raised millions for charity during a pandemic, and achieved record exam results under the most difficult circumstances imaginable. [Tricolon] We are not lazy. We are not entitled. We are not the problem. [Repetition] The truth is that young people today are more informed, more compassionate, and more engaged than any generation before them - and it is time the world started paying attention. [Emotive language, tricolon]",
        },
      ],
    },
    {
      title: 'Section B: Structuring Your Response',
      instructions:
        'Practise planning and structuring a Q5 response. A clear structure makes your argument much more persuasive.',
      questions: [
        {
          question:
            'Plan a 5-paragraph response to the following task: "Write an article for a local newspaper arguing that your local area needs more facilities for young people." Fill in the purpose of each paragraph.\n\nParagraph 1 (Introduction):\nParagraph 2 (Point 1):\nParagraph 3 (Point 2):\nParagraph 4 (Counter-argument):\nParagraph 5 (Conclusion):',
          lines: 7,
          marks: 5,
          modelAnswer:
            'Paragraph 1 (Introduction): Hook the reader with a vivid image of young people with nothing to do on a Friday evening. State the problem clearly: there are no youth facilities in the area. Set the tone - this affects ALL residents, not just young people. Paragraph 2 (Point 1): Argue that lack of facilities leads to antisocial behaviour - bored young people end up on streets, which residents complain about. Use statistics about youth crime falling in areas with good facilities. Point out the irony: we complain about young people hanging around but give them nowhere to go. Paragraph 3 (Point 2): Argue that facilities improve mental health and community. Young people need safe spaces to socialise, exercise, and develop skills. Use emotive language about isolation and loneliness. Reference the mental health crisis among young people. Paragraph 4 (Counter-argument): Acknowledge that funding is tight. "Some will say we cannot afford it." Rebuttal: we cannot afford NOT to. The cost of youth crime, mental health services, and antisocial behaviour far exceeds the cost of a youth centre. Investment now saves money later. Paragraph 5 (Conclusion): Return to the opening image but transformed. End with a call to action: write to the council, attend the meeting, demand change. Finish with a powerful final line.',
        },
        {
          question:
            'Write a concluding paragraph for the article above. Use a call to action and end with a memorable final sentence. Begin with: "This is not someone else\'s problem..."',
          lines: 6,
          marks: 7,
          modelAnswer:
            "This is not someone else's problem. These are our children, our neighbours, our community's future. Every Friday evening they spend on a street corner is an evening they could have spent learning, creating, or simply being young in a place that tells them they matter. The council meeting is on March 15th. Be there. Write to your councillor. Share this article. Because the young people of this town have been patient long enough, and patience - as any teenager will tell you - has its limits. If we do not invest in their future, we have no right to complain about the one they build without us.",
        },
        {
          question:
            'Write a letter to your headteacher arguing that homework should be reduced. Write the opening two paragraphs only. Remember to use the correct letter format.',
          lines: 8,
          marks: 6,
          modelAnswer:
            "Dear Ms Thompson,\n\nI am writing to respectfully request that the school reconsider its homework policy. As a Year 11 student currently managing coursework, revision, and personal commitments, I have seen firsthand how excessive homework can damage, rather than support, learning. I believe a reduction in homework would benefit students' mental health, improve the quality of work we produce, and ultimately lead to better results.\n\nLet me be clear: I am not arguing that homework has no value. Practising skills and consolidating learning at home is important, and I understand why teachers set it. However, when students receive homework from every subject every night - often totalling three or more hours - the result is not deeper learning but exhaustion, rushed work, and growing resentment. Research by the Organisation for Economic Co-operation and Development found that beyond one hour per night, additional homework has no measurable impact on achievement. We are working harder, but we are not working smarter.",
        },
      ],
    },
  ],
}

const p2q5Higher: RevisionWorksheet = {
  id: 'lang-p2-q5-higher',
  title: 'Paper 2 Q5 Viewpoint Writing - Higher Worksheet',
  subject: 'Paper 2 Q5 Viewpoint Writing',
  board: 'AQA',
  difficulty: 'Higher',
  duration: '55 minutes',
  totalMarks: 50,
  sections: [
    {
      title: 'Section A: Developing a Distinctive Voice',
      instructions:
        'These exercises focus on developing a confident, sophisticated writing voice that moves beyond mechanical technique-deployment to genuine rhetorical craft.',
      questions: [
        {
          question:
            'Write the same argument in three different registers:\nArgument: "The arts should receive more funding."\n(a) Formal/academic register\n(b) Conversational/personal register\n(c) Satirical/ironic register',
          lines: 12,
          marks: 10,
          modelAnswer:
            '(a) Formal/academic: "The systematic defunding of the arts represents not merely an economic decision but a philosophical statement about the kind of society we wish to inhabit. A civilisation that values only what can be measured in profit margins has ceased to be a civilisation at all; it has become merely an economy. The arts - music, theatre, literature, visual art - constitute the means by which a society understands itself, interrogates its values, and imagines alternatives. To defund them is to defund the human capacity for reflection."\n\n(b) Conversational/personal: "I\'ll tell you when I understood why arts funding matters. I was fourteen, and my school took us to see a play at the local theatre - a proper one, with professional actors and everything. I\'d never been to the theatre before. My family didn\'t do that. Two hours later, I walked out a different person. That theatre ran on public funding. Cut the funding, cut the trip, cut the moment that changed my life. It\'s that simple."\n\n(c) Satirical/ironic: "By all means, let us cut arts funding. We have far too much beauty in this country, far too much meaning. Our children are dangerously over-exposed to creativity and imagination - conditions from which they may never recover. Close the theatres. Silence the orchestras. Pave over the galleries and build something useful, like another car park. Future generations will thank us, assuming they still have the vocabulary for gratitude, which - without the arts - they may not."\n\n- Each register makes the same argument but creates a different relationship with the reader. The formal register appeals to intellect, the personal to empathy, and the satirical to the reader\'s sense of absurdity.',
        },
        {
          question:
            'Write an opening paragraph for an article arguing that "We are addicted to convenience and it is destroying us." Your opening should NOT begin with a rhetorical question, a statistic, or "Imagine." Find an original way in.',
          lines: 8,
          marks: 8,
          modelAnswer:
            "I ordered a book online last Tuesday. It arrived on Wednesday. I was annoyed it hadn't come on Tuesday. This, I think, is the problem. Somewhere between the invention of next-day delivery and the expectation of same-day delivery, we crossed a line. Not a dramatic line - not a Rubicon, not a point of no return marked with flags and warnings. Just a quiet, incremental shift in what we consider acceptable. We used to walk to shops. Then we drove. Then we clicked. Now we swipe, and the gap between desire and fulfilment has shrunk to the width of a thumb. Convenience was supposed to free us. Instead, it has made us incapable of tolerating the smallest friction, the slightest delay, the mildest inconvenience. We have optimised ourselves into fragility.\n\n- This opening uses a personal anecdote, self-deprecating humour, and a structural progression (walk, drive, click, swipe) to establish both the argument and a distinctive, intelligent voice. The final sentence crystallises the argument in a memorable, quotable phrase.",
        },
        {
          question:
            'Write a paragraph that acknowledges and dismantles a counter-argument with sophistication. Topic: "Public transport should be free." Address the obvious counter-argument about cost WITHOUT using "Some people might say..."',
          lines: 8,
          marks: 8,
          modelAnswer:
            'The objection writes itself: where does the money come from? It is a fair question, and it deserves a fair answer. Free public transport would cost approximately 5.3 billion pounds per year in the UK. That is a large number. It is also, for context, roughly what the NHS spends every eleven days, less than a third of what the government lost to fraud in its pandemic loan schemes, and approximately the same as the annual tax revenue foregone through non-domicile status loopholes. The question is not whether we can afford free public transport. The question is what we choose to afford. Every budget is a moral document - it tells you what a society values. Currently, ours values the right of the wealthy to avoid tax more than the right of the poor to get to work. Free buses would not just reduce emissions, ease congestion, and connect communities. They would be a statement: that mobility is a right, not a privilege. That is worth paying for.\n\n- This approach treats the counter-argument with respect before systematically contextualising the cost, using specific figures to reframe the debate. The rhetorical move from "can we afford it?" to "what do we choose to afford?" is a powerful reframing technique.',
        },
      ],
    },
    {
      title: 'Section B: Full Response Practice',
      instructions:
        'Write a complete Q5 response. Aim for quality of argument and expression over length. Demonstrate a range of techniques deployed with purpose, not just technique for its own sake.',
      questions: [
        {
          question:
            '"Technology has made us more connected but less human." Write an article for a broadsheet newspaper in which you argue for or against this statement.',
          lines: 24,
          marks: 24,
          modelAnswer:
            'THE CONNECTED DISCONNECT\n\nLast week, I sat in a restaurant and watched a family of four eat an entire meal without speaking to each other. Each head was bowed - not in prayer, but in devotion to a screen. The youngest child, perhaps six, watched cartoons with the volume up. The parents scrolled through feeds that were, presumably, more interesting than each other. Only the grandmother looked up, her eyes moving between her family members with an expression I recognised immediately: grief.\n\nThis is not a column about how phones are bad. That argument is tired, and it is wrong. Technology has given us miracles: the ability to see a grandchild\'s first steps from three thousand miles away, to diagnose diseases through artificial intelligence, to organise protests against tyranny when traditional media has been silenced. The internet has democratised knowledge, amplified marginalised voices, and connected diaspora communities separated by oceans and borders. To dismiss these achievements because some people check their phones too often is intellectually lazy.\n\nAnd yet.\n\nSomething has shifted. Not in the technology itself, but in us - in what we have allowed it to replace. Consider friendship. A generation ago, maintaining a friendship required effort: phone calls, letters, visits, the deliberate allocation of time. Now, a "like" on a photograph serves as a substitute for all of this. We call it staying in touch. It is, more accurately, the performance of connection without its substance. We have hundreds of "friends" and nobody to call at 2am when the darkness comes.\n\nThe word "connected" has been colonised by technology, stripped of its human meaning. To connect, etymologically, is to bind together - it implies physical proximity, shared experience, mutual vulnerability. A Wi-Fi connection shares none of these qualities. It is access, not intimacy. Information, not understanding. Presence without being present.\n\nThe damage is most visible in our children. Studies show that rates of loneliness among young people have doubled since 2012 - the year smartphone ownership became ubiquitous. Adolescent anxiety has increased by 70%. Self-harm among teenage girls has tripled. Correlation is not causation, as the technology companies are quick to remind us. But when you pour petrol on a fire and the fire gets bigger, it takes a particular kind of wilful ignorance to blame the weather.\n\nI am not arguing for a return to some pre-digital paradise that never existed. Nostalgia is a liar, and the past had its own forms of disconnection - class, geography, prejudice - that technology has genuinely helped to overcome. What I am arguing for is consciousness. Every time we choose the screen over the face in front of us, we make a decision about what kind of human we want to be. Every time we substitute a text for a conversation, an emoji for an emotion, a "story" for a story, we trade depth for convenience.\n\nThe technology is not going to change. It will become faster, more immersive, more persuasive, more indispensable. The only variable is us. We can use these extraordinary tools to enhance human connection or to replace it. At the moment, I fear, we are choosing replacement - not because we want to, but because it is easier, and because ease has become the value our culture prizes above all others.\n\nThat grandmother in the restaurant knew something her family had forgotten. She knew that the meal was not about the food. It never was.\n\n- This response demonstrates: a distinctive authorial voice, structural control (anecdote - concession - argument - evidence - reframing - call to reflection - circular return), varied rhetorical techniques deployed naturally rather than mechanically, and genuine intellectual engagement with a complex issue. The short paragraph "And yet." is used for dramatic structural effect.',
        },
      ],
    },
  ],
}

// ============================================================
// EXPORT
// ============================================================

export const revisionWorksheets: RevisionWorksheet[] = [
  // Literature - Macbeth
  macbethFoundation,
  macbethCore,
  macbethHigher,
  // Literature - An Inspector Calls
  inspectorFoundation,
  inspectorCore,
  inspectorHigher,
  // Literature - A Christmas Carol
  carolFoundation,
  carolCore,
  carolHigher,
  // Literature - Power & Conflict Poetry
  poetryFoundation,
  poetryCore,
  poetryHigher,
  // Language - Paper 1 Q2
  p1q2Foundation,
  p1q2Higher,
  // Language - Paper 1 Q5
  p1q5Foundation,
  p1q5Higher,
  // Language - Paper 2 Q4
  p2q4Foundation,
  p2q4Higher,
  // Language - Paper 2 Q5
  p2q5Foundation,
  p2q5Higher,
]
