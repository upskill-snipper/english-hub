import type { LessonPlan } from '../../types';

export const y11IgcseLitMacbethLessons: LessonPlan[] = [
  // ── Lesson 1: Jacobean Context ────────────────────────────────────────────
  {
    id: 'y11mac-01',
    title: 'Jacobean Context: Witchcraft, Kingship, and Shakespeare\'s Purpose',
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Explain the significance of Jacobean beliefs in witchcraft and the supernatural to a contemporary audience of Macbeth',
      'Understand the Divine Right of Kings and why regicide was considered the ultimate crime in 1606',
      'Identify how Shakespeare\'s political context — including the Gunpowder Plot — shaped the play\'s themes',
      'Begin to embed contextual knowledge into analytical writing to address AO3',
    ],
    successCriteria: [
      'I can describe at least three Jacobean beliefs about witchcraft and explain how they would have affected an audience watching the play',
      'I can explain the Divine Right of Kings and link it to the moral framework of Macbeth',
      'I can identify at least two ways in which the Gunpowder Plot of 1605 is relevant to understanding the play',
      'I can write a sentence that integrates contextual knowledge directly into a point about Shakespeare\'s dramatic purpose',
    ],
    keywords: [
      'Jacobean',
      'Divine Right of Kings',
      'regicide',
      'witchcraft',
      'supernatural',
      'patriarchy',
      'tyranny',
      'traitor',
      'providence',
      'equivocation',
    ],
    starterActivity: {
      title: 'What Did Jacobeans Believe?',
      duration: '8 minutes',
      instructions:
        'Display six statements on the board: (1) Kings were appointed by God; (2) Witches could control the weather; (3) Killing a king was a sin against God and nature; (4) Women who challenged male authority were dangerous; (5) The devil used witches to tempt good men; (6) Ambitious men who overthrew rulers brought chaos to the natural world. Students work in pairs: decide whether each statement is TRUE (Jacobean belief), FALSE, or UNCERTAIN, and discuss what implications each belief would have for an audience watching Macbeth. Take class feedback and establish that all six are broadly Jacobean beliefs, then ask: how does knowing this change the way we read the play?',
      differentiation: {
        support:
          'Provide a glossary strip defining: Jacobean, Divine Right, regicide, supernatural, equivocation. Students focus on statements 1, 3, and 5 if pressed for time.',
        core: 'Students evaluate all six statements and generate one implication for each.',
        stretch:
          'Students rank the beliefs from most to least significant for understanding Macbeth, and write a one-sentence justification for their top choice.',
      },
      resources: ['Jacobean beliefs slide', 'Glossary strips', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Contextual Information: The World Shakespeare Wrote For',
        duration: '18 minutes',
        instructions:
          'Teacher-led guided reading of a context information sheet covering: (1) King James I — his book Daemonologie (1597) on witchcraft, his belief in the Divine Right of Kings, and the fact that Macbeth was likely performed before him at court; (2) The Gunpowder Plot (1605) — Catholic conspirators attempting to blow up Parliament, the theme of treason and equivocation at the trial of Father Garnet, who argued that lying under oath could be justified; (3) Jacobean gender roles — women expected to be obedient, silent, and domestic, making Lady Macbeth\'s ambition deeply transgressive. After reading, students complete a three-column table: Context Point | How it appears in Macbeth | Why Shakespeare included it. Share responses.',
        differentiation: {
          support:
            'Provide the three-column table partially filled with one example row completed: "James I believed in witchcraft | The witches open the play and drive the plot | Shakespeare flatters his patron and explores the danger of the supernatural."',
          core: 'Students complete all three rows independently using the information sheet.',
          stretch:
            'Students add a fourth column: "Which AO3 point would be most effective in an exam essay and why?" They write a brief justification.',
        },
        resources: ['Jacobean context information sheet', 'Three-column table worksheet'],
      },
      {
        title: 'Applying Context: Annotated Extract Analysis',
        duration: '22 minutes',
        instructions:
          'Students receive the opening of Act 1 Scene 1 (the witches\' first appearance) and Act 1 Scene 2 (the Sergeant\'s report of Macbeth\'s bravery). Working in pairs, they annotate both extracts with contextual points, asking: what would a Jacobean audience feel at this moment and why? Teacher models one annotation: "The witches meeting \'in thunder, lightning, or in rain\' would have alarmed a Jacobean audience who believed witches controlled the weather and served the devil." Students then write one full analytical paragraph on how Shakespeare uses the opening two scenes to establish the play\'s moral world for a Jacobean audience. Volunteers share; class offers peer feedback.',
        differentiation: {
          support:
            'Provide a PETAL writing frame: "Shakespeare establishes... / He uses the image of... / The technique of... creates... / A Jacobean audience would have... because..."',
          core: 'Students annotate and write the paragraph using the model on the board.',
          stretch:
            'Students write two linked paragraphs — one on the witches and one on Macbeth\'s heroism — developing an argument about how Shakespeare creates moral ambiguity from the opening scenes.',
        },
        resources: ['Act 1 Scenes 1-2 extract sheet', 'PETAL writing frame', 'Annotated model paragraph'],
      },
    ],
    plenaryActivity: {
      title: 'Context Relay',
      duration: '7 minutes',
      instructions:
        'Divide the class into groups of four. Each student in the group holds one context card: Divine Right of Kings, Witchcraft, Gunpowder Plot / Equivocation, Jacobean Gender Roles. Going round the group, each student has 30 seconds to explain their context point and state one way it is relevant to Macbeth. The group then collaboratively writes a single sentence embedding the most important context point for an exam essay. Three groups share their sentences; class votes on the most effectively integrated contextual reference.',
      differentiation: {
        support: 'Provide bullet-point prompts on the back of each context card.',
        core: 'Students explain their card from memory using the lesson\'s information sheet as a check.',
        stretch: 'Students challenge each other: "Can you link your context point to a specific quotation from the play?"',
      },
    },
    homework:
      'Research one of the following and write a short paragraph (8-10 sentences) explaining its relevance to Macbeth: (a) King James I\'s Daemonologie; (b) The trial of Father Henry Garnet and equivocation; (c) Elizabethan and Jacobean beliefs about the Great Chain of Being. Include at least one specific detail and link it to the play.',
    worksheetQuestions: [
      {
        question:
          'What was the Divine Right of Kings, and why does this belief make Macbeth\'s murder of Duncan so significant to a Jacobean audience?',
        lines: 6,
        modelAnswer:
          'The Divine Right of Kings was the belief that monarchs were appointed directly by God, making the king\'s authority sacred and unchallengeable. To kill a king was therefore not merely a political crime but a sin against God and the natural order. For a Jacobean audience watching Macbeth, the murder of Duncan would have been the ultimate transgression — a violation of divine law that inevitably invites divine punishment. This explains why the play presents such a disturbing vision of natural disorder after the murder (horses eating each other, unnatural darkness) and why Macbeth\'s downfall is presented as inevitable rather than simply unlucky.',
        marks: 6,
      },
      {
        question:
          'How might knowledge of the Gunpowder Plot (1605) affect how a Jacobean audience responded to the themes of equivocation and treachery in Macbeth?',
        lines: 5,
        modelAnswer:
          'The Gunpowder Plot of 1605, in which Catholic conspirators attempted to blow up Parliament and kill King James I, would have made the themes of treachery and equivocation in Macbeth immediately resonant. Father Garnet, executed for his role in the plot, had argued that lying under oath could be justified — a concept the Porter satirises in Act 2. The Jacobean audience would have recognised equivocation as a real and recent danger, making the witches\' misleading prophecies all the more sinister: they, like the plotters, use ambiguous language to destroy a king.',
        marks: 5,
      },
      {
        question:
          'Why would Lady Macbeth\'s behaviour have seemed particularly transgressive to a Jacobean audience?',
        lines: 5,
        modelAnswer:
          'In Jacobean society, women were expected to be obedient, domestic, and subordinate to male authority. Lady Macbeth directly inverts these expectations: she calls on spirits to "unsex" her, takes charge of the murder plan, and effectively manipulates her husband into action. A Jacobean audience would have viewed her as dangerously unnatural — a woman who rejects her femininity and takes on masculine power. Her eventual breakdown and suicide could be read as the inevitable punishment for transgressing the natural gender order, reinforcing conservative Jacobean values even while exploring them critically.',
        marks: 5,
      },
      {
        question:
          'Shakespeare wrote Macbeth around 1606, when King James I was on the throne. How does this affect the way we read the play\'s treatment of kingship?',
        lines: 5,
        modelAnswer:
          'King James I was Shakespeare\'s patron and believed firmly in the Divine Right of Kings. Writing Macbeth for a court audience that included the king himself, Shakespeare had clear reasons to present regicide as disastrous and legitimate kingship as divinely sanctioned. The contrast between the tyrannical Macbeth and the saintly Duncan, and later the virtuous Malcolm, can be read as a celebration of the Stuart monarchy. However, the play\'s complexity means it also raises uncomfortable questions about power, ambition, and the nature of legitimate rule.',
        marks: 5,
      },
      {
        question:
          'Identify one specific contextual detail about Jacobean witchcraft beliefs and explain how it enriches our understanding of the witches in Macbeth.',
        lines: 5,
        modelAnswer:
          'King James I wrote Daemonologie in 1597, a book arguing that witches were real agents of the devil who could cause storms, possess animals, and tempt good people to evil. This context enriches the witches in Macbeth because their opening appearance "in thunder, lightning, or in rain" would have signalled to a Jacobean audience that these were genuinely dangerous supernatural agents, not merely symbolic figures. The audience would not have questioned their power but feared it, making Macbeth\'s susceptibility to their influence more understandable and more frightening.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'Students often treat context as background information rather than as a lens for analysis. Emphasise from the start that AO3 marks are earned by linking context to specific moments in the text, not by narrating historical facts.',
      'King James I\'s Daemonologie is particularly worth dwelling on: it makes the witches feel less like literary convention and more like a direct response to the king\'s known obsessions, which helps students understand Shakespeare\'s relationship with his patron.',
      'The Gunpowder Plot is one year before Macbeth\'s first performance and directly relevant to the Porter\'s speech on equivocation — if time allows, read that speech in the next lesson and return to this context point.',
      'Be prepared for students to find Jacobean gender attitudes uncomfortable. Frame this as historical context that Shakespeare was both reflecting and, in some readings, critiquing — the play does not straightforwardly endorse the punishment of Lady Macbeth.',
    ],
    targetedSkills: [
      'AO3 — Relationships between texts and the contexts in which they were written and received',
      'Contextual embedding in analytical writing',
      'Understanding of Jacobean political and religious beliefs',
      'Close reading of opening scenes for dramatic effect',
      'Awareness of Shakespeare\'s relationship with his royal patron',
    ],
  },

  // ── Lesson 2: Act 1 — The Witches\' Prophecy and Macbeth\'s Ambition ─────────
  {
    id: 'y11mac-02',
    title: "Act 1: The Witches' Prophecy and Macbeth's Ambition",
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare presents the witches as agents of temptation and moral corruption in Act 1',
      'Explore the nature of Macbeth\'s ambition and the role of free will versus fate in his decision-making',
      'Examine Shakespeare\'s use of language — particularly imagery, paradox, and antithesis — in Act 1',
      'Practise close language analysis using AO2, supported by AO3 contextual knowledge',
    ],
    successCriteria: [
      'I can explain how the witches\' prophecies work as temptation rather than destiny, and what this suggests about free will',
      'I can analyse at least two language techniques Shakespeare uses in the witches\' speeches and explain their dramatic effect',
      'I can identify textual evidence of Macbeth\'s ambition before he meets the witches and explain its significance',
      'I can write a focused analytical paragraph on Shakespeare\'s presentation of ambition using quotation and language analysis',
    ],
    keywords: [
      'prophecy',
      'ambition',
      'temptation',
      'paradox',
      'antithesis',
      'soliloquy',
      'aside',
      'imagery',
      'fate',
      'free will',
    ],
    starterActivity: {
      title: 'Fair is Foul: Decoding the Witches',
      duration: '8 minutes',
      instructions:
        'Write the line "Fair is foul, and foul is fair" on the board. Students spend two minutes writing down everything this phrase could mean — as many interpretations as possible. Share ideas and categorise them on the board: moral inversion, deception, appearance vs reality, the corruption of good. Then ask: if the very first words of the play invert all moral distinctions, what does this tell us about the world we are entering? Introduce the terms paradox and antithesis and ask students to apply them to the opening line, explaining the difference.',
      differentiation: {
        support:
          'Provide prompts: "This could mean... / The opposite of fair is... / This is relevant to Macbeth because..."',
        core: 'Students generate interpretations independently then share.',
        stretch:
          'Students consider: does this line suggest the witches cause moral inversion or merely predict it? What is the difference, and why does it matter for the play?',
      },
      resources: ['Opening line display slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: "Close Reading: Act 1 Scene 3 — The Prophecies",
        duration: '20 minutes',
        instructions:
          'Students receive Act 1 Scene 3 (from the witches\' entrance to Macbeth\'s first aside: "This supernatural soliciting / Cannot be ill, cannot be good"). Working in pairs, students annotate the extract for: (1) how the witches deliver their prophecies — what they say and what they do not say; (2) Banquo\'s reaction compared with Macbeth\'s; (3) Macbeth\'s aside and what it reveals about his inner thoughts. Teacher models one annotation: "\'All hail, Macbeth, that shalt be king hereafter\' — the future tense \'shalt be\' implies inevitability, but does not tell Macbeth how to become king. This ambiguity is what allows Macbeth to supply his own murderous interpretation." Students then discuss: are the witches responsible for Macbeth\'s actions, or do they merely reveal what is already in his mind?',
        differentiation: {
          support:
            'Provide three guiding questions on the annotation sheet: (1) What do the witches promise? (2) How does Macbeth respond differently from Banquo? (3) What does the aside tell us about what Macbeth is already thinking?',
          core: 'Students annotate and discuss the free will vs fate question in pairs.',
          stretch:
            'Students consider the dramatic irony of Banquo\'s warning: "oftentimes, to win us to our harm, / The instruments of darkness tell us truths." What does this suggest about the nature of the witches\' power?',
        },
        resources: ['Act 1 Scene 3 extract sheet', 'Annotation guide'],
      },
      {
        title: "Macbeth's Ambition: Before and After the Prophecy",
        duration: '22 minutes',
        instructions:
          'Teacher directs students to two moments: (1) the Sergeant\'s report in Act 1 Scene 2 — Macbeth\'s savage battlefield heroism, described as "carving out his passage" and "unseamed him from the nave to the chops"; (2) Macbeth\'s first soliloquy in Act 1 Scene 7 ("If it were done when \'tis done..."). Students complete a comparison grid: What does this moment reveal about Macbeth\'s character? What language techniques are used? What does this suggest about his ambition? Class discussion: does Act 1 Scene 2 show that violence is already central to Macbeth\'s identity before the witches appear? Students then write one paragraph arguing either that Macbeth\'s ambition is the product of the witches\' influence or that the witches merely catalyse an ambition that already exists.',
        differentiation: {
          support:
            'Provide the comparison grid with the first row partially completed and sentence starters for the paragraph: "Shakespeare presents Macbeth\'s ambition as... This is shown when..."',
          core: 'Students complete the grid and write the full analytical paragraph.',
          stretch:
            'Students develop the argument over two paragraphs, conceding the counterargument in the second: "However, one could argue that without the witches\' prophecy..."',
        },
        resources: ['Act 1 Scene 2 and Act 1 Scene 7 extract sheet', 'Comparison grid', 'PETAL frame'],
      },
    ],
    plenaryActivity: {
      title: 'Fate or Free Will? Class Debate Vote',
      duration: '7 minutes',
      instructions:
        'Present the proposition: "Macbeth is entirely responsible for his own downfall — the witches simply tell him what he already wants to hear." Students stand on a spectrum from Strongly Agree to Strongly Disagree. Three students from each end justify their position with a quotation. After hearing both sides, students may move. Record the final distribution and ask: what does Shakespeare gain dramatically by keeping this question open? Students write one sentence summarising their view as an exit ticket.',
      differentiation: {
        support: 'Provide three quotations students can use as evidence for either position.',
        core: 'Students choose their own quotation from the lesson\'s extracts.',
        stretch: 'Students write two sentences: their conclusion and one concession to the opposing view.',
      },
    },
    homework:
      'Learn the following two quotations from Act 1 by heart: (1) "Stars, hide your fires; / Let not light see my black and deep desires" (Act 1 Scene 4); (2) "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o\'erleaps itself" (Act 1 Scene 7). For each, write three sentences: identify one technique, analyse its effect, and link to the theme of ambition.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare use the witches\' prophecies in Act 1 to create dramatic tension? Consider both what the witches say and what they leave unsaid.',
        lines: 6,
        modelAnswer:
          'Shakespeare creates tension by having the witches use future-tense statements — "shalt be king hereafter" — that promise an outcome without specifying a method. This ambiguity is dramatically important because it forces Macbeth (and the audience) to imagine how the prophecy might be fulfilled. The witches do not tell Macbeth to commit murder; instead, they plant the idea of kingship and allow his own ambition to supply the murderous conclusion. The tension is intensified by Macbeth\'s aside, which reveals that the idea of killing Duncan has already crossed his mind before any direct encouragement — suggesting the witches are not creating ambition but exposing it.',
        marks: 6,
      },
      {
        question:
          'What does the phrase "Fair is foul, and foul is fair" suggest about the moral world of the play? Refer to language techniques in your answer.',
        lines: 5,
        modelAnswer:
          'The phrase "Fair is foul, and foul is fair" is a paradox — a statement that seems self-contradictory but contains a deeper truth. It also uses antithesis, placing opposing concepts ("fair" and "foul") in direct opposition to show their collapse. Shakespeare uses this to establish that the play\'s world is one of moral inversion, where appearances cannot be trusted, good men are corrupted, and the language of praise can mask evil intent. It prepares the audience for a play in which a celebrated hero becomes a tyrant, and in which deceptive language — from the witches and from Macbeth himself — is a central dramatic device.',
        marks: 5,
      },
      {
        question:
          'Compare Banquo\'s reaction to the witches\' prophecies with Macbeth\'s. What does this contrast reveal about Macbeth\'s character?',
        lines: 5,
        modelAnswer:
          'Banquo responds to the witches with scepticism and caution, warning that "the instruments of darkness tell us truths... to betray\'s / In deepest consequence." He receives a prophecy too but does not act on it. Macbeth, by contrast, is immediately captivated: his aside reveals that his mind jumps to thoughts of murder almost instantly. The contrast reveals that Macbeth\'s ambition is already active and that he is predisposed to interpret the prophecy in the most dangerous way possible. Shakespeare uses Banquo as a moral foil — a man who faces the same temptation and resists it — to show that Macbeth\'s choices are genuinely his own.',
        marks: 5,
      },
      {
        question:
          'Analyse how Shakespeare presents Macbeth\'s ambition in his Act 1 Scene 7 soliloquy ("If it were done when \'tis done...").',
        lines: 6,
        modelAnswer:
          'In the soliloquy, Macbeth reveals the full complexity of his ambition through tortured conditional logic. He uses the phrase "If it were done when \'tis done, \'twere well / It were done quickly" — the repetition of "done" creates a circular, evasive quality, as if Macbeth is trying to think around the word "murder" rather than confront it directly. He acknowledges the moral and political reasons not to kill Duncan — the duties of hospitality, the king\'s virtues, the likelihood of violent retribution — before conceding that "I have no spur... but only / Vaulting ambition." The metaphor of ambition as a horse that "o\'erleaps itself" and falls suggests Macbeth already senses that his ambition is reckless and self-destructive, yet he cannot resist it.',
        marks: 6,
      },
      {
        question:
          'To what extent is Macbeth responsible for his own downfall? Use evidence from Act 1 to support your view.',
        lines: 6,
        modelAnswer:
          'Macbeth bears significant responsibility for his downfall because the evidence of Act 1 suggests his ambition precedes and exceeds the witches\' influence. In Act 1 Scene 2, his battlefield violence is described in graphic terms — he "unseamed" his enemy "from the nave to the chops" — suggesting a man already comfortable with extreme violence. His aside in Act 1 Scene 3 reveals that the thought of murder crosses his mind before Lady Macbeth has spoken a word. His soliloquy in Act 1 Scene 7 shows he is fully aware of the moral and practical arguments against murder but proceeds anyway. While the witches provide the initial prophecy and Lady Macbeth provides pressure, Macbeth\'s choice to act is ultimately his own, which is what makes the play a tragedy rather than merely a tale of supernatural corruption.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The free will versus fate debate is central to the play and should not be resolved too quickly in class. Keep the question open and return to it in later lessons when students have more textual evidence.',
      'Students often say the witches "made" Macbeth commit murder. Encourage precision: the witches offer a prophecy, not a command. Asking "what would have happened if Macbeth had done nothing?" is a useful way to explore this.',
      'Act 1 Scene 7 is a strong soliloquy for AO2 analysis because the language is dense with metaphor and the syntax mimics Macbeth\'s psychological state. Spending time on the sentence structure — its false starts and qualifications — is worthwhile.',
      'Banquo as a moral foil is a concept worth introducing here and reinforcing in the Banquet Scene lesson. It helps students build comparative arguments within the play.',
    ],
    targetedSkills: [
      'AO2 — Analysis of language, form, and structure including figurative language and dramatic techniques',
      'AO3 — Contextual understanding of Jacobean beliefs about fate and the supernatural',
      'Close reading and annotation of dramatic soliloquy',
      'Comparative analysis of character responses',
      'Constructing an argument with textual evidence',
    ],
  },

  // ── Lesson 3: Lady Macbeth — Power, Manipulation, Gender ─────────────────
  {
    id: 'y11mac-03',
    title: "Lady Macbeth: Power, Manipulation, and Gender",
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare presents Lady Macbeth as a figure of transgressive female power in Act 1',
      'Examine the language of Lady Macbeth\'s "unsex me here" soliloquy as a study in AO2 technique',
      'Explore how Lady Macbeth manipulates Macbeth through gender-based language and psychological pressure',
      'Consider how a Jacobean audience and a modern audience might respond differently to Lady Macbeth\'s behaviour',
    ],
    successCriteria: [
      'I can analyse the "unsex me here" soliloquy and identify at least three language techniques with their effects',
      'I can explain how Lady Macbeth uses gender as a weapon to manipulate Macbeth in Act 1 Scene 7',
      'I can discuss how Jacobean gender expectations shape the dramatic impact of Lady Macbeth\'s characterisation',
      'I can write an analytical paragraph on Shakespeare\'s presentation of Lady Macbeth using embedded quotation',
    ],
    keywords: [
      'transgressive',
      'manipulation',
      'soliloquy',
      'invocation',
      'gender roles',
      'femininity',
      'masculinity',
      'psychology',
      'subversion',
      'dramatic irony',
    ],
    starterActivity: {
      title: 'First Impressions of Lady Macbeth',
      duration: '8 minutes',
      instructions:
        'Without giving any context, display Lady Macbeth\'s reaction on reading Macbeth\'s letter (Act 1 Scene 5): "Yet do I fear thy nature; / It is too full o\' the milk of human kindness." Ask students to discuss in pairs: what does this line tell us about Lady Macbeth\'s view of her husband, and what does it imply about her own nature? Collect responses. Then reveal the full context of the scene and ask: does knowing that Lady Macbeth is reading a letter from her husband change the effect? Introduce the idea that Lady Macbeth is established through her private thoughts — her soliloquy — not through how others describe her, making her one of Shakespeare\'s most psychologically complex characters.',
      differentiation: {
        support: 'Provide the quotation with glossed vocabulary: "fear" = doubt about; "milk of human kindness" = natural compassion.',
        core: 'Students discuss and generate two observations about Lady Macbeth\'s character from the line.',
        stretch:
          'Students consider: what does it reveal about Lady Macbeth that she identifies "human kindness" as a weakness? What values does this imply she holds?',
      },
      resources: ['Act 1 Scene 5 quotation slide', 'Full extract copies'],
    },
    mainActivities: [
      {
        title: 'Close Reading: "Come, you spirits" Soliloquy',
        duration: '20 minutes',
        instructions:
          'Students receive the full "unsex me here" soliloquy (Act 1 Scene 5, from "Come, you spirits / That tend on mortal thoughts" to "nor heaven peep through the blanket of the dark"). Working individually, students annotate for: (1) the language of invocation — what Lady Macbeth is calling on spirits to do; (2) the vocabulary of gender and the body — what she wants removed or changed; (3) the imagery of darkness, blood, and concealment; (4) what this soliloquy reveals about her psychological state and her awareness of moral danger. Teacher models one annotation: "\'Stop up the access and passage to remorse\' — the medical metaphor of blocking a physical passage suggests Lady Macbeth sees compassion as a bodily function that can be surgically removed. This reveals a chilling rationalism." Pairs compare annotations and class discusses: is Lady Macbeth more frightening or more pitiable here?',
        differentiation: {
          support:
            'Provide an annotated glossary for the soliloquy (e.g., "mortal thoughts" = murderous thoughts; "gall" = bitterness; "pall" = funeral cloth) and two pre-written annotations for students to expand on.',
          core: 'Students complete the full annotation independently.',
          stretch:
            'Students consider the dramatic irony: Lady Macbeth calls for the ability to commit murder without remorse, yet she ends the play consumed by guilt. How does knowing this tragic outcome enrich our reading of this soliloquy?',
        },
        resources: ['Act 1 Scene 5 soliloquy extract', 'Annotation guide', 'Glossary sheet'],
      },
      {
        title: "Lady Macbeth's Manipulation: Act 1 Scene 7",
        duration: '22 minutes',
        instructions:
          'Students read Act 1 Scene 7 (from Macbeth\'s "We will proceed no further in this business" to Lady Macbeth\'s "screw your courage to the sticking-place"). Students identify: (1) how Lady Macbeth attacks Macbeth\'s masculinity — "When you durst do it, then you were a man"; (2) how she uses the image of the nursing mother to establish her own ruthlessness — "I would... have plucked my nipple from his boneless gums, / And dashed the brains out"; (3) how her language shifts from attacking to encouraging — "We fail? / But screw your courage to the sticking-place, / And we\'ll not fail." Class discusses: is Lady Macbeth\'s use of gender rhetoric a sign of psychological strength or does it reveal her own understanding of her world\'s gender rules? Students write one analytical paragraph on her methods of manipulation.',
        differentiation: {
          support:
            'Provide a sentence-starter frame: "Shakespeare presents Lady Macbeth as manipulative through her use of... / She uses the quotation... / This technique works because... / A Jacobean audience would have been particularly struck by this because..."',
          core: 'Students write the full paragraph using the extract and their annotations.',
          stretch:
            'Students write two paragraphs: one on Lady Macbeth\'s use of gender and one on her use of graphic maternal imagery, developing a sustained argument about the nature of her power.',
        },
        resources: ['Act 1 Scene 7 extract', 'PETAL writing frame', 'Peer assessment checklist'],
      },
    ],
    plenaryActivity: {
      title: 'Villain or Victim? Structured Controversy',
      duration: '7 minutes',
      instructions:
        'Present two statements: (A) "Lady Macbeth is the real villain of Macbeth — without her manipulation, Macbeth would never have committed murder"; (B) "Lady Macbeth is ultimately a victim — she internalises the values of a patriarchal world and destroys herself in doing so." Students write their initials on a sticky note and place it on the board under A, B, or in between. Students from each extreme share one piece of evidence. Teacher summarises the critical debate and notes that both readings are valid in an exam, provided they are supported with textual evidence. Students write a one-sentence exam-style thesis statement on a card.',
      differentiation: {
        support: 'Provide two quotations to support each position.',
        core: 'Students choose their own evidence.',
        stretch: 'Students write a thesis that holds both readings in tension: "Although Lady Macbeth appears to be... Shakespeare ultimately presents her as..."',
      },
    },
    homework:
      'Write one full analytical paragraph (8-10 sentences) on the following question: How does Shakespeare present Lady Macbeth as a powerful figure in Act 1? Use at least two quotations from the "unsex me here" soliloquy or the Act 1 Scene 7 confrontation. Focus on language techniques and their effects.',
    worksheetQuestions: [
      {
        question:
          'Analyse how Shakespeare uses the "unsex me here" soliloquy to present Lady Macbeth\'s desire for power. Focus on language and imagery.',
        lines: 6,
        modelAnswer:
          'In the soliloquy, Shakespeare presents Lady Macbeth\'s desire for power through the extended invocation of spirits. The imperative "Come, you spirits / That tend on mortal thoughts" establishes her as a commanding figure who believes she can summon supernatural forces to her will. Her request to be "unsexed" reveals her awareness that femininity — as Jacobean culture defined it — is an obstacle to the ruthless ambition she wishes to embrace. The imagery of "milk" being replaced by "gall" inverts the nurturing associations of the maternal body, suggesting she wants to eliminate natural compassion entirely. The darkness imagery — "Come, thick night, / And pall thee in the dunnest smoke of hell" — shows she seeks concealment, aware at some level that what she plans requires moral darkness to hide it.',
        marks: 6,
      },
      {
        question:
          'How does Lady Macbeth use gender as a tool of manipulation in Act 1 Scene 7? Use evidence from the text.',
        lines: 5,
        modelAnswer:
          'Lady Macbeth attacks Macbeth\'s sense of masculinity to overcome his reluctance to murder Duncan. When Macbeth says they will "proceed no further," she responds: "When you durst do it, then you were a man" — directly equating courage with manhood and implying that withdrawal makes him less than a man. This works because in Jacobean culture, masculine identity was closely tied to military courage and decisive action. Lady Macbeth weaponises this cultural expectation, knowing that Macbeth\'s self-image as a warrior hero will make the challenge to his masculinity psychologically intolerable. The manipulation is devastatingly effective: Macbeth immediately shifts from refusal to planning.',
        marks: 5,
      },
      {
        question:
          'What does Lady Macbeth\'s soliloquy in Act 1 Scene 5 reveal about her relationship with guilt and morality?',
        lines: 5,
        modelAnswer:
          'Lady Macbeth\'s soliloquy reveals that she is acutely aware of the moral weight of what she plans and that she fears her own conscience. Her request to "stop up the access and passage to remorse" acknowledges that remorse is a natural human response she expects to feel — and must therefore suppress. Similarly, she asks "that no compunctious visitings of nature / Shake my fell purpose" — suggesting that she knows her natural instincts would oppose murder. This awareness of guilt, ironically, foreshadows her psychological collapse in Act 5, where the guilt she tried to eliminate returns with devastating force. Shakespeare thus establishes Lady Macbeth\'s tragic arc from the very beginning.',
        marks: 5,
      },
      {
        question:
          'How might a Jacobean audience have responded differently to Lady Macbeth compared with a modern audience?',
        lines: 5,
        modelAnswer:
          'A Jacobean audience would likely have found Lady Macbeth deeply threatening and transgressive. In 1606, women were expected to be obedient, domestic, and pious; a woman who calls on spirits, dismisses her femininity, and manipulates her husband into regicide would have seemed almost demonic. Some Jacobean audience members might have connected her with the witch trials of the period. A modern audience, by contrast, might view Lady Macbeth with more sympathy — as a woman of intelligence and ambition in a world that offered her no legitimate outlet for those qualities, who channels her power through her husband and ultimately destroys herself in doing so. Both responses are valid readings that Shakespeare\'s complex characterisation supports.',
        marks: 5,
      },
      {
        question:
          'Is Lady Macbeth more powerful than Macbeth in Act 1? Argue your view with reference to specific evidence.',
        lines: 6,
        modelAnswer:
          'In Act 1, Lady Macbeth appears to hold the psychological upper hand. When Macbeth declares "We will proceed no further in this business," she overrides his decision through sustained psychological pressure, manipulating his sense of masculine identity until he agrees to the murder. Her soliloquy reveals a clarity of purpose — and a willingness to suppress her own conscience — that Macbeth\'s tortured soliloquy in the same scene lacks. Macbeth lists reasons not to act; Lady Macbeth dismisses them all. However, it can also be argued that her power is dependent: she can only act through Macbeth, and she understands that her gender prevents her from wielding direct power. Her strength in Act 1 is therefore real but constrained, which makes her eventual collapse in Act 5 all the more significant.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The "unsex me here" soliloquy is rich for AO2 but the language is demanding. Pre-teaching vocabulary (gall, compunctious, pall, dunnest) before the annotation activity will save time and prevent students getting stuck on meaning rather than analysis.',
      'Students sometimes treat Lady Macbeth as simply "evil" or simply "a victim." The most sophisticated exam answers hold both possibilities in tension. Model this in the structured controversy plenary.',
      'The nursing mother imagery ("I would... have plucked my nipple from his boneless gums / And dashed the brains out") is deliberately shocking. Acknowledge that students may find it disturbing and explain that this is precisely the effect Shakespeare intends — Lady Macbeth is using the most sacred image of femininity and weaponising it to prove her ruthlessness.',
      'Connecting the "unsex me here" soliloquy to Lady Macbeth\'s sleepwalking scene in Act 5 early in the course helps students see the play\'s structure as a whole. The guilt she tries to expel here returns to destroy her.',
    ],
    targetedSkills: [
      'AO2 — Analysis of soliloquy, imagery, and dramatic language in Act 1 Scene 5 and 7',
      'AO3 — Understanding of Jacobean gender expectations and their dramatic implications',
      'Character analysis: Lady Macbeth as transgressive female figure',
      'Constructing an argument about power and manipulation',
      'Writing an analytical paragraph with embedded quotation',
    ],
  },

  // ── Lesson 4: The Murder of Duncan — Dramatic Tension and Guilt ──────────
  {
    id: 'y11mac-04',
    title: 'The Murder of Duncan: Dramatic Tension and Guilt',
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare builds dramatic tension in the lead-up to and aftermath of Duncan\'s murder in Act 2',
      'Examine the dramatic function of Macbeth\'s dagger soliloquy and the knocking at the gate',
      'Explore how guilt is presented immediately after the murder through language, stage action, and character behaviour',
      'Practise writing about dramatic technique and structure as AO2 skills',
    ],
    successCriteria: [
      'I can explain how the dagger soliloquy creates tension and reveals Macbeth\'s psychological state',
      'I can identify at least three dramatic techniques Shakespeare uses in Act 2 to build and then release tension',
      'I can analyse how Macbeth and Lady Macbeth respond differently to the murder and what this reveals about their characters',
      'I can write an analytical paragraph on dramatic tension that comments on structure and staging as well as language',
    ],
    keywords: [
      'dramatic tension',
      'soliloquy',
      'hallucination',
      'guilt',
      'hubris',
      'catharsis',
      'dramatic irony',
      'staging',
      'juxtaposition',
      'comic relief',
    ],
    starterActivity: {
      title: 'Tension Thermometer',
      duration: '8 minutes',
      instructions:
        'Give students a list of eight moments from Act 2: (1) Macbeth sees the dagger; (2) the bell rings; (3) Duncan is killed offstage; (4) Macbeth enters with bloody daggers; (5) Macbeth says "I have done the deed"; (6) Macbeth cannot say "Amen"; (7) Lady Macbeth takes the daggers back; (8) the knocking begins. Students place these moments on a "tension thermometer" drawn on mini-whiteboards — ranking them from lowest to highest dramatic tension. Pairs compare and explain their rankings. Class discusses: why does Shakespeare choose to have the murder occur offstage? What is the effect on the audience?',
      differentiation: {
        support: 'Provide brief descriptions of each moment for students unfamiliar with the scene.',
        core: 'Students rank and give one reason for the top three most tense moments.',
        stretch:
          'Students consider the structural choice of the Porter scene (Act 2 Scene 3) — why does Shakespeare insert comedy after the murder? What effect does this have on dramatic rhythm?',
      },
      resources: ['Eight moments cards or slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: "Close Reading: Macbeth's Dagger Soliloquy",
        duration: '20 minutes',
        instructions:
          'Students receive Act 2 Scene 1 (Macbeth\'s dagger soliloquy). Working in pairs, they annotate for: (1) the nature of the hallucination — is the dagger real or imagined, and how does Shakespeare keep the ambiguity? (2) the language of darkness and unreality — "heat-oppressed brain," "fatal vision," "a dagger of the mind"; (3) the shift in tone from hesitation to decision — how does the soliloquy move from questioning to commitment? (4) the function of the personification of murder as a "ghost" stalking toward its target. Teacher models one annotation: "The phrase \'a dagger of the mind, a false creation\' uses the mind/reality opposition that runs throughout the play — Macbeth can no longer trust his own perceptions, which prepares the audience for his later visions of Banquo." Students write a 4-5 sentence analysis of the soliloquy\'s function in the play.',
        differentiation: {
          support:
            'Provide a glossed version of the soliloquy with difficult vocabulary explained and three focus questions to structure annotation.',
          core: 'Students annotate and write independently.',
          stretch:
            'Students compare the dagger soliloquy with Macbeth\'s Act 3 Scene 4 vision of Banquo\'s ghost: what do these two hallucinations have in common and how do they show Macbeth\'s psychological deterioration over the course of the play?',
        },
        resources: ['Act 2 Scene 1 soliloquy extract', 'Glossed version', 'Annotation prompts'],
      },
      {
        title: 'After the Murder: Language of Guilt',
        duration: '22 minutes',
        instructions:
          'Students work through Act 2 Scene 2 (from "I have done the deed" to the end of the scene). They complete a dual-column analysis: Left column — what Macbeth says and does; Right column — what Lady Macbeth says and does. Students then identify: (1) key quotations that reveal guilt — "Will all great Neptune\'s ocean wash this blood / Clean from my hand?"; (2) Lady Macbeth\'s apparently practical response — "A little water clears us of this deed"; (3) dramatic irony — the audience will later watch Lady Macbeth obsessively trying to wash her hands clean. Teacher leads a class discussion: whose response to the murder seems more frightening to a contemporary audience — Macbeth\'s emotional disintegration or Lady Macbeth\'s cold practicality? Students write one analytical paragraph contrasting the two characters\' responses, focusing on the water/blood imagery.',
        differentiation: {
          support:
            'Provide the dual-column grid pre-populated with the relevant quotations; students write the analysis column only.',
          core: 'Students find the quotations, complete the grid, and write the paragraph.',
          stretch:
            'Students note that Lady Macbeth\'s dismissive "A little water clears us of this deed" directly anticipates her sleepwalking scene ("Out, damned spot!"). Write a paragraph exploring this dramatic irony and what it reveals about Shakespeare\'s structural planning.',
        },
        resources: ['Act 2 Scene 2 extract', 'Dual-column analysis grid', 'Blood/water imagery list'],
      },
    ],
    plenaryActivity: {
      title: 'Director\'s Commentary: Staging the Murder',
      duration: '7 minutes',
      instructions:
        'Students imagine they are the director of a new production of Macbeth. The producer asks: "How would you stage the moments immediately before, during, and after Duncan\'s murder to create maximum dramatic impact?" Students write three bullet points: one decision about staging (lighting, sound, use of offstage space), one decision about performance (how Macbeth or Lady Macbeth should deliver a key line), and one decision about pacing. Three students share their choices and justify them with reference to Shakespeare\'s text. Class votes on the most dramatically effective approach.',
      differentiation: {
        support: 'Provide a list of staging options to choose from rather than generating from scratch.',
        core: 'Students make and justify their own three decisions.',
        stretch: 'Students write a short paragraph explaining how their staging choices would affect the audience\'s sympathy for Macbeth at this critical moment.',
      },
    },
    homework:
      'Learn this quotation by heart: "Will all great Neptune\'s ocean wash this blood / Clean from my hand? No, this my hand will rather / The multitudinous seas incarnadine, / Making the green one red." Write a paragraph analysing the quotation\'s language (focus on the contrast between Neptune\'s ocean and Macbeth\'s hand, and the effect of the Latinate vocabulary "incarnadine" versus the simple "Making the green one red"). Then explain what the quotation reveals about Macbeth\'s psychological state at this point in the play.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare use the dagger soliloquy (Act 2 Scene 1) to reveal Macbeth\'s psychological state and build dramatic tension?',
        lines: 6,
        modelAnswer:
          'The dagger soliloquy reveals Macbeth\'s deteriorating grip on reality by presenting a hallucination that he cannot trust: "Is this a dagger which I see before me?" The interrogative opening immediately draws the audience into Macbeth\'s uncertainty. Shakespeare maintains deliberate ambiguity — "a dagger of the mind, a false creation / Proceeding from the heat-oppressed brain" — never confirming whether the vision is supernatural or psychological. This uncertainty mirrors the audience\'s own confusion and creates tension through dramatic irony: we know that Macbeth is about to commit a terrible act, and the soliloquy reveals how his mind is already beginning to unravel. The shift in the final lines — as Macbeth commits to the murder — creates a chilling sense of inevitability.',
        marks: 6,
      },
      {
        question:
          'Why does Shakespeare have Duncan\'s murder take place offstage? What is the dramatic effect of this choice?',
        lines: 5,
        modelAnswer:
          'Shakespeare follows classical dramatic convention by keeping the most violent act offstage, but the effect is profoundly dramatic rather than merely conventional. The audience\'s imagination fills the silence, potentially imagining something more terrible than any stage representation could achieve. The offstage murder also keeps the audience\'s focus on Macbeth\'s and Lady Macbeth\'s reactions — their faces, their words — rather than the act itself. This shifts the drama from the physical to the psychological, establishing the pattern for the rest of the play in which the interior consequences of murder (guilt, paranoia, hallucination) are more prominent than any further violence.',
        marks: 5,
      },
      {
        question:
          'Analyse the blood and water imagery in Act 2 Scene 2. How does Shakespeare use it to contrast Macbeth and Lady Macbeth?',
        lines: 6,
        modelAnswer:
          'In Act 2 Scene 2, Shakespeare uses blood and water imagery to establish a crucial contrast. Macbeth despairs: "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" — the hyperbolic image of Neptune\'s ocean being insufficient to cleanse him suggests guilt so profound it is physically embedded in his body. Lady Macbeth\'s response is practically dismissive: "A little water clears us of this deed." The juxtaposition of these two responses — cosmic ocean versus a little water — reveals the gulf between their psychological states. Lady Macbeth appears to feel no guilt; Macbeth is already overwhelmed. The dramatic irony is devastating: in Act 5, it is Lady Macbeth who compulsively tries to wash her hands, crying "Out, damned spot!" — the "little water" has failed her, just as Macbeth predicted.',
        marks: 6,
      },
      {
        question:
          'What is the dramatic function of the Porter scene (Act 2 Scene 3) immediately after Duncan\'s murder?',
        lines: 5,
        modelAnswer:
          'The Porter scene provides comic relief after the intense dramatic tension of the murder, but it is far from simple comedy. The Porter\'s bawdy jokes about a "hell-porter" admitting sinners create a sustained metaphor: Macbeth\'s castle is now hell, and the Porter is its gatekeeper. This darkens the comedy significantly for an audience aware of what has just occurred. The scene also serves a practical purpose — giving the actor playing Macbeth time to change his costume and compose himself — while the knocking that the Porter responds to maintains the tension of potential discovery. Shakespeare uses the juxtaposition of comedy and horror to intensify the horror rather than diminish it.',
        marks: 5,
      },
      {
        question:
          'How does Macbeth\'s inability to say "Amen" after the murder reveal the moral and spiritual significance of his crime?',
        lines: 5,
        modelAnswer:
          'Macbeth reports that he heard the guards praying and could not say "Amen" when they said "God bless us." His inability to complete the prayer — "I had most need of blessing, and \'Amen\' / Stuck in my throat" — suggests that by committing regicide he has cut himself off from God\'s grace. In Jacobean theology, the inability to pray would have been understood as a sign of damnation, making this moment theologically as well as dramatically significant. For a Jacobean audience, this would have confirmed that Macbeth has not merely committed a political crime but a spiritual one — he has forfeited his soul. Shakespeare uses this brief moment to establish the religious dimension of Macbeth\'s guilt.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The decision to murder Duncan offstage is worth exploring in depth: it is both a classical convention and a dramatically brilliant choice. Encouraging students to think about what a modern film might show and why Shakespeare\'s approach might be more powerful is an effective way into this discussion.',
      'The blood and water imagery is one of the play\'s sustained motifs. Introducing it here and connecting it explicitly to the sleepwalking scene in Act 5 helps students write about structure and pattern as AO2 skills.',
      'Macbeth\'s inability to say "Amen" is often overlooked by students but is enormously important for understanding the play\'s religious and moral framework. Spending a few minutes on this repays itself in richer essay writing.',
      'The Porter scene confuses some students who expect unbroken tragedy. Clarify that it is intentional comedy — Shakespeare uses it deliberately — and that understanding its function shows sophisticated structural awareness in an essay.',
    ],
    targetedSkills: [
      'AO2 — Dramatic technique: use of offstage action, soliloquy, imagery, and juxtaposition',
      'AO2 — Structural analysis: the Porter scene as comic relief and symbolic commentary',
      'Character analysis: contrasting responses to guilt in Act 2',
      'Understanding of blood and water as sustained imagery',
      'Writing about staging decisions and their dramatic effects',
    ],
  },

  // ── Lesson 5: Macbeth\'s Deterioration — From Hero to Tyrant ──────────────
  {
    id: 'y11mac-05',
    title: "Macbeth's Deterioration: From Hero to Tyrant",
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Trace Macbeth\'s transformation from celebrated warrior to paranoid tyrant across Acts 2, 3, and 4',
      'Examine the murder of Banquo and the significance of Macbeth acting without Lady Macbeth\'s knowledge',
      'Analyse how Shakespeare uses language and structural development to show Macbeth\'s moral deterioration',
      'Understand the concept of tragic trajectory and apply it to Macbeth\'s character arc',
    ],
    successCriteria: [
      'I can chart at least five key moments in Macbeth\'s deterioration from Act 1 to Act 4 with supporting quotations',
      'I can explain why the decision to murder Banquo marks a significant shift in Macbeth\'s character',
      'I can analyse language from Acts 3 and 4 that shows Macbeth\'s growing ruthlessness and detachment',
      'I can write a paragraph on Macbeth\'s character development that comments on structural progression across the play',
    ],
    keywords: [
      'tragic hero',
      'deterioration',
      'tyranny',
      'paranoia',
      'soliloquy',
      'hubris',
      'nemesis',
      'moral corruption',
      'isolation',
      'flaw',
    ],
    starterActivity: {
      title: 'Character Arc Timeline',
      duration: '8 minutes',
      instructions:
        'Give students a blank timeline with six points marked: Act 1 Scene 2 (before the witches), Act 1 Scene 7 (before the murder), Act 2 Scene 2 (immediately after the murder), Act 3 Scene 1 (planning Banquo\'s murder), Act 3 Scene 4 (the Banquet), Act 4 Scene 1 (returning to the witches). For each point, students write two words to describe Macbeth\'s character and, if they know it, one supporting quotation. Students share with a partner. Class compiles a master timeline on the board. Discussion: at which point does Macbeth change most dramatically, and what causes that change?',
      differentiation: {
        support:
          'Provide a word bank of descriptors (heroic, conflicted, guilt-ridden, determined, paranoid, reckless, brutal, isolated) and one quotation per stage for students to assign correctly.',
        core: 'Students complete the timeline independently.',
        stretch:
          'Students add a seventh point — Act 5 Scene 5 ("Tomorrow, and tomorrow, and tomorrow") — and consider whether Macbeth has reached a state of nihilistic clarity by the end, and whether this generates any sympathy.',
      },
      resources: ['Blank timeline sheet', 'Word bank cards'],
    },
    mainActivities: [
      {
        title: 'The Murder of Banquo: A Turning Point',
        duration: '20 minutes',
        instructions:
          'Students read Act 3 Scene 1 (Macbeth\'s "To be thus is nothing" soliloquy) and Act 3 Scene 2 (Macbeth\'s conversation with Lady Macbeth, concluding with "Things bad begun make strong themselves by ill"). Students identify: (1) Macbeth\'s reasoning for needing Banquo dead — the prophecy about Banquo\'s heirs; (2) the imagery of Banquo as a threat to Macbeth\'s "eternal jewel" — his soul; (3) the shift in the relationship: Macbeth tells Lady Macbeth to "be innocent of the knowledge" of what he plans, reversing their Act 1 dynamic. Teacher poses the question: why is the decision to murder Banquo a turning point rather than merely a continuation of the same pattern as Duncan\'s murder? Students discuss in pairs and report back, then write a 4-5 sentence analytical response.',
        differentiation: {
          support:
            'Provide three comparative prompts: "When Macbeth murdered Duncan, Lady Macbeth was... but now... / In Act 1 Macbeth hesitated because... but now... / The language Macbeth uses about Banquo is different because..."',
          core: 'Students identify the shift and write the analytical response independently.',
          stretch:
            'Students consider the significance of Fleance\'s escape from the murderers. How does this preserve the dramatic tension of the witches\' prophecy about Banquo\'s heirs and contribute to Macbeth\'s sense that he cannot achieve security through murder?',
        },
        resources: ['Act 3 Scenes 1-2 extract', 'Comparative prompts sheet'],
      },
      {
        title: "From Conflict to Compulsion: Tracking Language Change",
        duration: '22 minutes',
        instructions:
          'Students receive four short quotations arranged chronologically: (1) Act 1 Scene 7: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition"; (2) Act 3 Scene 2: "We have scorched the snake, not killed it"; (3) Act 3 Scene 4: "I am in blood / Stepped in so far, that, should I wade no more, / Returning were as tedious as go o\'er"; (4) Act 4 Scene 1: "From this moment / The very firstlings of my heart shall be / The firstlings of my hand." Students complete a close analysis of each quotation, tracking: the metaphor or imagery used; what emotion or mental state it reveals; how it represents a stage in Macbeth\'s deterioration. Class discusses: what does the progression of these quotations tell us about the relationship between action and character? Students write one sustained analytical paragraph tracing the deterioration through at least two of the quotations.',
        differentiation: {
          support:
            'Provide an analysis grid with the imagery column partially completed and a sentence frame: "As the play progresses, Macbeth\'s language shifts from... to... This suggests that..."',
          core: 'Students complete the full grid and write the paragraph.',
          stretch:
            'Students argue for which single quotation best captures Macbeth\'s deterioration and write a sustained justification comparing it with at least one other.',
        },
        resources: ['Four-quotation analysis sheet', 'Analysis grid', 'PETAL frame'],
      },
    ],
    plenaryActivity: {
      title: 'Is Macbeth Still a Tragic Hero?',
      duration: '7 minutes',
      instructions:
        'Remind students of Aristotle\'s definition of a tragic hero: a person of high status whose downfall results from a personal flaw (hamartia) and generates pity and fear (catharsis) in the audience. Ask: by Act 4, does Macbeth still meet these criteria? Students vote: Yes (still a tragic hero), No (has become simply a villain), or Partially (somewhere between). Students from each group justify with one piece of evidence. Teacher notes that the exam rewards complexity: the most interesting answers acknowledge that Macbeth is simultaneously villain and tragic figure, and that Shakespeare maintains audience sympathy even while condemning his actions. Students write a one-sentence exam thesis on Macbeth as a tragic figure.',
      differentiation: {
        support: 'Provide Aristotle\'s definition on a card and two quotations from Act 4 to consider.',
        core: 'Students engage with the definition and vote with their own justification.',
        stretch: 'Students consider: does the "Tomorrow, and tomorrow, and tomorrow" soliloquy (Act 5) restore Macbeth\'s status as a tragic figure? Write two sentences arguing for this view.',
      },
    },
    homework:
      'Learn this quotation by heart: "I am in blood / Stepped in so far, that, should I wade no more, / Returning were as tedious as go o\'er." Write a paragraph explaining: (1) the metaphor Shakespeare uses; (2) what it reveals about Macbeth\'s psychological state at this point in the play; (3) how it shows Macbeth\'s deterioration from the conflicted figure of Act 1. Then write one sentence linking this quotation to the theme of moral corruption.',
    worksheetQuestions: [
      {
        question:
          'How does the murder of Banquo represent a significant development in Macbeth\'s character compared with the murder of Duncan?',
        lines: 6,
        modelAnswer:
          'The murder of Banquo represents a significant shift because it is planned without Lady Macbeth\'s knowledge or involvement — Macbeth tells her to "be innocent of the knowledge" of what he intends. In Act 1, Lady Macbeth was the driving force behind Duncan\'s murder; now Macbeth acts autonomously and indeed excludes his wife. This shows that the need to kill has become internalised and compulsive rather than requiring external motivation. Furthermore, the murder of Banquo is motivated not by a single, rational political goal (becoming king) but by paranoid fear about the future — Banquo\'s heirs might inherit the throne. This escalation from purposeful to paranoid violence marks Macbeth\'s trajectory toward tyranny.',
        marks: 6,
      },
      {
        question:
          'Analyse the metaphor in "I am in blood / Stepped in so far, that, should I wade no more, / Returning were as tedious as go o\'er." What does this reveal about Macbeth\'s state of mind?',
        lines: 5,
        modelAnswer:
          'The extended metaphor of wading through blood presents Macbeth\'s situation as one of physical immersion from which retreat is as difficult as progress. The word "blood" carries both its literal meaning — the murders he has committed — and its symbolic weight as moral guilt. The phrase "tedious" is revealing: it reduces the moral question of whether to continue killing to a matter of convenience rather than ethics. This suggests that Macbeth has passed a point of moral reckoning and now views further violence as practically rather than morally determined. The metaphor shows his moral numbness — the guilt of Act 2 has been replaced by a pragmatic acceptance of his own corruption.',
        marks: 5,
      },
      {
        question:
          'How does Shakespeare use Macbeth\'s language in Act 4 Scene 1 to show how far he has deteriorated by this point in the play?',
        lines: 5,
        modelAnswer:
          'In Act 4 Scene 1, Macbeth\'s declaration that "the very firstlings of my heart shall be / The firstlings of my hand" marks a complete abandonment of the moral hesitation that characterised his Act 1 soliloquies. Earlier, Macbeth spent an entire soliloquy working through the reasons not to kill Duncan; now he commits to acting on impulse without reflection. The word "firstlings" — first impulses — suggests that thought and action have collapsed into one, eliminating the conscience and caution that previously slowed him. This language shift is Shakespeare\'s clearest signal that Macbeth has become the tyrant his enemies accuse him of being.',
        marks: 5,
      },
      {
        question:
          'Explain what is meant by the term "tragic hero" and discuss whether Macbeth continues to meet the criteria of a tragic hero by Act 4.',
        lines: 6,
        modelAnswer:
          'A tragic hero, in the Aristotelian tradition, is a character of high status whose downfall results from a personal flaw (hamartia) and generates pity and fear in the audience (catharsis). Macbeth clearly meets these criteria at the start of the play: he is a celebrated warrior, he has a clear flaw (ambition), and his suffering generates both fear and a degree of pity. By Act 4, however, his actions — ordering the massacre of Macduff\'s innocent family — risk extinguishing audience sympathy entirely. Yet Shakespeare preserves Macbeth\'s tragic status by continuing to show his interior life through soliloquy, revealing isolation and nihilistic despair alongside ruthlessness. The most sophisticated reading acknowledges that Macbeth is simultaneously villain and tragic figure throughout.',
        marks: 6,
      },
      {
        question:
          'How does Shakespeare show Macbeth\'s growing isolation in Acts 3 and 4? Use at least two pieces of evidence.',
        lines: 5,
        modelAnswer:
          'Macbeth\'s isolation is shown structurally through his increasingly solitary decision-making. In Act 3 Scene 2, he deliberately excludes Lady Macbeth from his plans for Banquo\'s murder, telling her to "be innocent of the knowledge." The marital partnership of Act 1 has dissolved into separate spheres of guilt and action. In Act 3 Scene 4, the Banquet scene dramatises his isolation publicly: while surrounded by his court, Macbeth is trapped in a private vision of Banquo\'s ghost that no one else can see. His courtiers witness only erratic behaviour, which they cannot understand. By Act 4, his consultation of the witches is entirely solitary — even Lady Macbeth is absent. Each act reduces his human connections further.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The concept of Macbeth as a tragic hero is central to the Edexcel IGCSE mark scheme, which rewards students who can discuss Shakespeare\'s dramatic purpose. Keeping the Aristotelian framework alive throughout the scheme of work pays dividends in final essays.',
      'The shift in the Macbeth-Lady Macbeth relationship — from her leading in Act 1 to him excluding her in Act 3 — is one of the play\'s most interesting structural features and one that students frequently miss. Making it explicit here prepares them for the Lady Macbeth lesson and the sleepwalking scene.',
      'The four-quotation tracking activity works well as a revision tool as well as a first-encounter activity. Consider returning to it as a starter in the revision lesson.',
      'Students often struggle to write about "deterioration" in a structured way. Teaching them to use a comparative frame — "Earlier in the play... but by Act 3... This shows that..." — gives them a clear analytical template.',
    ],
    targetedSkills: [
      'AO1 — Sustained argument about character development across the play',
      'AO2 — Analysis of language change as a marker of character deterioration',
      'AO2 — Structural awareness: tracking change across multiple acts',
      'Understanding of tragic hero conventions and their application',
      'Comparative writing within a single text',
    ],
  },

  // ── Lesson 6: The Banquet Scene and Macbeth\'s Paranoia ───────────────────
  {
    id: 'y11mac-06',
    title: "The Banquet Scene and Macbeth's Paranoia",
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare uses the Banquet scene (Act 3 Scene 4) as a dramatic turning point in the play',
      'Examine the dramatic and symbolic function of Banquo\'s ghost as a projection of Macbeth\'s guilt',
      'Explore how the scene marks the collapse of Macbeth\'s public persona and his political authority',
      'Practise writing about dramatic tension, staging, and audience response as AO2 skills',
    ],
    successCriteria: [
      'I can explain the dramatic function of Banquo\'s ghost and argue whether it is supernatural or psychological',
      'I can analyse at least two ways in which the Banquet scene destroys Macbeth\'s political credibility',
      'I can identify how Lady Macbeth\'s behaviour in this scene contrasts with her Act 1 role',
      'I can write an analytical paragraph on dramatic tension using staging and language as evidence',
    ],
    keywords: [
      'hallucination',
      'paranoia',
      'dramatic irony',
      'aside',
      'staging',
      'public persona',
      'political authority',
      'guilt',
      'nemesis',
      'foil',
    ],
    starterActivity: {
      title: 'What Does the Ghost Represent?',
      duration: '8 minutes',
      instructions:
        'Display an image of a formal banquet table and the stage direction describing Banquo\'s ghost entering and sitting in Macbeth\'s place. Pose the question: "Is the ghost (a) supernatural — a real spirit; (b) a hallucination caused by guilt; (c) a dramatic device that does not need a definitive explanation?" Students discuss in pairs and vote. After the vote, ask: does it matter which interpretation is correct? What does each reading say about the nature of Macbeth\'s guilt? Introduce the idea that Shakespeare deliberately keeps the ghost ambiguous and ask students to consider what theatrical choices a director could make to emphasise each interpretation.',
      differentiation: {
        support: 'Provide three bullet points summarising evidence for each interpretation.',
        core: 'Students discuss and vote with one justification each.',
        stretch:
          'Students consider: would the scene be more or less dramatically effective if the audience could definitively see that the ghost is "real" (i.e., supernatural)? Why might ambiguity be more powerful?',
      },
      resources: ['Ghost stage direction slide', 'Banquet image', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Close Reading: The Banquet Scene',
        duration: '20 minutes',
        instructions:
          'Students receive Act 3 Scene 4 (from the ghost\'s first appearance to Macbeth\'s "I am in blood / Stepped in so far..."). Working in groups of three, they annotate for: (1) the contrast between Macbeth\'s public role as host and his private disintegration; (2) Lady Macbeth\'s attempts to manage the situation — her asides and excuses to the lords; (3) Macbeth\'s language when addressing the ghost — "Thou canst not say I did it: never shake / Thy gory locks at me"; (4) the lords\' confusion and its political implications. Teacher models: "The phrase \'Thou canst not say I did it\' is a direct address to the ghost — but it is also an unconscious confession to everyone in the room. The dramatic irony here is that Macbeth\'s attempt to confront his guilt in private inadvertently exposes it publicly." Students write a 4-5 sentence analysis of the scene\'s dramatic function.',
        differentiation: {
          support:
            'Provide four focus quotations with guided questions: "What does this line reveal? Who hears it? What is the dramatic irony?"',
          core: 'Students annotate and write independently.',
          stretch:
            'Students trace how the scene reverses the power dynamic between Macbeth and Lady Macbeth established in Act 1: here she manages him, covers for him, and ultimately fails to maintain his composure. Write a paragraph on this reversal.',
        },
        resources: ['Act 3 Scene 4 extract', 'Annotation prompts', 'Focus quotations sheet'],
      },
      {
        title: 'The Political Consequences: Macbeth\'s Authority in Collapse',
        duration: '22 minutes',
        instructions:
          'Teacher draws attention to what the lords see during the Banquet scene: a king behaving erratically, addressing an empty chair, and being managed by his wife. Students consider: what political damage does this scene do to Macbeth\'s reign? They read the scene\'s closing lines — Macbeth\'s isolation after the lords leave and his decision to return to the witches — and complete a two-part task: (1) Write three bullet points summarising what the Banquet scene reveals about Macbeth\'s state of mind; (2) Write one analytical paragraph arguing that the Banquet scene is the moment at which Macbeth\'s downfall becomes inevitable. Share paragraphs; class identifies the strongest structural argument and discusses what makes it effective.',
        differentiation: {
          support:
            'Provide sentence starters: "The Banquet scene is the turning point because... / Macbeth\'s behaviour reveals that... / Lady Macbeth\'s role in this scene shows that..."',
          core: 'Students complete both tasks independently.',
          stretch:
            'Students consider the absence of Macduff from the Banquet (referenced by Macbeth: "I hear it by the way, but I will send") and what this absence foreshadows. How does Shakespeare use this small detail to anticipate Act 4?',
        },
        resources: ['Act 3 Scene 4 closing lines extract', 'Two-part task sheet', 'PETAL frame'],
      },
    ],
    plenaryActivity: {
      title: 'Turning Point Justification',
      duration: '7 minutes',
      instructions:
        'Students are given three candidate "turning points" in the play: (1) the murder of Duncan (Act 2); (2) the Banquet scene (Act 3); (3) Macbeth\'s return to the witches (Act 4). In pairs, they must agree on which single moment best represents the point of no return for Macbeth and justify their choice with two pieces of evidence. Pairs share; class votes on the most compelling argument. Teacher notes that exam questions may ask about turning points or key moments: the ability to argue for a specific structural point with evidence is a higher-order skill.',
      differentiation: {
        support: 'Provide two quotations for each turning point to help students choose.',
        core: 'Students identify their own evidence.',
        stretch: 'Students write a thesis sentence that acknowledges the difficulty of identifying a single turning point: "Although... could be considered the turning point, it is the Banquet scene that..."',
      },
    },
    homework:
      'Write a full analytical paragraph (8-10 sentences) responding to: "How does Shakespeare use the Banquet scene to show the consequences of Macbeth\'s crimes?" Focus on Macbeth\'s behaviour when he sees the ghost, the dramatic irony created for the audience, and what the scene reveals about the relationship between public power and private guilt.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare use Banquo\'s ghost in the Banquet scene to explore the theme of guilt? What is the dramatic effect of keeping the ghost\'s nature ambiguous?',
        lines: 6,
        modelAnswer:
          'Banquo\'s ghost functions as a theatrical embodiment of Macbeth\'s guilt: it appears at the moment of his apparent triumph (hosting a royal banquet) and occupies the place of honour (the head of the table, Macbeth\'s own seat). Whether the ghost is supernatural or a hallucination is deliberately left ambiguous — the audience sees it, but the lords do not, which means we share Macbeth\'s perspective without being told what to believe. This ambiguity is dramatically powerful: if the ghost is real, it confirms supernatural retribution; if it is imagined, it confirms that Macbeth\'s mind is breaking. Either way, the guilt is real and inescapable. Macbeth\'s address to the ghost — "Thou canst not say I did it" — is an unconscious public confession that reveals the murder through his attempt to deny it.',
        marks: 6,
      },
      {
        question:
          'How does Lady Macbeth\'s role in the Banquet scene contrast with her role in Act 1? What does this contrast reveal?',
        lines: 5,
        modelAnswer:
          'In Act 1, Lady Macbeth drives the action: she plans the murder, steels Macbeth\'s resolve, and manages the logistics. In the Banquet scene, her role is defensive and reactive — she covers for Macbeth\'s erratic behaviour with excuses ("My lord is often thus, / And hath been from his youth"), and she repeatedly tries to recall him to composure. The power dynamic has reversed: now she manages him, but she is no longer directing events. This reversal is dramatically significant because it shows that the partnership that enabled the murder has broken down. Macbeth is spiralling beyond Lady Macbeth\'s control, foreshadowing her complete collapse in Act 5.',
        marks: 5,
      },
      {
        question:
          'What are the political consequences of Macbeth\'s behaviour at the banquet for his reign?',
        lines: 5,
        modelAnswer:
          'Macbeth\'s behaviour at the banquet — addressing an empty chair, raving, and being managed by his wife — destroys the image of strong, legitimate kingship he needs to maintain authority. His lords witness a king who appears to be losing his mind in public; the scene ends with them leaving in confusion. This public breakdown accelerates the conspiracy against him: Macduff is already absent (Macbeth notes this), and the lords\' loyalty will be impossible to retain after such a display. Shakespeare uses the scene to show that tyranny is ultimately self-undermining — by murdering Banquo, Macbeth triggers the guilt that publicly exposes his instability.',
        marks: 5,
      },
      {
        question:
          'Why can the Banquet scene be described as the dramatic turning point of the play? Use evidence to support your argument.',
        lines: 6,
        modelAnswer:
          'The Banquet scene can be described as the play\'s dramatic turning point because it marks the moment at which Macbeth\'s political and psychological collapse becomes publicly visible and therefore irreversible. Before this scene, Macbeth\'s crimes are private and concealed; after it, the court has witnessed his instability and his reign is visibly collapsing. The scene also marks Macbeth\'s decisive turn toward the witches: its final lines show him determined to seek them out again, abandoning the moral caution that even his tyrannical self had occasionally maintained. His words "I am in blood / Stepped in so far, that, should I wade no more, / Returning were as tedious as go o\'er" confirm he has surrendered to an inevitable course of escalating violence. After this, his downfall is not merely likely — it is inevitable.',
        marks: 6,
      },
      {
        question:
          'How does Shakespeare create dramatic irony in the Banquet scene for the audience?',
        lines: 5,
        modelAnswer:
          'Dramatic irony in the Banquet scene operates on several levels. The lords do not know that Banquo has been murdered at Macbeth\'s command, so they cannot understand why their king is behaving erratically. The audience, however, knows the full truth: the ghost in the chair is the man Macbeth had killed that evening. When Macbeth says "Thou canst not say I did it," the audience recognises this as a denial that is simultaneously a confession — and the lords present are completely unaware of its significance. Lady Macbeth\'s dismissal of Macbeth\'s behaviour as an "infirmity" he has suffered since youth is another ironic layer: both she and the audience know it is nothing of the kind.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The ambiguity of the ghost — real or imagined — is genuinely unresolved in the text and should be treated as such in discussion. Avoid steering students toward one interpretation: the exam rewards the ability to hold both possibilities and argue for the dramatic significance of the ambiguity itself.',
      'The political dimension of the Banquet scene is often underplayed. Encouraging students to think about what the lords see and what political conclusions they draw makes the scene\'s function in the play\'s narrative much clearer.',
      'The structural reversal of the Macbeth-Lady Macbeth dynamic is a recurring theme across lessons 3, 5, 6, and 7. Students who track this consistently across lessons will be well equipped to write about Shakespeare\'s structural planning.',
      'If time allows, a brief performance exercise — three students role-playing Macbeth, Lady Macbeth, and a Lord during the ghost\'s first appearance — makes the dramatic tension of the scene concrete and memorable.',
    ],
    targetedSkills: [
      'AO2 — Dramatic tension: use of staging, dramatic irony, and the supernatural',
      'AO2 — Structural analysis: the Banquet scene as turning point',
      'Character analysis: the collapse of Macbeth\'s public persona',
      'Understanding of how guilt is dramatised through hallucination',
      'Writing about theatrical effect and audience response',
    ],
  },

  // ── Lesson 7: Lady Macbeth\'s Downfall — Sleepwalking and Guilt ───────────
  {
    id: 'y11mac-07',
    title: "Lady Macbeth's Downfall: Sleepwalking and Guilt",
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Analyse how Shakespeare presents Lady Macbeth\'s psychological collapse in the sleepwalking scene (Act 5 Scene 1)',
      'Explore the dramatic irony created by contrasting the sleepwalking scene with Lady Macbeth\'s behaviour in Act 1 and Act 2',
      'Examine the dramatic function of prose versus verse in the sleepwalking scene',
      'Consider the extent to which Lady Macbeth\'s fate generates sympathy or functions as moral retribution',
    ],
    successCriteria: [
      'I can analyse the sleepwalking scene\'s language and explain what it reveals about Lady Macbeth\'s psychological state',
      'I can identify at least three examples of dramatic irony created by the contrast with earlier scenes',
      'I can explain the significance of Shakespeare\'s choice to have Lady Macbeth speak in prose rather than verse',
      'I can write an analytical paragraph that traces Lady Macbeth\'s character arc from Act 1 to Act 5',
    ],
    keywords: [
      'dramatic irony',
      'prose',
      'verse',
      'psychological collapse',
      'guilt',
      'catharsis',
      'retribution',
      'fragmentation',
      'subconscious',
      'tragic arc',
    ],
    starterActivity: {
      title: 'Then and Now: Lady Macbeth\'s Transformation',
      duration: '8 minutes',
      instructions:
        'Display two quotations side by side: (A) Act 1 Scene 5: "Come, you spirits / That tend on mortal thoughts, unsex me here"; (B) Act 5 Scene 1: "Out, damned spot! out, I say!... Here\'s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand." Ask students: what has changed between these two moments? What does Lady Macbeth want in each? What does she fear? In pairs, students generate as many contrasts as they can in three minutes. Class shares — teacher records contrasts on the board. Introduce the term "dramatic irony" for the contrast: the audience knew in Act 1 that Lady Macbeth\'s attempt to suppress guilt would ultimately fail.',
      differentiation: {
        support: 'Provide a sentence frame: "In Act 1 Lady Macbeth... but in Act 5 she... This shows that..."',
        core: 'Students generate contrasts independently.',
        stretch:
          'Students consider: does the dramatic irony of Lady Macbeth\'s collapse generate sympathy, satisfaction, or both? What does their emotional response reveal about Shakespeare\'s moral design?',
      },
      resources: ['Two-quotation comparison slide', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Close Reading: The Sleepwalking Scene',
        duration: '20 minutes',
        instructions:
          'Students receive Act 5 Scene 1 in full (the Doctor, the Gentlewoman, and Lady Macbeth\'s sleepwalking). Working individually, students annotate for: (1) what Lady Macbeth reveals in her sleep — references to the murder of Duncan, Banquo, and Lady Macduff; (2) the fragmented, incoherent quality of her speech — incomplete sentences, repetition, non sequiturs; (3) the hand-washing action and the blood imagery; (4) the role of the Doctor and Gentlewoman as observers, creating dramatic irony for the audience. Teacher models one annotation: "The phrase \'all the perfumes of Arabia will not sweeten this little hand\' directly echoes and inverts Lady Macbeth\'s Act 2 dismissal: \'A little water clears us of this deed.\' The hyperbole of \'all the perfumes of Arabia\' shows that the guilt she claimed was negligible has become overwhelming — her own earlier words have proved catastrophically wrong." Pairs compare annotations.',
        differentiation: {
          support:
            'Provide four pre-selected quotations from the scene with the question: "What earlier moment does each line echo, and why is this ironic?"',
          core: 'Students annotate the full scene independently.',
          stretch:
            'Students note that Lady Macbeth reveals details of multiple crimes — not just Duncan\'s murder — during the scene. What does this reveal about the accumulation of guilt? Write a brief analysis of what is revealed and what Shakespeare achieves by including these details.',
        },
        resources: ['Act 5 Scene 1 full extract', 'Annotation guide', 'Act 2 Scene 2 comparison extract'],
      },
      {
        title: 'Prose, Verse, and Psychological Fragmentation',
        duration: '22 minutes',
        instructions:
          'Teacher explains: throughout Macbeth, high-status characters and moments of ordered thought are associated with verse (iambic pentameter); prose is associated with lower-status characters, madness, or disorder. Lady Macbeth speaks in prose during the sleepwalking scene. Students consider: what does this choice tell us about her mental state? They compare a brief section of Lady Macbeth\'s verse in Act 1 ("Come, you spirits...") with her prose in Act 5 ("Out, damned spot!"). Students write a comparative paragraph: how does the shift from verse to prose dramatise Lady Macbeth\'s psychological collapse? Then students address the question of sympathy: write one paragraph arguing that Lady Macbeth\'s fate generates audience sympathy, and one sentence conceding the counterargument (that her fate is deserved retribution). Peer assess using the success criteria.',
        differentiation: {
          support:
            'Provide a pre-written explanation of verse versus prose in the play and two quotations from each scene to compare.',
          core: 'Students write the comparative paragraph and sympathy paragraph independently.',
          stretch:
            'Students consider: is the sleepwalking scene Lady Macbeth\'s most powerful moment in the play? Could it be argued that her collapse, paradoxically, reveals a deeper humanity than her Act 1 ambition? Write a sustained paragraph arguing this view.',
        },
        resources: ['Verse/prose explanation handout', 'Act 1 and Act 5 comparison extract', 'Peer assessment checklist'],
      },
    ],
    plenaryActivity: {
      title: 'Exit Ticket: Lady Macbeth\'s Final Verdict',
      duration: '7 minutes',
      instructions:
        'Each student writes two sentences on a card: Sentence 1 — "Lady Macbeth\'s sleepwalking scene generates sympathy because..."; Sentence 2 — "However, it can also be read as deserved retribution because..." Teacher collects cards and reads out three or four without attribution. Class discusses which sentence in each pair is more persuasive and why. Teacher notes that the best exam answers on Lady Macbeth hold both readings in tension and use evidence to support both, demonstrating sophisticated critical thinking.',
      differentiation: {
        support: 'Provide the sentence frames with two quotations students can incorporate.',
        core: 'Students write both sentences from their own analysis.',
        stretch: 'Students write a third sentence: "Ultimately, Shakespeare presents Lady Macbeth\'s collapse as... because this achieves the dramatic purpose of..."',
      },
    },
    homework:
      'Learn this quotation by heart: "Here\'s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand. Oh, oh, oh!" Write a paragraph analysing: (1) the imagery of smell and blood; (2) the significance of "little hand" — why does Lady Macbeth infantilise herself?; (3) the dramatic irony of this line in relation to Act 2 Scene 2; (4) what the exclamation "Oh, oh, oh!" reveals that language cannot express.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare use dramatic irony in the sleepwalking scene to create a powerful theatrical effect?',
        lines: 6,
        modelAnswer:
          'The sleepwalking scene is saturated with dramatic irony because Lady Macbeth\'s fragmented confessions reveal to the audience (though not to the Doctor and Gentlewoman) the crimes she and Macbeth have committed. Her cry "Out, damned spot!" and her references to blood that will not wash away directly echo and invert her dismissal in Act 2: "A little water clears us of this deed." The audience, knowing what she said then, recognises the irony: the guilt she treated as trivial has become consuming and inescapable. Her question "Will these hands ne\'er be clean?" shows that the very image of uncleansable blood that Macbeth feared in Act 2 has now become Lady Macbeth\'s obsession. The Doctor\'s horrified response — "This disease is beyond my practice" — signals to the audience that what they are witnessing is moral and spiritual disintegration, not a physical condition.',
        marks: 6,
      },
      {
        question:
          'What is the significance of Shakespeare\'s choice to have Lady Macbeth speak in prose during the sleepwalking scene?',
        lines: 5,
        modelAnswer:
          'Shakespeare uses prose — rather than the verse that marks high-status characters and rational thought throughout the play — to signal Lady Macbeth\'s psychological disintegration. Her Act 1 soliloquies are in controlled, powerful verse: "Come, you spirits / That tend on mortal thoughts." The shift to fragmented prose in Act 5 — "Out, damned spot! out, I say!" — formally enacts her collapse. The prose is characterised by short, disjointed utterances, unfinished sentences, and repetition, which mimics the incoherence of a mind unravelling. Shakespeare uses the form of the speech — not just its content — as a dramatic signal of how far Lady Macbeth has fallen from her Act 1 authority.',
        marks: 5,
      },
      {
        question:
          'Compare Lady Macbeth\'s attitude toward guilt in Act 2 Scene 2 and Act 5 Scene 1. What does this change reveal about Shakespeare\'s dramatic design?',
        lines: 6,
        modelAnswer:
          'In Act 2 Scene 2, Lady Macbeth dismisses guilt with confident practicality: "A little water clears us of this deed." She appears immune to remorse and takes the daggers back to incriminate the guards without hesitation. In Act 5 Scene 1, she is consumed by guilt she cannot suppress or control: "Here\'s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand." The contrast is stark: "a little water" has become "all the perfumes of Arabia" — neither is sufficient. This reversal reveals Shakespeare\'s dramatic design: Lady Macbeth\'s apparent immunity to guilt in Act 2 is not genuine but suppressed, and the sleepwalking scene shows the return of everything she tried to eliminate. The collapse of her confident dismissal into fragmented obsession is deeply ironic and shows the inevitability of psychological reckoning.',
        marks: 6,
      },
      {
        question:
          'To what extent does the sleepwalking scene generate sympathy for Lady Macbeth?',
        lines: 5,
        modelAnswer:
          'The sleepwalking scene generates considerable sympathy because it shows Lady Macbeth in a state of complete vulnerability — alone, unaware of being observed, tormented by guilt she cannot control. Her suffering appears genuine and overwhelming, and her question "Will these hands ne\'er be clean?" has a plaintive quality that recalls Macbeth\'s own anguish in Act 2. However, a fully sympathetic reading is complicated by the knowledge of what she did: she planned and orchestrated a king\'s murder, suppressed her own husband\'s moral instincts, and dismissed his remorse as weakness. Shakespeare allows both sympathy and moral judgement to coexist, which is characteristic of his most complex characterisation. Most audiences feel a mixture of pity and a sense of inevitable retribution.',
        marks: 5,
      },
      {
        question:
          'How does the sleepwalking scene contribute to the play\'s overall tragic structure?',
        lines: 5,
        modelAnswer:
          'The sleepwalking scene fulfils several functions in the play\'s tragic structure. It provides the cathartic moment for Lady Macbeth\'s character arc: the guilt she suppressed in Acts 1 and 2 returns to destroy her in Act 5, confirming that moral consequences cannot be escaped. Her imminent death (referenced in Act 5 Scene 5) removes Macbeth\'s last human connection, completing his isolation. The scene also serves as a structural counterpoint to the dagger soliloquy and the Act 2 guilt scenes: where Macbeth\'s guilt was dramatic and immediate, Lady Macbeth\'s manifests slowly and privately, making it in some ways more tragic. The Doctor\'s helplessness — "More needs she the divine than the physician" — confirms that the disease is spiritual, reinforcing the play\'s moral framework.',
        marks: 5,
      },
    ],
    teacherNotes: [
      'The verse/prose distinction is a key AO2 point that students rarely make independently. Establishing it clearly here and reinforcing it in the exam preparation lesson pays significant dividends.',
      'The connection between Act 2 Scene 2 ("A little water clears us of this deed") and Act 5 Scene 1 ("all the perfumes of Arabia will not sweeten this little hand") is one of the play\'s most elegant structural ironies. If students can articulate this in an exam essay, it demonstrates strong structural awareness.',
      'Lady Macbeth\'s suicide is referenced in Act 5 Scene 5 but not dramatised. This can generate discussion about why Shakespeare does not show it and what this choice achieves. Some students find this a useful entry point into thinking about what Shakespeare chose to show and hide throughout the play.',
      'Be sensitive to the fact that the sleepwalking scene and Lady Macbeth\'s suicide may touch on mental health and self-harm. Handle with appropriate care and ensure the pastoral support context is considered.',
    ],
    targetedSkills: [
      'AO2 — Form and structure: prose versus verse as a dramatic device',
      'AO2 — Dramatic irony: contrast between Act 2 and Act 5',
      'Character analysis: Lady Macbeth\'s tragic arc',
      'Understanding of guilt and psychological collapse as dramatic themes',
      'Writing comparatively across different acts of the play',
    ],
  },

  // ── Lesson 8: Themes — Ambition, Power, Appearance vs Reality, Supernatural
  {
    id: 'y11mac-08',
    title: 'Themes: Ambition, Power, Appearance vs Reality, and the Supernatural',
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Identify and explore the four major themes of Macbeth — ambition, power, appearance vs reality, and the supernatural — with textual evidence',
      'Understand how themes are interconnected across the play and how Shakespeare develops them structurally',
      'Practise writing thematic analytical paragraphs that use evidence from multiple points in the play',
      'Build a thematic revision bank of quotations for each major theme',
    ],
    successCriteria: [
      'I can identify at least three pieces of evidence for each of the four major themes',
      'I can explain how at least two of the themes are connected to each other in the play',
      'I can write a thematic paragraph that uses evidence from more than one part of the play',
      'I can articulate what Shakespeare appears to be saying (his "message") about each theme',
    ],
    keywords: [
      'ambition',
      'power',
      'corruption',
      'deception',
      'supernatural',
      'appearance',
      'reality',
      'tyranny',
      'temptation',
      'hubris',
    ],
    starterActivity: {
      title: 'Thematic Web',
      duration: '8 minutes',
      instructions:
        'Draw a large web on the board with "Macbeth" at the centre and four branches: Ambition, Power, Appearance vs Reality, Supernatural. In pairs, students generate one quotation, one character, and one key moment for each theme — racing to populate their own version of the web in three minutes. Pairs share their best suggestion for each branch. Teacher adds to the class web on the board, noting overlapping evidence (e.g., the witches are relevant to both Supernatural and Appearance vs Reality). Discuss: do any themes feel more central than others, and why?',
      differentiation: {
        support: 'Provide eight quotation cards for students to sort into the correct theme branches.',
        core: 'Students generate their own examples for each theme.',
        stretch: 'Students draw connecting lines between themes and write a one-sentence explanation of each connection.',
      },
      resources: ['Thematic web template', 'Quotation cards (for support)', 'Mini-whiteboards'],
    },
    mainActivities: [
      {
        title: 'Theme Deep Dive: Ambition and Power',
        duration: '20 minutes',
        instructions:
          'Students work in pairs on one of two themes — Ambition or Power (each pair takes one). They complete a three-column grid: Evidence (quotation) | Analysis (language/technique) | Shakespeare\'s Message (what the play suggests about this theme). For Ambition, key quotations include: "Vaulting ambition, which o\'erleaps itself"; "I have no spur / To prick the sides of my intent"; "Stars, hide your fires." For Power, key quotations include: "I dare do all that may become a man"; "Thou shalt be king hereafter"; "To be thus is nothing / But to be safely thus." After individual pair work, Ambition pairs share with Power pairs and teach each other their findings. Teacher circulates and provides feedback on the quality of the analytical column.',
        differentiation: {
          support:
            'Provide the quotations pre-selected and the analysis column partially completed; students write the "Shakespeare\'s Message" column.',
          core: 'Students complete all three columns with teacher support available.',
          stretch:
            'Students add a fourth column: "How does this quotation connect to another theme?" and complete it for at least two of their quotations.',
        },
        resources: ['Three-column grid', 'Quotation banks for Ambition and Power', 'Peer-teaching instruction card'],
      },
      {
        title: 'Appearance vs Reality and the Supernatural: Thematic Writing',
        duration: '22 minutes',
        instructions:
          'Teacher models a thematic paragraph on Appearance vs Reality using the following structure: Topic sentence (what Shakespeare suggests about the theme) → Evidence from early in the play → Analysis of technique → Evidence from later in the play → Analysis → Link to context or dramatic purpose. Model example: "Shakespeare presents deception as central to the moral collapse of Macbeth\'s world. The witches\' paradox \'Fair is foul, and foul is fair\' establishes from the opening that appearances in this play cannot be trusted... [etc.]." Students then write their own thematic paragraph on either Appearance vs Reality or the Supernatural, using evidence from at least two different points in the play. Swap and peer-assess using the model paragraph structure as a checklist.',
        differentiation: {
          support:
            'Provide the paragraph frame with the topic sentence and evidence positions marked; students fill in quotations and analysis.',
          core: 'Students write the full paragraph independently using the modelled structure.',
          stretch:
            'Students write two linked paragraphs — one on Appearance vs Reality and one on the Supernatural — developing a sustained argument about how these two themes reinforce each other in the play.',
        },
        resources: ['Modelled thematic paragraph', 'Paragraph frame', 'Quotation bank for Appearance/Reality and Supernatural'],
      },
    ],
    plenaryActivity: {
      title: 'Thematic Revision Cards',
      duration: '7 minutes',
      instructions:
        'Each student creates four revision card-sized summaries (one per theme) with: (1) one-sentence statement of what Shakespeare suggests; (2) two supporting quotations; (3) one connection to another theme. Students compare cards with a partner and add anything they have missed. Teacher collects one card from each student and uses them to assess which themes need more work in the revision lesson (Lesson 10). Students photograph their cards to use as revision material.',
      differentiation: {
        support: 'Provide a card template with prompts already printed.',
        core: 'Students create cards independently.',
        stretch: 'Students add a fifth card summarising how all four themes are connected and what this reveals about Shakespeare\'s overall message in the play.',
      },
    },
    homework:
      'Create a thematic quotation bank: for each of the four themes (Ambition, Power, Appearance vs Reality, Supernatural), find and write out three quotations not discussed in class. For each quotation, write one sentence of analysis. Then write one sentence explaining how that quotation could be used to support an exam essay on its theme.',
    worksheetQuestions: [
      {
        question:
          'How does Shakespeare present the theme of ambition in Macbeth? Use evidence from at least two different points in the play.',
        lines: 6,
        modelAnswer:
          'Shakespeare presents ambition as a destructive force that corrupts moral judgement and leads inevitably to ruin. In Act 1, Macbeth himself identifies "vaulting ambition, which o\'erleaps itself / And falls on th\' other side" — the metaphor of a horse jumping too high and falling presents ambition as inherently self-defeating. At this early stage, Macbeth still has the moral awareness to recognise the danger of his own ambition, even if he cannot resist it. By Act 3, however, this self-awareness has disappeared: his ambition has transformed into paranoid compulsion, driving him to murder Banquo despite the practical and moral costs. Shakespeare\'s message is not simply that ambition is wrong, but that unchecked ambition — ambition without moral restraint — is catastrophic both for the individual and the state.',
        marks: 6,
      },
      {
        question:
          'How is the theme of "appearance versus reality" developed throughout Macbeth? Give at least two specific examples.',
        lines: 5,
        modelAnswer:
          'The theme of appearance versus reality is introduced in the very first line of the play — "Fair is foul, and foul is fair" — establishing that the play\'s world is one in which surface and substance cannot be trusted. Lady Macbeth develops this theme when she instructs Macbeth to "look like the innocent flower, / But be the serpent under\'t" — a direct instruction in deception. The witches embody appearance versus reality through their prophecies: each seems to promise security but conceals a catastrophic truth (the Birnam Wood prophecy appears to make Macbeth invincible but is literally fulfilled in a way that destroys him). Shakespeare uses this theme to explore how evil operates through deception rather than open confrontation.',
        marks: 5,
      },
      {
        question:
          'What role does the supernatural play in Macbeth? Is it a force of evil, a dramatic device, or both?',
        lines: 5,
        modelAnswer:
          'The supernatural in Macbeth functions simultaneously as a dramatic device and a moral force. As a dramatic device, the witches create immediate tension, propel the plot, and allow Shakespeare to explore ideas about fate and free will. As a moral force, they represent the active presence of evil in the world — temptation that appeals to pre-existing desires rather than creating them from nothing. The appearance of Banquo\'s ghost and the dagger hallucination extend the supernatural into Macbeth\'s own mind, suggesting that guilt itself takes on a supernatural quality. For a Jacobean audience, who believed in witchcraft and diabolical temptation, the supernatural dimension would have been simultaneously terrifying and morally legible: Macbeth is not merely ambitious, he has been touched by the devil\'s instruments.',
        marks: 5,
      },
      {
        question:
          'How are the themes of ambition and power connected in Macbeth? Develop your answer with textual evidence.',
        lines: 6,
        modelAnswer:
          'Ambition and power are deeply intertwined in Macbeth: ambition is the force that drives Macbeth toward power, but power, once gained, immediately generates further anxiety rather than satisfaction. After becoming king, Macbeth finds that "to be thus is nothing / But to be safely thus" — power without security is meaningless. This leads directly to the murder of Banquo, showing that power acquired through ambition demands further violence to maintain itself. Shakespeare suggests that the pursuit of power through illegitimate means creates a paradox: the more power Macbeth seizes, the more insecure he becomes. The theme of power is also explored through the contrast between Macbeth\'s tyrannical rule and Duncan\'s virtuous kingship, suggesting that legitimate power — sanctioned by God and the natural order — is stable, while usurped power is inherently unstable.',
        marks: 6,
      },
      {
        question:
          'Choose one theme from Macbeth and explain what Shakespeare appears to be saying about it through the course of the whole play.',
        lines: 6,
        modelAnswer:
          'Through the theme of guilt, Shakespeare argues that moral crimes cannot be suppressed without ultimately destroying the person who commits them. Macbeth initially responds to guilt with anguish — "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" — but as the play progresses he attempts to numb himself to it through further violence. Lady Macbeth, who dismissed guilt as trivial in Act 2, is consumed by it in Act 5. Shakespeare\'s message is clear: guilt is not a temporary emotional response but a permanent mark on the soul that will eventually demand expression, regardless of the individual\'s efforts to suppress it. The play suggests that this is not merely a psychological truth but a moral and spiritual one — the universe of the play does not allow crime to go unpunished internally, even when external justice is temporarily thwarted.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The thematic approach in this lesson is explicitly designed as a bridge between the close-reading work of earlier lessons and the essay-writing skills needed for the exam. Encourage students to see quotations they have analysed in context as "thematic evidence" that can be deployed across different essay questions.',
      'The interconnection between themes is important for higher-level responses: students who can explain how ambition leads to the corruption of power, which requires deception (appearance vs reality), which in turn draws on the supernatural, demonstrate the kind of synthesis the top band rewards.',
      'The revision card activity at the end of this lesson is a practical artefact students can use throughout the rest of the course. Consider photographing the class web created in the starter and sharing it digitally.',
      'Students often confuse "theme" with "topic." Theme is what Shakespeare says about a subject, not the subject itself. Correcting this early — "The theme is not just \'ambition\'; the theme is what Shakespeare suggests about ambition" — improves the quality of essay thesis sentences.',
    ],
    targetedSkills: [
      'AO1 — Sustained argument about theme with evidence from across the play',
      'AO2 — Thematic analysis using language and technique',
      'AO3 — Contextual understanding of Jacobean beliefs shaping thematic content',
      'Building a revision quotation bank organised by theme',
      'Writing thematic paragraphs using evidence from multiple points in the play',
    ],
  },

  // ── Lesson 9: Dramatic Techniques — Soliloquies, Imagery, Structure ───────
  {
    id: 'y11mac-09',
    title: 'Dramatic Techniques: Soliloquies, Imagery, and Structure',
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Identify and analyse the key dramatic techniques Shakespeare uses in Macbeth: soliloquy, imagery, prose/verse, structure',
      'Understand how soliloquies function as a dramatic device for character revelation and audience engagement',
      'Trace the key image patterns in the play — blood, darkness, nature, clothing — and explain their cumulative effect',
      'Practise writing AO2-focused analytical paragraphs that comment on technique and its effect',
    ],
    successCriteria: [
      'I can explain the function of soliloquy as a dramatic device and analyse at least two soliloquies in the play',
      'I can identify at least three sustained image patterns in Macbeth and explain their cumulative dramatic significance',
      'I can explain what Shakespeare achieves through the structural choices of the play — including the five-act structure and the use of comedy in Act 2',
      'I can write an AO2-focused paragraph that names a technique, provides evidence, and analyses the effect on the audience',
    ],
    keywords: [
      'soliloquy',
      'imagery',
      'motif',
      'iambic pentameter',
      'five-act structure',
      'dramatic irony',
      'juxtaposition',
      'pathetic fallacy',
      'aside',
      'blank verse',
    ],
    starterActivity: {
      title: 'Technique Auction',
      duration: '8 minutes',
      instructions:
        'Give each student (or pair) a budget of ten points to "bid" on the following dramatic techniques: soliloquy, imagery, dramatic irony, prose versus verse, five-act structure, aside, pathetic fallacy, juxtaposition. Students must decide which techniques are most important for understanding Macbeth and allocate their points accordingly. After bidding, students explain their top choices. Class compiles the results and discusses: is any single technique more important than the others, or do they work together? Teacher introduces the lesson aim: understanding how techniques interact to create meaning.',
      differentiation: {
        support: 'Provide a brief one-sentence definition of each technique before the auction.',
        core: 'Students bid and justify independently.',
        stretch:
          'Students write a sentence explaining how two of their chosen techniques work together in a specific scene of Macbeth.',
      },
      resources: ['Technique auction slide', 'Student budget cards', 'Definitions sheet'],
    },
    mainActivities: [
      {
        title: 'Soliloquies: Windows into the Mind',
        duration: '20 minutes',
        instructions:
          'Teacher opens with a brief explanation of the soliloquy\'s dramatic function: it creates a private channel between a character\'s mind and the audience, generating intimacy, dramatic irony, and psychological depth. Students receive four soliloquy extracts: (1) Act 1 Scene 7 ("If it were done..."); (2) Act 2 Scene 1 (dagger soliloquy); (3) Act 3 Scene 1 ("To be thus is nothing..."); (4) Act 5 Scene 5 ("Tomorrow, and tomorrow, and tomorrow"). For each, students write: the dominant emotion or mental state; one language technique; the effect on the audience. Then students answer: how does the progression of these four soliloquies track Macbeth\'s deterioration? Write a 4-5 sentence response using comparative language ("In the first soliloquy... but by Act 5..."). Share and discuss.',
        differentiation: {
          support:
            'Provide the four extracts with glossed vocabulary and two pre-completed rows in the analysis table for students to build on.',
          core: 'Students complete the table and the comparative response independently.',
          stretch:
            'Students consider: which soliloquy is most dramatically effective and why? Write a sustained paragraph arguing for one specific soliloquy, conceding the merits of another.',
        },
        resources: ['Four soliloquy extract sheet', 'Analysis table', 'Comparative language prompts'],
      },
      {
        title: 'Image Patterns: Blood, Darkness, and Nature',
        duration: '22 minutes',
        instructions:
          'Teacher explains that Shakespeare uses sustained image patterns (motifs) to create coherent dramatic meaning across the play. Students work in groups of three, each taking one image pattern: (A) Blood — from "brave Macbeth... unseamed him from the nave to the chops" to "Out, damned spot!"; (B) Darkness — from "Stars, hide your fires" to "Come, thick night, / And pall thee in the dunnest smoke of hell"; (C) Nature disrupted — from the unnatural darkness after Duncan\'s murder to the "tomorrow, and tomorrow" nihilism. Groups collect at least four quotations showing their motif developing across the play, note where each appears in the five-act structure, and prepare a 90-second explanation for the class. After sharing, class writes one paragraph tracing any one motif across the play, demonstrating structural awareness.',
        differentiation: {
          support:
            'Provide six quotations per group (rather than asking students to find their own) and a structured explanation frame.',
          core: 'Students find their own quotations using the play text and write the group explanation.',
          stretch:
            'Students identify a fourth image pattern not listed (e.g., clothing: "borrowed robes," "a giant\'s robe upon a dwarfish thief") and prepare an independent analysis of how it develops across the play.',
        },
        resources: ['Play text or extract pack', 'Motif tracking grid', 'Structural explanation frame'],
      },
    ],
    plenaryActivity: {
      title: 'Technique Showcase: Write the Best Sentence',
      duration: '7 minutes',
      instructions:
        'Challenge: who can write the single most effective AO2 analytical sentence about Macbeth? The sentence must name a technique, include a quotation, analyse the effect, and link to dramatic purpose. Students have three minutes to write. Volunteers read their sentences; class identifies the strongest element of each. Teacher models the gold standard: "Shakespeare\'s use of the blood motif — progressing from the heroic violence of Act 1 (\'unseamed him from the nave to the chops\') to Lady Macbeth\'s obsessive \'Out, damned spot!\' in Act 5 — tracks the corruption of violence from glory to guilt, showing that acts of bloodshed cannot be contained within their immediate context." Students revise their sentences based on feedback.',
      differentiation: {
        support: 'Provide the sentence frame: "[Technique] — seen in [quotation] — creates [effect] because [explanation]."',
        core: 'Students write independently.',
        stretch: 'Students write two connected sentences that develop the analysis further.',
      },
    },
    homework:
      'Create a dramatic techniques revision sheet with four sections: Soliloquy, Blood Imagery, Darkness Imagery, Structure. In each section, write: (1) a definition of the technique; (2) two examples from the play with quotations; (3) one sentence explaining the cumulative effect of the technique across the whole play. Use this sheet to prepare for the exam preparation lesson.',
    worksheetQuestions: [
      {
        question:
          'What is the dramatic function of soliloquy in Macbeth? Illustrate your answer with reference to at least two soliloquies.',
        lines: 6,
        modelAnswer:
          'Soliloquy allows the audience direct access to a character\'s private thoughts, creating a bond of intimacy and dramatic irony — we know more than any other character on stage. In Macbeth, soliloquies function primarily as windows into Macbeth\'s deteriorating moral and psychological state. The Act 1 Scene 7 soliloquy presents a mind still capable of moral reasoning: Macbeth lists the arguments against murder and identifies his own ambition as his weakness. By contrast, the Act 5 Scene 5 soliloquy ("Tomorrow, and tomorrow, and tomorrow") presents a mind emptied of hope and purpose — the poetry is still powerful, but it is the poetry of nihilism rather than conflict. The progression of soliloquies tracks Macbeth\'s arc from conflicted hero to tragic remnant, making soliloquy the play\'s primary vehicle for character revelation.',
        marks: 6,
      },
      {
        question:
          'How does Shakespeare use blood imagery as a sustained motif in Macbeth? Trace its development across the play.',
        lines: 6,
        modelAnswer:
          'Blood imagery in Macbeth begins as a marker of heroic military violence: the Sergeant describes Macbeth carving "his passage" through the enemy and "unseaming" his opponent from "the nave to the chops" — brutal but celebrated as courage. After the murder of Duncan, blood shifts in meaning: Macbeth\'s "this my hand will rather / The multitudinous seas incarnadine" transforms blood from a sign of heroism into a symbol of inescapable guilt. Lady Macbeth\'s Act 2 dismissal — "a little water clears us of this deed" — is directly inverted by her Act 5 obsession: "Out, damned spot!... Here\'s the smell of the blood still." By the end of the play, blood has become the symbol of moral corruption that cannot be washed away, however much water or perfume is applied. Shakespeare uses this image pattern to chart the play\'s central argument: violent acts carry permanent moral consequences.',
        marks: 6,
      },
      {
        question:
          'How does Shakespeare use juxtaposition as a dramatic technique in Macbeth? Give two examples from the play.',
        lines: 5,
        modelAnswer:
          'Juxtaposition — the deliberate placement of contrasting elements — is a key technique in Macbeth. The most structural juxtaposition is between the heroic Macbeth of Act 1 Scene 2 (celebrated by the King as "valiant cousin, worthy gentleman") and the paranoid tyrant of Act 4 (ordering the massacre of an innocent family). This contrast makes his deterioration all the more tragic. A second juxtaposition occurs within Act 2: the intense horror of the murder and Macbeth\'s guilt in Scene 2 is immediately followed by the comic Porter scene. This jarring tonal shift does not diminish the horror but amplifies it through contrast — the audience, still processing the murder, is forced into uncomfortable laughter before the full weight of what has happened reasserts itself.',
        marks: 5,
      },
      {
        question:
          'How does the five-act structure of Macbeth contribute to its dramatic power?',
        lines: 5,
        modelAnswer:
          'The five-act structure of Macbeth follows the classical tragic pattern: Act 1 establishes character and seeds the conflict; Act 2 presents the central crime and its immediate consequences; Act 3 shows Macbeth attempting to consolidate power and the first signs of collapse; Act 4 presents the fullest extent of his tyranny and the forces gathering against him; Act 5 brings the inevitable downfall and resolution. This structure creates a clear sense of dramatic inevitability — once the murder of Duncan is committed, the audience understands that the subsequent acts will chart a trajectory toward destruction. Shakespeare uses the five-act structure to reinforce the tragic theme: ambition leads to crime, crime demands escalation, and escalation ends in ruin.',
        marks: 5,
      },
      {
        question:
          'Analyse the language techniques in Macbeth\'s "Tomorrow, and tomorrow, and tomorrow" soliloquy (Act 5 Scene 5). What do they reveal about his state of mind?',
        lines: 6,
        modelAnswer:
          'The soliloquy opens with triple anaphora — "Tomorrow, and tomorrow, and tomorrow" — which creates a sense of numbing, grinding repetition, as if time itself has become meaningless. The phrase "creeps in this petty pace from day to day" uses personification and the word "petty" to suggest that Macbeth now views life as trivially insignificant. The extended theatrical metaphor — "Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage / And then is heard no more" — presents human existence as mere performance without substance or meaning. The nihilism is complete: "it is a tale / Told by an idiot, full of sound and fury, / Signifying nothing." The repeated use of words suggesting emptiness ("shadow," "nothing," "no more") shows a mind that has been stripped of ambition, purpose, and hope — Macbeth has arrived at a nihilistic despair that is paradoxically one of his most eloquent moments.',
        marks: 6,
      },
    ],
    teacherNotes: [
      'The technique auction starter is a useful diagnostic: students who cannot explain or justify their bids reveal gaps in their understanding of specific terms. Make a mental note of which techniques need reinforcement before the exam.',
      'The four-soliloquy progression activity is one of the most effective ways to help students understand Macbeth\'s arc as a whole. It rewards students who can hold the entire play in mind and should be used as revision material in Lesson 10.',
      'Blood, darkness, and nature as image patterns are the most commonly cited in exam essays. The clothing motif (borrowed robes) is less well-known but is genuinely interesting and provides a point of differentiation for higher-ability students.',
      'The "write the best AO2 sentence" challenge in the plenary works particularly well as a low-stakes competitive activity. Displaying the best examples on the board (anonymously or attributed, depending on class culture) creates a reference point for what excellent AO2 looks like.',
    ],
    targetedSkills: [
      'AO2 — Analysis of soliloquy as dramatic form',
      'AO2 — Tracing image motifs across the full structure of the play',
      'AO2 — Understanding of how dramatic techniques create audience effect',
      'Structural awareness: five-act tragic form',
      'Writing focused AO2 analytical sentences and paragraphs',
    ],
  },

  // ── Lesson 10: Exam Preparation ───────────────────────────────────────────
  {
    id: 'y11mac-10',
    title: 'Exam Preparation: Extract and Essay Questions',
    text: 'Macbeth',
    board: 'Edexcel IGCSE',
    yearGroup: 'Year 11',
    duration: '60 minutes',
    objectives: [
      'Understand the structure and assessment objectives of the Edexcel IGCSE English Literature Macbeth question',
      'Practise analysing an unseen extract in timed conditions and planning an essay response',
      'Apply knowledge of language, structure, context, and theme to a full-length exam response',
      'Develop exam technique: time management, thesis-led writing, and integration of quotation',
    ],
    successCriteria: [
      'I can decode an exam question and identify which assessment objectives it is targeting',
      'I can plan a timed essay response with a clear thesis and at least four evidenced paragraphs',
      'I can write an opening paragraph that establishes a clear argument rather than merely introducing the topic',
      'I can embed quotations and comment on language technique within a timed essay context',
    ],
    keywords: [
      'thesis',
      'assessment objectives',
      'extract question',
      'essay question',
      'argument',
      'evidence',
      'analysis',
      'context',
      'planning',
      'time management',
    ],
    starterActivity: {
      title: 'Exam Question Decoder',
      duration: '8 minutes',
      instructions:
        'Display three sample Macbeth exam questions on the board: (1) "Explore how Shakespeare presents the theme of ambition in the following extract and in the play as a whole."; (2) "How does Shakespeare present Lady Macbeth as a powerful figure in Act 1?"; (3) "Starting with this speech, explore how Shakespeare presents Macbeth\'s guilt throughout the play." Students work in pairs to decode each question: What is the key theme or character? What does "explore" mean in terms of writing style? What is the balance between extract and whole-play analysis? Does the question require contextual knowledge? After three minutes, class compares responses. Teacher clarifies the expectations for each question type and introduces the lesson structure.',
      differentiation: {
        support: 'Provide a decoder checklist: Key word | Character or theme? | AO1/AO2/AO3 focus | Whole play or extract?',
        core: 'Students decode the questions in pairs.',
        stretch:
          'Students draft a thesis sentence for each of the three questions without looking at any notes, then discuss which thesis is the strongest and why.',
      },
      resources: ['Three exam questions slide', 'Decoder checklist', 'AO summary card'],
    },
    mainActivities: [
      {
        title: 'Timed Extract Analysis: Planning and Writing',
        duration: '22 minutes',
        instructions:
          'Students receive an extract from Act 3 Scene 4 (the Banquet scene, from Macbeth\'s first sight of the ghost to his "I am in blood / Stepped in so far" speech) and the question: "Explore how Shakespeare presents Macbeth\'s guilt in the following extract and in the play as a whole." Students follow a structured process: (1) Read and annotate the extract — 3 minutes; (2) Plan: write a thesis and four paragraph headings — 3 minutes; (3) Write: an opening paragraph establishing the thesis and one full analytical paragraph on the extract — 12 minutes; (4) Self-assess against the success criteria — 4 minutes. Teacher circulates and gives verbal feedback on thesis quality and quotation embedding. After writing, two students share opening paragraphs; class identifies what makes a strong thesis.',
        differentiation: {
          support:
            'Provide a planning frame: Thesis (complete this sentence: "Shakespeare presents guilt as...") / Paragraph 1 — Extract: / Paragraph 2 — Act 1 or 2: / Paragraph 3 — Act 5:',
          core: 'Students plan and write independently.',
          stretch:
            'Students write both the opening paragraph and one full analytical paragraph on the extract within the time, aiming to include AO2 (language technique), AO1 (argument), and AO3 (context) in a single paragraph.',
        },
        resources: ['Act 3 Scene 4 extract', 'Exam question slide', 'Planning frame', 'Self-assessment checklist'],
      },
      {
        title: 'Whole-Play Essay: Structure and Argument',
        duration: '22 minutes',
        instructions:
          'Students receive a different exam question — "How does Shakespeare present the relationship between Macbeth and Lady Macbeth as the play develops?" — and plan a full essay response in 5 minutes. Teacher models on the board: Thesis → 4 paragraph headings with supporting quotations → Conclusion point. Students then write two full body paragraphs (one on Act 1 and one on Act 3 or later) in 15 minutes, aiming to cover AO1 (argument), AO2 (language analysis), and AO3 (context) in each paragraph. Final 2 minutes: students annotate their own paragraphs with AO1/AO2/AO3 labels to check coverage. Volunteers share; class offers one piece of specific positive feedback and one improvement suggestion.',
        differentiation: {
          support:
            'Provide the essay plan pre-completed with paragraph headings; students write the body paragraphs only, using the plan as a scaffold.',
          core: 'Students plan and write independently.',
          stretch:
            'Students write a third body paragraph covering the sleepwalking scene (Act 5) and draw an explicit structural contrast with Act 1 in their argument, demonstrating whole-play awareness.',
        },
        resources: ['Exam question slide', 'Essay planning template', 'AO labelling guide', 'Peer feedback card'],
      },
    ],
    plenaryActivity: {
      title: 'Five Things to Do in an Exam',
      duration: '8 minutes',
      instructions:
        'Students close their notes. Teacher poses: "What are the five most important things to remember when answering a Macbeth exam question?" Students write their five points independently on a card, then share with a partner, combining their lists into the best five. Groups share; teacher compiles the class list on the board and compares with the official list: (1) Write a thesis-led opening; (2) Use embedded quotations, not block quotes; (3) Comment on language technique with every quotation; (4) Link to context (AO3) within paragraphs, not in a separate section; (5) Make sure every paragraph is answering the question. Students copy the final list and annotate each point with a brief explanation of why it matters.',
      differentiation: {
        support: 'Provide five candidate points and ask students to rank them in order of importance.',
        core: 'Students generate their own list.',
        stretch: 'Students add a sixth point specific to Macbeth: the piece of advice they most wish they had received earlier in the course.',
      },
    },
    homework:
      'Write a full timed essay response (45 minutes) to the following question at home: "How does Shakespeare use the witches to explore the theme of temptation in Macbeth?" Plan for 5 minutes (thesis and four paragraph headings with quotations), write for 35 minutes, and spend 5 minutes checking for: embedded quotation, language analysis, contextual reference in each body paragraph, and a clear conclusion that restates your thesis.',
    worksheetQuestions: [
      {
        question:
          'Read the following exam question: "Explore how Shakespeare presents the theme of ambition in Macbeth." Write a thesis-level opening paragraph (5-7 sentences) that establishes your argument without summarising the plot.',
        lines: 8,
        modelAnswer:
          'Shakespeare presents ambition in Macbeth as a fundamentally self-destructive force that corrupts not only the individual but the political and natural order around them. From Macbeth\'s earliest self-diagnosis — "Vaulting ambition, which o\'erleaps itself / And falls on th\' other side" — Shakespeare establishes that ambition in the play is characterised by its excess and inevitable collapse. Lady Macbeth\'s ambition is presented differently: where Macbeth\'s is conflicted and morally aware, hers is initially cold and purposeful, making her both more effective and, ultimately, more vulnerable to the guilt she suppresses. Shakespeare uses the Jacobean context of the Divine Right of Kings to frame unchecked ambition as not merely personally destructive but as a cosmic transgression — a violation of divine and natural law that inevitably attracts retribution. The play\'s structure enacts this argument: Macbeth\'s ambition rises to its fullest expression in Act 3 before the remainder of the play charts his inevitable decline.',
        marks: 8,
      },
      {
        question:
          'Plan a response to the following question: "How does Shakespeare present the theme of appearance versus reality in Macbeth?" Write a thesis and four paragraph headings, each with one supporting quotation.',
        lines: 8,
        modelAnswer:
          'Thesis: Shakespeare presents appearance versus reality as a pervasive threat in Macbeth, showing how moral collapse is enabled by deception — of others, of oneself, and through the supernatural.\n\nParagraph 1 — The witches establish deceptive language from the outset: "Fair is foul, and foul is fair" (Act 1 Scene 1) — paradox as the defining principle of the play\'s world.\n\nParagraph 2 — Lady Macbeth teaches Macbeth to deceive: "look like the innocent flower, / But be the serpent under\'t" (Act 1 Scene 5) — active instruction in concealment.\n\nParagraph 3 — The witches\' prophecies are deceptive by nature: "none of woman born / Shall harm Macbeth" (Act 4 Scene 1) — the equivocation that guarantees false security.\n\nParagraph 4 — Macbeth\'s public persona collapses at the Banquet: he cannot maintain the appearance of a legitimate king when confronted with the ghost of his private crimes (Act 3 Scene 4).',
        marks: 8,
      },
      {
        question:
          'Write one full analytical paragraph responding to: "How does Shakespeare present Macbeth as a tragic hero?" Your paragraph should cover AO1 (argument), AO2 (language/technique), and AO3 (context).',
        lines: 8,
        modelAnswer:
          'Shakespeare presents Macbeth as a tragic hero by ensuring that his greatness and his flaw are inseparable: the same qualities that make him a celebrated warrior — courage, determination, physical boldness — make him susceptible to the witches\' temptation and Lady Macbeth\'s manipulation. His Act 1 Scene 7 soliloquy demonstrates the hallmark of the Aristotelian tragic hero: moral self-awareness coexisting with fatal inability to act on it. Macbeth identifies "vaulting ambition" as his spur yet proceeds regardless. The metaphor of ambition as a horse jumping too high and falling is acutely self-diagnostic — he knows the danger and cannot stop himself. For a Jacobean audience schooled in the idea that kings were appointed by God, Macbeth\'s transgression was of cosmic significance, making his suffering proportionate to his crime. Shakespeare maintains audience sympathy even through Macbeth\'s worst acts by providing soliloquies that reveal his interior anguish, ensuring we understand rather than simply condemn him.',
        marks: 8,
      },
      {
        question:
          'What are the key differences between an extract question and a whole-play essay question on Macbeth? How should you approach each type?',
        lines: 6,
        modelAnswer:
          'An extract question requires close analysis of the given passage — attention to specific word choices, imagery, and dramatic technique within that section — combined with references to relevant moments elsewhere in the play. The extract is the starting point: spend roughly half your time on it before broadening to the whole play. A whole-play essay question does not provide a passage; you must select your own evidence from across the play, demonstrating knowledge of multiple acts and the ability to construct an argument that develops across several paragraphs. Both question types require a thesis-led opening, embedded quotation, language analysis (AO2), and contextual integration (AO3). The key distinction is that the extract question tests close reading skills alongside whole-play awareness, while the essay question tests the ability to select, organise, and deploy evidence independently.',
        marks: 6,
      },
      {
        question:
          'Write the opening two sentences of an essay response to: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth?" Make sure your opening establishes a clear argument.',
        lines: 4,
        modelAnswer:
          'Shakespeare presents the relationship between Macbeth and Lady Macbeth as one of mutual dependence that inverts and ultimately destroys itself: in Act 1, Lady Macbeth\'s psychological power enables Macbeth\'s ambition; by Act 5, Macbeth\'s moral isolation leaves Lady Macbeth entirely alone with the guilt she tried to suppress. This structural reversal — from her controlling him to him excluding her — is the relationship\'s central dramatic arc and reflects Shakespeare\'s broader argument about the self-defeating nature of ambition and moral transgression.',
        marks: 4,
      },
    ],
    teacherNotes: [
      'The exam question decoder activity is a good diagnostic of how well students understand the difference between AO1, AO2, and AO3 demands. If students cannot distinguish between the objectives, a brief recap before the writing activities is worth the time.',
      'Thesis-led writing is the single skill that most reliably differentiates higher-band from middle-band responses. Spending time explicitly modelling what a thesis is — a claim that the rest of the essay proves, not a statement of what the essay is going to do — is essential in this lesson.',
      'The AO labelling exercise (students annotate their own paragraphs with AO1/AO2/AO3) is a powerful metacognitive tool. Students who can identify where each objective is or is not being addressed can self-correct much more effectively.',
      'Remind students that for Edexcel IGCSE, the assessment is currently based on closed-book conditions: all quotations must be learned. Use the final minutes of this lesson to reinforce the importance of the quotation banks students have been building throughout the scheme of work.',
    ],
    targetedSkills: [
      'AO1 — Thesis-led essay writing with sustained argument',
      'AO2 — Embedded quotation and language analysis under timed conditions',
      'AO3 — Integration of contextual knowledge within analytical paragraphs',
      'Exam technique: question decoding, planning, and time management',
      'Self-assessment and peer feedback against assessment objectives',
    ],
  },
];
